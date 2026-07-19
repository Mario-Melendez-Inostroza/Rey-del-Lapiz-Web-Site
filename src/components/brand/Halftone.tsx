export function Halftone({ opacity = 0.08 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,196,0,1) 1.2px, transparent 1.2px)",
        backgroundSize: "22px 22px",
        opacity,
      }}
    />
  );
}
