'use client';

import { useEffect, useState } from 'react';

/**
 * False on the server and on the first client render, true after mount.
 * Scroll-scrubbed styles are only applied once mounted so the SSR/no-JS HTML is
 * the fully readable resting state and hydration never sees a mismatch.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
