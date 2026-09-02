import type { CSSProperties } from "react";

import { ComicBurst, Halftone } from "../brand";
import { BANGERS, NUNITO } from "../../config/typography";
import type { Service } from "../../types/site";

/** Inclinaciones de reposo, cicladas por posición: ninguna tarjeta queda igual a su vecina. */
const REST_TILT = ["-1.5deg", "1.2deg", "-0.8deg", "1.5deg", "-1.2deg", "0.9deg"];

/**
 * Tarjeta de servicio con estética de lámina de cómic: papel torcido que se endereza y se
 * levanta al enfocarlo, sticker con la onomatopeya, icono como filigrana y un trazo de lápiz
 * que se dibuja bajo el título.
 *
 * El color del servicio se propaga por la custom property `--svc` (sombra dura, panel y
 * ráfaga del sticker) para no repetir el hex en cada regla. Los estilos y transiciones viven
 * en `styles/components.css` bajo `prefers-reduced-motion: no-preference`.
 */
export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { Icon } = service;

  return (
    <article
      className="service-card group relative h-full bg-surface border-4 border-border rounded-3xl"
      style={
        {
          "--svc": service.color,
          "--svc-rot": REST_TILT[index % REST_TILT.length],
        } as CSSProperties
      }
    >
      {/* Sticker de onomatopeya. Vive fuera del recorte del panel, por eso el root no lleva
          overflow-hidden. Fondo blanco fijo: contrasta con los seis colores de servicio. */}
      <span
        className="service-shout absolute -top-4 -right-2 z-20 inline-flex items-center rounded-full border-[3px] border-ink bg-white px-3 pt-1.5 pb-1 text-base leading-none text-ink"
        style={BANGERS}
      >
        <ComicBurst className="absolute -left-4 -top-3 w-8 -z-10" color="var(--svc)" pts={8} />
        {service.shout}
      </span>

      {/* Panel de color: filigrana + título + trazo de lápiz */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden rounded-t-[1.25rem] border-b-4 border-ink px-5 pt-8 pb-7"
        style={{ backgroundColor: "var(--svc)" }}
      >
        <Halftone opacity={0.2} />

        {/* El icono se sale del panel por la esquina: lee como textura de viñeta, no como
            un logo centrado detrás del título. El recorte del panel lo corta. */}
        <Icon
          className="service-icon pointer-events-none absolute -bottom-7 -right-5 h-36 w-36 rotate-12 text-white/25"
          strokeWidth={2.5}
          aria-hidden="true"
        />

        <h3
          className="relative z-10 text-4xl md:text-5xl text-white text-center leading-none"
          style={{ ...BANGERS, textShadow: "3px 3px 0 var(--color-ink)" }}
        >
          {service.title}
        </h3>

        {/* Subrayado a mano alzada: se dibuja al pasar el cursor / enfocar la tarjeta. */}
        <svg
          className="service-underline relative z-10 mt-2.5 h-3 w-36"
          viewBox="0 0 120 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 8.5c22-5 42 1.5 62-2 16-2.8 34 3 52 1"
            stroke="var(--color-ink)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="py-7 px-6 text-center">
        <p className="text-white/55 font-semibold text-sm leading-relaxed" style={NUNITO}>
          {service.desc}
        </p>
      </div>
    </article>
  );
}
