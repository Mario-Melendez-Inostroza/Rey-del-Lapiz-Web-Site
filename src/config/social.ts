import type { SocialLink } from "../types/site";

import { siteConfig } from "./site";

export const socialLinks: SocialLink[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: siteConfig.contact.whatsapp,
    ariaLabel: "WhatsApp",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: siteConfig.contact.instagram,
    ariaLabel: "Instagram",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: siteConfig.contact.tiktok,
    ariaLabel: "TikTok",
  },
];
