import type { CSSProperties, ReactNode } from "react";

import { BANGERS, NUNITO } from "../../config/typography";

type SectionHeaderProps = {
  /** Píldora superior. Si se omite, no se renderiza (caso FAQ, que usa una decoración). */
  eyebrow?: string;
  title: string;
  description?: string;
  /** Color de acento: relleno de la píldora y sombra dura del título. */
  accent?: string;
  /** Color del texto de la píldora; debe contrastar con `accent`. */
  eyebrowTone?: "ink" | "white";
  /** `dark` = sobre fondos ink/surface (texto blanco). `light` = sobre bg-primary (texto ink). */
  tone?: "dark" | "light";
  /** Utilidades extra del contenedor (normalmente el margen inferior). */
  className?: string;
  /** Decoración de fondo opcional (p. ej. un `ComicBurst` posicionado). */
  children?: ReactNode;
};

/**
 * Encabezado de sección: píldora + título display con sombra dura + bajada.
 *
 * Extraído porque la misma estructura se repetía literal en cinco secciones
 * (Servicios, Galería, Proceso, Contacto y, con variantes, FAQ). Lo único que
 * cambiaba era el color de acento y el tono del fondo, así que eso son props y
 * el resto queda fijo — incluido el ancho de la bajada, ahora consistente.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  accent = "var(--color-primary)",
  eyebrowTone = "white",
  tone = "dark",
  className,
  children,
}: SectionHeaderProps) {
  const light = tone === "light";

  return (
    <div className={`text-center relative${className ? ` ${className}` : ""}`}>
      {children}

      {eyebrow ? (
        <span
          className={`inline-block font-black px-4 py-1 text-xs rounded-full border-4 border-ink uppercase tracking-widest mb-5 ${
            eyebrowTone === "ink" ? "text-ink" : "text-white"
          }`}
          style={{ ...NUNITO, backgroundColor: accent } as CSSProperties}
        >
          {eyebrow}
        </span>
      ) : null}

      <h2
        className={`text-5xl md:text-7xl mb-4 ${light ? "text-ink" : "text-white"}`}
        style={light ? BANGERS : { ...BANGERS, textShadow: `4px 4px 0 ${accent}` }}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`text-lg font-bold max-w-xl mx-auto ${light ? "text-ink/65" : "text-white/50"}`}
          style={NUNITO}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
