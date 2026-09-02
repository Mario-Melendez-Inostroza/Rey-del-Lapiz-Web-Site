import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { ComicBurst, Halftone, ZigZagBorder } from "../brand";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { NUNITO } from "../../config/typography";
import { faqItems, sectionHeadings } from "../../data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-primary py-28 overflow-hidden">
      <Halftone opacity={0.18} />
      <ZigZagBorder top />

      <Reveal className="max-w-4xl mx-auto px-6">
        <SectionHeader
          className="mb-14"
          tone="light"
          title={sectionHeadings.faq.title}
          description={sectionHeadings.faq.description}
        >
          <ComicBurst className="inline-block w-20 mb-4" color="var(--color-ink)" pts={10} />
        </SectionHeader>

        <div className="flex flex-col gap-4">
          {faqItems.map((faq, i) => (
            <div
              key={i}
              className="bg-white border-4 border-ink rounded-2xl overflow-hidden shadow-[5px_5px_0_var(--color-ink)] hover:shadow-[7px_7px_0_var(--color-ink)] transition-all"
            >
              <button
                type="button"
                className="w-full flex items-start justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span
                  className="font-black text-ink text-base md:text-lg leading-snug"
                  style={NUNITO}
                >
                  {faq.q}
                </span>
                <div
                  className="shrink-0 w-9 h-9 rounded-full bg-primary border-2 border-ink flex items-center justify-center mt-0.5"
                  aria-hidden="true"
                >
                  {open === i ? (
                    <ChevronUp size={16} className="text-ink" />
                  ) : (
                    <ChevronDown size={16} className="text-ink" />
                  )}
                </div>
              </button>
              <div
                id={`faq-panel-${i}`}
                hidden={open !== i}
                className="px-5 pb-5 pt-1 border-t-2 border-ink/10"
              >
                <p className="text-ink/65 font-semibold leading-relaxed" style={NUNITO}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <ZigZagBorder top={false} />
    </section>
  );
}
