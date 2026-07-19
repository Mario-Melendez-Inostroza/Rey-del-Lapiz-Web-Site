import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { ComicBurst, Halftone, ZigZagBorder } from "../brand";
import { BANGERS, NUNITO } from "../../config/typography";
import { faqItems, sectionHeadings } from "../../data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-[#FFC400] py-28 overflow-hidden">
      <Halftone opacity={0.18} />
      <ZigZagBorder top />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <ComicBurst className="inline-block w-20 mb-4" color="#111" pts={10} />
          <h2 className="text-5xl md:text-7xl text-[#111] mb-4" style={BANGERS}>
            {sectionHeadings.faq.title}
          </h2>
          <p className="text-[#111]/65 text-lg font-bold" style={NUNITO}>
            {sectionHeadings.faq.description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqItems.map((faq, i) => (
            <div
              key={i}
              className="bg-white border-4 border-[#111] rounded-2xl overflow-hidden shadow-[5px_5px_0_#111] hover:shadow-[7px_7px_0_#111] transition-all"
            >
              <button
                className="w-full flex items-start justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-black text-[#111] text-base md:text-lg leading-snug" style={NUNITO}>
                  {faq.q}
                </span>
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#FFC400] border-2 border-[#111] flex items-center justify-center mt-0.5">
                  {open === i
                    ? <ChevronUp size={16} className="text-[#111]" />
                    : <ChevronDown size={16} className="text-[#111]" />
                  }
                </div>
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-1 border-t-2 border-[#111]/10">
                  <p className="text-[#111]/65 font-semibold leading-relaxed" style={NUNITO}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <ZigZagBorder top={false} />
    </section>
  );
}
