// The logo's heartbeat swoosh, reused as the page's one decorative rule so the
// sections read as belonging to the mark rather than to a template.
export const PulseLine = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 400 44"
    fill="none"
    aria-hidden="true"
    preserveAspectRatio="xMinYMid meet"
    className={className}
  >
    <path
      d="M0 26 H46 L58 4 L72 42 L82 26 C 170 26, 280 30, 400 12"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
