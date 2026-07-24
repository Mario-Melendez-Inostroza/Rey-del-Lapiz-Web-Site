import { ComicBurst, DecorativeFace, Halftone, SpeechBubble, ZigZagBorder } from "../brand";
import { BANGERS, NUNITO } from "../../config/typography";
import { aboutContent } from "../../data";

export function About() {
  return (
    <section className="relative bg-[#FFC400] py-28 overflow-hidden">
      <Halftone opacity={0.18} />
      <ZigZagBorder top color1="#FFC400" color2="#111" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center relative">
            <div
              className="relative w-64 md:w-80 h-[380px] md:h-[450px] bg-[#111] rounded-3xl border-8 border-[#111] shadow-[14px_14px_0_#111] overflow-hidden"
              style={{ transform: "rotate(-4deg) translateY(-24px)" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 gap-4">
                <svg width="72" height="72" viewBox="0 0 100 100" aria-hidden="true">
                  <circle cx="50" cy="36" r="22" fill="currentColor" />
                  <ellipse cx="50" cy="84" rx="32" ry="24" fill="currentColor" />
                </svg>
                <span
                  className="text-xs font-black tracking-widest uppercase text-center px-4"
                  style={NUNITO}
                >
                  {aboutContent.imageLabel}
                </span>
              </div>
              <Halftone opacity={0.06} />
            </div>

            <div className="absolute -top-10 -right-6 w-36 rotate-12 drop-shadow-2xl z-20">
              <DecorativeFace v={4} className="w-full" />
            </div>
            <div className="absolute -bottom-8 -left-6 w-28 -rotate-8 drop-shadow-2xl z-20">
              <DecorativeFace v={1} className="w-full" />
            </div>

            <ComicBurst className="absolute top-4 right-10 w-12 z-10" color="#FF3D00" pts={8} />
            <ComicBurst className="absolute bottom-16 left-4 w-10 z-10" color="#00A8FF" pts={8} />
          </div>

          <div>
            <SpeechBubble text={aboutContent.greeting} bg="#111" fg="#FFC400" className="mb-8" />

            <h2
              className="text-5xl md:text-6xl text-[#111] mb-6 leading-none"
              style={{ ...BANGERS, textShadow: "3px 3px 0 rgba(0,0,0,0.15)" }}
            >
              {aboutContent.title}
            </h2>

            <p className="text-[#111]/75 text-lg font-bold mb-4 leading-relaxed" style={NUNITO}>
              {aboutContent.paragraphs[0]}
            </p>
            <p
              className="text-[#111]/60 text-base font-semibold mb-10 leading-relaxed"
              style={NUNITO}
            >
              {aboutContent.paragraphs[1]}
            </p>

            <div className="flex flex-wrap gap-4">
              {aboutContent.badges.map((badge) => (
                <div
                  key={badge.label}
                  className="font-black text-lg px-5 py-3 rounded-xl border-4 border-[#111] shadow-[4px_4px_0_#111]"
                  style={{ ...BANGERS, backgroundColor: badge.bg, color: badge.fg }}
                >
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ZigZagBorder top={false} color1="#FFC400" color2="#111" />
    </section>
  );
}
