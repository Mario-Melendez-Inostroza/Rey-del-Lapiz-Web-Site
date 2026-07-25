/** Trazo de lápiz ondulado dibujado a mano (garabato decorativo). */
export function Squiggle({
  className = "",
  color = "#FFC400",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
    >
      <path d="M3 14 Q16 3 28 13 T54 12 T80 13 T108 11" />
    </svg>
  );
}
