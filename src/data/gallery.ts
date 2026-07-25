import type { GalleryItem } from "../types/site";

// Fotos reales del trabajo del artista (WebP en public/images/gallery/), en el orden 1→13.
// `w`/`h` son las dimensiones intrínsecas: el mosaico masonry muestra cada foto completa
// (altura natural), sin recortar caras, y reservan espacio para evitar CLS.
export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/1.webp",
    label: "Caricatura en un programa de televisión",
    w: 900,
    h: 1928,
  },
  { src: "/images/gallery/2.webp", label: "El artista con figuras de televisión", w: 900, h: 894 },
  { src: "/images/gallery/3.webp", label: "Caricatura para invitados especiales", w: 900, h: 900 },
  { src: "/images/gallery/4.webp", label: "Caricatura del comediante Jorge Alís", w: 900, h: 1200 },
  { src: "/images/gallery/5.webp", label: "Caricatura de pareja en un evento", w: 900, h: 1200 },
  { src: "/images/gallery/6.webp", label: "Un invitado feliz con su caricatura", w: 900, h: 1200 },
  { src: "/images/gallery/7.webp", label: "Recuerdo familiar en un matrimonio", w: 900, h: 1088 },
  { src: "/images/gallery/8.webp", label: "Invitados felices con su caricatura", w: 900, h: 1200 },
  { src: "/images/gallery/9.webp", label: "Figuras de TV con su caricatura", w: 900, h: 872 },
  { src: "/images/gallery/10.webp", label: "Caricatura en vivo en un matrimonio", w: 812, h: 1390 },
  { src: "/images/gallery/11.webp", label: "Retrato a lápiz personalizado", w: 900, h: 1200 },
  { src: "/images/gallery/12.webp", label: "Caricaturas para todo un equipo", w: 900, h: 676 },
];
