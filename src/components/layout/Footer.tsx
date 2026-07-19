import { MessageCircle } from "lucide-react";

import { ComicBurst, DecorativeFace, Halftone, InstagramIcon } from "../brand";
import { BANGERS, NUNITO } from "../../config/typography";
import { NAV_LINKS } from "../../data/site";

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t-8 border-[#FFC400] py-14 overflow-hidden">
      <Halftone opacity={0.04} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ComicBurst className="w-10 h-10 shrink-0" color="#FFC400" pts={8} />
              <span className="text-[#FFC400] text-3xl leading-none" style={BANGERS}>
                El Rey Del Lápiz
              </span>
            </div>
            <p className="text-white/40 text-sm font-semibold leading-relaxed" style={NUNITO}>
              Caricaturas en vivo para eventos únicos.
              <br />
              Risas garantizadas en cada trazo.
            </p>
          </div>

          <div>
            <h4 className="text-[#FFC400] font-black mb-5 text-xl" style={BANGERS}>
              Navegación
            </h4>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/40 hover:text-[#FFC400] font-bold text-sm transition-colors"
                  style={NUNITO}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#FFC400] font-black mb-5 text-xl" style={BANGERS}>
              Sígueme
            </h4>
            <div className="flex gap-3 mb-5">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#25D366] border-2 border-[#333] rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-[3px_3px_0_#333]"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} className="text-white" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#333] rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-[3px_3px_0_#333] text-white"
                style={{ background: "linear-gradient(135deg, #FF3D00, #C13584)" }}
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
            <p className="text-white/30 text-xs font-semibold" style={NUNITO}>
              [Tu Ciudad], Chile
            </p>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-semibold" style={NUNITO}>
            © 2025 El Rey Del Lápiz. Todos los derechos reservados.
          </p>
          <div className="flex gap-2 items-center">
            {[0, 1, 2, 3, 4].map((v) => (
              <div key={v} className="w-8 h-8 opacity-35 hover:opacity-70 transition-opacity hover:scale-125 transition-transform">
                <DecorativeFace v={v} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
