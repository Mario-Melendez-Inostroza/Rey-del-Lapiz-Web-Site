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

> Fase 1 cerrada (2026-07-23): se resolvieron y quitaron de esta tabla los gaps de Type-check, SEO/`noindex`, Encoding (mojibake), `react`/`react-dom` como `peerDependencies` y Formulario no funcional.
> Fase 2 en curso: resueltos también Componentes UI base duplicados, Dependencias redundantes/muertas, Componentes muertos (shadcn) y Alias `figma:asset`. Quedan los siguientes.

| Área | GBIKE | Rey_Del_Lapiz |
|---|---|---|
| robots/sitemap/public | ✅ `public/` con `robots.txt` + `sitemap.xml` | ❌ No existe carpeta `public/` |
| Estado global | Context API + hook `useBusinessConfig()` | ❌ Sin Context ni hooks propios |
| Capa de datos/servicios | `loadBusinessConfig` en cascada + validadores + API serverless | ❌ Sin servicios; datos de contacto vacíos (pendientes del content pass) |
| Imágenes | WebP + `loading=lazy` + preload/`fetchPriority` hero + `width`/`height` (anti-CLS) | ❌ Placeholders de color; sin pipeline de imágenes |
| Accesibilidad | `aria-expanded`/`controls`, `alt` descriptivos, `prefers-reduced-motion`, `htmlFor` | ⚠️ Parcial: FAQ sin `aria-expanded`, 2 `alt` totales (el formulario de Contact ya usa `htmlFor`) |
| Deploy | `vercel.json` | ❌ Sin config de deploy |
| Estructura | Una sola raíz de componentes | ⚠️ `App.tsx` aún en `src/app/`; falta consolidar (Fase 2 · Paso 3) |

## Fortalezas actuales de Rey_Del_Lapiz (no tocar sin razón)

- Organización por dominio superior a GBIKE (`sections/`, `layout/`, `brand/`).
- `brand/` = design-system reutilizable real, con props tipadas.
- Separación contenido/config vs vista más limpia (`data/` + `config/` + `types/site.ts`), casi sin texto hardcodeado en componentes.
- 0 usos de `any`.

## Debilidad compartida por ambos proyectos

**Resuelto en Rey (Fase 2 + Fase 3 adelantada).** Los CTAs/inputs se unificaron en `<Button>`/`<Field>` reutilizables (Fase 2), y los design tokens se consolidaron en una fuente única `styles/tokens.css` (`@theme` de Tailwind v4): el chrome ya no contiene hex de marca (verificado por grep). En este punto Rey quedó **por encima** de GBIKE, que mantiene el problema en su propio repo.
