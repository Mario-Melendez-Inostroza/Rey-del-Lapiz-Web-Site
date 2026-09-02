import { Halftone } from "../brand";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { BANGERS, NUNITO } from "../../config/typography";
import { processSteps, sectionHeadings } from "../../data";

export function Process() {
  return (
    <section id="como-funciona" className="relative bg-ink py-28 overflow-hidden">
      <Halftone opacity={0.07} />

      <Reveal className="max-w-6xl mx-auto px-6">
        <SectionHeader
          className="mb-16"
          eyebrow={sectionHeadings.process.eyebrow}
          title={sectionHeadings.process.title}
          description={sectionHeadings.process.description}
          accent="var(--color-blue)"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step) => (
            <div key={step.title} className="relative group">
              <div className="relative z-10 rounded-3xl border-4 border-border bg-surface p-6 text-center hover:border-primary hover:-translate-y-2 transition-all shadow-[4px_4px_0_var(--color-border)] hover:shadow-[4px_4px_0_var(--color-primary)]">
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-ink"
                  style={{ backgroundColor: step.color }}
                  aria-hidden="true"
                >
                  <step.Icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                </div>
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
