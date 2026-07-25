import { Calendar, Phone, Star, Users } from "lucide-react";

import type { ProcessStep } from "../types/site";

export const processSteps: ProcessStep[] = [
  {
    title: "Contacto",
    desc: "Escríbeme por WhatsApp o Instagram. Cuéntame sobre tu evento, la fecha y cuántos invitados tienes.",
    color: "#FFC400",
    Icon: Phone,
  },
  {
    title: "Reserva",
    desc: "Acordamos los detalles, el horario y el precio. Confirmamos tu reserva de forma rápida y fácil.",
    color: "#FF3D00",
    Icon: Calendar,
  },
  {
    title: "Show En Vivo",
    desc: "El día del evento llego, me instalo y empiezo a crear caricaturas únicas en tiempo real para todos.",
    color: "#00A8FF",
    Icon: Star,
  },
  {
    title: "Recuerdo Único",
    desc: "Cada invitado se lleva a casa su caricatura personalizada como recuerdo especial e irrepetible.",
    color: "#00D26A",
    Icon: Users,
  },
];
