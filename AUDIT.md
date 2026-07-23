# AUDIT.md — Rey_Del_Lapiz

Foto del estado técnico actual, comparado contra GBIKE (ver `CLAUDE.md` para el estándar completo). Este documento se **reemplaza**, no se acumula: cuando un punto se arregla, se borra de aquí (el historial queda en los commits de git, no en este archivo).

Última actualización: 2026-07-23, combinando auditoría inicial + análisis de Claude Code (Opus 4.8, plan mode).

---

## Retrato de cada proyecto

**GBIKE** — Pequeño (~2.5k líneas), minimalista y sólido en su núcleo. Capa de datos/seguridad muy cuidada: Context único (`BusinessConfigProvider`), carga en cascada resiliente (`/api/business` → `business.json` → defaults) con validación campo a campo, panel admin dirigido por esquema (`editableFields.ts`), auth HMAC sin BD + rate limiting, funciones serverless Vercel. SEO real (JSON-LD, robots, sitemap, OG). Imágenes WebP con lazy/preload. Build con `tsc -b` (typecheck estricto).
Su propia deuda: estilos inline con hex hardcodeados que ignoran sus propios design tokens; sin componentes UI base; sin tests ni linter.

**Rey_Del_Lapiz** — Mejor organización de dominio (`sections/`, `layout/`, `brand/`, `data/`, `config/`, `types/`) y mini design-system de marca genuinamente reutilizable (`brand/*` SVG paramétricos: ComicBurst, DecorativeFace, Halftone, ZigZagBorder, SpeechBubble). 0 usos de `any`. Pero arrastra el origen Figma Make: dualidad estructural `src/app/**` vs `src/**`, 46 componentes shadcn/ui muertos (~5k líneas sin importar), dependencias redundantes/no usadas, mojibake en todo el texto español, SEO placeholder con `noindex`, sin `tsconfig.json`, formulario y CTAs no funcionales, sin capa de estado ni servicios.

---

## Gaps críticos (GBIKE le gana a Rey)

| Área | GBIKE | Rey_Del_Lapiz |
|---|---|---|
| Type-check en build | `tsc -b && vite build`, strict, `noUnusedLocals/Parameters` | ❌ Sin `tsconfig.json`; `vite build` no valida tipos |
| SEO | JSON-LD (`SeoJsonLd.tsx`), OG, Twitter, `lang` correcto, indexable | ❌ `noindex,nofollow`, `lang="en"`, `seo.ts` placeholder y sin usar |
| robots/sitemap/public | ✅ `public/` con `robots.txt` + `sitemap.xml` | ❌ No existe carpeta `public/` |
| Estado global | Context API + hook `useBusinessConfig()` | ❌ Sin Context ni hooks propios |
| Capa de datos/servicios | `loadBusinessConfig` en cascada + validadores + API serverless | ❌ Sin servicios; datos de contacto vacíos |
| Formulario funcional | Controlado, `handleSubmit` real (abre WhatsApp), estado `sent`, `htmlFor`/`id`, `required` | ❌ Inputs no controlados, `onSubmit` con `preventDefault` vacío, labels sin `htmlFor` |
| Encoding | Texto español limpio | ❌ Mojibake generalizado (`LÃ¡piz`, `MenÃº`) |
| Imágenes | WebP + `loading=lazy` + preload/`fetchPriority` hero + `width`/`height` (anti-CLS) | ❌ Placeholders de color; sin pipeline de imágenes |
| Accesibilidad | `aria-expanded`/`controls`, `alt` descriptivos, `prefers-reduced-motion`, `htmlFor` | ⚠️ Parcial: FAQ sin `aria-expanded`, 2 `alt` totales, labels sin asociar |
| Deploy | `vercel.json` | ❌ Sin config de deploy |
| Dependencias | 4 runtime (mínimas, tree-shakeable) | ❌ Decenas redundantes/muertas |
| `react`/`react-dom` | `dependencies` | ❌ Solo `peerDependencies` opcionales (riesgo builds reproducibles) |
| Estructura | Una sola raíz de componentes | ❌ Dualidad `src/app/**` vs `src/**` |
| Componentes muertos | — | ❌ ~46 componentes shadcn/ui sin importar (~5k líneas) |
| Alias de assets | — | ❌ `figma:asset/` roto, sin uso real |

## Fortalezas actuales de Rey_Del_Lapiz (no tocar sin razón)

- Organización por dominio superior a GBIKE (`sections/`, `layout/`, `brand/`).
- `brand/` = design-system reutilizable real, con props tipadas.
- Separación contenido/config vs vista más limpia (`data/` + `config/` + `types/site.ts`), casi sin texto hardcodeado en componentes.
- 0 usos de `any`.

## Debilidad compartida por ambos proyectos

Estilos inline con hex hardcodeados que conviven con los design tokens (`@theme`/`theme.css`/`brand.ts`) sin consumirlos; CTAs/inputs re-declarados por sección en vez de un `<Button>`/`<Input>` reutilizable. Corregir esto en Rey lo pondría por encima de GBIKE en este punto específico.

## Deuda técnica temporal (introducida en Fase 1 — eliminar tras Fase 2)

El `tsconfig.json` **excluye del type-check** las carpetas generadas por Figma Make:
`src/app/components/ui` (~46 componentes shadcn/ui) y `src/app/components/figma`.

Motivo: ninguna sección/layout/brand/data/config las importa (verificado con grep), y son código muerto que rompería el chequeo estricto con errores que no vamos a arreglar. La exclusión es un parche temporal para tener `npm run typecheck` verde sobre el código real desde ya.

**Acción requerida:** en la Fase 2 (Paso 8 del roadmap) se eliminan esas carpetas por completo; al hacerlo, **borrar también estas dos rutas del `exclude` en `tsconfig.json`** para que todo `src/` quede bajo type-check estricto sin excepciones.
