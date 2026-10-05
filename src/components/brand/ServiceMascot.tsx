export type ServiceMascotVariant =
  "matrimonios" | "cumpleanos" | "corporativos" | "graduaciones" | "ferias" | "fiestas";

const INK = "#111";
/** Único acento de color que comparten las seis ilustraciones (además de blanco/ink):
    hilo visual común entre mascotas muy distintas entre sí. */
const ACCENT = "var(--color-primary)";

/** Cabeza compartida por las seis mascotas: mismo círculo, mismo trazo. */
const HEAD = <circle cx="60" cy="62" r="38" fill="white" stroke={INK} strokeWidth="5" />;

function renderVariant(variant: ServiceMascotVariant) {
  // Encoge y acerca todo al centro (60,60): el panel de color de la tarjeta es más bajo
  // que el ícono, así que sin este margen los detalles de la esquina (anillo, corbata,
  // vela, disco) quedaban recortados por el overflow-hidden del panel.
  return <g transform="translate(60 60) scale(0.82) translate(-60 -60)">{renderInner(variant)}</g>;
}

function renderInner(variant: ServiceMascotVariant) {
  switch (variant) {
    case "matrimonios":
      // El novio mostrando el anillo, encantado: ojos mirando hacia la joya, sonrisa
      // amplia, rubor — la ternura del "sí, acepto", no el nervio de antes.
      return (
        <>
          {HEAD}
          <circle cx="44" cy="54" r="7" fill="white" stroke={INK} strokeWidth="4" />
          <circle cx="72" cy="54" r="7" fill="white" stroke={INK} strokeWidth="4" />
          <circle cx="47" cy="56" r="3" fill={INK} />
          <circle cx="75" cy="56" r="3" fill={INK} />
          <circle cx="39" cy="70" r="6" fill="#ffd9d9" />
          <path
            d="M46 78q14 14 28 0"
            stroke={INK}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* el anillo, presentado junto a la cara */}
          <circle cx="97" cy="65" r="13" fill="none" stroke={INK} strokeWidth="6" />
          <circle cx="97" cy="51" r="5" fill={ACCENT} stroke={INK} strokeWidth="2.5" />
          <path
            d="M110 45l4-4M116 53l5-2M114 61l6 1"
            stroke={INK}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </>
      );

    case "cumpleanos":
      // Mejillas al máximo soplando una vela que ya se apaga, gorro de fiesta ladeado.
      return (
        <>
          {HEAD}
          <path
            d="M60 8 40 36H80Z"
            fill={ACCENT}
            stroke={INK}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <circle cx="60" cy="8" r="5" fill="white" stroke={INK} strokeWidth="3" />
          <path d="M47 30 73 30" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M40 52q6-7 12 0"
            stroke={INK}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M68 52q6-7 12 0"
            stroke={INK}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="33" cy="68" r="9" fill="#ffd9d9" stroke={INK} strokeWidth="3" />
          <circle cx="87" cy="68" r="9" fill="#ffd9d9" stroke={INK} strokeWidth="3" />
          <ellipse cx="60" cy="76" rx="7" ry="9" fill={INK} />
          <rect
            x="98"
            y="52"
            width="8"
            height="20"
            rx="2"
            fill="white"
            stroke={INK}
            strokeWidth="3"
          />
          <path d="M102 43q7 7 0 11-7-4 0-11Z" fill={ACCENT} stroke={INK} strokeWidth="2" />
        </>
      );

    case "corporativos":
      // Carcajada que rompe el hielo de la sala: ojos entrecerrados de la risa, lágrima
      // de tanto reír, corbata torcida.
      return (
        <>
          {HEAD}
          <path
            d="M40 52q6-9 12 0"
            stroke={INK}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M68 52q6-9 12 0"
            stroke={INK}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M42 70q18 20 36 0q-18 10-36 0Z" fill={INK} />
          <path d="M31 58q6 7 0 13-6-6 0-13Z" fill="#8ecbff" stroke={INK} strokeWidth="2" />
          <path
            d="M54 98 60 90 66 98 62 122H58Z"
            fill={ACCENT}
            stroke={INK}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M52 96 60 100 68 96 60 106Z" fill={INK} />
        </>
      );

    case "graduaciones":
      // El birrete ya voló, la sonrisa es enorme y el diploma queda enrollado como trofeo.
      return (
        <>
          {HEAD}
          <circle cx="46" cy="54" r="3" fill={INK} />
          <circle cx="74" cy="54" r="3" fill={INK} />
          <path
            d="M42 68q18 18 36 0"
            stroke={INK}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <g transform="rotate(-18 60 16)">
            <rect x="34" y="10" width="52" height="8" fill={INK} />
            <rect x="52" y="18" width="16" height="10" fill={INK} />
            <line
              x1="86"
              y1="14"
              x2="98"
              y2="26"
              stroke={INK}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="99" cy="28" r="4" fill={ACCENT} stroke={INK} strokeWidth="2" />
          </g>
          <g transform="rotate(20 101 75)">
            <rect
              x="90"
              y="70"
              width="22"
              height="10"
              rx="4"
              fill="white"
              stroke={INK}
              strokeWidth="3"
            />
            <line x1="94" y1="75" x2="108" y2="75" stroke={INK} strokeWidth="2" />
          </g>
          <path d="M18 30 20 35 25 37 20 39 18 44 16 39 11 37 16 35Z" fill={ACCENT} />
        </>
      );

    case "ferias":
      // El clásico gag de la lupa: un ojo gigante de asombro frente al stand, el otro
      // normal — "no puedo creer lo que veo".
      return (
        <>
          {HEAD}
          <circle cx="46" cy="54" r="3" fill={INK} />
          <ellipse cx="58" cy="78" rx="6" ry="8" fill={INK} />
          <circle
            cx="78"
            cy="52"
            r="16"
            fill="white"
            fillOpacity="0.5"
            stroke={INK}
            strokeWidth="4"
          />
          <circle cx="78" cy="52" r="6" fill={INK} />
          <circle cx="76" cy="49" r="2" fill="white" />
          <line
            x1="90"
            y1="64"
            x2="102"
            y2="76"
            stroke={INK}
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path d="M20 20 23 27 30 29 23 31 20 38 17 31 10 29 17 27Z" fill={ACCENT} />
        </>
      );

    case "fiestas":
      // Lentes de sol, matasuegras al viento y una bola de disco flotando encima — fiesta
      // sin freno.
      return (
        <>
          {HEAD}
          <rect x="34" y="48" width="22" height="15" rx="6" fill={INK} />
          <rect x="64" y="48" width="22" height="15" rx="6" fill={INK} />
          <line x1="56" y1="55" x2="64" y2="55" stroke={INK} strokeWidth="4" />
          <ellipse cx="60" cy="80" rx="6" ry="7" fill={INK} />
          <path
            d="M66 80q20-5 27 6"
            stroke={ACCENT}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="94" cy="22" r="10" fill="white" stroke={INK} strokeWidth="4" />
          <path d="M84 22H104M94 12V32M87 15 101 29M101 15 87 29" stroke={INK} strokeWidth="2" />
          <rect x="12" y="70" width="7" height="7" fill={ACCENT} transform="rotate(20 15.5 73.5)" />
          <rect
            x="98"
            y="88"
            width="7"
            height="7"
            fill="#8ecbff"
            transform="rotate(-15 101.5 91.5)"
          />
        </>
      );
  }
}

/**
 * Mascota cómica de cada servicio: un personaje reaccionando a su tipo de evento, en el
 * mismo lenguaje visual del resto de `brand/` (trazo ink grueso, relleno blanco/plano,
 * un único acento de color compartido entre las seis). Vive en la esquina del panel de
 * cada `ServiceCard`, recortada por su borde, como una calcomanía asomando.
 *
 * Seis variantes muy distintas en lo que dibujan comparten la misma cabeza (`HEAD`) y la
 * misma paleta de dos tonos + acento — así se leen como una familia, no como seis piezas
 * sueltas.
 */
export function ServiceMascot({
  variant,
  className = "",
}: {
  variant: ServiceMascotVariant;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      {renderVariant(variant)}
    </svg>
  );
}
