# Imágenes del sitio (`public/images/`)

Assets de imagen servidos **estáticamente** en la raíz del sitio: un archivo en
`public/images/hero/foo.webp` queda disponible en `/images/hero/foo.webp`.

Se referencian **por ruta** desde `config/` y `data/` (o desde `index.html` para el OG),
nunca con `import` — por eso viven en `public/` y no en `src/`.

## Convenciones (todas las imágenes)

- **Formato:** WebP (mejor compresión). AVIF solo si aporta y con fallback.
- **Nombre:** kebab-case y descriptivo (`retrato-artista.webp`, no `IMG_2931.webp`).
- **Dimensiones intrínsecas:** exporta al tamaño real de uso y **siempre** define
  `width`/`height` al consumirla (evita CLS).
- **Peso:** comprime; apunta a < ~200 KB por imagen de contenido.
- **Originales pesados:** no los versiones aquí; guarda los originales fuera de `public/`.

## Rendimiento

- **Hero (LCP):** `fetchpriority="high"` + `<link rel="preload" as="image">`. **No** lazy.
- **Resto:** `loading="lazy"`.

## Subcarpetas

| Carpeta | Contenido |
|---|---|
| `hero/` | Imagen principal del encabezado (LCP). |
| `about/` | Retrato del artista / foto de marca personal. |
| `gallery/` | Fotos reales de trabajos para la galería. |
| `og/` | Imágenes para compartir en redes (Open Graph / Twitter). |
| `logo/` | Logotipo y favicon. |

## Uso durante el content pass

1. Coloca las imágenes reales optimizadas en su subcarpeta.
2. Actualiza las **rutas** en `data/`/`config/` (galería, etc.) y en `index.html` (`og:image`).
3. No hace falta tocar componentes: consumen datos/config, no rutas hardcodeadas.
