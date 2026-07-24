import type { BrandConfig } from "../types/site";

export const brandConfig: BrandConfig = {
  name: "El Rey Del Lápiz",
  claim: "El Artista Que Hace Reír A Todos",
  // Tintes de fondo de las tarjetas de galería (variaciones sutiles casi-negras).
  // Son datos decorativos, no tokens de identidad; por eso viven aquí y no en tokens.css.
  galleryCardTints: ["#1A1A1A", "#1E1814", "#14191E", "#1A1520", "#141E14", "#1E1A10"],
};
