import type { ServiceMascotVariant } from "./ServiceMascot";

/**
 * Blanco a opacidad baja para las seis escenas: funciona sobre cualquiera de los 6 colores
 * de servicio sin necesitar ajuste por variante, y no compite con el blanco sólido del
 * título (que además lleva sombra dura de contorno).
 */
const T = "white";

function renderScene(variant: ServiceMascotVariant) {
  switch (variant) {
    case "matrimonios":
      // Arco de ceremonia con flores arriba y un par de corazones flotando.
      return (
        <>
          <path
            d="M50 160Q50 60 130 60Q210 60 210 160"
            fill="none"
            stroke={T}
            strokeOpacity="0.16"
            strokeWidth="10"
          />
          <g fill={T} fillOpacity="0.2">
            <circle cx="70" cy="64" r="7" />
            <circle cx="98" cy="52" r="6" />
            <circle cx="162" cy="52" r="6" />
            <circle cx="190" cy="64" r="7" />
          </g>
          <path
            d="M308 96c-6-11-22-4-17 9 3 9 17 17 17 17s14-8 17-17c5-13-11-20-17-9Z"
            fill={T}
            fillOpacity="0.14"
          />
          <path
            d="M348 128c-4-8-15-3-12 6 2 6 12 12 12 12s10-6 12-12c3-9-8-14-12-6Z"
            fill={T}
            fillOpacity="0.14"
          />
        </>
      );

    case "cumpleanos":
      // Pastel de dos pisos abajo a la izquierda, globos con hilo y confeti arriba.
      return (
        <>
          <g fillOpacity="0.2" fill={T}>
            <rect x="24" y="122" width="74" height="28" rx="4" />
            <rect x="24" y="106" width="74" height="16" rx="4" />
            <rect x="56" y="88" width="8" height="20" />
          </g>
          <path d="M60 80q7 7 0 12q-7-5 0-12Z" fill={T} fillOpacity="0.26" />
          <g fillOpacity="0.18" fill={T}>
            <circle cx="320" cy="46" r="17" />
            <circle cx="356" cy="68" r="14" />
            <circle cx="288" cy="72" r="12" />
          </g>
          <path d="M320 63v22M356 82v16M288 84v14" stroke={T} strokeOpacity="0.2" strokeWidth="2" />
          <g fill={T} fillOpacity="0.18">
            <rect x="198" y="28" width="7" height="7" transform="rotate(20 201.5 31.5)" />
            <rect x="238" y="112" width="7" height="7" transform="rotate(-15 241.5 115.5)" />
          </g>
        </>
      );

    case "corporativos":
      // Skyline de oficinas abajo a la izquierda, gráfico ascendente a la derecha.
      return (
        <>
          <g fill={T} fillOpacity="0.16">
            <rect x="20" y="104" width="34" height="52" />
            <rect x="58" y="82" width="30" height="74" />
            <rect x="92" y="112" width="28" height="44" />
          </g>
          <g fill={T} fillOpacity="0.22">
            <rect x="296" y="112" width="16" height="40" />
            <rect x="320" y="90" width="16" height="62" />
            <rect x="344" y="64" width="16" height="88" />
          </g>
        </>
      );

    case "graduaciones":
      // Fila de asientos de auditorio abajo, una figura graduándose con brazos en alto.
      return (
        <>
          <g fill={T} fillOpacity="0.18">
            <circle cx="36" cy="140" r="11" />
            <circle cx="62" cy="144" r="11" />
            <circle cx="88" cy="140" r="11" />
            <circle cx="114" cy="144" r="11" />
            <circle cx="140" cy="140" r="11" />
            <circle cx="166" cy="144" r="11" />
          </g>
          <g stroke={T} strokeOpacity="0.24" strokeWidth="6" strokeLinecap="round" fill="none">
            <line x1="330" y1="112" x2="330" y2="144" />
            <line x1="330" y1="118" x2="312" y2="96" />
            <line x1="330" y1="118" x2="348" y2="96" />
            <line x1="330" y1="144" x2="315" y2="156" />
            <line x1="330" y1="144" x2="345" y2="156" />
          </g>
          <circle cx="330" cy="96" r="13" fill={T} fillOpacity="0.24" />
          <rect x="314" y="80" width="32" height="7" fill={T} fillOpacity="0.26" />
        </>
      );

    case "ferias":
      // Stand con toldo y banderín, una pequeña fila de visitantes al lado.
      return (
        <>
          <path d="M30 92L82 48L134 92Z" fill={T} fillOpacity="0.18" />
          <rect x="42" y="92" width="80" height="58" fill={T} fillOpacity="0.12" />
          <path d="M82 48V30" stroke={T} strokeOpacity="0.22" strokeWidth="4" />
          <path d="M82 26l16 9-16 7Z" fill={T} fillOpacity="0.26" />
          <g fill={T} fillOpacity="0.18">
            <circle cx="282" cy="134" r="9" />
            <circle cx="308" cy="140" r="9" />
            <circle cx="334" cy="132" r="9" />
            <circle cx="360" cy="140" r="9" />
          </g>
        </>
      );

    case "fiestas":
      // Serpentinas cayendo por los costados, confeti disperso y dos rayos de luz de pista.
      return (
        <>
          <path
            d="M22 26q42 22 0 44q42 22 0 44"
            stroke={T}
            strokeOpacity="0.18"
            strokeWidth="5"
            fill="none"
          />
          <path
            d="M378 26q-42 22 0 44q-42 22 0 44"
            stroke={T}
            strokeOpacity="0.18"
            strokeWidth="5"
            fill="none"
          />
          <path d="M186 18 164 60 208 60Z" fill={T} fillOpacity="0.1" />
          <path d="M246 18 224 60 268 60Z" fill={T} fillOpacity="0.1" />
          <g fill={T} fillOpacity="0.2">
            <rect x="140" y="24" width="7" height="7" transform="rotate(15 143.5 27.5)" />
            <rect x="262" y="42" width="7" height="7" transform="rotate(-20 265.5 45.5)" />
            <rect x="202" y="116" width="7" height="7" transform="rotate(30 205.5 119.5)" />
            <rect x="322" y="104" width="7" height="7" transform="rotate(-10 325.5 107.5)" />
          </g>
        </>
      );
  }
}

/**
 * Escena de fondo temática de cada servicio: cubre el panel de color completo, detrás del
 * título y de `ServiceMascot`. Blanco a opacidad muy baja (0.1–0.26) para leerse como textura
 * de marca —al mismo nivel que `Halftone`— y no restar legibilidad al título (blanco sólido
 * con sombra dura de contorno) ni protagonismo a la mascota de la esquina.
 *
 * `preserveAspectRatio="xMidYMid slice"` + `viewBox` ancho (400×160) hace que la escena
 * "cubra" el panel como un fondo, cualquiera sea su proporción real (varía con el ancho de
 * la tarjeta), igual que haría un `background-size: cover`.
 */
export function ServiceBackdrop({
  variant,
  className = "",
}: {
  variant: ServiceMascotVariant;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 160"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      {renderScene(variant)}
    </svg>
  );
}
