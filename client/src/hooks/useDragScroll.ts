'use client';

import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

/**
 * Mouse drag-to-scroll for a horizontal overflow container.
 *
 * Only `pointerType === 'mouse'` is captured: touch and pen keep the native
 * scroll (momentum, snap, `touch-pan-x`), and wheel is untouched. Scroll
 * snapping is paused for the duration of a drag so the browser does not
 * re-snap on every `scrollLeft` write, then restored on release so the row
 * settles on a card.
 *
 * `scrolled` (scrollLeft > 40) lets the caller fade a "drag" hint once the
 * row has actually moved. Both flags are false on the server and first render.
 */
export function useDragScroll(ref: RefObject<HTMLElement | null>): { dragging: boolean; scrolled: boolean } {
  const [dragging, setDragging] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let active = false;
    let startX = 0;
    let startLeft = 0;

    const release = (e: PointerEvent) => {
      if (!active) return;
      active = false;
      el.style.scrollSnapType = '';
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
      setDragging(false);
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      active = true;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      el.style.scrollSnapType = 'none';
      el.setPointerCapture(e.pointerId);
      setDragging(true);
    };

    const onMove = (e: PointerEvent) => {
      if (!active) return;
      el.scrollLeft = startLeft - (e.clientX - startX);
    };

    const onScroll = () => setScrolled(el.scrollLeft > 40);

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', release);
    el.addEventListener('lostpointercapture', release);
    el.addEventListener('scroll', onScroll, { passive: true });
    // Pick up a restored scroll position (bfcache, reload) without waiting for input.
    onScroll();

    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', release);
      el.removeEventListener('pointercancel', release);
      el.removeEventListener('lostpointercapture', release);
      el.removeEventListener('scroll', onScroll);
      el.style.scrollSnapType = '';
    };
  }, [ref]);

  return { dragging, scrolled };
}
