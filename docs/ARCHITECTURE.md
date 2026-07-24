# ARCHITECTURE.md — MM Digital Solutions Template

Guía arquitectónica del template. Léela antes de clonar este proyecto para un cliente
nuevo o antes de añadir código. Explica **cómo está organizado el proyecto y por qué**,
y qué principios lo mantienen sano.

**Relación con los otros documentos (no se duplican):**

- `CLAUDE.md` — contexto permanente y estándar de calidad (la "constitución").
- `docs/ARCHITECTURE.md` (este) — arquitectura durable: estructura, decisiones y principios.
- `docs/decisions.md` — bitácora cronológica de decisiones (estilo ADR).
- `AUDIT.md` — foto del estado técnico actual (se reemplaza, no se acumula).
- `ROADMAP.md` — plan de implementación por fases.

Stack: **React 18 + TypeScript (strict) + Vite 6 + Tailwind CSS v4**. Tooling: ESLint 9
(flat) + Prettier. Sin backend (sitio estático). Gestor de paquetes: **npm**.

---

# 1. Filosofía del Template

**Objetivo.** Ser la base de ingeniería de todos los sitios de MM Digital Solutions. Cada
proyecto nuevo es "este template, revestido para el cliente": se reemplazan marca, colores,
tipografía, contenido e imágenes; **la calidad de ingeniería se mantiene o mejora, nunca baja.**

**Principios:**

- **Simplicidad.** La solución más simple que resuelve el problema real gana. Menos archivos,
  menos capas, menos dependencias. La complejidad se paga en cada mantenimiento futuro.
- **Reutilización.** Se extraen componentes/hooks/utilidades cuando hay un patrón real y
  repetido — no antes (ver §4 y §5).
- **No sobreingeniería.** No se añaden abstracciones, dependencias ni configuración "por si
  acaso". Cada archivo debe justificar su existencia.
- **Un PR = un objetivo.** Cada cambio es atómico y enfocado. No se mezcla un refactor con un
  parche de seguridad, ni una feature con un formateo masivo. Facilita revisión y `git bisect`.
- **Una única fuente de verdad.** Cada dato vive en un solo lugar: los tokens visuales en
  `tokens.css`, la config en `config/`, el contenido en `data/`. Duplicar es deuda.

---

# 2. Estructura del proyecto

Organización **por dominio/rol** dentro de una raíz plana `src/`. El punto de entrada es
`src/main.tsx` → `src/App.tsx` (composición de secciones). Responsabilidades:

- **`src/components`** — UI. Subdividida por rol:
  - `sections/` — las secciones de página (Hero, About, Services, Gallery, Process, Faq, Contact).
  - `layout/` — estructura persistente (Header, Footer).
  - `ui/` — primitivas reutilizables de interfaz (Button, Field).
  - `brand/` — SVG de marca/artwork paramétricos (ComicBurst, DecorativeFace, etc.).
  - `seo/` — componentes de SEO (SeoJsonLd).
- **`src/hooks`** — hooks reutilizables que representan patrones del template (hoy: `useScrolled`).
- **`src/config`** — **configuración**: identidad, ajustes y "cómo se comporta" el sitio
  (siteConfig, brandConfig, seoConfig, typography, social, editableFields). Ver §6.
- **`src/data`** — **contenido**: los textos y listas que el cliente edita (servicios, FAQ,
  pasos del proceso, ítems de galería, navegación, encabezados de sección). Ver §6.
- **`src/styles`** — CSS global: `index.css` (orquestador de imports), `tokens.css` (fuente
  única de identidad visual, §3), `tailwind.css`, `fonts.css`, `components.css` (utilidades
  propias como la sombra neobrutalista).
- **`src/types`** — tipos TypeScript compartidos (`site.ts`).
- **`public`** — assets estáticos servidos tal cual en la raíz del sitio (`robots.txt`,
  `sitemap.xml`, imágenes). Agnóstico del hosting.

Regla: **una sola raíz de componentes** (`src/components`). No se recrean jerarquías paralelas
(`src/app/**` fue eliminado por esa razón).

---

# 3. Design Tokens

**Por qué existe `styles/tokens.css`.** Un template cuya promesa es "cambia los colores por
cliente" no puede tener hex dispersos por 13 componentes. `tokens.css` centraliza toda la
identidad visual (paleta, familias tipográficas, tracking) en **un** bloque `@theme` de
Tailwind v4.

**Por qué es la única fuente de verdad.** `@theme` es la primitiva nativa de Tailwind v4:
de un solo bloque genera **a la vez** (a) utilidades (`bg-primary`, `text-ink`, `font-display`…)
y (b) variables CSS en `:root` (`var(--color-primary)`…). Esto sirve a los tres consumidores
desde un punto único:

- **Tailwind** → utilidades en `className`.
- **CSS plano** (`components.css`) → `var(--color-*)`.
- **React inline-style** (sombras de color, gradientes, textShadow) → `var(--color-*)`.
- La tipografía se consume vía `config/typography.ts`, que **solo referencia** `var(--font-*)`
  (no define valores) — por eso no es una segunda fuente.

