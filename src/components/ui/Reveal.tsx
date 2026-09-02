import type { CSSProperties, ReactNode } from "react";

import { useInView } from "../../hooks/useInView";

/**
 * Reveal — revela su contenido (fade + leve subida) cuando entra en el viewport.
 *
 * Reutiliza `useInView` (IntersectionObserver, se dispara una vez). La animación es CSS puro
 * (clases `.reveal` / `.reveal-in` en `styles/components.css`) y está gated tras
 * `@media (prefers-reduced-motion: no-preference)`: con "reduce" el contenido se ve estático y
 * completo desde el inicio. Renderiza un único `<div>`, así que puede sustituir directamente al
 * contenedor de una sección heredando su `className`.
 *
 * `delay` (ms) escalona varios Reveal hermanos (una grilla de tarjetas, p. ej.). Se inyecta como
 * custom property `--reveal-d` — mismo patrón que `--fw-d` / `--spark-d` en el Hero — porque
 * Tailwind no genera clases arbitrarias con valores dinámicos.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`reveal${inView ? " reveal-in" : ""}${className ? ` ${className}` : ""}`}
      // Cast: `--reveal-d` es una custom property CSS que este @types/react no tipa.
      style={delay ? ({ "--reveal-d": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
