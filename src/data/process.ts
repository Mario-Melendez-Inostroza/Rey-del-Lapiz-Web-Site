import { Calendar, Phone, Star, Users } from "lucide-react";

import type { ProcessStep } from "../types/site";

export const processSteps: ProcessStep[] = [
  { num: "01", title: "Contacto", desc: "EscrÃ­beme por WhatsApp o Instagram. CuÃ©ntame sobre tu evento, la fecha y cuÃ¡ntos invitados tienes.", color: "#FFC400", fg: "#111", Icon: Phone },
  { num: "02", title: "Reserva", desc: "Acordamos los detalles, el horario y el precio. Confirmamos tu reserva de forma rÃ¡pida y fÃ¡cil.", color: "#FF3D00", fg: "white", Icon: Calendar },
  { num: "03", title: "Show En Vivo", desc: "El dÃ­a del evento llego, me instalo y empiezo a crear caricaturas Ãºnicas en tiempo real para todos.", color: "#00A8FF", fg: "white", Icon: Star },
  { num: "04", title: "Recuerdo Ãšnico", desc: "Cada invitado se lleva a casa su caricatura personalizada como recuerdo especial e irrepetible.", color: "#00D26A", fg: "#111", Icon: Users },
];
