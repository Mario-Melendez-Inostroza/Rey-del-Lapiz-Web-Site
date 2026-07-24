import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";

import { ComicBurst } from "../brand";
import { Button } from "../ui/Button";
import { brandConfig } from "../../config/brand";
import { siteConfig } from "../../config/site";
import { BANGERS, NUNITO } from "../../config/typography";
import { navigationItems } from "../../data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/96 backdrop-blur shadow-[0_4px_0_0_var(--color-primary)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2 group">
          <ComicBurst
            className="w-9 h-9 shrink-0 group-hover:rotate-12 transition-transform"
            color="var(--color-primary)"
            pts={8}
          />
          <span className="text-primary text-2xl md:text-3xl leading-none" style={BANGERS}>
            {brandConfig.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navigationItems.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white hover:text-primary transition-colors text-sm font-black uppercase tracking-wider"
              style={NUNITO}
            >
              {l.label}
            </a>
          ))}
          <Button
            variant="whatsapp"
            size="sm"
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
            {siteConfig.ctas.reserveShort}
          </Button>
        </nav>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t-4 border-primary px-6 py-6 flex flex-col gap-5">
          {navigationItems.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white text-2xl"
              style={BANGERS}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-whatsapp text-white font-black text-xl px-6 py-3 rounded-full border-4 border-ink"
            style={BANGERS}
          >
            <MessageCircle size={22} />
            {siteConfig.ctas.reserveWhatsapp}
          </a>
        </div>
      )}
    </header>
  );
}
