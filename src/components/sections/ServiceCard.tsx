import type { CSSProperties } from "react";

import { ComicSticker, Halftone, ServiceBackdrop, ServiceMascot } from "../brand";
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
  return (
    <article
      className="service-card group @container relative h-full bg-surface border-4 border-border rounded-3xl"
      style={
        {
          "--svc": service.color,
          "--svc-rot": REST_TILT[index % REST_TILT.length],
        } as CSSProperties
      }
    >
      {/* Sticker de onomatopeya. Vive fuera del recorte del panel, por eso el root no lleva
          overflow-hidden. Fondo blanco fijo: contrasta con los seis colores de servicio. */}
      <ComicSticker
        className="service-shout absolute -top-4 -right-2 z-20 text-base"
        burstColor="var(--svc)"
      >
        {service.shout}
      </ComicSticker>

      {/* Panel de color: filigrana + título + trazo de lápiz */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden rounded-t-[1.25rem] border-b-4 border-ink px-5 pt-8 pb-7"
        style={{ backgroundColor: "var(--svc)" }}
      >
        {/* Escena de fondo (pastel, auditorio, stand...) detrás del halftone: se lee como
            textura de marca, nunca compite con el título ni con la mascota de la esquina. */}
        <ServiceBackdrop
          variant={service.mascot}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
        <Halftone opacity={0.2} />

        {/* La mascota se sale del panel por la esquina: lee como una calcomanía asomando,
            no como una ilustración centrada compitiendo con el título. El recorte del
            panel la corta — por eso no necesita encajar completa. */}
        <ServiceMascot
          variant={service.mascot}
          className="service-icon pointer-events-none absolute -bottom-2 -right-2 h-28 w-28 rotate-6 drop-shadow-[2px_2px_0_rgba(0,0,0,0.15)]"
        />

        {/* Tamaño por ancho de la tarjeta (container query), no por viewport: la misma tarjeta
            vive en grillas de 1, 2 columnas o junto al video, y el título debe caber en una línea. */}
        <h3
          className="relative z-10 text-3xl @[17rem]:text-4xl @[22rem]:text-5xl text-white text-center leading-none"
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
