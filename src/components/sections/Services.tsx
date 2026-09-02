import { ComicBurst, Halftone } from "../brand";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { sectionHeadings, services } from "../../data";
import { ServiceCard } from "./ServiceCard";

/** Escalonado de entrada entre tarjetas (ms). */
const STAGGER = 90;

export function Services() {
  return (
    <section id="servicios" className="relative bg-ink py-28 overflow-hidden">
      <Halftone opacity={0.07} />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            className="mb-16"
            eyebrow={sectionHeadings.services.eyebrow}
            title={sectionHeadings.services.title}
            description={sectionHeadings.services.description}
            eyebrowTone="ink"
          >
            <ComicBurst
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 opacity-[0.06]"
              color="var(--color-primary)"
              pts={20}
            />
          </SectionHeader>
        </Reveal>

        {/* El gap es más generoso que en el resto de grillas: el sticker sobresale de la
            tarjeta y las sombras duras van en el color del servicio, y ambos necesitan aire. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {services.map((svc, i) => (
            <Reveal key={svc.title} delay={i * STAGGER} className="h-full">
              <ServiceCard service={svc} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
