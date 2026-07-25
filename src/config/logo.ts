import type { LogoConfig } from "../types/site";

/**
 * Rutas de las variantes del logo de marca. ÚNICA fuente de verdad: los componentes
 * consumen `logoConfig`, nunca rutas hardcodeadas, para poder reemplazar los archivos
 * (p. ej. por SVG / PNG transparentes) cambiando solo estas rutas.
 *
 * Los assets viven en `public/images/logo/` y se sirven en `/images/logo/...`.
 */
export const logoConfig: LogoConfig = {
  full: "/images/logo/logo-full.webp",
  horizontal: "/images/logo/logo-horizontal.webp",
  symbol: "/images/logo/logo-symbol.png",
  favicon: "/images/logo/favicon.png",
  alt: "El Rey del Lápiz",
};
