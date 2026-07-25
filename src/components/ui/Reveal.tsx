import type { ReactNode } from "react";

import { useInView } from "../../hooks/useInView";

/**
 * Reveal — revela su contenido (fade + leve subida) cuando entra en el viewport.
 *
 * Reutiliza `useInView` (IntersectionObserver, se dispara una vez). La animación es CSS puro
 * (clases `.reveal` / `.reveal-in` en `styles/components.css`) y está gated tras
 * `@media (prefers-reduced-motion: no-preference)`: con "reduce" el contenido se ve estático y
 * completo desde el inicio. Renderiza un único `<div>`, así que puede sustituir directamente al
 * contenedor de una sección heredando su `className`.
 */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`reveal${inView ? " reveal-in" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
