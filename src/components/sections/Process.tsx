import { Halftone } from "../brand";
import { Reveal } from "../ui/Reveal";
import { BANGERS, NUNITO } from "../../config/typography";
import { processSteps, sectionHeadings } from "../../data";

export function Process() {
  return (
    <section id="como-funciona" className="relative bg-ink py-28 overflow-hidden">
      <Halftone opacity={0.07} />

      <Reveal className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="inline-block bg-blue text-white font-black px-4 py-1 text-xs rounded-full border-4 border-ink uppercase tracking-widest mb-5"
            style={NUNITO}
          >
            {sectionHeadings.process.eyebrow}
          </span>
          <h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ ...BANGERS, textShadow: "4px 4px 0 var(--color-blue)" }}
          >
            {sectionHeadings.process.title}
          </h2>
          <p className="text-white/50 text-lg font-bold max-w-xl mx-auto" style={NUNITO}>
            {sectionHeadings.process.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="relative z-10 rounded-3xl border-4 border-border bg-surface p-6 text-center hover:border-primary hover:-translate-y-2 transition-all shadow-[4px_4px_0_var(--color-border)] hover:shadow-[4px_4px_0_var(--color-primary)]">
                <h3
                  className="text-3xl md:text-4xl text-white mb-3"
                  style={{ ...BANGERS, textShadow: `2px 2px 0 ${step.color}` }}
                >
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm font-semibold leading-relaxed" style={NUNITO}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
