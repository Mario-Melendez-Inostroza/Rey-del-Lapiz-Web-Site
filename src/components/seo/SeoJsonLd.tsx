import { seoConfig } from "../../config/seo";
import { siteConfig } from "../../config/site";

/**
 * Datos estructurados schema.org (Person) para SEO de la marca personal del artista.
 * Se genera desde `seoConfig` + `siteConfig`. Los campos de contacto/redes se
 * incluyen solo cuando tienen un valor real (no el placeholder), así el JSON-LD
 * se completa automáticamente cuando se rellenen los datos de contacto (Paso 5).
 */
export function SeoJsonLd() {
  const { contact } = siteConfig;
  const sameAs = [contact.instagram].filter(
    (url) => url && url !== "https://instagram.com/",
  );

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Caricaturista en vivo",
    description: seoConfig.description,
  };
  if (seoConfig.canonicalUrl) jsonLd.url = seoConfig.canonicalUrl;
  if (contact.city && !contact.city.includes("[")) {
    jsonLd.address = {
      "@type": "PostalAddress",
      addressLocality: contact.city,
      addressCountry: "CL",
    };
  }
  if (contact.email) jsonLd.email = contact.email;
  if (contact.phone) jsonLd.telephone = contact.phone;
  if (sameAs.length > 0) jsonLd.sameAs = sameAs;

  // Escapa "<" para que un valor editable no pueda cerrar el </script>
  // prematuramente e inyectar HTML en la página.
  const json = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
