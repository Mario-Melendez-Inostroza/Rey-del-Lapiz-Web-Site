import { Halftone, SpeechBubble, ZigZagBorder } from "../brand";
import { Reveal } from "../ui/Reveal";
import { BANGERS, NUNITO } from "../../config/typography";
import { aboutContent } from "../../data";

export function About() {
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

            <p className="text-ink/75 text-lg font-bold mb-4 leading-relaxed" style={NUNITO}>
              {aboutContent.paragraphs[0]}
            </p>
            <p className="text-ink/60 text-base font-semibold mb-10 leading-relaxed" style={NUNITO}>
              {aboutContent.paragraphs[1]}
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
