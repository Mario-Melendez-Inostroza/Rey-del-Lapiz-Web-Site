import type { CSSProperties } from "react";

/**
 * Envoltorios de estilo para consumir las fuentes de marca vía `style={...}`.
 * Los VALORES viven en `styles/tokens.css` (`--font-*`, `--tracking-*`); aquí solo
 * se referencian, así que no son una segunda fuente de verdad.
 *
 * SIMPLIFICACIÓN FUTURA (T2): si estos objetos terminan siendo únicamente un wrapper
 * de variables CSS, se pueden eliminar y consumir las utilidades `font-display` /
 * `font-body` de Tailwind directamente en los componentes. Se mantienen por ahora
 * para no tocar los ~66 usos de `style={BANGERS/NUNITO}`.
 */
export const BANGERS: CSSProperties = {
  fontFamily: "var(--font-display)",
  letterSpacing: "var(--tracking-display)",
};

export const NUNITO: CSSProperties = {
  fontFamily: "var(--font-body)",
};
