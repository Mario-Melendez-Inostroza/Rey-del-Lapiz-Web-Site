import { Halftone, InstagramIcon, TikTokIcon, WhatsAppIcon } from "../brand";
import { logoConfig } from "../../config/logo";
import { siteConfig } from "../../config/site";
import { socialLinks } from "../../config/social";
import { BANGERS, NUNITO } from "../../config/typography";
import { navigationItems } from "../../data";

const whatsappLink = socialLinks.find((link) => link.id === "whatsapp")!;
const instagramLink = socialLinks.find((link) => link.id === "instagram")!;
const tiktokLink = socialLinks.find((link) => link.id === "tiktok")!;

export function Footer() {
  return (
    <footer className="relative bg-surface-deep border-t-8 border-primary py-14 overflow-hidden">
      <Halftone opacity={0.04} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <img src={logoConfig.full} alt={logoConfig.alt} className="w-40 h-auto mb-4" />
            <p className="text-white/40 text-sm font-semibold leading-relaxed" style={NUNITO}>
              {siteConfig.footer.description[0]}
              <br />
              {siteConfig.footer.description[1]}
            </p>
          </div>

          <div>
            <h4 className="text-primary font-black mb-5 text-xl" style={BANGERS}>
              {siteConfig.footer.navigationTitle}
            </h4>
            <div className="flex flex-col gap-2">
              {navigationItems.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/40 hover:text-primary font-bold text-sm transition-colors"
                  style={NUNITO}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-primary font-black mb-5 text-xl" style={BANGERS}>
              {siteConfig.footer.socialTitle}
            </h4>
            <div className="flex gap-3">
              <a
                href={whatsappLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-whatsapp text-white border-2 border-border rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-[3px_3px_0_var(--color-border)]"
                aria-label={whatsappLink.ariaLabel}
              >
                <WhatsAppIcon size={20} />
              </a>
              <a
                href={instagramLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-border rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-[3px_3px_0_var(--color-border)] text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent), var(--color-instagram-mid))",
                }}
                aria-label={instagramLink.ariaLabel}
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={tiktokLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-ink border-2 border-border rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-[3px_3px_0_var(--color-border)]"
                aria-label={tiktokLink.ariaLabel}
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex items-center justify-center">
          <p className="text-white/25 text-xs font-semibold" style={NUNITO}>
            {siteConfig.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
