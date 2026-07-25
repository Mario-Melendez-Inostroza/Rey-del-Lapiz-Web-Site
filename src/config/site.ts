import type { SiteConfig } from "../types/site";

export const siteConfig: SiteConfig = {
  name: "El Rey Del Lápiz",
  slogan: "Caricaturas en vivo para eventos únicos.",
  locationLabel: "Artista de Caricaturas en Vivo",
  contact: {
    whatsapp: "https://wa.me/56950193025",
    instagram: "https://www.instagram.com/elreydellapiz/",
    tiktok: "https://www.tiktok.com/@elreydellapizoficial",
    phone: "+56 9 5019 3025",
    // TODO(content-pass): completar con los datos reales cuando estén.
    email: "",
    city: "[Tu Ciudad], Chile",
    address: "",
    hours: "",
  },
  ctas: {
    reserveShort: "Reservar",
    reserveWhatsapp: "Reservar Por WhatsApp",
    viewInstagram: "Ver Instagram",
    viewAllInstagram: "Ver Todas Las Fotos en Instagram",
    submitContact: "¡Enviar Consulta! 🎨",
  },
  footer: {
    copyright: "© 2026 El Rey Del Lápiz. Todos los derechos reservados.",
    description: ["Caricaturas en vivo para eventos únicos.", "Risas garantizadas."],
    navigationTitle: "Navegación",
    socialTitle: "Sígueme",
  },
};
