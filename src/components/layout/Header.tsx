import { useState } from "react";
import { Menu, X } from "lucide-react";

import { WhatsAppIcon } from "../brand";
import { Button } from "../ui/Button";
import { logoConfig } from "../../config/logo";
import { siteConfig } from "../../config/site";
import { BANGERS, NUNITO } from "../../config/typography";
import { navigationItems } from "../../data";
import { useScrolled } from "../../hooks/useScrolled";
import { useScrollSpy } from "../../hooks/useScrollSpy";

// Referencia estable para el observer del scroll-spy (los `id` de cada sección del nav).
const navIds = navigationItems.map((l) => l.href.slice(1));

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(50);
  const activeId = useScrollSpy(navIds);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/96 backdrop-blur shadow-[0_4px_0_0_var(--color-primary)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center group">
          <img
            src={logoConfig.horizontal}
            alt={logoConfig.alt}
            width={400}
            height={200}
            className="h-14 md:h-16 w-auto group-hover:scale-105 transition-transform"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navigationItems.map((l) => {
            const active = l.href.slice(1) === activeId;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={active ? "location" : undefined}
                className={`transition-colors text-sm font-black uppercase tracking-wider ${
                  active
                    ? "text-primary underline decoration-2 underline-offset-8"
                    : "text-white hover:text-primary"
                }`}
                style={NUNITO}
              >
                {l.label}
              </a>
            );
          })}
          <Button
            variant="whatsapp"
            size="sm"
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={16} />
            {siteConfig.ctas.reserveShort}
          </Button>
        </nav>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-ink border-t-4 border-primary px-6 py-6 flex flex-col gap-5"
        >
          {navigationItems.map((l) => {
            const active = l.href.slice(1) === activeId;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={active ? "location" : undefined}
                className={`text-2xl ${active ? "text-primary" : "text-white"}`}
                style={BANGERS}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-whatsapp text-white font-black text-xl px-6 py-3 rounded-full border-4 border-ink"
            style={BANGERS}
          >
            <WhatsAppIcon size={22} />
            {siteConfig.ctas.reserveWhatsapp}
          </a>
        </div>
      )}
    </header>
  );
}
