import { ComicBurst, Halftone, InstagramIcon, ZigZagBorder } from "../brand";
import { Button } from "../ui/Button";
import { brandConfig } from "../../config/brand";
import { siteConfig } from "../../config/site";
import { BANGERS, NUNITO } from "../../config/typography";
import { galleryItems, sectionHeadings } from "../../data";

export function Gallery() {
  return (
    <section id="galeria" className="relative bg-[#1a1a1a] py-28 overflow-hidden">
      <Halftone opacity={0.06} />
      <ZigZagBorder top />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="inline-block bg-[#FF3D00] text-white font-black px-4 py-1 text-xs rounded-full border-4 border-[#111] uppercase tracking-widest mb-5"
            style={NUNITO}
          >
            {sectionHeadings.gallery.eyebrow}
          </span>
          <h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ ...BANGERS, textShadow: "4px 4px 0 #FF3D00" }}
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
              className="break-inside-avoid mb-4 rounded-2xl border-4 border-[#333] overflow-hidden group hover:border-[#FFC400] transition-all cursor-pointer"
              style={{ backgroundColor: brandConfig.colors.galleryCardTints[i % brandConfig.colors.galleryCardTints.length] }}
            >
              <div className={`${item.h} relative flex flex-col items-center justify-center gap-3 text-white/15 p-4`}>
                <svg width="38" height="38" viewBox="0 0 100 100" aria-hidden="true">
                  <circle cx="50" cy="36" r="20" fill="currentColor" />
                  <ellipse cx="50" cy="82" rx="30" ry="22" fill="currentColor" />
                </svg>
                <span className="text-[10px] font-black tracking-widest uppercase text-center leading-tight" style={NUNITO}>
                  {item.label}
                </span>

                {i % 3 === 0 && (
                  <ComicBurst className="absolute top-2 right-2 w-8 opacity-30" color="#FFC400" pts={6} />
                )}

                <div className="absolute inset-0 bg-[#FFC400]/0 group-hover:bg-[#FFC400]/8 transition-all flex items-end p-3 opacity-0 group-hover:opacity-100">
                  <span
                    className="text-[10px] font-black text-white bg-[#111]/75 px-2 py-1 rounded-full"
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
            shadowColor="#B744FF"
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
