import { ComicBurst, DecorativeFace, Halftone } from "../brand";
import { BANGERS, NUNITO } from "../../config/typography";
import { STEPS } from "../../data/site";

export function Process() {
  return (
    <section id="como-funciona" className="relative bg-[#111111] py-28 overflow-hidden">
      <Halftone opacity={0.07} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="inline-block bg-[#00A8FF] text-white font-black px-4 py-1 text-xs rounded-full border-4 border-[#111] uppercase tracking-widest mb-5"
            style={NUNITO}
          >
            Súper fácil
          </span>
          <h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ ...BANGERS, textShadow: "4px 4px 0 #00A8FF" }}
          >
            ¿Cómo Funciona?
          </h2>
          <p className="text-white/50 text-lg font-bold max-w-xl mx-auto" style={NUNITO}>
            4 simples pasos para tener el mejor entretenimiento en tu evento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, i) => (
            <div key={i} className="relative group">
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(100%-8px)] w-full h-1 z-0"
                  style={{
                    background: `repeating-linear-gradient(90deg, ${step.color} 0, ${step.color} 10px, transparent 10px, transparent 20px)`,
                  }}
                />
              )}

              <div className="relative z-10 rounded-3xl border-4 border-[#333] bg-[#1a1a1a] p-6 text-center hover:border-[#FFC400] hover:-translate-y-2 transition-all shadow-[4px_4px_0_#333] hover:shadow-[4px_4px_0_#FFC400]">
                <div
                  className="w-20 h-20 rounded-full border-4 border-[#111] flex items-center justify-center mx-auto mb-5 shadow-[4px_4px_0_#111]"
                  style={{ backgroundColor: step.color }}
                >
                  <span className="text-3xl" style={{ ...BANGERS, color: step.fg }}>
                    {step.num}
                  </span>
                </div>

                <h3
                  className="text-2xl text-white mb-3"
                  style={{ ...BANGERS, textShadow: `2px 2px 0 ${step.color}` }}
                >
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm font-semibold leading-relaxed" style={NUNITO}>
                  {step.desc}
                </p>

                {i === 2 && (
                  <div className="absolute -bottom-8 -right-5 w-14 drop-shadow-xl z-20 rotate-12">
                    <DecorativeFace v={2} className="w-full" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
