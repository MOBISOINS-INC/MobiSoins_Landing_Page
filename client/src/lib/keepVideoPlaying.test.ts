// Run: npm test   (node --test, no browser needed — video/doc/window are faked)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { keepVideoPlaying } from './keepVideoPlaying.ts';

class Target {
  listeners = new Map<string, Set<(e: Event) => void>>();
  addEventListener(n: string, fn: (e: Event) => void) {
    if (!this.listeners.has(n)) this.listeners.set(n, new Set());
    this.listeners.get(n)!.add(fn);
  }
  removeEventListener(n: string, fn: (e: Event) => void) {
    this.listeners.get(n)?.delete(fn);
  }
  emit(n: string) {
    [...(this.listeners.get(n) ?? [])].forEach((fn) => fn({ type: n } as Event));
  }
  count() {
    return [...this.listeners.values()].reduce((a, s) => a + s.size, 0);
  }
}

class FakeVideo extends Target {
  src = '';
  currentSrc = '';
  poster = '';
  paused = true;
  ended = false;
  muted = false;
  defaultMuted = false;
  playsInline = false;
  currentTime = 0;
  duration = 12;
  readyState = 4;
  error = null;
  attrs: Record<string, string> = {};
  playCalls = 0;
  loadCalls = 0;
  blocked = false; // simulates Low Power Mode / Data Saver
  setAttribute(k: string, v: string) {
    this.attrs[k] = v;
  }
  play() {
    this.playCalls++;
    if (this.blocked) {
      return Promise.reject(Object.assign(new Error('blocked'), { name: 'NotAllowedError' }));
    }
    this.paused = false;
    return Promise.resolve();
  }
  pause() {
    this.paused = true;
  }
  load() {
    this.loadCalls++;
    this.paused = true;
  }
}

function setup(over: { visible?: boolean; reduce?: boolean; blocked?: boolean; mobile?: boolean } = {}) {
  const v = new FakeVideo();
  v.blocked = !!over.blocked;
  const doc = Object.assign(new Target(), { visibilityState: over.visible === false ? 'hidden' : 'visible' });
  let tick: () => void = () => {};
  const mq = Object.assign(new Target(), { matches: !!over.mobile });
  const win = Object.assign(new Target(), {
    setInterval: (fn: () => void) => ((tick = fn), 1),
    clearInterval: () => {},
    matchMedia: () => mq,
  });
  const logs: string[] = [];
  const dispose = keepVideoPlaying(v as unknown as HTMLVideoElement, {
    reduceMotion: !!over.reduce,
    sourceQuery: '(max-width: 640px)',
    stallMs: 0,
    pickSource: () => (mq.matches ? { src: '/m.mp4', poster: '/m.jpg' } : { src: '/d.mp4', poster: '/d.jpg' }),
    log: (level, msg) => logs.push(`${level}:${msg}`),
    win: win as unknown as Window,
    doc: doc as unknown as Document,
  });
  return { v, doc, win, mq, logs, dispose, tick: () => tick() };
}
const flush = () => new Promise((r) => setImmediate(r));

test('plays on mount, muted + inline, with the desktop cut', async () => {
  const { v, logs } = setup();
  await flush();
  assert.equal(v.src, '/d.mp4');
  assert.equal(v.paused, false);
  assert.equal(v.muted, true);
  assert.equal(v.playsInline, true);
  assert.ok('playsinline' in v.attrs);
  assert.ok(logs.some((l) => l.startsWith('info:playing')));
});

test('mobile viewport gets the mobile cut and poster', () => {
  const { v } = setup({ mobile: true });
  assert.equal(v.src, '/m.mp4');
  assert.equal(v.poster, '/m.jpg');
});

