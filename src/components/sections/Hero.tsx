import type { CSSProperties } from "react";
import { ChevronDown, Star } from "lucide-react";

import {
  ComicBurst,
  Easel,
  Halftone,
  InstagramIcon,
  MotionLines,
  Pencil,
  Sparkle,
  WhatsAppIcon,
} from "../brand";
import { Button } from "../ui/Button";
import { siteConfig } from "../../config/site";
import { BANGERS, NUNITO } from "../../config/typography";
import { heroContent } from "../../data";
import { useInView } from "../../hooks/useInView";

export function Hero() {
  // La animación de la caricatura se dispara cuando el caballete entra en pantalla
  // (clave para que se vea en móvil, donde queda más abajo).
  const { ref: easelRef, inView: easelInView } = useInView();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink"
    >
      <Halftone opacity={0.1} />

      {/* "Sol" de fondo: late como luces de show (prende/apaga). opacity-[0.04] = estado base. */}
      <ComicBurst
        className="hero-sun absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[140vw] opacity-[0.04]"
        color="var(--color-primary)"
        pts={20}
      />

      {/* Textura de grafito / papel: grano fino sobre toda la escena + rayado a lápiz sutil en
          las esquinas, monocromo y a muy baja opacidad. Evoca "lápiz y papel" sin íconos. */}
      <div
        className="hero-grain pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden="true"
      />
      <div
        className="hero-hatch pointer-events-none absolute -left-16 -top-16 h-80 w-80 opacity-60 hidden md:block"
        aria-hidden="true"
      />
      <div
        className="hero-hatch pointer-events-none absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rotate-90 opacity-50 hidden md:block"
        aria-hidden="true"
      />

      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Contenido — jerarquía principal, centrado en la página: título + CTAs. */}
        <div>
          <div
            className="inline-flex items-center gap-2 bg-primary text-ink font-black px-5 py-1.5 rounded-full border-4 border-ink mb-8 text-sm uppercase tracking-widest"
            style={NUNITO}
          >
            <Star size={13} fill="var(--color-ink)" />
            {siteConfig.locationLabel}
            <Star size={13} fill="var(--color-ink)" />
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl xl:text-[80px] text-white leading-[0.92] mb-8"
            style={{
              ...BANGERS,
              textShadow: "4px 4px 0 var(--color-primary), 7px 7px 0 rgba(0,0,0,0.4)",
            }}
          >
            {heroContent.title.prefix}{" "}
            <span
              className="text-primary"
              style={{ textShadow: "4px 4px 0 var(--color-ink), 7px 7px 0 rgba(0,0,0,0.5)" }}
            >
              {heroContent.title.highlight}
            </span>
          </h1>

          <p
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-bold"
            style={NUNITO}
          >
            {heroContent.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="whatsapp"
              size="md"
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={26} />
              {siteConfig.ctas.reserveWhatsapp}
            </Button>
            <Button
              variant="instagram"
              size="md"
              shadowColor="var(--color-instagram-mid)"
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={26} />
              {siteConfig.ctas.viewInstagram}
            </Button>
          </div>
        </div>

        {/* La obra sobre un CABALLETE — acento inferior-derecha en desktop, centrado en móvil.
            El caballete (SVG) sostiene la hoja; el papel calza en la bandeja por porcentajes.
            La HOJA está siempre visible; el DIBUJO se revela de arriba hacia abajo mientras el
            lápiz baja, dando los últimos retoques en vivo. */}
        <div className="mt-12 flex justify-center lg:mt-0 lg:absolute lg:bottom-0 lg:right-0 xl:right-2">
          <div
            ref={easelRef}
            className={`relative w-44 sm:w-48 lg:w-48 xl:w-52 aspect-[320/440] rotate-3 ${
              easelInView ? "hero-anim-run" : ""
            }`}
          >
            <Easel className="absolute inset-0 h-full w-full" />

            {/* Fuegos artificiales que estallan al terminar el dibujo (detrás del marco de la
                hoja: van antes que ella en el DOM). Estrellas + estallidos, colores de fiesta. */}
            <span
              className="hero-firework absolute left-[28%] top-[-5%] w-14"
              style={{ "--fw-d": "4.3s" } as CSSProperties}
            >
              <ComicBurst className="w-full" color="var(--color-primary)" pts={14} />
            </span>
            <span
              className="hero-firework absolute left-[-4%] top-[16%] w-11"
              style={{ "--fw-d": "4.5s" } as CSSProperties}
            >
              <ComicBurst className="w-full" color="var(--color-blue)" pts={10} />
            </span>
            <span
              className="hero-firework absolute right-[-4%] top-[22%] w-12"
              style={{ "--fw-d": "4.65s" } as CSSProperties}
            >
              <ComicBurst className="w-full" color="var(--color-green)" pts={12} />
            </span>
            <span
              className="hero-firework absolute left-[6%] top-[2%] w-8"
              style={{ "--fw-d": "4.85s" } as CSSProperties}
            >
              <Sparkle className="w-full" color="var(--color-purple)" />
            </span>
            <span
              className="hero-firework absolute right-[4%] top-[6%] w-9"
              style={{ "--fw-d": "5s" } as CSSProperties}
            >
              <Sparkle className="w-full" color="var(--color-accent)" />
            </span>
            <span
              className="hero-firework absolute left-[54%] top-[-7%] w-10"
              style={{ "--fw-d": "5.15s" } as CSSProperties}
            >
              <Sparkle className="w-full" color="white" />
            </span>

            {/* La hoja sobre la bandeja del caballete. */}
            <div className="hero-cari absolute left-[18.75%] top-[9%] w-[62.5%] rounded-[2px] border-2 border-ink bg-white shadow-[4px_5px_0_rgba(0,0,0,0.45)]">
              <img
                src="/images/hero/caricatura.webp"
                width={900}
                height={1203}
                alt="Caricatura de una asistente sonriente dibujada en vivo — muestra del trabajo de El Rey del Lápiz"
                className="hero-cari-reveal block w-full h-auto select-none"
                decoding="async"
                draggable={false}
              />

              {/* El lápiz da los últimos retoques (protagonista de la ACCIÓN, no de la obra). */}
              <Pencil
                className="hero-cari-pencil absolute z-20 w-8 md:w-10 pointer-events-none"
                color="var(--color-primary)"
              />

              {/* Destellos breves que acompañan el paso del lápiz por cada zona. */}
              <span
                className="hero-cari-spark absolute left-[44%] top-[10%] w-6 md:w-7"
                style={{ "--spark-d": "1.2s" } as CSSProperties}
              >
                <Sparkle className="w-full" color="white" />
              </span>
              <span
                className="hero-cari-spark absolute left-[50%] top-[32%] w-5 md:w-6"
                style={{ "--spark-d": "2.14s" } as CSSProperties}
              >
                <Sparkle className="w-full" color="white" />
              </span>
              <span
                className="hero-cari-spark absolute left-[38%] top-[46%] w-5 md:w-6"
                style={{ "--spark-d": "2.72s" } as CSSProperties}
              >
                <Sparkle className="w-full" color="white" />
              </span>
              <span
                className="hero-cari-spark absolute left-[70%] top-[61%] w-8 md:w-10"
                style={{ "--spark-d": "3.22s" } as CSSProperties}
              >
                <MotionLines className="w-full" color="white" />
              </span>
              <span
                className="hero-cari-spark absolute left-[36%] top-[80%] w-5 md:w-6"
                style={{ "--spark-d": "3.72s" } as CSSProperties}
              >
                <Sparkle className="w-full" color="white" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll — anclado al fondo del hero, fuera del grid. */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/30 animate-bounce">
        <span className="text-xs font-black uppercase tracking-widest" style={NUNITO}>
          {heroContent.discoverMore}
        </span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
