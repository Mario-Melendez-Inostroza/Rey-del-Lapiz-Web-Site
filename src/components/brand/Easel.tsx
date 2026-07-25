/** Caballete de dibujante — soporte de la hoja del Hero (decorativo).
   Negro con contorno blanco (resalta sobre el fondo oscuro del Hero) + bandeja amarilla.
   La "zona de papel" (x 60..260, y 40..307 del viewBox 320×440) tiene la misma proporción
   que la caricatura, para superponer la hoja HTML por porcentajes y que siempre calce. */
export function Easel({ className = "" }: { className?: string }) {
  const frame = "#17181a";
  const line = "#f4f4f4";
  return (
    <svg viewBox="0 0 320 440" className={className} aria-hidden="true" fill="none">
      <g stroke={line} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        {/* pata trasera (trípode) */}
        <polygon points="154.2,25.3 165.8,22.7 255.8,413.7 244.2,416.3" fill={frame} />
        {/* patas delanteras (marco en A) */}
        <polygon points="148.3,17.7 163.7,22.3 41.7,432.3 26.3,427.7" fill={frame} />
        <polygon points="156.3,22.3 171.7,17.7 293.7,427.7 278.3,432.3" fill={frame} />
        {/* travesaño inferior */}
        <polygon points="50,368 270,368 270,382 50,382" fill={frame} />
        {/* tablero (queda detrás del papel) */}
        <rect x="54" y="34" width="212" height="280" rx="3" fill={frame} />
        {/* clip superior que sujeta la hoja */}
        <rect x="142" y="27" width="36" height="14" rx="3" fill={frame} />
        {/* bandeja (detalle amarillo) donde se apoya la hoja */}
        <polygon points="44,305 276,305 286,321 34,321" fill="#ffc400" stroke="#111827" />
        <polygon points="34,321 286,321 286,333 34,333" fill="#e0a800" stroke="#111827" />
      </g>
    </svg>
  );
}
