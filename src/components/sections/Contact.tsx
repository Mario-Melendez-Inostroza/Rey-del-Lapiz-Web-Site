import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

import { Halftone, InstagramIcon, WhatsAppIcon } from "../brand";
import { Button } from "../ui/Button";
import { Field } from "../ui/Field";
import { Reveal } from "../ui/Reveal";
import { contactFormConfig } from "../../config/editableFields";
import { siteConfig } from "../../config/site";
import { BANGERS, NUNITO } from "../../config/typography";
import { sectionHeadings } from "../../data";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guests: string;
  message: string;
};

const EMPTY_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  guests: "",
  message: "",
};

/**
 * Construye el mensaje de la consulta. No hay backend todavía: el formulario
 * abre WhatsApp con este mensaje prellenado, el canal real de reservas.
 * TODO: migrar a un endpoint/servicio de email cuando exista backend.
 */
function buildWhatsAppMessage(d: ContactFormData): string {
  return [
    "¡Hola! Quiero reservar una caricatura en vivo.",
    `Nombre: ${d.name}`,
    d.eventType && `Tipo de evento: ${d.eventType}`,
    d.eventDate && `Fecha: ${d.eventDate}`,
    d.guests && `N° de invitados: ${d.guests}`,
    d.phone && `Teléfono: ${d.phone}`,
    `Correo: ${d.email}`,
    d.message && `Mensaje: ${d.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function whatsappUrl(base: string, message: string): string {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}text=${encodeURIComponent(message)}`;
}

export function Contact() {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof ContactFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(
      whatsappUrl(siteConfig.contact.whatsapp, buildWhatsAppMessage(form)),
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  return (
    <section id="contacto" className="relative bg-ink py-28 overflow-hidden">
      <Halftone opacity={0.07} />

      <Reveal className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span
            className="inline-block bg-whatsapp text-white font-black px-4 py-1 text-xs rounded-full border-4 border-ink uppercase tracking-widest mb-5"
            style={NUNITO}
          >
            {sectionHeadings.contact.eyebrow}
          </span>
          <h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ ...BANGERS, textShadow: "4px 4px 0 var(--color-whatsapp)" }}
          >
            {sectionHeadings.contact.title}
          </h2>
          <p className="text-white/50 text-lg font-bold" style={NUNITO}>
            {sectionHeadings.contact.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button
            variant="whatsapp"
            size="lg"
            shape="rounded"
            shadowColor="var(--color-primary)"
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={32} />
            {siteConfig.ctas.reserveWhatsapp}
          </Button>
          <Button
            variant="instagram"
            size="lg"
            shape="rounded"
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={32} />
            {siteConfig.ctas.viewInstagram}
          </Button>
        </div>

        {sent ? (
          <div className="bg-surface border-4 border-border rounded-3xl p-10 md:p-14 text-center shadow-[10px_10px_0_var(--color-whatsapp)]">
            <div className="flex justify-center mb-5 text-whatsapp">
              <CheckCircle2 size={64} />
            </div>
            <h3
              className="text-4xl md:text-5xl text-white mb-4"
              style={{ ...BANGERS, textShadow: "3px 3px 0 var(--color-whatsapp)" }}
            >
              ¡Solicitud lista!
            </h3>
            <p className="text-white/60 text-lg font-bold mb-6" style={NUNITO}>
              Abrimos WhatsApp con tu mensaje. Solo tienes que enviarlo y te responderé muy pronto.
            </p>
            <a
              href={whatsappUrl(siteConfig.contact.whatsapp, buildWhatsAppMessage(form))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-black underline decoration-2 underline-offset-4"
              style={NUNITO}
            >
              <WhatsAppIcon size={18} /> ¿No se abrió? Escríbeme aquí
            </a>
          </div>
        ) : (
          <form
            className="bg-surface border-4 border-border rounded-3xl p-8 md:p-10 shadow-[10px_10px_0_var(--color-primary)]"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <Field
                id="contact-name"
                label={contactFormConfig.labels.name}
                name="name"
                type="text"
                required
                placeholder={contactFormConfig.placeholders.name}
                value={form.name}
                onChange={update("name")}
              />
              <Field
                id="contact-email"
                label={contactFormConfig.labels.email}
                name="email"
                type="email"
                required
                placeholder={contactFormConfig.placeholders.email}
                value={form.email}
                onChange={update("email")}
              />
              <Field
                id="contact-phone"
                label={contactFormConfig.labels.phone}
                name="phone"
                type="tel"
                placeholder={contactFormConfig.placeholders.phone}
                value={form.phone}
                onChange={update("phone")}
              />
              <Field
                as="select"
                id="contact-eventType"
                label={contactFormConfig.labels.eventType}
                name="eventType"
                required
                value={form.eventType}
                onChange={update("eventType")}
              >
                <option value="" disabled>
                  {contactFormConfig.placeholders.eventType}
                </option>
                {contactFormConfig.eventTypes.map((eventType) => (
                  <option key={eventType}>{eventType}</option>
                ))}
              </Field>
              <Field
                id="contact-eventDate"
                label={contactFormConfig.labels.eventDate}
                name="eventDate"
                type="date"
                value={form.eventDate}
                onChange={update("eventDate")}
              />
              <Field
                id="contact-guests"
                label={contactFormConfig.labels.guests}
                name="guests"
                type="number"
                min="0"
                placeholder={contactFormConfig.placeholders.guests}
                value={form.guests}
                onChange={update("guests")}
              />
            </div>
            <Field
              as="textarea"
              id="contact-message"
              label={contactFormConfig.labels.message}
              className="mb-7"
              name="message"
              rows={4}
              placeholder={contactFormConfig.placeholders.message}
              value={form.message}
              onChange={update("message")}
            />
            <Button variant="primary" size="lg" shape="rounded" fullWidth type="submit">
              {siteConfig.ctas.submitContact}
            </Button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
