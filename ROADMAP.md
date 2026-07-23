# ROADMAP.md — Rey_Del_Lapiz

Plan de implementación priorizado, en base a `AUDIT.md`. Se ejecuta una fase a la vez, en modo plan primero y aprobando cada cambio (ver regla en `CLAUDE.md`: "Never sacrifice architecture for speed"). Marca cada casillero cuando la fase esté terminada y verificada (build + typecheck pasando).

---

## FASE 1 — Cambios críticos (bloqueantes de producción / calidad base)

- [ ] Añadir `tsconfig.json` + script `typecheck` y build `tsc -b && vite build` (copiar el rigor de GBIKE). Añadir `preview`.
- [ ] Arreglar el mojibake en todo `config/` y `data/` (+ `Header.tsx` `aria-label`). Reescribir en UTF-8 correcto.
- [ ] SEO real: reescribir `index.html` (`lang="es"`, títulos/descripción reales, quitar `noindex`, OG + Twitter, preconnect fonts) y conectar `seo.ts`; portar un `SeoJsonLd` (schema.org LocalBusiness/Person).
- [ ] `react`/`react-dom` a `dependencies` (no `peerDependencies` opcionales).
- [ ] Formulario funcional + datos de contacto reales: inputs controlados con `useState`, `handleSubmit` que abra WhatsApp con mensaje prellenado (patrón de `GBIKE/src/components/Contact.tsx`), estado `sent`, `htmlFor`/`id`, `required`. Completar WhatsApp/Instagram/email/teléfono en `site.ts`.

## FASE 2 — Mejoras importantes (arquitectura y limpieza)

- [ ] Adoptar componentes UI base: `Button` e `Input` reutilizables (aprovechar shadcn ya presente o extraer los propios), reemplazar el CTA duplicado en Hero/Contact/Gallery/Header/Footer.
- [ ] Resolver la dualidad `src/app/**` vs `src/**`: mover `App.tsx` y consolidar una sola raíz de componentes.
- [ ] Podar dependencias muertas: MUI/Emotion, motion, react-router, react-hook-form, recharts, react-dnd, react-slick, embla, canvas-confetti, etc., y los ~46 shadcn no usados. Arreglar el alias roto `figma:asset` → `src/assets/`.
- [ ] Añadir ESLint + Prettier/oxfmt + scripts, y `public/` con `robots.txt` + `sitemap.xml` + `vercel.json`.
- [ ] Estado y hooks propios: extraer un hook (ej. `useScrolled`) reutilizado por `Header`; valorar un `SiteConfigContext` si crece la config.

## FASE 3 — Mejoras visuales (consistencia de diseño)

- [ ] Unificar design tokens: eliminar hex dispersos (`bg-[#25D366]`, `shadow-[6px_6px_0_#111]`), consumir `brand.ts`/`theme.css` como única fuente. Alinear `theme.css` ↔ `brand.ts`.
- [ ] Imágenes reales optimizadas en galería/hero (WebP, `loading=lazy`, `width`/`height`, preload del LCP) reemplazando placeholders de color.
- [ ] Accesibilidad de diseño: `aria-expanded`/`controls` en FAQ, `htmlFor` en labels, `:focus-visible`, `scroll-behavior: smooth`, `alt` descriptivos.

## FASE 4 — Detalles premium

- [ ] Animaciones de nivel: usar `motion` (ya instalado) para reveal on-scroll, o portar el patrón de scroll sincronizado de `GBIKE/Gallery.tsx`; respetar `prefers-reduced-motion`.
- [ ] Feedback rico: estados loading/success/error (usar `sonner` ya presente para toasts), scroll-spy en nav activa.
- [ ] Optimización fina: `React.lazy`/`Suspense` para secciones pesadas, memoización puntual de geometría SVG (`DecorativeFace`/`ComicBurst`), preconnect/preload de fuentes.
- [ ] Paridad GBIKE opcional: panel admin dirigido por esquema + backend de formulario (API serverless + persistencia), si se quiere igualar la capa dinámica de GBIKE.
