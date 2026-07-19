import { BANGERS } from "../../config/typography";

export function SpeechBubble({
  text,
  bg = "white",
  fg = "#111",
  className = "",
}: {
  text: string;
  bg?: string;
  fg?: string;
  className?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className="px-4 py-2 rounded-2xl border-4 border-black text-sm leading-tight whitespace-nowrap"
        style={{ ...BANGERS, backgroundColor: bg, color: fg, fontSize: "1rem" }}
      >
        {text}
      </div>
      <div
        className="absolute left-5"
        style={{
          bottom: "-14px",
          width: 0,
          height: 0,
          borderLeft: "11px solid transparent",
          borderRight: "11px solid transparent",
          borderTop: "14px solid #111",
        }}
      />
      <div
        className="absolute left-[22px]"
        style={{
          bottom: "-9px",
          width: 0,
          height: 0,
          borderLeft: "9px solid transparent",
          borderRight: "9px solid transparent",
          borderTop: `10px solid ${bg}`,
        }}
      />
    </div>
  );
}