**Regla anti-regresión:** ningún hex de marca debe existir fuera de `tokens.css`. Excepciones
documentadas: los SVG de `components/brand/` (artwork con paleta propia) y los colores de
`data/` (contenido del cliente). Verificable:

```
grep -rEn "#[0-9a-fA-F]{3,8}" src/components/{layout,sections,ui} src/styles/components.css
```

**Por qué NO hay ThemeProvider / Context de tema / dark mode.** El sitio tiene **un** tema fijo.
Los tokens son estáticos: no cambian en runtime, no dependen del usuario, no se cargan async.
Un ThemeProvider/Context solo aporta valor cuando el tema cambia dinámicamente (toggle claro/
oscuro, multi-marca en vivo). Añadirlos aquí sería indirección y estado por **cero** beneficio.
Dark mode y multi-brand no son requisitos del template; se implementarían **solo** si un cliente
concreto los pide, y entonces `@theme` ya deja la puerta abierta sin reescribir componentes.

**Cómo rebrandear un cliente (visual):** editar `styles/tokens.css` — cambiar los valores de
`--color-*`, `--font-*` y `--tracking-display`. El chrome entero (utilidades + CSS + inline)
se actualiza solo. Si cambian las fuentes, ajustar también `fonts.css` (import de Google Fonts).

---

# 4. Componentes reutilizables

**Criterio para extraer un componente:** existe un patrón visual/estructural **repetido** (regla
práctica: aparece ≥3 veces, o ≥2 con clara señal de que crecerá) y encapsularlo reduce
duplicación real sin inventar configurabilidad especulativa.

**Cuándo SÍ.** Ejemplos vivos:

- `ui/Button` — el CTA neobrutalista se repetía en 7 sitios (Hero, Contact, Gallery, Header,
  Footer…). Se extrajo con `class-variance-authority` (variant/size/shape), `forwardRef` y una
  API mínima. La sombra dura de color dinámico va por variable CSS (`--nb-shadow`) porque
  Tailwind no genera clases arbitrarias con valores dinámicos.
- `ui/Field` — etiqueta + control (input/textarea/select) con `id`/`htmlFor` cableados (a11y),
  `forwardRef` y `...rest`. Se creó cuando el mismo trío se repetía 7 veces en el formulario.

**Cuándo NO.**

- Si el "patrón" tiene un solo uso y no es recurrente del template → se deja inline.
- Si el componente necesitaría muchas props para cubrir variantes que hoy no existen → es señal
  de abstracción prematura; se espera a que aparezcan.
- El **artwork** (`brand/`) no se sobre-parametriza: son primitivas de ilustración, no un design
  system genérico. Sus colores internos son artwork, no tokens (§3).

Principio: **preferir un poco de duplicación local antes que una abstracción equivocada.**
Deshacer una mala abstracción cuesta más que extraer una buena a tiempo.

---

# 5. Hooks

**Filosofía.** Solo se crean hooks que representen **patrones recurrentes del template**, no
utilidades de un único caso. Se aplica la **regla de tres**: se extrae al tercer uso (o al
segundo con señal fuerte de que es un patrón del template). Envolver un `useState` trivial en un
hook (p. ej. `useToggle`) casi nunca vale la indirección que añade.

**Ejemplo: `useScrolled(threshold = 50): boolean`.** Detecta si la página se desplazó más de N
px (header sticky que cambia al hacer scroll). Aunque hoy lo usa **un** componente (`Header`),
se creó porque el header sticky reactivo al scroll es un patrón **universal** de landing —
encaja en la excepción "patrón recurrente del template". Además el hook lo hace **bien**:
listener `passive`, estado inicial sincronizado (sin parpadeo) y cleanup correcto — corrigiendo
defectos que tenía el `useEffect` inline anterior. Contrato: entra un `threshold`, sale un
`boolean` (no expone `scrollY` a propósito, para no invitar a re-renders por píxel ni a añadir
throttle).

Contra-ejemplos deliberados (§7): `useAccordion` y `useToggle` NO se crearon.

---

# 6. Configuración

Dos capas con responsabilidades **separadas**:

- **`config/` = configuración.** Cómo se identifica y comporta el sitio: nombre y claim de marca
  (`brand.ts`), datos de contacto y CTAs (`site.ts`), SEO (`seo.ts`), tokens tipográficos de
  consumo (`typography.ts`), enlaces sociales (`social.ts`), esquema del formulario
  (`editableFields.ts`). Cambia poco y es "infraestructura" del sitio.
- **`data/` = contenido.** Lo que el cliente edita: servicios, FAQ, pasos del proceso, ítems de
  galería, navegación, encabezados de sección. Son arrays/objetos tipados que los componentes
  mapean. Es lo que más cambia entre clientes.

**No mezclar responsabilidades.** Los componentes casi no contienen texto ni datos hardcodeados:
consumen `config/` y `data/`. Esto permite revestir un cliente tocando datos, no JSX. Un color
por-ítem dentro de `data/` (p. ej. `service.color`) es **contenido**, no token — por eso vive
en `data/` y no en `tokens.css`.

