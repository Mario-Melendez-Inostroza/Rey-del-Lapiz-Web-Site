import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Star, ChevronDown, ChevronUp, Phone, Calendar, Users } from "lucide-react";

// ─── Decorative primitives ────────────────────────────────────────────────────

const BANGERS: React.CSSProperties = { fontFamily: "'Bangers', cursive", letterSpacing: "0.04em" };
const NUNITO: React.CSSProperties = { fontFamily: "'Nunito', sans-serif" };

function Halftone({ opacity = 0.08 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,196,0,1) 1.2px, transparent 1.2px)",
        backgroundSize: "22px 22px",
        opacity,
      }}
    />
  );
}

function Burst({
  className = "",
  color = "#FFC400",
  pts = 10,
}: {
  className?: string;
  color?: string;
  pts?: number;
}) {
  const points: string[] = [];
  for (let i = 0; i < pts * 2; i++) {
    const angle = (i * Math.PI) / pts - Math.PI / 2;
    const r = i % 2 === 0 ? 50 : 20;
    points.push(`${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`);
  }
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <polygon points={points.join(" ")} fill={color} stroke="#111" strokeWidth="2.5" />
    </svg>
  );
}

function ZigZagBorder({ top = true, color1 = "#FFC400", color2 = "#111" }: { top?: boolean; color1?: string; color2?: string }) {
  return (
    <div
      className={`absolute left-0 right-0 h-5 ${top ? "top-0" : "bottom-0"}`}
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${color1} 0px, ${color1} 20px, ${color2} 20px, ${color2} 40px)`,
      }}
    />
  );
}

// ─── Cartoon face SVGs ────────────────────────────────────────────────────────

function CaricatureFace({ v = 0, className = "" }: { v?: number; className?: string }) {
  const faceColors = ["#FFC400", "#FF3D00", "#00A8FF", "#00D26A", "#B744FF"];
  const hairColors = ["#222", "#6B2D1A", "#111", "#1A3A1A", "#330066"];
  const fc = faceColors[v % faceColors.length];
  const hc = hairColors[v % hairColors.length];

  const variants = [
    /* 0 – surprised spiky hair */
    <>
      <polygon points="18,30 32,6 44,28 60,8 76,28 88,6 102,30 82,22 60,16 38,22" fill={hc} />
      <ellipse cx="40" cy="66" rx="15" ry="17" fill="white" stroke="#111" strokeWidth="3" />
      <ellipse cx="80" cy="66" rx="15" ry="17" fill="white" stroke="#111" strokeWidth="3" />
      <circle cx="42" cy="68" r="9" fill="#222" />
      <circle cx="82" cy="68" r="9" fill="#222" />
      <circle cx="45" cy="64" r="3" fill="white" />
      <circle cx="85" cy="64" r="3" fill="white" />
      <ellipse cx="60" cy="95" rx="11" ry="9" fill="#111" />
      <ellipse cx="60" cy="95" rx="7" ry="6" fill="#CC2255" />
      <path d="M26 46 Q40 35 52 43" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M94 46 Q80 35 68 43" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
    </>,
    /* 1 – big laugh, curly */
    <>
      {[18,30,42,54,66,78,90,102].map((x, i) => (
        <ellipse key={i} cx={x} cy={16} rx={8} ry={12} fill={hc} />
      ))}
      <ellipse cx="60" cy="22" rx="48" ry="16" fill={hc} />
      <ellipse cx="38" cy="66" rx="16" ry="11" fill="white" stroke="#111" strokeWidth="3" />
      <ellipse cx="82" cy="66" rx="16" ry="11" fill="white" stroke="#111" strokeWidth="3" />
      <circle cx="40" cy="67" r="8" fill="#222" />
      <circle cx="84" cy="67" r="8" fill="#222" />
      <circle cx="43" cy="64" r="3" fill="white" />
      <circle cx="87" cy="64" r="3" fill="white" />
      <path d="M34 90 Q60 116 86 90 L83 82 Q60 104 37 82 Z" fill="#CC3300" stroke="#111" strokeWidth="2" />
      <path d="M38 90 Q60 108 82 90" fill="white" stroke="none" />
      <path d="M47 91 L73 91" stroke="#EEE" strokeWidth="3" />
      <path d="M28 47 Q42 38 54 45" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M92 47 Q78 38 66 45" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
    </>,
    /* 2 – glasses, wide grin */
    <>
      <rect x="10" y="8" width="100" height="26" rx="6" fill={hc} />
      <ellipse cx="40" cy="65" rx="14" ry="16" fill="white" stroke="#111" strokeWidth="2.5" />
      <ellipse cx="80" cy="65" rx="14" ry="16" fill="white" stroke="#111" strokeWidth="2.5" />
      <rect x="24" y="52" width="32" height="26" rx="11" fill="none" stroke="#111" strokeWidth="4" />
      <rect x="64" y="52" width="32" height="26" rx="11" fill="none" stroke="#111" strokeWidth="4" />
      <line x1="56" y1="65" x2="64" y2="65" stroke="#111" strokeWidth="4" />
      <circle cx="42" cy="67" r="7.5" fill="#1B5E20" />
      <circle cx="82" cy="67" r="7.5" fill="#1B5E20" />
      <circle cx="45" cy="64" r="2.5" fill="white" />
      <circle cx="85" cy="64" r="2.5" fill="white" />
      <path d="M30 91 Q60 116 90 91 L87 83 Q60 106 33 83 Z" fill="#CC3300" stroke="#111" strokeWidth="2" />
      <path d="M35 91 Q60 111 85 91" fill="white" stroke="none" />
      <path d="M45 92 L75 92" stroke="#DDD" strokeWidth="3" />
      <path d="M28 47 Q40 40 52 46" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M92 47 Q80 40 68 46" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
    </>,
    /* 3 – smirk, slick hair */
    <>
      <path d="M10,28 Q60,-2 110,28 L110,18 Q60,-12 10,18 Z" fill={hc} />
      <ellipse cx="40" cy="67" rx="14" ry="15" fill="white" stroke="#111" strokeWidth="3" />
      <ellipse cx="80" cy="67" rx="14" ry="15" fill="white" stroke="#111" strokeWidth="3" />
      <circle cx="42" cy="69" r="8" fill="#333" />
      <circle cx="82" cy="69" r="8" fill="#333" />
      <circle cx="45" cy="66" r="2.5" fill="white" />
      <circle cx="85" cy="66" r="2.5" fill="white" />
      <path d="M26 44 Q40 36 52 43" stroke={hc} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M94 40 Q80 35 68 41" stroke={hc} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M38 92 Q66 108 85 88" stroke="#111" strokeWidth="4" fill="none" strokeLinecap="round" />
    </>,
    /* 4 – open laugh, pigtails */
    <>
      <ellipse cx="60" cy="20" rx="46" ry="17" fill={hc} />
      <ellipse cx="30" cy="26" rx="14" ry="20" fill={hc} stroke="#111" strokeWidth="2" transform="rotate(-16 30 26)" />
      <ellipse cx="90" cy="26" rx="14" ry="20" fill={hc} stroke="#111" strokeWidth="2" transform="rotate(16 90 26)" />
      <ellipse cx="40" cy="63" rx="15" ry="18" fill="white" stroke="#111" strokeWidth="3" />
      <ellipse cx="80" cy="63" rx="15" ry="18" fill="white" stroke="#111" strokeWidth="3" />
      <circle cx="42" cy="65" r="9" fill="#333" />
      <circle cx="82" cy="65" r="9" fill="#333" />
      <circle cx="45" cy="61" r="3" fill="white" />
      <circle cx="85" cy="61" r="3" fill="white" />
      <path d="M34 90 Q60 118 86 90 L83 81 Q60 106 37 81 Z" fill="#CC3300" stroke="#111" strokeWidth="2" />
      <path d="M38 90 Q60 108 82 90" fill="white" stroke="none" />
      <path d="M44 91 L76 91" stroke="#EEE" strokeWidth="3" />
      <path d="M26 43 Q40 34 54 42" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M94 43 Q80 34 66 42" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
    </>,
  ];

  return (
    <svg viewBox="0 0 120 130" className={className} aria-hidden="true">
      <ellipse cx="60" cy="76" rx="50" ry="55" fill={fc} stroke="#111" strokeWidth="4" />
      <ellipse cx="10" cy="76" rx="8" ry="13" fill={fc} stroke="#111" strokeWidth="3" />
      <ellipse cx="110" cy="76" rx="8" ry="13" fill={fc} stroke="#111" strokeWidth="3" />
      {variants[v % variants.length]}
      <ellipse cx="26" cy="86" rx="9" ry="6" fill="rgba(255,80,80,0.28)" />
      <ellipse cx="94" cy="86" rx="9" ry="6" fill="rgba(255,80,80,0.28)" />
    </svg>
  );
}

function Bubble({
  text,
  bg = "white",
  fg = "#111",
  className = "",
}: {
  text: string;
  bg?: string;
  fg?: string;
  className?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className="px-4 py-2 rounded-2xl border-4 border-black text-sm leading-tight whitespace-nowrap"
        style={{ ...BANGERS, backgroundColor: bg, color: fg, fontSize: "1rem" }}
      >
        {text}
      </div>
      {/* tail: outer border triangle */}
      <div
        className="absolute left-5"
        style={{
          bottom: "-14px",
          width: 0,
          height: 0,
          borderLeft: "11px solid transparent",
          borderRight: "11px solid transparent",
          borderTop: "14px solid #111",
        }}
      />
      {/* tail: inner fill triangle */}
      <div
        className="absolute left-[22px]"
        style={{
          bottom: "-9px",
          width: 0,
          height: 0,
          borderLeft: "9px solid transparent",
          borderRight: "9px solid transparent",
          borderTop: `10px solid ${bg}`,
        }}
      />
    </div>
  );
}

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// ─── Nav ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#como-funciona", label: "Cómo Funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

function Navbar() {
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
          ? "bg-[#111111]/96 backdrop-blur shadow-[0_4px_0_0_#FFC400]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2 group">
          <Burst className="w-9 h-9 shrink-0 group-hover:rotate-12 transition-transform" color="#FFC400" pts={8} />
          <span className="text-[#FFC400] text-2xl md:text-3xl leading-none" style={BANGERS}>
            El Rey Del Lápiz
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white hover:text-[#FFC400] transition-colors text-sm font-black uppercase tracking-wider"
              style={NUNITO}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-black px-5 py-2.5 rounded-full border-[3px] border-[#111] shadow-[3px_3px_0_#111] hover:shadow-[1px_1px_0_#111] hover:translate-x-px hover:translate-y-px transition-all text-base"
            style={BANGERS}
          >
            <MessageCircle size={16} />
            Reservar
          </a>
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
        <div className="lg:hidden bg-[#111111] border-t-4 border-[#FFC400] px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
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
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-black text-xl px-6 py-3 rounded-full border-4 border-[#111]"
            style={BANGERS}
          >
            <MessageCircle size={22} />
            Reservar Por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      <Halftone opacity={0.1} />

      {/* Big background burst */}
      <Burst className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[140vw] opacity-[0.04]" color="#FFC400" pts={20} />

      {/* Floating caricatures — intentionally break into edges */}
      <div className="absolute top-16 left-0 md:left-8 w-32 md:w-52 -rotate-6 drop-shadow-2xl z-10">
        <CaricatureFace v={0} className="w-full" />
        <Bubble text="¡JAJAJA!" bg="#FFC400" className="absolute -top-14 left-2" />
      </div>

      <div className="absolute top-24 right-0 md:right-8 w-28 md:w-48 rotate-8 drop-shadow-2xl z-10">
        <CaricatureFace v={1} className="w-full" />
        <Bubble text="¡WOW!" bg="#FF3D00" fg="white" className="absolute -top-12 right-2" />
      </div>

      <div className="absolute bottom-16 left-4 md:left-20 w-24 md:w-40 rotate-6 drop-shadow-2xl z-10 hidden sm:block">
        <CaricatureFace v={2} className="w-full" />
      </div>

      <div className="absolute bottom-12 right-4 md:right-20 w-24 md:w-40 -rotate-6 drop-shadow-2xl z-10 hidden sm:block">
        <CaricatureFace v={3} className="w-full" />
        <Bubble text="¡RISAS!" bg="#00A8FF" fg="white" className="absolute -top-12 right-2" />
      </div>

      {/* Decorative bursts scattered */}
      <Burst className="absolute top-32 left-1/4 w-14 opacity-30 animate-spin" color="#FF3D00" pts={6} />
      <Burst className="absolute bottom-40 right-1/4 w-10 opacity-25" color="#00A8FF" pts={6} />
      <Burst className="absolute top-1/2 left-12 w-8 opacity-20" color="#00D26A" pts={6} />

      {/* Center content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6 pt-20">
        <div
          className="inline-flex items-center gap-2 bg-[#FFC400] text-[#111] font-black px-5 py-1.5 rounded-full border-4 border-[#111] mb-8 text-sm uppercase tracking-widest"
          style={NUNITO}
        >
          <Star size={13} fill="#111" />
          Artista de Caricaturas en Vivo · Chile
          <Star size={13} fill="#111" />
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl xl:text-[88px] text-white leading-[0.92] mb-8"
          style={{
            ...BANGERS,
            textShadow: "4px 4px 0 #FFC400, 7px 7px 0 rgba(0,0,0,0.4)",
          }}
        >
          ¡Convierte Tu Evento En Una{" "}
          <span
            className="text-[#FFC400]"
            style={{ textShadow: "4px 4px 0 #111, 7px 7px 0 rgba(0,0,0,0.5)" }}
          >
            Experiencia Llena De Risas!
          </span>
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-bold" style={NUNITO}>
          Caricaturas en vivo que hacen reír a todos tus invitados y crean
          recuerdos únicos. El show que todo evento necesita.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white text-xl px-9 py-4 rounded-full border-4 border-[#111] shadow-[6px_6px_0_#111] hover:shadow-[2px_2px_0_#111] hover:translate-x-1 hover:translate-y-1 transition-all"
            style={BANGERS}
          >
            <MessageCircle size={26} />
            Reservar Por WhatsApp
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white text-xl px-9 py-4 rounded-full border-4 border-[#111] shadow-[6px_6px_0_#C13584] hover:shadow-[2px_2px_0_#C13584] hover:translate-x-1 hover:translate-y-1 transition-all"
            style={{
              ...BANGERS,
              background: "linear-gradient(135deg, #FF3D00, #C13584, #833AB4)",
            }}
          >
            <InstagramIcon size={26} />
            Ver Instagram
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center gap-1 text-white/30 animate-bounce">
          <span className="text-xs font-black uppercase tracking-widest" style={NUNITO}>Descubre más</span>
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section className="relative bg-[#FFC400] py-28 overflow-hidden">
      <Halftone opacity={0.18} />
      <ZigZagBorder top color1="#FFC400" color2="#111" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Photo card — oversized, tilted, breaking frame */}
          <div className="flex justify-center relative">
            <div
              className="relative w-64 md:w-80 h-[380px] md:h-[450px] bg-[#111] rounded-3xl border-8 border-[#111] shadow-[14px_14px_0_#111] overflow-hidden"
              style={{ transform: "rotate(-4deg) translateY(-24px)" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 gap-4">
                <svg width="72" height="72" viewBox="0 0 100 100" aria-hidden="true">
                  <circle cx="50" cy="36" r="22" fill="currentColor" />
                  <ellipse cx="50" cy="84" rx="32" ry="24" fill="currentColor" />
                </svg>
                <span className="text-xs font-black tracking-widest uppercase text-center px-4" style={NUNITO}>
                  Foto del Artista
                </span>
              </div>
              {/* halftone in card */}
              <Halftone opacity={0.06} />
            </div>

            {/* Caricatures breaking out of the photo edges */}
            <div className="absolute -top-10 -right-6 w-36 rotate-12 drop-shadow-2xl z-20">
              <CaricatureFace v={4} className="w-full" />
            </div>
            <div className="absolute -bottom-8 -left-6 w-28 -rotate-8 drop-shadow-2xl z-20">
              <CaricatureFace v={1} className="w-full" />
            </div>

            <Burst className="absolute top-4 right-10 w-12 z-10" color="#FF3D00" pts={8} />
            <Burst className="absolute bottom-16 left-4 w-10 z-10" color="#00A8FF" pts={8} />
          </div>

          {/* Text */}
          <div>
            <Bubble text="¡Hola! Soy El Rey Del Lápiz" bg="#111" fg="#FFC400" className="mb-8" />

            <h2
              className="text-5xl md:text-6xl text-[#111] mb-6 leading-none"
              style={{ ...BANGERS, textShadow: "3px 3px 0 rgba(0,0,0,0.15)" }}
            >
              El Artista Que Hace Reír A Todos
            </h2>

            <p className="text-[#111]/75 text-lg font-bold mb-4 leading-relaxed" style={NUNITO}>
              [Agrega aquí tu historia y presentación personal. Cuéntale a tus
              clientes quién eres, de dónde vienes y qué te apasiona de las
              caricaturas en vivo.]
            </p>
            <p className="text-[#111]/60 text-base font-semibold mb-10 leading-relaxed" style={NUNITO}>
              [Comparte tu trayectoria, tu estilo único y tu misión: transformar
              cada evento en una experiencia llena de humor, arte y recuerdos
              inolvidables para todos los invitados.]
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { label: "+[X] Eventos", bg: "#111", fg: "#FFC400" },
                { label: "+[X] Caricaturas", bg: "white", fg: "#111" },
                { label: "[X] Años Exp.", bg: "#FF3D00", fg: "white" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="font-black text-lg px-5 py-3 rounded-xl border-4 border-[#111] shadow-[4px_4px_0_#111]"
                  style={{ ...BANGERS, backgroundColor: badge.bg, color: badge.fg }}
                >
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ZigZagBorder top={false} color1="#FFC400" color2="#111" />
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

const SERVICES = [
  { title: "Matrimonios", desc: "La sorpresa perfecta para novios e invitados. Risas y recuerdos únicos en tu gran día.", color: "#FF3D00", v: 0 },
  { title: "Cumpleaños", desc: "El entretenimiento más original para celebrar con humor y mucho estilo.", color: "#00A8FF", v: 1 },
  { title: "Corporativos", desc: "Team building diferente. Rompe el hielo y conecta a todos en la empresa con caricaturas.", color: "#00D26A", v: 2 },
  { title: "Graduaciones", desc: "Celebra el logro con una caricatura única que capture la esencia de cada egresado.", color: "#B744FF", v: 3 },
  { title: "Ferias y Expos", desc: "Atrae visitantes a tu stand con el poder irresistible de las caricaturas en vivo.", color: "#FF8C00", v: 4 },
  { title: "Fiestas Privadas", desc: "Cualquier celebración se transforma con el arte y el humor del Rey Del Lápiz.", color: "#FF006E", v: 0 },
];

function Services() {
  return (
    <section id="servicios" className="relative bg-[#111111] py-28 overflow-hidden">
      <Halftone opacity={0.07} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <Burst className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 opacity-[0.06]" color="#FFC400" pts={20} />
          <span
            className="inline-block bg-[#FFC400] text-[#111] font-black px-4 py-1 text-xs rounded-full border-4 border-[#111] uppercase tracking-widest mb-5"
            style={NUNITO}
          >
            ¿Qué ofrezco?
          </span>
          <h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ ...BANGERS, textShadow: "4px 4px 0 #FFC400" }}
          >
            Servicios
          </h2>
          <p className="text-white/50 text-lg font-bold max-w-xl mx-auto" style={NUNITO}>
            Caricaturas en vivo para cada tipo de evento. ¡El entretenimiento que
            todos recordarán!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className="relative bg-[#1a1a1a] border-4 border-[#333] rounded-3xl overflow-visible shadow-[8px_8px_0_#FFC400] hover:shadow-[3px_3px_0_#FFC400] hover:translate-x-1.5 hover:translate-y-1.5 transition-all group"
            >
              {/* Colored header */}
              <div
                className="h-36 rounded-t-2xl flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: svc.color }}
              >
                <Halftone opacity={0.2} />
                <Burst className="absolute top-2 right-2 w-10 opacity-50" color="white" pts={6} />
                <Burst className="absolute bottom-1 left-2 w-7 opacity-30" color="#111" pts={6} />
              </div>

              {/* Caricature breaking out */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-28 drop-shadow-2xl z-20 group-hover:-translate-y-2 transition-transform" style={{ top: "72px" }}>
                <CaricatureFace v={svc.v} className="w-full" />
              </div>

              <div className="pt-16 pb-7 px-6 text-center">
                <h3
                  className="text-3xl text-white mb-2"
                  style={{ ...BANGERS, textShadow: `2px 2px 0 ${svc.color}` }}
                >
                  {svc.title}
                </h3>
                <p className="text-white/55 font-semibold text-sm leading-relaxed" style={NUNITO}>
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

const GALLERY = [
  { h: "h-56", label: "Caricatura en vivo · Matrimonio" },
  { h: "h-40", label: "Invitada con su caricatura" },
  { h: "h-64", label: "Momento de risa pura" },
  { h: "h-72", label: "El artista en plena acción" },
  { h: "h-44", label: "Equipo corporativo feliz" },
  { h: "h-56", label: "Caricatura grupal" },
  { h: "h-40", label: "Cumpleaños original" },
  { h: "h-80", label: "Proceso de dibujo en vivo" },
  { h: "h-52", label: "Graduación especial" },
  { h: "h-40", label: "Feria y exposición" },
  { h: "h-64", label: "Familia con su recuerdo" },
  { h: "h-48", label: "Caricatura terminada" },
];

const CARD_TINTS = ["#1A1A1A", "#1E1814", "#14191E", "#1A1520", "#141E14", "#1E1A10"];

function Gallery() {
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
            Mis trabajos
          </span>
          <h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ ...BANGERS, textShadow: "4px 4px 0 #FF3D00" }}
          >
            Galería
          </h2>
          <p className="text-white/50 text-lg font-bold max-w-xl mx-auto" style={NUNITO}>
            Momentos reales. Caras reales. Risas reales. ¡Así se vive el show!
          </p>
        </div>

        {/* CSS columns masonry */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-gap:1rem]">
          {GALLERY.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-4 rounded-2xl border-4 border-[#333] overflow-hidden group hover:border-[#FFC400] transition-all cursor-pointer"
              style={{ backgroundColor: CARD_TINTS[i % CARD_TINTS.length] }}
            >
              <div className={`${item.h} relative flex flex-col items-center justify-center gap-3 text-white/15 p-4`}>
                <svg width="38" height="38" viewBox="0 0 100 100" aria-hidden="true">
                  <circle cx="50" cy="36" r="20" fill="currentColor" />
                  <ellipse cx="50" cy="82" rx="30" ry="22" fill="currentColor" />
                </svg>
                <span className="text-[10px] font-black tracking-widest uppercase text-center leading-tight" style={NUNITO}>
                  {item.label}
                </span>

                {/* Comic burst on alternating items */}
                {i % 3 === 0 && (
                  <Burst className="absolute top-2 right-2 w-8 opacity-30" color="#FFC400" pts={6} />
                )}

                {/* Hover overlay */}
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
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white text-xl px-10 py-4 rounded-full border-4 border-[#111] shadow-[6px_6px_0_#B744FF] hover:shadow-[2px_2px_0_#B744FF] hover:translate-x-1 hover:translate-y-1 transition-all"
            style={{
              ...BANGERS,
              background: "linear-gradient(135deg, #FF3D00, #C13584, #833AB4)",
            }}
          >
            <InstagramIcon size={26} />
            Ver Todas Las Fotos en Instagram
          </a>
        </div>
      </div>

      <ZigZagBorder top={false} />
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const STEPS = [
  { num: "01", title: "Contacto", desc: "Escríbeme por WhatsApp o Instagram. Cuéntame sobre tu evento, la fecha y cuántos invitados tienes.", color: "#FFC400", fg: "#111", Icon: Phone },
  { num: "02", title: "Reserva", desc: "Acordamos los detalles, el horario y el precio. Confirmamos tu reserva de forma rápida y fácil.", color: "#FF3D00", fg: "white", Icon: Calendar },
  { num: "03", title: "Show En Vivo", desc: "El día del evento llego, me instalo y empiezo a crear caricaturas únicas en tiempo real para todos.", color: "#00A8FF", fg: "white", Icon: Star },
  { num: "04", title: "Recuerdo Único", desc: "Cada invitado se lleva a casa su caricatura personalizada como recuerdo especial e irrepetible.", color: "#00D26A", fg: "#111", Icon: Users },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-[#111111] py-28 overflow-hidden">
      <Halftone opacity={0.07} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="inline-block bg-[#00A8FF] text-white font-black px-4 py-1 text-xs rounded-full border-4 border-[#111] uppercase tracking-widest mb-5"
            style={NUNITO}
          >
            Súper fácil
          </span>
          <h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ ...BANGERS, textShadow: "4px 4px 0 #00A8FF" }}
          >
            ¿Cómo Funciona?
          </h2>
          <p className="text-white/50 text-lg font-bold max-w-xl mx-auto" style={NUNITO}>
            4 simples pasos para tener el mejor entretenimiento en tu evento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, i) => (
            <div key={i} className="relative group">
              {/* Dotted connector (desktop only) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(100%-8px)] w-full h-1 z-0"
                  style={{
                    background: `repeating-linear-gradient(90deg, ${step.color} 0, ${step.color} 10px, transparent 10px, transparent 20px)`,
                  }}
                />
              )}

              <div className="relative z-10 rounded-3xl border-4 border-[#333] bg-[#1a1a1a] p-6 text-center hover:border-[#FFC400] hover:-translate-y-2 transition-all shadow-[4px_4px_0_#333] hover:shadow-[4px_4px_0_#FFC400]">
                {/* Number circle */}
                <div
                  className="w-20 h-20 rounded-full border-4 border-[#111] flex items-center justify-center mx-auto mb-5 shadow-[4px_4px_0_#111]"
                  style={{ backgroundColor: step.color }}
                >
                  <span className="text-3xl" style={{ ...BANGERS, color: step.fg }}>
                    {step.num}
                  </span>
                </div>

                <h3
                  className="text-2xl text-white mb-3"
                  style={{ ...BANGERS, textShadow: `2px 2px 0 ${step.color}` }}
                >
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm font-semibold leading-relaxed" style={NUNITO}>
                  {step.desc}
                </p>

                {/* Caricature peeking on step 3 */}
                {i === 2 && (
                  <div className="absolute -bottom-8 -right-5 w-14 drop-shadow-xl z-20 rotate-12">
                    <CaricatureFace v={2} className="w-full" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "¿Cuánto tiempo antes necesito reservar?",
    a: "Se recomienda reservar con al menos [X] semanas de anticipación para asegurar disponibilidad, especialmente en temporada alta (diciembre, marzo, octubre).",
  },
  {
    q: "¿Cuántas caricaturas puedes realizar por hora?",
    a: "Dependiendo del nivel de detalle, puedo realizar entre [X] y [X] caricaturas por hora. Podemos ajustar el estilo según el número de invitados y la duración del evento.",
  },
  {
    q: "¿Qué necesitas para instalarte en el evento?",
    a: "Solo necesito un espacio de aproximadamente [X]m², buena iluminación y una mesa. Todo el material lo traigo yo. ¡No te preocupes por nada más!",
  },
  {
    q: "¿Haces caricaturas digitales también?",
    a: "Sí, ofrezco caricaturas tradicionales en papel y también versiones digitales con impresión instantánea. Consulta disponibilidad y opciones según tu evento.",
  },
  {
    q: "¿Cuál es tu área de cobertura en Chile?",
    a: "Trabajo principalmente en [tu ciudad/región]. Para eventos en otras ciudades o regiones, contáctame y conversamos las opciones de traslado.",
  },
  {
    q: "¿Puedes hacer caricaturas de grupos o solo individuales?",
    a: "Principalmente realizo caricaturas individuales o en parejas, pero también tengo opciones para grupos pequeños. Cuéntame los detalles de tu evento y te preparo una propuesta personalizada.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-[#FFC400] py-28 overflow-hidden">
      <Halftone opacity={0.18} />
      <ZigZagBorder top />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <Burst className="inline-block w-20 mb-4" color="#111" pts={10} />
          <h2 className="text-5xl md:text-7xl text-[#111] mb-4" style={BANGERS}>
            Preguntas Frecuentes
          </h2>
          <p className="text-[#111]/65 text-lg font-bold" style={NUNITO}>
            Todo lo que necesitas saber antes de reservar.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => (
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

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const inputClass =
    "w-full bg-[#111] border-2 border-[#444] rounded-xl px-4 py-3 text-white placeholder-white/25 font-semibold focus:border-[#FFC400] focus:outline-none transition-colors";

  return (
    <section id="contacto" className="relative bg-[#111111] py-28 overflow-hidden">
      <Halftone opacity={0.07} />

      {/* Decorative side caricatures */}
      <div className="absolute left-0 bottom-32 w-28 opacity-30 -rotate-8 hidden lg:block">
        <CaricatureFace v={0} className="w-full" />
      </div>
      <div className="absolute right-0 top-32 w-28 opacity-30 rotate-8 hidden lg:block">
        <CaricatureFace v={3} className="w-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span
            className="inline-block bg-[#25D366] text-white font-black px-4 py-1 text-xs rounded-full border-4 border-[#111] uppercase tracking-widest mb-5"
            style={NUNITO}
          >
            ¡Reserva aquí!
          </span>
          <h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ ...BANGERS, textShadow: "4px 4px 0 #25D366" }}
          >
            Contacto
          </h2>
          <p className="text-white/50 text-lg font-bold" style={NUNITO}>
            Cuéntame sobre tu evento y te preparo una propuesta personalizada.
          </p>
        </div>

        {/* Big social CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white text-2xl px-10 py-5 rounded-2xl border-4 border-[#111] shadow-[8px_8px_0_#FFC400] hover:shadow-[2px_2px_0_#FFC400] hover:translate-x-1.5 hover:translate-y-1.5 transition-all"
            style={BANGERS}
          >
            <MessageCircle size={32} />
            Reservar Por WhatsApp
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-white text-2xl px-10 py-5 rounded-2xl border-4 border-[#111] shadow-[8px_8px_0_#B744FF] hover:shadow-[2px_2px_0_#B744FF] hover:translate-x-1.5 hover:translate-y-1.5 transition-all"
            style={{
              ...BANGERS,
              background: "linear-gradient(135deg, #FF3D00, #C13584, #833AB4)",
            }}
          >
            <InstagramIcon size={32} />
            Ver Instagram
          </a>
        </div>

        {/* Form */}
        <form
          className="bg-[#1a1a1a] border-4 border-[#333] rounded-3xl p-8 md:p-10 shadow-[10px_10px_0_#FFC400]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
                Nombre *
              </label>
              <input type="text" placeholder="Tu nombre completo" className={inputClass} style={NUNITO} />
            </div>
            <div>
              <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
                Correo *
              </label>
              <input type="email" placeholder="tu@correo.com" className={inputClass} style={NUNITO} />
            </div>
            <div>
              <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
                Teléfono
              </label>
              <input type="tel" placeholder="+56 9 XXXX XXXX" className={inputClass} style={NUNITO} />
            </div>
            <div>
              <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
                Tipo de Evento *
              </label>
              <select className={inputClass} style={NUNITO} defaultValue="">
                <option value="" disabled>Selecciona un tipo...</option>
                <option>Matrimonio</option>
                <option>Cumpleaños</option>
                <option>Evento Corporativo</option>
                <option>Graduación</option>
                <option>Feria / Exposición</option>
                <option>Fiesta Privada</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
                Fecha del Evento
              </label>
              <input type="date" className={inputClass} style={NUNITO} />
            </div>
            <div>
              <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
                N° de Invitados
              </label>
              <input type="number" placeholder="Aprox. cuántos asistentes" className={inputClass} style={NUNITO} />
            </div>
          </div>
          <div className="mb-7">
            <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
              Mensaje
            </label>
            <textarea
              rows={4}
              placeholder="Cuéntame más sobre tu evento, lugar, horario y cualquier requerimiento especial..."
              className={`${inputClass} resize-none`}
              style={NUNITO}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FFC400] text-[#111] text-2xl py-4 rounded-2xl border-4 border-[#111] shadow-[6px_6px_0_#111] hover:shadow-[2px_2px_0_#111] hover:translate-x-1 hover:translate-y-1 transition-all font-black"
            style={BANGERS}
          >
            ¡Enviar Consulta! 🎨
          </button>
        </form>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t-8 border-[#FFC400] py-14 overflow-hidden">
      <Halftone opacity={0.04} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Burst className="w-10 h-10 shrink-0" color="#FFC400" pts={8} />
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
          {/* Mini caricature parade */}
          <div className="flex gap-2 items-center">
            {[0, 1, 2, 3, 4].map((v) => (
              <div key={v} className="w-8 h-8 opacity-35 hover:opacity-70 transition-opacity hover:scale-125 transition-transform">
                <CaricatureFace v={v} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-[#111111] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
