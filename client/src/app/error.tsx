'use client';

import { useEffect } from 'react';

/**
 * Route-level error boundary. Whatever throws on the client, the visitor gets
 * a dark page with the message and a retry — never a blank white screen.
 */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-white">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-white/70">( MobiSoins )</p>
      <h1 className="mt-4 font-sans text-[clamp(1.75rem,4vw,2.75rem)] font-extralight leading-tight">
        Une erreur est survenue. / Something went wrong.
      </h1>
      <p className="mt-3 max-w-md text-[15px] text-white/75">
        Rechargez la page ou écrivez-nous à info@mobisoins.com. / Reload the page or write to info@mobisoins.com.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-ink-panel"
      >
        Réessayer / Retry
      </button>
    </main>
  );
}
