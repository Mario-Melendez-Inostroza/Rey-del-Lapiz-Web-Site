# logo/

Familia oficial del logotipo de marca.

**Fuente de verdad de las rutas:** `src/config/logo.ts` (`logoConfig`). Los componentes
consumen ese config, nunca rutas hardcodeadas — así reemplazar un asset no toca código.

## Variantes

| Slot (`logoConfig`) | Archivo                | Uso |
|---|---|---|
| `full`       | `logo-full.webp`       | Lockup ilustrado completo (vertical), **fondo transparente**. Footer. |
| `horizontal` | `logo-horizontal.webp` | Lockup horizontal, **fondo transparente**. Header y barras. |
| `symbol`     | `logo-symbol.png`      | Isotipo: solo el símbolo, sin texto. Tamaños pequeños. |
| `favicon`    | `favicon.png`          | Favicon. Enlazado en el `<head>` de `index.html`. |

Los `*.png` originales (fondo negro) se conservan como **masters**. Los `.webp` transparentes
que consume el sitio se generaron quitando el negro con ffmpeg (el arte tiene contorno blanco,
así el negro exterior e interior se va limpio):

```
ffmpeg -y -i logo-horizontal.png -vf "colorkey=0x000000:0.14:0.03" -c:v libwebp -lossless 1 logo-horizontal.webp
ffmpeg -y -i logo-full.png       -vf "colorkey=0x000000:0.14:0.03" -c:v libwebp -lossless 1 logo-full.webp
```

## Cómo reemplazar un asset (sin tocar componentes)

1. Deja el archivo nuevo en esta carpeta (idealmente **SVG**; si no, **PNG con fondo transparente**).
2. Apunta el slot correspondiente en `src/config/logo.ts` a la nueva ruta.

## Recomendaciones

- Los assets actuales son **PNG con fondo negro** (sin canal alfa). Se funden en las
  superficies oscuras del sitio (Header, Hero #111, Footer #0a0a0a), pero para máxima
  limpieza conviene sustituirlos por **SVG** (escala sin pérdida) o **PNG transparentes**.
- El `favicon.png` actual es grande (1254×1254). Para producción conviene generar
  versiones optimizadas (p. ej. 512×512 / 180×180 / `.ico`).
