import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";

import { DecorativeFace, Halftone, InstagramIcon } from "../brand";
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

  const inputClass =
    "w-full bg-[#111] border-2 border-[#444] rounded-xl px-4 py-3 text-white placeholder-white/25 font-semibold focus:border-[#FFC400] focus:outline-none transition-colors";
  const labelClass =
    "block text-white font-black mb-2 text-xs uppercase tracking-widest";

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
    <section id="contacto" className="relative bg-[#111111] py-28 overflow-hidden">
      <Halftone opacity={0.07} />

      <div className="absolute left-0 bottom-32 w-28 opacity-30 -rotate-8 hidden lg:block">
        <DecorativeFace v={0} className="w-full" />
      </div>
      <div className="absolute right-0 top-32 w-28 opacity-30 rotate-8 hidden lg:block">
        <DecorativeFace v={3} className="w-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span
            className="inline-block bg-[#25D366] text-white font-black px-4 py-1 text-xs rounded-full border-4 border-[#111] uppercase tracking-widest mb-5"
            style={NUNITO}
          >
            {sectionHeadings.contact.eyebrow}
          </span>
          <h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ ...BANGERS, textShadow: "4px 4px 0 #25D366" }}
          >
            {sectionHeadings.contact.title}
          </h2>
          <p className="text-white/50 text-lg font-bold" style={NUNITO}>
            {sectionHeadings.contact.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white text-2xl px-10 py-5 rounded-2xl border-4 border-[#111] shadow-[8px_8px_0_#FFC400] hover:shadow-[2px_2px_0_#FFC400] hover:translate-x-1.5 hover:translate-y-1.5 transition-all"
            style={BANGERS}
          >
            <MessageCircle size={32} />
            {siteConfig.ctas.reserveWhatsapp}
          </a>
          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-white text-2xl px-10 py-5 rounded-2xl border-4 border-[#111] shadow-[8px_8px_0_#B744FF] hover:shadow-[2px_2px_0_#B744FF] hover:translate-x-1.5 hover:translate-y-1.5 transition-all"
            style={{
              ...BANGERS,
              background: "linear-gradient(135deg, #FF3D00, #C13584, #833AB4)",
            }}
          >
            <InstagramIcon size={32} />
            {siteConfig.ctas.viewInstagram}
          </a>
        </div>

        {sent ? (
          <div className="bg-[#1a1a1a] border-4 border-[#333] rounded-3xl p-10 md:p-14 text-center shadow-[10px_10px_0_#25D366]">
            <div className="flex justify-center mb-5 text-[#25D366]">
              <CheckCircle2 size={64} />
            </div>
            <h3
              className="text-4xl md:text-5xl text-white mb-4"
              style={{ ...BANGERS, textShadow: "3px 3px 0 #25D366" }}
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
              className="inline-flex items-center gap-2 text-[#FFC400] font-black underline decoration-2 underline-offset-4"
              style={NUNITO}
            >
              <MessageCircle size={18} /> ¿No se abrió? Escríbeme aquí
            </a>
          </div>
        ) : (
          <form
            className="bg-[#1a1a1a] border-4 border-[#333] rounded-3xl p-8 md:p-10 shadow-[10px_10px_0_#FFC400]"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="contact-name" className={labelClass} style={NUNITO}>
                  {contactFormConfig.labels.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder={contactFormConfig.placeholders.name}
                  className={inputClass}
                  style={NUNITO}
                  value={form.name}
                  onChange={update("name")}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass} style={NUNITO}>
                  {contactFormConfig.labels.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder={contactFormConfig.placeholders.email}
                  className={inputClass}
                  style={NUNITO}
                  value={form.email}
                  onChange={update("email")}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className={labelClass} style={NUNITO}>
                  {contactFormConfig.labels.phone}
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder={contactFormConfig.placeholders.phone}
                  className={inputClass}
                  style={NUNITO}
                  value={form.phone}
                  onChange={update("phone")}
                />
              </div>
              <div>
                <label htmlFor="contact-eventType" className={labelClass} style={NUNITO}>
                  {contactFormConfig.labels.eventType}
                </label>
                <select
                  id="contact-eventType"
                  name="eventType"
                  required
                  className={inputClass}
                  style={NUNITO}
                  value={form.eventType}
                  onChange={update("eventType")}
                >
                  <option value="" disabled>
                    {contactFormConfig.placeholders.eventType}
                  </option>
                  {contactFormConfig.eventTypes.map((eventType) => (
                    <option key={eventType}>{eventType}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-eventDate" className={labelClass} style={NUNITO}>
                  {contactFormConfig.labels.eventDate}
                </label>
                <input
                  id="contact-eventDate"
                  name="eventDate"
                  type="date"
                  className={inputClass}
                  style={NUNITO}
                  value={form.eventDate}
                  onChange={update("eventDate")}
                />
              </div>
              <div>
                <label htmlFor="contact-guests" className={labelClass} style={NUNITO}>
                  {contactFormConfig.labels.guests}
                </label>
                <input
                  id="contact-guests"
                  name="guests"
                  type="number"
                  min="0"
                  placeholder={contactFormConfig.placeholders.guests}
                  className={inputClass}
                  style={NUNITO}
                  value={form.guests}
                  onChange={update("guests")}
                />
              </div>
            </div>
            <div className="mb-7">
              <label htmlFor="contact-message" className={labelClass} style={NUNITO}>
                {contactFormConfig.labels.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder={contactFormConfig.placeholders.message}
                className={`${inputClass} resize-none`}
                style={NUNITO}
                value={form.message}
                onChange={update("message")}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FFC400] text-[#111] text-2xl py-4 rounded-2xl border-4 border-[#111] shadow-[6px_6px_0_#111] hover:shadow-[2px_2px_0_#111] hover:translate-x-1 hover:translate-y-1 transition-all font-black"
              style={BANGERS}
            >
              {siteConfig.ctas.submitContact}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
