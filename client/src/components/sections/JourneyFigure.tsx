// One thin-line figure per journey milestone, drawn in the sage accent
// (currentColor, set by the caller). Decorative: the caption beside it carries
// the meaning, so the SVG is hidden from assistive tech.

const FIGURES: Record<number, React.ReactNode> = {
  // 01 The idea: a clock, a long wait, then the spark.
  1: (
    <>
      <circle cx="52" cy="70" r="40" />
      <path d="M52 44v26l18 11" />
      <path d="M108 70h150" strokeDasharray="2 10" />
      <circle cx="300" cy="70" r="9" />
      <path d="M300 38v12M300 90v12M268 70h12M320 70h12M277 47l9 9M314 84l9 9M323 47l-9 9M286 84l-9 9" />
    </>
  ),
  // 02 The team: two nurses (cross) and two engineers (brackets), joined as equals.
  2: (
    <>
      <circle cx="40" cy="70" r="28" />
      <circle cx="124" cy="70" r="28" />
      <circle cx="236" cy="70" r="28" />
      <circle cx="320" cy="70" r="28" />
      <path d="M40 58v24M28 70h24M124 58v24M112 70h24" />
      <path d="M230 59l-10 11 10 11M242 59l10 11-10 11M314 59l-10 11 10 11M326 59l10 11-10 11" />
      <path d="M68 70h28M264 70h28M152 70h56" />
      <path d="M180 60v20" />
    </>
  ),
  // 03 The waitlist: names on a list, the first ones confirmed.
  3: (
    <>
      <circle cx="22" cy="22" r="12" />
      <circle cx="22" cy="70" r="12" />
      <circle cx="22" cy="118" r="12" />
      <path d="M16 22l4 5 8-9M16 70l4 5 8-9" />
      <path d="M56 22h210M56 70h250M56 118h170" />
      <path d="M244 118h40" strokeDasharray="2 10" />
    </>
  ),
  // 04 First visits: the route ends at your door.
  4: (
    <>
      <circle cx="24" cy="112" r="6" />
      <path d="M36 110c50-6 70-60 120-58s60 50 96 56" strokeDasharray="2 10" />
      <path d="M258 72l44-40 44 40" />
      <path d="M270 62v62h64V62" />
      <path d="M292 124V92h20v32" />
    </>
  ),
};

export const JourneyFigure = ({ n, className }: { n: number; className?: string }) => (
  <svg
    viewBox="0 0 360 140"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    {FIGURES[n]}
  </svg>
);
