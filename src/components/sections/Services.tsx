import { ComicBurst, Halftone } from "../brand";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { sectionHeadings, services, servicesShowcase } from "../../data";
import { ServiceCard } from "./ServiceCard";
import { ServiceShowcase } from "./ServiceShowcase";

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

        {/* Desktop: tarjetas 2×3 (~62%) + video vertical (~38%). Tablet y móvil: el video
            baja bajo las tarjetas — lado a lado no queda legible por debajo de `lg`. */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
          {/* El gap deja aire a los stickers que sobresalen y a las sombras duras de color. */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 xl:gap-10">
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={i * STAGGER} className="h-full">
                <ServiceCard service={svc} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={2 * STAGGER}>
            <ServiceShowcase showcase={servicesShowcase} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
