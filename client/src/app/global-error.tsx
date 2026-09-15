'use client';

/**
 * Last-resort boundary (root layout failures). Must render its own <html>
 * and <body>; kept dependency-free so it cannot fail itself.
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, background: '#04142a', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{ fontWeight: 300, fontSize: 28, lineHeight: 1.2 }}>Une erreur est survenue. / Something went wrong.</h1>
          <p style={{ opacity: 0.75, maxWidth: 420 }}>Rechargez la page ou écrivez-nous à info@mobisoins.com.</p>
          <button
            type="button"
            onClick={reset}
            style={{ marginTop: 24, padding: '12px 24px', borderRadius: 999, border: 0, background: '#fff', color: '#0a1f38', fontWeight: 500 }}
          >
            Réessayer / Retry
          </button>
        </main>
      </body>
    </html>
  );
}
