import { MessageCircle } from "lucide-react";

import { DecorativeFace, Halftone, InstagramIcon } from "../brand";
import { contactFormConfig } from "../../config/editableFields";
import { siteConfig } from "../../config/site";
import { BANGERS, NUNITO } from "../../config/typography";
import { sectionHeadings } from "../../data";

export function Contact() {
  const inputClass =
    "w-full bg-[#111] border-2 border-[#444] rounded-xl px-4 py-3 text-white placeholder-white/25 font-semibold focus:border-[#FFC400] focus:outline-none transition-colors";

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

        <form
          className="bg-[#1a1a1a] border-4 border-[#333] rounded-3xl p-8 md:p-10 shadow-[10px_10px_0_#FFC400]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
                {contactFormConfig.labels.name}
              </label>
              <input type="text" placeholder={contactFormConfig.placeholders.name} className={inputClass} style={NUNITO} />
            </div>
            <div>
              <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
                {contactFormConfig.labels.email}
              </label>
              <input type="email" placeholder={contactFormConfig.placeholders.email} className={inputClass} style={NUNITO} />
            </div>
            <div>
              <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
                {contactFormConfig.labels.phone}
              </label>
              <input type="tel" placeholder={contactFormConfig.placeholders.phone} className={inputClass} style={NUNITO} />
            </div>
            <div>
              <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
                {contactFormConfig.labels.eventType}
              </label>
              <select className={inputClass} style={NUNITO} defaultValue="">
                <option value="" disabled>{contactFormConfig.placeholders.eventType}</option>
                {contactFormConfig.eventTypes.map((eventType) => (
                  <option key={eventType}>{eventType}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
                {contactFormConfig.labels.eventDate}
              </label>
              <input type="date" className={inputClass} style={NUNITO} />
            </div>
            <div>
              <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
                {contactFormConfig.labels.guests}
              </label>
              <input type="number" placeholder={contactFormConfig.placeholders.guests} className={inputClass} style={NUNITO} />
            </div>
          </div>
          <div className="mb-7">
            <label className="block text-white font-black mb-2 text-xs uppercase tracking-widest" style={NUNITO}>
              {contactFormConfig.labels.message}
            </label>
            <textarea
              rows={4}
              placeholder={contactFormConfig.placeholders.message}
              className={`${inputClass} resize-none`}
              style={NUNITO}
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
      </div>
    </section>
  );
}
