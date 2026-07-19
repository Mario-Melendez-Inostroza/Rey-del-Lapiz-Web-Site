export function ZigZagBorder({
  top = true,
  color1 = "#FFC400",
  color2 = "#111",
}: {
  top?: boolean;
  color1?: string;
  color2?: string;
}) {
  return (
    <div
      className={`absolute left-0 right-0 h-5 ${top ? "top-0" : "bottom-0"}`}
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${color1} 0px, ${color1} 20px, ${color2} 20px, ${color2} 40px)`,
      }}
    />
  );
}
