import { ChevronDown, MessageCircle, Star } from "lucide-react";

import { ComicBurst, DecorativeFace, Halftone, InstagramIcon, SpeechBubble } from "../brand";
import { Button } from "../ui/Button";
import { siteConfig } from "../../config/site";
import { BANGERS, NUNITO } from "../../config/typography";
import { heroContent } from "../../data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]"
    >
      <Halftone opacity={0.1} />

      <ComicBurst
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[140vw] opacity-[0.04]"
        color="#FFC400"
        pts={20}
      />

      <div className="absolute top-16 left-0 md:left-8 w-32 md:w-52 -rotate-6 drop-shadow-2xl z-10">
        <DecorativeFace v={0} className="w-full" />
        <SpeechBubble
          text={heroContent.bubbles.laugh}
          bg="#FFC400"
          className="absolute -top-14 left-2"
        />
      </div>

      <div className="absolute top-24 right-0 md:right-8 w-28 md:w-48 rotate-8 drop-shadow-2xl z-10">
        <DecorativeFace v={1} className="w-full" />
        <SpeechBubble
          text={heroContent.bubbles.wow}
          bg="#FF3D00"
          fg="white"
          className="absolute -top-12 right-2"
        />
      </div>

      <div className="absolute bottom-16 left-4 md:left-20 w-24 md:w-40 rotate-6 drop-shadow-2xl z-10 hidden sm:block">
        <DecorativeFace v={2} className="w-full" />
      </div>

      <div className="absolute bottom-12 right-4 md:right-20 w-24 md:w-40 -rotate-6 drop-shadow-2xl z-10 hidden sm:block">
        <DecorativeFace v={3} className="w-full" />
        <SpeechBubble
          text={heroContent.bubbles.laughs}
          bg="#00A8FF"
          fg="white"
          className="absolute -top-12 right-2"
        />
      </div>

      <ComicBurst
        className="absolute top-32 left-1/4 w-14 opacity-30 animate-spin"
        color="#FF3D00"
        pts={6}
      />
      <ComicBurst
        className="absolute bottom-40 right-1/4 w-10 opacity-25"
        color="#00A8FF"
        pts={6}
      />
      <ComicBurst className="absolute top-1/2 left-12 w-8 opacity-20" color="#00D26A" pts={6} />

      <div className="relative z-20 text-center max-w-5xl mx-auto px-6 pt-20">
        <div
          className="inline-flex items-center gap-2 bg-[#FFC400] text-[#111] font-black px-5 py-1.5 rounded-full border-4 border-[#111] mb-8 text-sm uppercase tracking-widest"
          style={NUNITO}
        >
          <Star size={13} fill="#111" />
          {siteConfig.locationLabel}
          <Star size={13} fill="#111" />
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl xl:text-[88px] text-white leading-[0.92] mb-8"
          style={{
            ...BANGERS,
            textShadow: "4px 4px 0 #FFC400, 7px 7px 0 rgba(0,0,0,0.4)",
          }}
        >
          {heroContent.title.prefix}{" "}
          <span
            className="text-[#FFC400]"
            style={{ textShadow: "4px 4px 0 #111, 7px 7px 0 rgba(0,0,0,0.5)" }}
          >
            {heroContent.title.highlight}
          </span>
        </h1>

        <p
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-bold"
          style={NUNITO}
        >
          {heroContent.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="whatsapp"
            size="md"
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={26} />
            {siteConfig.ctas.reserveWhatsapp}
          </Button>
          <Button
            variant="instagram"
            size="md"
            shadowColor="#C13584"
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={26} />
            {siteConfig.ctas.viewInstagram}
          </Button>
        </div>

        <div className="mt-16 flex flex-col items-center gap-1 text-white/30 animate-bounce">
          <span className="text-xs font-black uppercase tracking-widest" style={NUNITO}>
            {heroContent.discoverMore}
          </span>
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}