---

# 7. Decisiones deliberadas (por qué NO)

Estas ausencias son **intencionales**, no olvidos. No las "arregles" sin una necesidad real.

- **ThemeProvider / Context de tema — NO.** El tema es estático y único (§3). Un provider sería
  estado e indirección sin beneficio.
- **`SiteConfigContext` — NO.** `siteConfig`/`brandConfig`/`data` son imports estáticos de
  módulo: sin mutación en runtime, sin carga async, sin prop-drilling (cada componente los
  importa directo). Un Context no aportaría nada. (El proyecto de referencia GBIKE sí tiene
  Context porque su config se carga async desde una API; aquí no aplica.)
- **`useToggle` — NO.** Envuelve un `useState(false)`; ahorra ~1 línea y tiene mil variantes.
  Abstracción especulativa.
- **`useAccordion` — NO.** Un solo uso (FAQ), un `useState` + una función de una línea. Se
  extraerá si aparece un segundo uso (regla de tres).
- **Sistema de theming — NO.** Sin dark mode, sin multi-brand, sin runtime switching. Consolidar
  los valores actuales en tokens ≠ construir un motor de temas.
- **Abstracciones preventivas — NO.** Nada de tokens de radios (se usan las utilidades stock de
  Tailwind), tokens de color hipotéticos, hooks para casos que no existen, ni `vercel.json`
  (el comportamiento por defecto del hosting basta, y evita vendor lock-in).

---

# 8. Cómo crear un nuevo cliente

1. **Cambiar `styles/tokens.css`** — nueva paleta (`--color-*`), fuentes (`--font-*`,
   `--tracking-display`). Ajustar también `styles/fonts.css` si cambian las tipografías.
2. **Cambiar `config/`** — `brand.ts` (nombre, claim), `site.ts` (contacto real: WhatsApp con
   código país, Instagram, email, teléfono, ciudad, CTAs), `social.ts`, `seo.ts`
   (título/descripción y `canonicalUrl` de producción), `editableFields.ts` (labels del form).
3. **Cambiar `data/`** — servicios, FAQ, proceso, galería, navegación, encabezados.
4. **Reemplazar imágenes** — en `public/` (WebP optimizado, con `width`/`height` y `loading=lazy`
   donde aplique). Sustituir/adaptar el artwork de `components/brand/` si el cliente lo requiere.
5. **Revisar SEO** — `index.html` (`lang`, título, description, OG/Twitter y, al desplegar, el
   canonical + `og:url`). Fijar el **dominio de producción** de forma coordinada en los 4 sitios:
   `public/robots.txt` (`Sitemap:`), `public/sitemap.xml` (`<loc>`), `config/seo.ts`
   (`canonicalUrl`) e `index.html` (canonical/`og:url`). Buscar y resolver los marcadores
   `TODO(deploy)` y `TODO(content-pass)`. (Opcional: renombrar el `name` de `package.json`.)
6. **Deploy** — `npm run build` genera `dist/` estático; se sirve en cualquier host (Vercel lo
   auto-detecta). Antes de publicar: `npm run lint && npm run typecheck && npm run build` en verde
   y `npm audit` limpio.

Nada de esto debería requerir tocar la lógica de los componentes: si la necesitas, revisa si el
contenido/config debería absorber ese cambio en su lugar.

---

# 9. Evolución futura

Distinción importante: lo de abajo son **ideas**, no obligaciones. No conviertas "posible mejora"
en "tarea pendiente" salvo que aporte valor concreto en su momento.

**Decisiones ya tomadas (estables, no re-litigar sin motivo):**

- Tokens visuales unificados en `tokens.css` (`@theme`), fuente única.
- `npm` como gestor (no pnpm); `package-lock.json` canónico.
- Sin ThemeProvider/Context/dark mode/multi-brand/theming (§7).
- Componentes base `Button`/`Field`; hook `useScrolled`.
- Sin `vercel.json` (portabilidad); `robots.txt`/`sitemap.xml` estáticos.
- Type-check estricto + ESLint + Prettier en el flujo; Vite fijado en 6.x.

**Posibles mejoras futuras (evaluar solo cuando el contexto lo pida):**

- Automatizar la regla anti-hex como check de lint/CI (hoy es grep + review) cuando el equipo o
  el número de clientes crezca.
- Simplificar `typography.ts` a utilidades `font-display`/`font-body` (decisión T2) si el wrapper
  deja de aportar.
- Tokens semánticos por rol (`--color-surface-card`, `--color-text-muted`) si aparecen duplicados
  reales que lo justifiquen.
- Generación automática del `sitemap.xml` si el sitio pasa a multipágina real.
- Centralizar el dominio como fuente única (env/const) para no sincronizarlo a mano en 4 sitios.
- Introducir tests (no hay runner hoy); empezar por hooks y utilidades.
- Evaluar Vite 7 como migración propia y aislada cuando aporte algo concreto.

Regla de oro para evolucionar: **cada adición debe pasar el filtro de los principios de §1.**
Si no mejora simplicidad, reutilización real o calidad, no entra.
