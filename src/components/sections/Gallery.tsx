import { Halftone, InstagramIcon, ZigZagBorder } from "../brand";
import { Button } from "../ui/Button";
import { siteConfig } from "../../config/site";
import { BANGERS, NUNITO } from "../../config/typography";
import { galleryItems, sectionHeadings } from "../../data";

export function Gallery() {
  return (
    <section id="galeria" className="relative bg-surface py-28 overflow-hidden">
      <Halftone opacity={0.06} />
      <ZigZagBorder top />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="inline-block bg-accent text-white font-black px-4 py-1 text-xs rounded-full border-4 border-ink uppercase tracking-widest mb-5"
            style={NUNITO}
          >
            {sectionHeadings.gallery.eyebrow}
          </span>
          <h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ ...BANGERS, textShadow: "4px 4px 0 var(--color-accent)" }}
          >
            {sectionHeadings.gallery.title}
          </h2>
          <p className="text-white/50 text-lg font-bold max-w-xl mx-auto" style={NUNITO}>
            {sectionHeadings.gallery.description}
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-gap:1rem]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-4 rounded-2xl border-4 border-border overflow-hidden group hover:border-primary transition-all"
            >
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.label}
                  width={item.w}
                  height={item.h}
                  loading="lazy"
                  decoding="async"
                  className="block w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-ink/0 group-hover:bg-ink/40 p-3 opacity-0 group-hover:opacity-100 transition-all">
                  <span
                    className="text-[11px] font-black text-white bg-ink/75 px-2 py-1 rounded-full"
                    style={NUNITO}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="instagram"
            size="md"
            shadowColor="var(--color-purple)"
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={26} />
            {siteConfig.ctas.viewAllInstagram}
          </Button>
        </div>
      </div>

      <ZigZagBorder top={false} />
    </section>
  );
}
