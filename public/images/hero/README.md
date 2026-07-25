# hero/

Obra que se muestra en el Hero: una **caricatura terminada** sobre la que el lápiz
simula los últimos retoques (animación en `Hero.tsx` + `styles/components.css`).

## Assets

| Archivo           | Rol                                   | Notas |
|-------------------|---------------------------------------|-------|
| `caricatura.webp` | **El que se usa** en runtime (`<img>`) | 900×1203, ~156 KB. Generado desde el master. |
| `caricatura.png`  | Master original (fondo blanco)         | 1085×1450, ~1.9 MB. NO se referencia; queda como fuente para regenerar. |

El `<img>` define `width`/`height` (anti-CLS) y `decoding="async"`; no usa `loading="lazy"`
(está sobre el pliegue). La caricatura es candidata a **LCP**, por eso se sirve el WebP
liviano y no el PNG.

## Regenerar el WebP desde el master (ffmpeg)

```
ffmpeg -y -i caricatura.png -vf "scale=900:-1" -c:v libwebp -quality 82 -compression_level 6 caricatura.webp
```

Para reemplazar la caricatura por otra: deja el nuevo master aquí, regenera el `.webp`
con el comando de arriba y ajusta `width`/`height` del `<img>` en `Hero.tsx` si cambia el
aspecto. (Opcional: mover el master `.png` fuera de `public/` para no incluirlo en el
build — hoy no afecta al runtime porque nadie lo referencia, solo ocupa en `dist/`.)
