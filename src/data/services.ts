import { Briefcase, Cake, Gem, GraduationCap, PartyPopper, Store } from "lucide-react";

import type { Service, ServiceShowcase } from "../types/site";

/**
 * Servicios ofrecidos. `color` es contenido del cliente (identidad de cada tipo de evento),
 * por eso vive aquí y no en `tokens.css`. `shout` es la onomatopeya de cómic del sticker:
 * corta, en mayúsculas y con signos, para que quepa en una línea dentro de la card.
 */
export const services: Service[] = [
  {
    title: "Matrimonios",
    desc: "La sorpresa perfecta para novios e invitados. Risas y recuerdos únicos en tu gran día.",
    color: "#FF3D00",
    Icon: Gem,
    shout: "¡Sí, acepto!",
  },
  {
    title: "Cumpleaños",
    desc: "El entretenimiento más original para celebrar con humor y mucho estilo.",
    color: "#00A8FF",
    Icon: Cake,
    shout: "¡Pide un deseo!",
  },
  {
    title: "Corporativos",
    desc: "Team building diferente. Rompe el hielo y conecta a todos en la empresa con caricaturas.",
    color: "#00D26A",
    Icon: Briefcase,
    shout: "¡Pausa activa!",
  },
  {
    title: "Graduaciones",
    desc: "Celebra el logro con una caricatura única que capture la esencia de cada egresado.",
    color: "#B744FF",
    Icon: GraduationCap,
    shout: "¡Lo logré!",
  },
  {
    title: "Ferias y Expos",
    desc: "Atrae visitantes a tu stand con el poder irresistible de las caricaturas en vivo.",
    color: "#FF8C00",
    Icon: Store,
    shout: "¡Pase y vea!",
  },
  {
    title: "Fiestas Privadas",
    desc: "Cualquier celebración se transforma con el arte y el humor del Rey Del Lápiz.",
    color: "#FF006E",
    Icon: PartyPopper,
    shout: "¡Que no pare!",
  },
];

/**
 * Video vitrina junto a las tarjetas. Versión web del máster (fuera de `public/`, en
 * `raw-assets/videos/`): 720×954, H.264 sin audio (el sitio lo reproduce en silencio) y con
 * el índice al inicio (faststart). Aun así `ServiceShowcase` lo carga en diferido: el `src`
 * se asigna recién cuando el marco entra en vista, nunca en la carga inicial de la página.
 * `w`/`h` son las del archivo servido: fijan el aspect-ratio exacto del marco.
 */
export const servicesShowcase: ServiceShowcase = {
  src: "/videos/lv_0_20260901063213-web.mp4",
  w: 720,
  h: 954,
  label: "El Rey Del Lápiz dibujando caricaturas en vivo en bodas, cumpleaños, teatros y terrazas",
  sticker: "🔥 ¡Mira en acción!",
};
