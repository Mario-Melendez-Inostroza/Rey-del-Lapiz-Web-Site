import { useEffect, useState } from "react";

/**
 * useScrollSpy — devuelve el `id` de la sección actualmente activa según el scroll.
 *
 * Contrato:
 * - Entrada: `ids`, los `id` de las secciones a vigilar, en orden de aparición. Debe ser una
 *   referencia estable (p. ej. una constante de módulo), no un array literal recreado en cada
 *   render, para no re-suscribir el observer innecesariamente.
 * - Salida: el `id` de la sección activa (string). Antes de que el observer se dispare, `""`.
 * - Usa un `IntersectionObserver` con una "línea de activación" en el centro del viewport
 *   (`rootMargin: -50%/-50%`): la sección que cruza esa línea es la activa. Un solo observer
 *   para todas las secciones.
 * - Fallback sin `IntersectionObserver` (o SSR): no observa nada y devuelve `""` (el consumidor
 *   simplemente no marca ninguna activa; sin romper la navegación).
 */
export function useScrollSpy(ids: string[]): string {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
