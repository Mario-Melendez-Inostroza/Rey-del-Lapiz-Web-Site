import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  href: string;
  label: string;
};

export type Service = {
  title: string;
  desc: string;
  color: string;
  /** Icono del servicio; se dibuja como filigrana dentro del panel de color. */
  Icon: LucideIcon;
  /** Onomatopeya de cómic del sticker. Corta, en mayúsculas, con signos. */
  shout: string;
};

/** Video vitrina de la sección Servicios (el show en acción, junto a las tarjetas). */
export type ServiceShowcase = {
  /** Ruta del video en `public/videos/`. */
  src: string;
  /** Dimensiones intrínsecas (px): fijan el aspect-ratio del marco y evitan CLS. */
  w: number;
  h: number;
  /** Descripción accesible del video. */
  label: string;
  /** Texto del sticker sobre el marco. */
  sticker: string;
};

export type GalleryItem = {
  /** Ruta de la imagen en `public/images/gallery/`. */
  src: string;
  /** Texto para el overlay y el `alt` accesible. */
  label: string;
  /** Dimensiones intrínsecas (px) para reservar espacio y evitar CLS. */
  w: number;
  h: number;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ProcessStep = {
  title: string;
  desc: string;
  color: string;
  Icon: LucideIcon;
};

export type SocialLink = {
  id: "whatsapp" | "instagram" | "tiktok";
  label: string;
  href: string;
  ariaLabel: string;
};

export type ContactInfo = {
  whatsapp: string;
  instagram: string;
  tiktok: string;
  email: string;
  city: string;
  address: string;
  hours: string;
  phone: string;
};

export type SiteConfig = {
  name: string;
  slogan: string;
  locationLabel: string;
  contact: ContactInfo;
  ctas: {
    reserveShort: string;
    reserveWhatsapp: string;
    viewInstagram: string;
    viewAllInstagram: string;
    submitContact: string;
  };
  footer: {
    copyright: string;
    description: string[];
    navigationTitle: string;
    socialTitle: string;
  };
};

export type BrandConfig = {
  name: string;
  claim: string;
};

export type SEOConfig = {
  title: string;
  description: string;
  canonicalUrl: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
};

export type LogoConfig = {
  /** Logo completo (ilustración + wordmark), formato vertical. Para Hero y Footer. */
  full: string;
  /** Lockup horizontal (símbolo + wordmark en línea). Para el Header y barras. */
  horizontal: string;
  /** Isotipo: solo el símbolo, sin texto. Para tamaños pequeños. */
  symbol: string;
  /** Favicon (se enlaza en el `<head>`). */
  favicon: string;
  /** Texto alternativo accesible del logo. */
  alt: string;
};
