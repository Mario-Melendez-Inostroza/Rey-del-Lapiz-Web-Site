/** Destello / estrella cómic de 4 puntas (elemento decorativo, sin significado). */
export function Sparkle({
  className = "",
  color = "#FFC400",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 2 C56 38 62 44 98 50 C62 56 56 62 50 98 C44 62 38 56 2 50 C38 44 44 38 50 2 Z"
        fill={color}
      />
    </svg>
  );
}
