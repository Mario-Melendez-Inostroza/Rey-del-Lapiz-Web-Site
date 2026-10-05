import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Pause, Play } from "lucide-react";

import { ComicBurst, ComicSticker, Halftone, Pencil } from "../brand";
import { useInView } from "../../hooks/useInView";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import type { ServiceShowcase as Showcase } from "../../types/site";

/** Qué pidió el usuario: `auto` = decide la preferencia de movimiento; si no, su elección. */
type Intent = "auto" | "play" | "pause";

/**
 * Video vitrina de Servicios: el show real, enmarcado como una lámina más de la sección.
 *
 * - Marco: comparte con `ServiceCard` la inclinación de reposo, el "lift" al enfocar y la
 *   sombra dura (`.service-card, .service-showcase` en `styles/components.css`).
 * - Carga diferida: el archivo es pesado, así que `src` solo se asigna cuando el marco entra
 *   en vista. Antes de eso (y mientras llega el primer cuadro) se ve un fondo de marca.
 * - Autoplay silenciado en bucle, salvo con `prefers-reduced-motion` (entonces arranca
 *   pausado). Se pausa al salir de vista para no decodificar video que nadie mira.
 * - Si el navegador bloquea el autoplay, `play()` se rechaza y el botón queda en "Reproducir":
 *   el diseño no cambia. El botón es pequeño pero necesario (WCAG 2.2.2: todo movimiento
 *   automático de más de 5 s debe poder pausarse).
 */
export function ServiceShowcase({ showcase }: { showcase: Showcase }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const { ref: loadRef, inView: shouldLoad } = useInView(0);
  const { ref: frameRef, inView: visible } = useInView(0.35, { once: false });
  const [intent, setIntent] = useState<Intent>("auto");
  const [playing, setPlaying] = useState(false);

  const wantsPlay = intent === "play" || (intent === "auto" && !reduceMotion);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;
    if (visible && wantsPlay) {
      // Rechazo = autoplay bloqueado por el navegador: queda el primer cuadro, sin romper nada.
      video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  }, [shouldLoad, visible, wantsPlay]);

  return (
    // El ancho está topado (no llena la columna): al ser vertical, sin este límite el marco
    // crece más alto que el viewport y se siente "cortado" al tener que hacer scroll para verlo
    // completo. 23rem lo deja a la altura de las primeras dos filas de tarjetas.
    <div ref={loadRef} className="relative mx-auto w-full max-w-[26rem] lg:max-w-[23rem]">
      {/* Decoración de fondo: ráfaga que asoma tras la esquina inferior y el lápiz de marca
          apoyado en el costado. Ambas quedan fuera del área del video. */}
      <ComicBurst
        className="absolute -right-8 -bottom-8 w-32"
        color="var(--color-accent)"
        pts={14}
      />
      <Pencil className="absolute -left-3 bottom-16 z-30 w-7 -rotate-[28deg] lg:-left-7 drop-shadow-[3px_3px_0_var(--color-ink)]" />

      <div
        ref={frameRef}
        className="service-showcase relative rounded-3xl border-4 border-ink bg-primary p-2.5"
        style={{ "--svc": "var(--color-accent)", "--svc-rot": "1.5deg" } as CSSProperties}
      >
        <ComicSticker
          className="service-shout absolute -top-5 left-1 z-20 text-lg lg:-left-3"
          burstColor="var(--color-accent)"
        >
          {showcase.sticker}
        </ComicSticker>

        {/* Fuera del video, sobre la esquina del marco (espejo del sticker): el video trae sus
            propios rótulos y los usa en todas sus esquinas, así que el control no lo tapa. */}
        <button
          type="button"
          onClick={() => setIntent(playing ? "pause" : "play")}
          aria-label={playing ? "Pausar video" : "Reproducir video"}
          className="absolute -top-5 -right-5 z-20 grid h-10 w-10 place-items-center rounded-full border-[3px] border-ink bg-white text-ink shadow-[3px_3px_0_var(--color-ink)] transition-transform hover:scale-110"
        >
          {playing ? (
            <Pause size={16} fill="currentColor" aria-hidden="true" />
          ) : (
            <Play size={16} fill="currentColor" className="translate-x-px" aria-hidden="true" />
          )}
        </button>

        <div className="relative overflow-hidden rounded-[1.1rem] border-4 border-ink bg-surface">
          {/* Fondo de marca mientras el video no tiene cuadro que mostrar. */}
          <Halftone opacity={0.12} />
          <ComicBurst
            className="absolute top-1/2 left-1/2 w-28 -translate-x-1/2 -translate-y-1/2 opacity-15"
            color="var(--color-primary)"
            pts={12}
          />

          <video
            ref={videoRef}
            // El aspect-ratio va en el video (no en el contenedor con borde): proporción exacta.
            className="relative block h-auto w-full"
            style={{ aspectRatio: `${showcase.w} / ${showcase.h}` }}
            // `#t=0.001` fuerza a pintar el primer cuadro aun sin reproducir (iOS no lo hace).
            src={shouldLoad ? `${showcase.src}#t=0.001` : undefined}
            width={showcase.w}
            height={showcase.h}
            muted
            loop
            playsInline
            preload={wantsPlay ? "auto" : "metadata"}
            aria-label={showcase.label}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        </div>
      </div>
    </div>
  );
}
