/** Líneas de movimiento / velocidad estilo cómic (decorativo). */
export function MotionLines({
  className = "",
  color = "#FFC400",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 44"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke={color}
      strokeWidth="7"
      strokeLinecap="round"
    >
      <line x1="4" y1="8" x2="72" y2="8" />
      <line x1="20" y1="22" x2="96" y2="22" />
      <line x1="4" y1="36" x2="56" y2="36" />
    </svg>
  );
}
