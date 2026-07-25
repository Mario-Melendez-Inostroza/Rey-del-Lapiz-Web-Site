/** Lápiz de marca — protagonista de la animación de entrada del Hero (decorativo).
   Apunta hacia abajo (punta en la base); el ángulo de "agarre" se da por transform. */
export function Pencil({
  className = "",
  color = "#FFC400",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 32 96" className={className} aria-hidden="true" fill="none">
      {/* borrador */}
      <rect
        x="9"
        y="3"
        width="14"
        height="8"
        rx="2"
        fill="#ff6b6b"
        stroke="#111"
        strokeWidth="2.5"
      />
      {/* cuerpo */}
      <rect x="9" y="10" width="14" height="56" fill={color} stroke="#111" strokeWidth="2.5" />
      {/* madera de la punta */}
      <path
        d="M9 66 L23 66 L16 86 Z"
        fill="#f7e0b5"
        stroke="#111"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* grafito */}
      <path d="M13.5 78 L18.5 78 L16 86 Z" fill="#111" />
    </svg>
  );
}
