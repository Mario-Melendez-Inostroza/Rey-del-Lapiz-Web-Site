import { useEffect, useRef, useState } from "react";

/**
 * useInView — indica si el elemento referenciado está en el viewport.
 *
 * Contrato:
 * - Entrada: `threshold` (fracción visible para considerarlo "en vista", por defecto 0.25) y
 *   `options.once` (por defecto `true`).
 * - Salida: `{ ref, inView }`. `ref` va en el elemento a observar; `inView` es un `boolean`.
 * - `once: true` — se dispara UNA sola vez (al entrar en vista se desconecta el observer).
 *   Pensado para animaciones reveal-on-scroll que corren una vez.
 * - `once: false` — sigue la visibilidad en ambos sentidos (entra → `true`, sale → `false`).
 *   Pensado para pausar trabajo caro (p. ej. un video) mientras no se ve.
 * - Fallback sin `IntersectionObserver` (o SSR): `inView = true` (no se oculta contenido).
 */
export function useInView(threshold = 0.25, { once = true }: { once?: boolean } = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}