test('autoplay blocked: rejection is logged, then the FIRST touch anywhere starts it', async () => {
  const { v, doc, logs } = setup({ blocked: true });
  await flush();
  assert.equal(v.paused, true);
  assert.equal(logs.filter((l) => l.startsWith('warn:play() rejected')).length, 1);
  v.blocked = false; // a user gesture lifts the block
  doc.emit('touchend');
  await flush();
  assert.equal(v.paused, false);
});

test('blocked retries do not spam the log', async () => {
  const { v, tick, logs } = setup({ blocked: true });
  await flush();
  for (let i = 0; i < 5; i++) {
    tick();
    tick();
    await flush();
  }
  assert.ok(v.playCalls > 2, 'watchdog keeps retrying');
  assert.equal(logs.filter((l) => l.startsWith('warn:play() rejected')).length, 1);
});

test('OS pauses the video -> it resumes without a tap', async () => {
  const { v } = setup();
  await flush();
  v.paused = true;
  v.emit('pause');
  await flush();
  assert.equal(v.paused, false);
});

test('mounted in a hidden tab: waits, then plays when the tab is shown', async () => {
  const { v, doc } = setup({ visible: false });
  await flush();
  assert.equal(v.playCalls, 0);
  doc.visibilityState = 'visible';
  doc.emit('visibilitychange');
  await flush();
  assert.equal(v.paused, false);
});

test('bfcache restore (pageshow) resumes a paused video', async () => {
  const { v, win } = setup();
  await flush();
  v.paused = true;
  win.emit('pageshow');
  await flush();
  assert.equal(v.paused, false);
});

test('frozen while "playing": watchdog reloads, seeks back, and plays', async () => {
  const { v, tick, logs } = setup();
  await flush();
  v.currentTime = 5;
  tick(); // records movement
  tick(); // clock did not move -> stalled
  await flush();
  assert.equal(v.loadCalls, 1);
  assert.equal(v.paused, false);
  assert.ok(logs.some((l) => l.startsWith('warn:stalled at 5.00s')));
  v.currentTime = 0;
  v.emit('loadedmetadata');
  assert.equal(v.currentTime, 5);
});

test('healthy playback is never reloaded', async () => {
  const { v, tick } = setup();
  await flush();
  for (let i = 1; i <= 10; i++) {
    v.currentTime = i;
    tick();
  }
  assert.equal(v.loadCalls, 0);
  assert.equal(v.playCalls, 1);
});

test('prefers-reduced-motion: never plays, even on gesture or watchdog', async () => {
  const { v, doc, tick } = setup({ reduce: true });
  doc.emit('click');
  tick();
  tick();
  await flush();
  assert.equal(v.playCalls, 0);
  assert.equal(v.src, '/d.mp4'); // still shows the right first frame
});

test('source already chosen natively from <source> is left alone (no reload)', async () => {
  const v = new FakeVideo();
  v.currentSrc = 'https://site.test/d.mp4';
  v.paused = false; // browser autoplayed before JS arrived
  const doc = Object.assign(new Target(), { visibilityState: 'visible' });
  const win = Object.assign(new Target(), { setInterval: () => 1, clearInterval: () => {}, matchMedia: () => undefined });
  keepVideoPlaying(v as unknown as HTMLVideoElement, {
    reduceMotion: false,
    pickSource: () => ({ src: '/d.mp4', poster: '/d.jpg' }),
    log: () => {},
    win: win as unknown as Window,
    doc: doc as unknown as Document,
  });
  await flush();
  assert.equal(v.src, '');
  assert.equal(v.playCalls, 0);
});

test('breakpoint change swaps the cut', () => {
  const { v, mq } = setup();
  mq.matches = true;
  mq.emit('change');
  assert.equal(v.src, '/m.mp4');
});

test('cleanup removes every listener and stops retrying', async () => {
  const { v, doc, win, mq, dispose } = setup({ blocked: true });
  await flush();
  dispose();
  assert.equal(v.count() + doc.count() + win.count() + mq.count(), 0);
  const calls = v.playCalls;
  doc.emit('click');
  assert.equal(v.playCalls, calls);
});
