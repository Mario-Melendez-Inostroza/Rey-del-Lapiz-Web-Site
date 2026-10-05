import { Halftone, SpeechBubble, ZigZagBorder } from "../brand";
import { Reveal } from "../ui/Reveal";
import { BANGERS, NUNITO } from "../../config/typography";
import { aboutContent } from "../../data";

/** Frase a destacar dentro del cuerpo de la historia (debe existir tal cual en el texto). */
const HIGHLIGHT = "un recuerdo para siempre";

/**
 * Parte `text` alrededor de `phrase` para envolverla en un `<strong>` sin tocar el contenido
 * (vive completo en `data/`). Si la frase no aparece —p. ej. el texto cambia más adelante—
 * degrada con gracia devolviendo el párrafo intacto, sin destacar nada.
 */
function splitHighlight(text: string, phrase: string): [string, string | null, string] {
  const i = text.indexOf(phrase);
  return i === -1 ? [text, null, ""] : [text.slice(0, i), phrase, text.slice(i + phrase.length)];
}

export function About() {
  const [introLine, storyBody, storyDetail, storyClose] = aboutContent.paragraphs;
  const [beforeHighlight, highlighted, afterHighlight] = splitHighlight(storyBody, HIGHLIGHT);

  return (
    <section className="relative bg-primary py-28 overflow-hidden">
      <Halftone opacity={0.18} />
      <ZigZagBorder top color1="var(--color-primary)" color2="var(--color-ink)" />

      <Reveal className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center relative">
            {/* Iluminación detrás del marco: halo elegante que "respira" (retroiluminación). */}
            <div
              aria-hidden="true"
              className="about-glow absolute left-1/2 top-1/2 w-72 h-96 md:w-96 md:h-[30rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ marginTop: "-24px" }}
            />

            <div
              className="relative w-64 md:w-80 h-[380px] md:h-[450px] rounded-3xl border-8 border-ink shadow-[14px_14px_0_var(--color-ink)] overflow-hidden"
              style={{ transform: "rotate(-4deg) translateY(-24px)" }}
            >
              <img
                src="/images/artist/foto_del_artista.webp"
                alt="El Rey del Lápiz, caricaturista en vivo, con su tabla de dibujo"
                width={640}
                height={640}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div>
            <SpeechBubble
              text={aboutContent.greeting}
              bg="var(--color-ink)"
              fg="var(--color-primary)"
              className="mb-8"
            />

            <h2
              className="text-5xl md:text-6xl text-ink mb-6 leading-none"
              style={{ ...BANGERS, textShadow: "3px 3px 0 rgba(0,0,0,0.15)" }}
            >
              {aboutContent.title}
            </h2>

            {/* Primer trazo: línea de apertura, separada del cuerpo solo por el espaciado
                (antes llevaba un garabato de lápiz debajo, quitado por pedido del cliente). */}
            <p
              className="text-ink text-xl md:text-2xl font-extrabold leading-snug mb-5"
              style={NUNITO}
            >
              {introLine}
            </p>

            {/* Cuerpo: texto sólido (sin opacidad) para máximo contraste sobre el amarillo,
                y un ancho máximo de lectura para que las líneas no se alarguen en tablet. */}
            <div className="max-w-prose">
              <p
                className="text-ink text-lg md:text-xl font-semibold leading-relaxed mb-4"
                style={NUNITO}
              >
                {beforeHighlight}
                {highlighted ? <strong className="font-black">{highlighted}</strong> : null}
                {afterHighlight}
              </p>
              <p
                className="text-ink text-lg md:text-xl font-semibold leading-relaxed mb-6"
                style={NUNITO}
              >
                {storyDetail}
              </p>
            </div>

            {/* Cierre: la frase que resume la promesa de marca, con más peso y tamaño que
                el resto — el remate de la historia, no un párrafo más. */}
            <p className="text-ink text-xl md:text-2xl font-black leading-snug mb-8" style={NUNITO}>
              {storyClose}
            </p>

            <div className="flex flex-wrap gap-4">
              {aboutContent.badges.map((badge) => (
                <div
                  key={badge.label}
                  className="font-black text-lg px-5 py-3 rounded-xl border-4 border-ink shadow-[4px_4px_0_var(--color-ink)]"
                  style={{ ...BANGERS, backgroundColor: badge.bg, color: badge.fg }}
                >
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <ZigZagBorder top={false} color1="var(--color-primary)" color2="var(--color-ink)" />
    </section>
  );
}
