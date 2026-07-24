import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  href: string;
  label: string;
};

export type Service = {
  title: string;
  desc: string;
  color: string;
  v: number;
};

export type GalleryItem = {
  h: string;
  label: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ProcessStep = {
  num: string;
  title: string;
  desc: string;
  color: string;
  fg: string;
  Icon: LucideIcon;
};

export type SocialLink = {
  id: "whatsapp" | "instagram";
  label: string;
  href: string;
  ariaLabel: string;
};

export type ContactInfo = {
  whatsapp: string;
  instagram: string;
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
  galleryCardTints: string[];
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
