export function ComicBurst({
  className = "",
  color = "#FFC400",
  pts = 10,
}: {
  className?: string;
  color?: string;
  pts?: number;
}) {
  const points: string[] = [];
  for (let i = 0; i < pts * 2; i++) {
    const angle = (i * Math.PI) / pts - Math.PI / 2;
    const r = i % 2 === 0 ? 50 : 20;
    points.push(`${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`);
  }

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <polygon points={points.join(" ")} fill={color} stroke="#111" strokeWidth="2.5" />
    </svg>
  );
}
