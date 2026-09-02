// Hand-drawn accents. Every path is deliberately a little off-true — the
// wobble is the point, so don't "correct" these curves.

const ACCENT = 'var(--accent)'

// Rough underline that sits beneath a highlighted word.
//
// The height is set explicitly rather than left to the viewBox aspect ratio.
// With preserveAspectRatio="none" and an auto height, the SVG collapses to
// (word width x 14/220) and the stroke is scaled down with it — under a short
// word that renders as a ~1px hairline instead of a marker stroke.
export function Underline({ className = '', delay = 320 }) {
  return (
    <svg
      className={`doodle-draw pointer-events-none absolute left-0 -bottom-[0.16em] w-full h-[0.11em] min-h-[5px] ${className}`}
      style={{ '--len': 230, '--delay': `${delay}ms` }}
      viewBox="0 0 220 12"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 8.4C31 3.6 62 9.4 96 5.3c34-4 66 4.4 121 2"
        stroke={ACCENT}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Loose squiggle used as a section rule.
export function Squiggle({ className = '', delay = 200 }) {
  return (
    <svg
      className={`doodle-draw pointer-events-none ${className}`}
      style={{ '--len': 260, '--delay': `${delay}ms` }}
      viewBox="0 0 240 12"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 7.5c22-6 42 4.5 64-.5s42 5.5 64 .5 42 4 106-1"
        stroke={ACCENT}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Small arrow that lives inside buttons and card badges.
export function ArrowUpRight({ className = '', strokeWidth = 2 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </svg>
  )
}
