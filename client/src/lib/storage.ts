/**
 * localStorage that never throws. Safari with "Block All Cookies", strict
 * privacy modes and some in-app browsers throw on any access to
 * `window.localStorage` (SecurityError) or on writes (QuotaExceededError);
 * an unhandled throw inside a React effect unmounts the whole tree — a white
 * page. Every read/write on the site goes through here instead.
 */
export function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeStorage(key: string, value: string): boolean {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

export function removeStorage(key: string): void {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* nothing to remove, or storage is blocked */
  }
}
