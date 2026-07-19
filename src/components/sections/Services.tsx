import { ComicBurst, DecorativeFace, Halftone } from "../brand";
import { BANGERS, NUNITO } from "../../config/typography";
import { SERVICES } from "../../data/site";

export function Services() {
  return (
    <section id="servicios" className="relative bg-[#111111] py-28 overflow-hidden">
      <Halftone opacity={0.07} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <ComicBurst className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 opacity-[0.06]" color="#FFC400" pts={20} />
          <span
            className="inline-block bg-[#FFC400] text-[#111] font-black px-4 py-1 text-xs rounded-full border-4 border-[#111] uppercase tracking-widest mb-5"
            style={NUNITO}
          >
            ¿Qué ofrezco?
          </span>
          <h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ ...BANGERS, textShadow: "4px 4px 0 #FFC400" }}
          >
            Servicios
          </h2>
          <p className="text-white/50 text-lg font-bold max-w-xl mx-auto" style={NUNITO}>
            Caricaturas en vivo para cada tipo de evento. ¡El entretenimiento que
            todos recordarán!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className="relative bg-[#1a1a1a] border-4 border-[#333] rounded-3xl overflow-visible shadow-[8px_8px_0_#FFC400] hover:shadow-[3px_3px_0_#FFC400] hover:translate-x-1.5 hover:translate-y-1.5 transition-all group"
            >
              <div
                className="h-36 rounded-t-2xl flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: svc.color }}
              >
                <Halftone opacity={0.2} />
                <ComicBurst className="absolute top-2 right-2 w-10 opacity-50" color="white" pts={6} />
                <ComicBurst className="absolute bottom-1 left-2 w-7 opacity-30" color="#111" pts={6} />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-28 drop-shadow-2xl z-20 group-hover:-translate-y-2 transition-transform" style={{ top: "72px" }}>
                <DecorativeFace v={svc.v} className="w-full" />
              </div>

              <div className="pt-16 pb-7 px-6 text-center">
                <h3
                  className="text-3xl text-white mb-2"
                  style={{ ...BANGERS, textShadow: `2px 2px 0 ${svc.color}` }}
                >
                  {svc.title}
                </h3>
                <p className="text-white/55 font-semibold text-sm leading-relaxed" style={NUNITO}>
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
