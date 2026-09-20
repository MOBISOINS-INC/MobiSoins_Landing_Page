// Keeps a muted background video playing without the visitor ever having to
// touch it. A single play() on mount is not enough on phones:
//  - iOS Low Power Mode / Android Data Saver REJECT muted autoplay until the
//    page has had a user gesture — so we retry on the first touch/click/key
//    anywhere on the page, not just on the video.
//  - The OS pauses inline video on its own (app switch, call, bfcache restore,
//    memory pressure) and never resumes it — so an unexpected `pause` and every
//    "page is back" signal re-arms playback.
//  - A flaky cellular fetch can leave the element "playing" but frozen — a
//    watchdog notices the clock is not advancing and reloads from that point.
// Every failure is logged (never swallowed) so a stuck hero is diagnosable.

export interface VideoSource {
  src: string;
  poster: string;
}

export interface KeepPlayingOptions {
  pickSource: () => VideoSource;
  /** prefers-reduced-motion: hold the first frame, never play. */
  reduceMotion: boolean;
  /** Media query whose change means pickSource() may answer differently. */
  sourceQuery?: string;
  /** Seconds the clock may stand still before we treat playback as stuck. */
  stallMs?: number;
  log?: (level: 'info' | 'warn', msg: string, detail?: unknown) => void;
  win?: Window;
  doc?: Document;
}

const GESTURES = ['pointerdown', 'touchend', 'click', 'keydown'] as const;
const RESUME_MEDIA_EVENTS = ['loadeddata', 'canplay', 'pause', 'ended'] as const;

const defaultLog: NonNullable<KeepPlayingOptions['log']> = (level, msg, detail) => {
  const line = `[hero-video] ${msg}`;
  if (level === 'warn') console.warn(line, detail ?? '');
  else console.info(line, detail ?? '');
};

export function keepVideoPlaying(v: HTMLVideoElement, opts: KeepPlayingOptions): () => void {
  const win = opts.win ?? window;
  const doc = opts.doc ?? document;
  const log = opts.log ?? defaultLog;
  const stallMs = opts.stallMs ?? 4000;
  let disposed = false;
  let announcedPlaying = false;
  let lastRejection = '';

  const visible = () => doc.visibilityState === 'visible';

  const applySource = () => {
    const { src, poster } = opts.pickSource();
    // currentSrc covers a source chosen natively from <source> children, so we
    // do not restart a video the browser is already autoplaying.
    if (!v.poster.endsWith(poster)) v.poster = poster;
    if (!(v.currentSrc || v.src).endsWith(src)) {
      v.src = src;
      log('info', `source -> ${src}`);
    }
  };

  const tryPlay = (why: string) => {
    if (disposed) return;
    applySource();
    if (opts.reduceMotion) {
      v.pause();
      return;
    }
    if (!visible()) return; // browsers defer hidden-tab playback; we retry on return
    // iOS only honours autoplay when the element is muted + inline *as
    // properties*, and React does not reliably reflect `muted` after hydration.
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');
    if (!v.paused && !v.ended) return;
    let p: Promise<void> | undefined;
    try {
      p = v.play();
    } catch (err) {
      log('warn', `play() threw (${why})`, err);
      return;
    }
    p?.then(
      () => {
        if (!announcedPlaying) {
          announcedPlaying = true;
          log('info', `playing (${why})`);
        }
      },
      (err: unknown) => {
        // NotAllowedError = autoplay blocked (Low Power Mode / Data Saver): the
        // gesture listeners below will start it on the visitor's first touch.
        // The watchdog retries every few seconds; log a given rejection once,
        // not on every retry.
        const key = String((err as Error)?.name ?? err);
        if (key === lastRejection) return;
        lastRejection = key;
        log('warn', `play() rejected (${why}) — will retry on next gesture/resume`, err);
      },
    );
  };

  // Watchdog: visible + supposed to be playing, but the clock is frozen.
  let lastTime = -1;
  let lastMoved = Date.now();
  const watchdog = win.setInterval(() => {
    if (disposed || opts.reduceMotion || !visible()) {
      lastMoved = Date.now();
      return;
    }
    if (v.currentTime !== lastTime) {
      lastTime = v.currentTime;
      lastMoved = Date.now();
      return;
    }
    if (Date.now() - lastMoved < stallMs) return;
    lastMoved = Date.now();
    if (v.paused || v.ended) {
      tryPlay('watchdog-paused');
      return;
    }
    // Claims to be playing but is frozen: the fetch died. Reload and resume.
    const at = v.currentTime;
    log('warn', `stalled at ${at.toFixed(2)}s (readyState ${v.readyState}) — reloading`);
    v.load();
    const seek = () => {
      try {
        if (at > 0 && at < (v.duration || Infinity)) v.currentTime = at;
      } catch (err) {
        log('warn', 'seek after reload failed', err);
      }
    };
    v.addEventListener('loadedmetadata', seek, { once: true });
    tryPlay('watchdog-reload');
  }, 1000);

  const onMedia = (e: Event) => tryPlay(e.type);
  const onError = () => log('warn', 'media error', v.error);
  const onResume = (e: Event) => {
    if (visible()) tryPlay(e.type);
  };
  const onGesture = (e: Event) => {
    if (v.paused) tryPlay(`gesture:${e.type}`);
  };
  const mq = opts.sourceQuery ? win.matchMedia?.(opts.sourceQuery) : undefined;
  const onBreakpoint = () => tryPlay('breakpoint');

  RESUME_MEDIA_EVENTS.forEach((n) => v.addEventListener(n, onMedia));
  v.addEventListener('error', onError);
  doc.addEventListener('visibilitychange', onResume);
  win.addEventListener('pageshow', onResume);
  win.addEventListener('focus', onResume);
  win.addEventListener('online', onResume);
  GESTURES.forEach((n) => doc.addEventListener(n, onGesture, { capture: true, passive: true }));
  mq?.addEventListener('change', onBreakpoint);

  tryPlay('mount');

  return () => {
    disposed = true;
    win.clearInterval(watchdog);
    RESUME_MEDIA_EVENTS.forEach((n) => v.removeEventListener(n, onMedia));
    v.removeEventListener('error', onError);
    doc.removeEventListener('visibilitychange', onResume);
    win.removeEventListener('pageshow', onResume);
    win.removeEventListener('focus', onResume);
    win.removeEventListener('online', onResume);
    GESTURES.forEach((n) => doc.removeEventListener(n, onGesture, { capture: true }));
    mq?.removeEventListener('change', onBreakpoint);
  };
}
