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
