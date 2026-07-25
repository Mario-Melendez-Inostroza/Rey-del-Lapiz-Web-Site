import { ComicBurst, Halftone } from "../brand";
import { Reveal } from "../ui/Reveal";
import { BANGERS, NUNITO } from "../../config/typography";
import { sectionHeadings, services } from "../../data";

export function Services() {
  return (
    <section id="servicios" className="relative bg-ink py-28 overflow-hidden">
      <Halftone opacity={0.07} />

      <Reveal className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <ComicBurst
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 opacity-[0.06]"
            color="var(--color-primary)"
            pts={20}
          />
          <span
            className="inline-block bg-primary text-ink font-black px-4 py-1 text-xs rounded-full border-4 border-ink uppercase tracking-widest mb-5"
            style={NUNITO}
          >
            {sectionHeadings.services.eyebrow}
          </span>
          <h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ ...BANGERS, textShadow: "4px 4px 0 var(--color-primary)" }}
          >
            {sectionHeadings.services.title}
          </h2>
          <p className="text-white/50 text-lg font-bold max-w-xl mx-auto" style={NUNITO}>
            {sectionHeadings.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <div
              key={i}
              className="relative bg-surface border-4 border-border rounded-3xl overflow-hidden shadow-[8px_8px_0_var(--color-primary)] hover:shadow-[3px_3px_0_var(--color-primary)] hover:translate-x-1.5 hover:translate-y-1.5 transition-all group"
            >
              <div
                className="h-40 flex items-center justify-center relative overflow-hidden px-4"
                style={{ backgroundColor: svc.color }}
              >
                <Halftone opacity={0.2} />
                <ComicBurst
                  className="absolute top-2 right-2 w-10 opacity-50"
                  color="white"
                  pts={6}
                />
                <ComicBurst
                  className="absolute bottom-1 left-2 w-7 opacity-30"
                  color="var(--color-ink)"
                  pts={6}
                />
                <h3
                  className="relative z-10 text-4xl md:text-5xl text-white text-center leading-none group-hover:scale-105 transition-transform"
                  style={{ ...BANGERS, textShadow: "3px 3px 0 var(--color-ink)" }}
                >
                  {svc.title}
                </h3>
              </div>

              <div className="py-7 px-6 text-center">
                <p className="text-white/55 font-semibold text-sm leading-relaxed" style={NUNITO}>
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
