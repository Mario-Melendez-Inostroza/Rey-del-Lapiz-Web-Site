# gallery/

Fotos reales del trabajo del artista para la sección **Galería** (mosaico masonry).

- Se sirven en WebP optimizado (ancho máx ~900 px, calidad ~78). Las rutas y etiquetas viven
  en `src/data/gallery.ts` (`galleryItems`); los componentes consumen ese data.
- Cada `<img>` usa `loading="lazy"` + `object-cover` dentro de una caja de alto fijo (`item.h`),
  así no hay CLS.

## Optimizar una foto nueva (ffmpeg)

```
ffmpeg -y -i original.jpg -vf "scale='min(900,iw)':-2" -c:v libwebp -quality 78 nombre.webp
```

Luego agrega la entrada en `src/data/gallery.ts` con `src`, `label` (sirve de `alt`) y `h`.

Los **originales pesados** (JPEG/PNG sin optimizar) se guardan fuera de `public/` en
`raw-assets/gallery/` para no incluirlos en el build.
