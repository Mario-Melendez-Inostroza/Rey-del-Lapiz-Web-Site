# og/

Imágenes para compartir en redes (Open Graph / Twitter Card).

- Tamaño estándar: **1200×630 px**.
- Formato: JPG/PNG recomendado por máxima compatibilidad con scrapers de redes (algunos no
  procesan WebP). WebP solo si se verifica soporte.
- Se referencia por **URL absoluta** en `index.html` (`og:image`, `twitter:image`), junto con
  el dominio de producción (ver el `TODO(deploy)` del `<head>`).
- Nombre sugerido: `og-cover.jpg`.
