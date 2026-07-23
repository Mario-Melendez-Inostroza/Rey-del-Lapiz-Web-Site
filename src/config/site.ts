import type { SiteConfig } from "../types/site";

export const siteConfig: SiteConfig = {
  name: "El Rey Del Lápiz",
  slogan: "Caricaturas en vivo para eventos únicos.",
  locationLabel: "Artista de Caricaturas en Vivo · Chile",
  contact: {
    // TODO(content-pass): valores placeholder — completar con los datos reales.
    // whatsapp: URL wa.me con código de país, p. ej. "https://wa.me/569XXXXXXXX".
    // instagram: URL con el handle real, p. ej. "https://instagram.com/tuusuario".
    // El formulario, los CTAs y el JSON-LD ya funcionan y se completan solos al rellenarlos.
    whatsapp: "https://wa.me/",
    instagram: "https://instagram.com/",
    email: "",
    city: "[Tu Ciudad], Chile",
    address: "",
    hours: "",
    phone: "",
  },
  ctas: {
    reserveShort: "Reservar",
    reserveWhatsapp: "Reservar Por WhatsApp",
    viewInstagram: "Ver Instagram",
    viewAllInstagram: "Ver Todas Las Fotos en Instagram",
    submitContact: "¡Enviar Consulta! 🎨",
  },
  footer: {
    copyright: "© 2025 El Rey Del Lápiz. Todos los derechos reservados.",
    description: ["Caricaturas en vivo para eventos únicos.", "Risas garantizadas en cada trazo."],
    navigationTitle: "Navegación",
    socialTitle: "Sígueme",
  },
};
