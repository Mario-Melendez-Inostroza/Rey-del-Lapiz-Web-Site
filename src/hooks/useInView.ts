import { useEffect, useRef, useState } from "react";

/**
 * useInView — indica si el elemento referenciado ha entrado en el viewport.
 *
 * Contrato:
 * - Entrada: `threshold` (fracción visible para considerarlo "en vista", por defecto 0.25).
 * - Salida: `{ ref, inView }`. `ref` va en el elemento a observar; `inView` es un `boolean`.
 * - Se dispara UNA sola vez (al entrar en vista se desconecta el observer) — pensado para
 *   animaciones reveal-on-scroll que corren una vez.
 * - Fallback sin `IntersectionObserver` (o SSR): `inView = true` (no se oculta contenido).
 */
export function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;
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
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, inView]);

  return { ref, inView };
}
