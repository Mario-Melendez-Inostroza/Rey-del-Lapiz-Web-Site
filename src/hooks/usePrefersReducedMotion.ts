import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function getSnapshot() {
  return typeof window !== "undefined" && !!window.matchMedia && window.matchMedia(QUERY).matches;
}

/**
 * usePrefersReducedMotion — `true` si el usuario pidió reducir el movimiento.
 *
 * Las animaciones del sitio se resuelven en CSS (`@media (prefers-reduced-motion: ...)`); este
 * hook existe para las decisiones que CSS no puede tomar, como NO iniciar un video en autoplay.
 * Reacciona en vivo si el usuario cambia la preferencia del sistema.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
