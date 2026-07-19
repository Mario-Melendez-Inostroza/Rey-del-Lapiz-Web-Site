import { Calendar, Phone, Star, Users } from "lucide-react";

export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#como-funciona", label: "Cómo Funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export const SERVICES = [
  { title: "Matrimonios", desc: "La sorpresa perfecta para novios e invitados. Risas y recuerdos únicos en tu gran día.", color: "#FF3D00", v: 0 },
  { title: "Cumpleaños", desc: "El entretenimiento más original para celebrar con humor y mucho estilo.", color: "#00A8FF", v: 1 },
  { title: "Corporativos", desc: "Team building diferente. Rompe el hielo y conecta a todos en la empresa con caricaturas.", color: "#00D26A", v: 2 },
  { title: "Graduaciones", desc: "Celebra el logro con una caricatura única que capture la esencia de cada egresado.", color: "#B744FF", v: 3 },
  { title: "Ferias y Expos", desc: "Atrae visitantes a tu stand con el poder irresistible de las caricaturas en vivo.", color: "#FF8C00", v: 4 },
  { title: "Fiestas Privadas", desc: "Cualquier celebración se transforma con el arte y el humor del Rey Del Lápiz.", color: "#FF006E", v: 0 },
];

export const GALLERY = [
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

export const CARD_TINTS = ["#1A1A1A", "#1E1814", "#14191E", "#1A1520", "#141E14", "#1E1A10"];

export const STEPS = [
  { num: "01", title: "Contacto", desc: "Escríbeme por WhatsApp o Instagram. Cuéntame sobre tu evento, la fecha y cuántos invitados tienes.", color: "#FFC400", fg: "#111", Icon: Phone },
  { num: "02", title: "Reserva", desc: "Acordamos los detalles, el horario y el precio. Confirmamos tu reserva de forma rápida y fácil.", color: "#FF3D00", fg: "white", Icon: Calendar },
  { num: "03", title: "Show En Vivo", desc: "El día del evento llego, me instalo y empiezo a crear caricaturas únicas en tiempo real para todos.", color: "#00A8FF", fg: "white", Icon: Star },
  { num: "04", title: "Recuerdo Único", desc: "Cada invitado se lleva a casa su caricatura personalizada como recuerdo especial e irrepetible.", color: "#00D26A", fg: "#111", Icon: Users },
];

export const FAQS = [
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
