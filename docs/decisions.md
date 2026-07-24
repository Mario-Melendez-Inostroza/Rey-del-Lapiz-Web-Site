# decisions.md — Rey_Del_Lapiz

Registro liviano de decisiones técnicas (estilo ADR). Cada entrada: qué se decidió, por qué, y qué alternativa se descartó. No se borran entradas viejas aunque la decisión cambie después — se agrega una nueva entrada que reemplaza a la anterior y se referencia.

Este archivo vive en `docs/decisions.md`.

---

## 2026-07-23 — GBIKE como estándar de referencia de ingeniería

**Decisión:** todo proyecto nuevo de MM Digital Solutions usa GBIKE como vara mínima de calidad técnica (arquitectura, SEO, accesibilidad, performance, seguridad), adaptando solo branding/contenido/negocio.

**Por qué:** GBIKE es el primer proyecto grande llevado a producción con prácticas profesionales completas (auth real, SEO real, TS estricto). Sirve como checklist objetivo en vez de depender de criterio caso a caso.

**Alternativa descartada:** evaluar cada proyecto nuevo sin referencia fija — se descartó por ser subjetivo y no escalable a medida que crecen los proyectos de la agencia.

---

## 2026-07-23 — Separar CLAUDE.md, AUDIT.md y ROADMAP.md

**Decisión:** `CLAUDE.md` contiene solo contexto permanente (reglas, estándar de referencia). El estado técnico actual vive en `AUDIT.md` (se reemplaza, no se acumula) y el plan de implementación en `ROADMAP.md` (checklist por fases).

**Por qué:** `CLAUDE.md` se carga automáticamente en cada sesión de Claude Code. Mezclar ahí una auditoría que cambia constantemente genera dos problemas: gasta tokens en cada sesión con contenido que puede estar desactualizado, y arriesga que Claude actúe sobre un dato que ya no es cierto (ej. "arreglar" algo que ya se arregló).

**Alternativa descartada:** un único `CLAUDE.md` con todo (contexto + auditoría + roadmap) — es más simple al inicio pero envejece mal.

---

## 2026-07-23 — Sin carpeta `docs/` completa todavía en Rey_Del_Lapiz

**Decisión:** por ahora, solo `CLAUDE.md` + `AUDIT.md` + `ROADMAP.md` + `docs/decisions.md`. Nada de `architecture.md`, `deployment.md`, `seo.md`, `ui.md` hasta que el contenido de esos temas sea sustancial.

**Por qué:** Rey_Del_Lapiz es una landing de una página. Esos documentos serían un párrafo cada uno hoy — más mantenimiento del que aportan. La carpeta `docs/` completa (como la de MM Digital Solutions) se reserva para proyectos más grandes o cuando un tema individual crezca lo suficiente.

**Alternativa descartada:** crear toda la estructura de docs desde el día uno — se descartó por riesgo de carpetas vacías/abandonadas.

---

## 2026-07-23 — npm como gestor de paquetes (no pnpm)

**Decisión:** Rey_Del_Lapiz usa **npm** como único gestor de paquetes. Se eliminó `pnpm-workspace.yaml` (heredado de Figma Make) y, en el cierre de Fase 1, el bloque `pnpm.overrides` de `package.json`. El lockfile canónico es `package-lock.json`.

**Por qué:** el repo tenía a la vez `package-lock.json` y `pnpm-workspace.yaml`, lo que puede producir instalaciones inconsistentes según el gestor que use cada quien. Se estandariza en npm por coherencia con GBIKE (proyecto de referencia) y para tener un único lockfile como fuente de verdad.

**Alternativa descartada:** migrar a pnpm — más rápido y mejor en disco, pero habría divergido de GBIKE y obligaba a regenerar lockfile y reconfigurar el workspace sin beneficio real para una landing de una página.

---

## 2026-07-24 — Design tokens: fuente única en `styles/tokens.css`

**Decisión:** toda la identidad visual (colores, familias tipográficas, tracking) vive en un único bloque `@theme` de Tailwind v4 en `src/styles/tokens.css`. Es la **única** fuente de verdad. Los componentes consumen tokens por tres vías: utilidades Tailwind (`bg-primary`, `text-ink`…), `var(--color-*)` en CSS/inline-styles, y `typography.ts` (que solo referencia `var(--font-*)`, no define valores). Se eliminaron las fuentes competidoras: el `theme.css` de shadcn (con `.dark`/oklch/chart/sidebar muertos) y los `colors`/`typography` de `brand.ts`.

**Regla anti-regresión:** ningún hex de marca debe existir fuera de `tokens.css`. Verificable con:
`grep -rEn "#[0-9a-fA-F]{3,8}" src/components/{layout,sections,ui} src/styles/components.css` (debe dar 0). Excepciones documentadas: los SVG de `components/brand/` (artwork con paleta propia) y los colores de contenido en `data/` (datos del cliente).

**Por qué:** el proyecto es el template base de MM Digital Solutions; rebrandear un cliente debe ser editar un solo archivo, no un *find-and-replace* frágil por ~13 componentes.

**Restricciones respetadas:** sin ThemeProvider/Context/hooks de tema, sin dark mode, sin multi-brand, sin dependencias nuevas. No se crearon tokens de radios (se usan las utilidades nativas de Tailwind) ni tokens "preventivos".

**Alternativa descartada:** migrar los 66 `style={BANGERS/NUNITO}` a utilidades `font-display`/`font-body` (más idiomático Tailwind) — se descartó por alto churn sin beneficio; `typography.ts` se mantiene como wrapper que referencia los tokens (decisión T2), anotado como posible simplificación futura.
