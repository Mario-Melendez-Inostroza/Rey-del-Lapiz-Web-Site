# ROADMAP.md — Rey_Del_Lapiz

Plan de implementación priorizado, en base a `AUDIT.md`. Se ejecuta una fase a la vez, en modo plan primero y aprobando cada cambio (ver regla en `CLAUDE.md`: "Never sacrifice architecture for speed"). Marca cada casillero cuando la fase esté terminada y verificada (build + typecheck pasando).

---

## FASE 1 — Cambios críticos (bloqueantes de producción / calidad base)

- [x] Añadir `tsconfig.json` + script `typecheck` y build `tsc -b && vite build` (copiar el rigor de GBIKE). Añadir `preview`.
- [x] Arreglar el mojibake en todo `config/` y `data/` (+ `Header.tsx` `aria-label`). Reescribir en UTF-8 correcto.
- [x] SEO real: reescribir `index.html` (`lang="es"`, títulos/descripción reales, quitar `noindex`, OG + Twitter, preconnect fonts) y conectar `seo.ts`; portar un `SeoJsonLd` (schema.org LocalBusiness/Person).
- [x] `react`/`react-dom` a `dependencies` (no `peerDependencies` opcionales).
- [x] Formulario funcional: inputs controlados con `useState`, `handleSubmit` que abre WhatsApp con mensaje prellenado (patrón de `GBIKE/src/components/Contact.tsx`), estado `sent`, `htmlFor`/`id`, `required`. _(Datos reales de contacto en `site.ts` pendientes del content pass — opción B.)_

## FASE 2 — Mejoras importantes (arquitectura y limpieza)

- [x] Adoptar componentes UI base: `Button` e `Input` reutilizables (aprovechar shadcn ya presente o extraer los propios), reemplazar el CTA duplicado en Hero/Contact/Gallery/Header/Footer.
- [x] Resolver la dualidad `src/app/**` vs `src/**`: mover `App.tsx` y consolidar una sola raíz de componentes.
- [x] Podar dependencias muertas: MUI/Emotion, motion, react-router, react-hook-form, recharts, react-dnd, react-slick, embla, canvas-confetti, etc., y los ~46 shadcn no usados. Arreglar el alias roto `figma:asset` → `src/assets/`.
- [x] Añadir ESLint + Prettier/oxfmt + scripts, y `public/` con `robots.txt` + `sitemap.xml` + `vercel.json`.
- [x] Estado y hooks propios: extraer un hook (ej. `useScrolled`) reutilizado por `Header`; valorar un `SiteConfigContext` si crece la config.

## FASE 3 — Mejoras visuales (consistencia de diseño)

- [x] Unificar design tokens: fuente única en `styles/tokens.css` (`@theme` Tailwind v4); chrome sin hex de marca. Tipografía referencia tokens vía `typography.ts` (T2). Eliminados el `theme.css` shadcn y los `colors`/`typography` de `brand.ts`. _(Adelantado antes que el resto de Fase 3.)_
- [x] Accesibilidad de diseño: `aria-expanded`/`controls` en FAQ, `htmlFor` en labels, `:focus-visible`, `scroll-behavior: smooth`, `alt` descriptivos.
- [x] Imágenes reales optimizadas en galería/hero (WebP, `loading=lazy`, `width`/`height`) reemplazando placeholders de color. _(Fotos reales del artista; másters pesados fuera de `public/` en `raw-assets/`. Pendiente micro-opt de preload del LCP → Fase 4.)_

## FASE 4 — Detalles premium

- [x] Animaciones de nivel: reveal on-scroll con `<Reveal>` + `useInView`, CSS puro respetando `prefers-reduced-motion`. _(Resuelto sin re-añadir `motion`/Framer. El scroll sincronizado de `GBIKE/Gallery.tsx` no se portó — era un OR, opcional.)_
- [ ] Feedback rico: scroll-spy en nav activa ✅ (hook `useScrollSpy` + `aria-current` en Header). **Pendiente:** estados loading/success/error del formulario → etapa posterior (form aún abre WhatsApp; `sonner` se podó, decidir toast propio vs. re-añadir).
- [x] Optimización fina: fuentes cargadas vía `<link>` en `index.html` (descubrimiento temprano, LCP) + `loading="lazy"` selectivo. `React.lazy`/`Suspense` evaluado y **descartado** (bundle ~60KB gzip, todas las secciones montan en una página → solo añadiría waterfall/CLS). Memoización de geometría SVG no necesaria por ahora.

> **Extensión futura opcional (fuera del alcance por defecto del roadmap):** panel admin dirigido por esquema + backend de formulario (API serverless + persistencia), estilo GBIKE. Solo si un cliente concreto necesita capa dinámica; contradice la identidad de template estático y simple (ver `docs/ARCHITECTURE.md` §7), por lo que es una **decisión de producto**, no un paso obligatorio.
