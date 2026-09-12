import type { ReactNode } from "react";

import { BANGERS } from "../../config/typography";
import { ComicBurst } from "./ComicBurst";

/**
 * Sticker de cómic: píldora blanca con borde ink, texto display y una ráfaga de color que
 * asoma por la esquina. El fondo es blanco fijo para contrastar sobre cualquier color de marca.
 *
 * Solo define el aspecto. Posición, tamaño de texto, rotación y animación los decide quien lo
 * usa vía `className` — la clase debe incluir un posicionamiento (`absolute`/`relative`),
 * porque la ráfaga se ancla a la píldora.
 */
export function ComicSticker({
  children,
  burstColor,
  className = "",
}: {
  children: ReactNode;
  /** Color de la ráfaga (normalmente el color del bloque al que se pega). */
  burstColor: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border-[3px] border-ink bg-white px-3 pt-1.5 pb-1 leading-none text-ink ${className}`}
      style={BANGERS}
    >
      <ComicBurst className="absolute -left-4 -top-3 w-8 -z-10" color={burstColor} pts={8} />
      {children}
    </span>
  );
}
