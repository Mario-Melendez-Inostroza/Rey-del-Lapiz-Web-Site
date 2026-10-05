# AGENTS.md — Rey_Del_Lapiz

Contexto permanente del proyecto. Para el estado técnico actual y qué falta, ver `AUDIT.md` y `ROADMAP.md` (no dupliques esa información aquí).

---

# Project Status
Proyecto activo. Nació de un prototipo de Figma Make, ya pasó por 2 etapas de refactor manual, y se está elevando al nivel de ingeniería de GBIKE (proyecto de referencia de la agencia).

Landing de un caricaturista en vivo para eventos, estética cómic/neobrutalista.

# Objectives
- Mejor arquitectura
- Mejores componentes reutilizables
- Mejores animaciones
- Mejor responsividad
- Mejor accesibilidad
- Mejor SEO
- Mejor calidad de código
- UI premium
- Excelente puntaje Lighthouse

# Rule
Never sacrifice architecture for speed.

---

# Reference Project Standard
GBIKE is the reference implementation for every future website.
Whenever a new website is created, treat GBIKE as the engineering baseline.
The visual design, branding, colors, typography, images, products and business logic must always be adapted to the new client.
However, the engineering quality must remain at least the same.
Every new project should inherit the same level of quality achieved in GBIKE.

This includes, but is not limited to:
- Project architecture
- Folder organization
- Component organization
- Reusable components
- Reusable hooks
- Reusable utilities
- TypeScript quality
- SEO implementation
- Metadata
- Structured Data (JSON-LD)
- Open Graph
- Twitter Cards
- robots.txt
- sitemap.xml
- Accessibility
- Lighthouse optimization
- Responsive design
- Performance optimization
- Image optimization
- Lazy loading
- Security improvements
- Clean code
- Maintainability
- Vercel compatibility
- Production-ready quality

Never reduce the engineering quality below the level achieved in GBIKE.

Whenever starting a new website:
1. Understand the client's business.
2. Replace the branding.
3. Replace the colors.
4. Replace the typography if needed.
5. Replace the content.
6. Replace the images.
7. Replace the products.
8. Replace the business logic.

Everything else should remain at the same professional standard or be improved.
Every new project must be considered "GBIKE v2", adapted to the client's identity.

Never downgrade architecture.
Never downgrade SEO.
Never downgrade performance.
Never downgrade accessibility.
Never downgrade code quality.

Every project should be at least as good as GBIKE.

Nota: GBIKE tampoco es perfecto (ver AUDIT.md). "Nivel GBIKE" es la vara mínima, no el techo — si Rey_Del_Lapiz puede quedar mejor que GBIKE en algún punto, se hace.

---

# Reference paths
GBIKE está disponible en el workspace en `../GBIKE` (solo lectura, nunca editar desde una sesión de Rey_Del_Lapiz).
