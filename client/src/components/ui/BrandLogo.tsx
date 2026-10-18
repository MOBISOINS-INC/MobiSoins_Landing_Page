'use client';

/**
 * MobiSoins wordmark: white "MobiSoins" text with the brand-green pulse line.
 *
 * mobisoins-logo-clean.png is a pre-processed version of the source art where the
 * blue wordmark was recolored to white while the green pulse line (spike included)
 * was preserved pixel-for-pixel — so it renders cleanly on the dark theme with no
 * clipping artefacts.
 *
 * The header renders the mark at most 64px tall (md:h-16), so we ship lossless
 * WebP copies downscaled to 2x that (436x128) instead of the 790x232 PNG sources
 * (90 KB -> 19 KB for the white mark). The originals stay in /public for the
 * JSON-LD logo and any print/social use. Explicit width/height reserve the aspect
 * ratio before the file arrives; the CSS h-* classes still set the display size.
 */
const LOGO_WIDTH = 436;
const LOGO_HEIGHT = 128;
type BrandLogoProps = {
  className?: string;
  /** Adds a soft dark drop-shadow for legibility over busy photos (e.g. the hero). */
  glow?: boolean;
  /** `white` for dark grounds (hero), `navy` for the white header bar. */
  tone?: 'white' | 'navy';
};

export function BrandLogo({ className = '', glow = false, tone = 'white' }: BrandLogoProps) {
  return (
    <img
      src={tone === 'navy' ? '/mobisoins-logo-navy@2x.webp' : '/mobisoins-logo-clean@2x.webp'}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      alt="MobiSoins"
      className={`w-auto object-contain select-none ${className}`}
      draggable={false}
      style={glow ? { filter: 'drop-shadow(0 2px 12px rgba(3,18,38,0.7))' } : undefined}
    />
  );
}
