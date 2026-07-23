import type { SEOConfig } from "../types/site";

export const seoConfig: SEOConfig = {
  title: "El Rey Del Lápiz — Caricaturas en Vivo para Eventos | Chile",
  description:
    "Caricaturista en vivo para matrimonios, cumpleaños, eventos corporativos y fiestas en Chile. Risas y recuerdos únicos en cada trazo.",
  // Configurable en el despliegue: dominio real del sitio (p. ej. "https://tudominio.cl/").
  // Se deja vacío a propósito hasta que exista el dominio; SeoJsonLd omite `url` mientras esté vacío.
  canonicalUrl: "",
  openGraph: {
    title: "El Rey Del Lápiz — Caricaturas en Vivo para Eventos",
    description:
      "El artista que hace reír a todos. Caricaturas en vivo para eventos únicos en Chile.",
    image: "",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Rey Del Lápiz — Caricaturas en Vivo para Eventos",
    description:
      "El artista que hace reír a todos. Caricaturas en vivo para eventos únicos en Chile.",
    image: "",
  },
};
