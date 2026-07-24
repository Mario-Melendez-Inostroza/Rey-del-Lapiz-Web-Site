import { useEffect, useState } from "react";

/**
 * useScrolled — indica si la página se desplazó verticalmente más de `threshold` px.
 *
 * Contrato:
 * - Entrada: `threshold` en píxeles (por defecto 50).
 * - Salida: un `boolean` (deliberadamente NO expone `scrollY`).
 * - Sincroniza el estado inicial en el primer render (sin parpadeo si la página
 *   carga ya desplazada), y lo re-sincroniza si cambia `threshold`.
 * - Listener `scroll` con `{ passive: true }`, limpiado al desmontar / cambiar `threshold`.
 * - Sin throttle/debounce: React ignora un `setState` con el mismo valor booleano,
 *   así que solo re-renderiza al cruzar el umbral.
 */
export function useScrolled(threshold = 50): boolean {
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > threshold,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll(); // re-sincroniza al montar y cuando cambia `threshold`
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
