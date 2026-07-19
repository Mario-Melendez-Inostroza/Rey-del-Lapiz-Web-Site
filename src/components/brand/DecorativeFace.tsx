export function DecorativeFace({ v = 0, className = "" }: { v?: number; className?: string }) {
  const faceColors = ["#FFC400", "#FF3D00", "#00A8FF", "#00D26A", "#B744FF"];
  const hairColors = ["#222", "#6B2D1A", "#111", "#1A3A1A", "#330066"];
  const fc = faceColors[v % faceColors.length];
  const hc = hairColors[v % hairColors.length];

  const variants = [
    <>
      <polygon points="18,30 32,6 44,28 60,8 76,28 88,6 102,30 82,22 60,16 38,22" fill={hc} />
      <ellipse cx="40" cy="66" rx="15" ry="17" fill="white" stroke="#111" strokeWidth="3" />
      <ellipse cx="80" cy="66" rx="15" ry="17" fill="white" stroke="#111" strokeWidth="3" />
      <circle cx="42" cy="68" r="9" fill="#222" />
      <circle cx="82" cy="68" r="9" fill="#222" />
      <circle cx="45" cy="64" r="3" fill="white" />
      <circle cx="85" cy="64" r="3" fill="white" />
      <ellipse cx="60" cy="95" rx="11" ry="9" fill="#111" />
      <ellipse cx="60" cy="95" rx="7" ry="6" fill="#CC2255" />
      <path d="M26 46 Q40 35 52 43" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M94 46 Q80 35 68 43" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
    </>,
    <>
      {[18, 30, 42, 54, 66, 78, 90, 102].map((x, i) => (
        <ellipse key={i} cx={x} cy={16} rx={8} ry={12} fill={hc} />
      ))}
      <ellipse cx="60" cy="22" rx="48" ry="16" fill={hc} />
      <ellipse cx="38" cy="66" rx="16" ry="11" fill="white" stroke="#111" strokeWidth="3" />
      <ellipse cx="82" cy="66" rx="16" ry="11" fill="white" stroke="#111" strokeWidth="3" />
      <circle cx="40" cy="67" r="8" fill="#222" />
      <circle cx="84" cy="67" r="8" fill="#222" />
      <circle cx="43" cy="64" r="3" fill="white" />
      <circle cx="87" cy="64" r="3" fill="white" />
      <path d="M34 90 Q60 116 86 90 L83 82 Q60 104 37 82 Z" fill="#CC3300" stroke="#111" strokeWidth="2" />
      <path d="M38 90 Q60 108 82 90" fill="white" stroke="none" />
      <path d="M47 91 L73 91" stroke="#EEE" strokeWidth="3" />
      <path d="M28 47 Q42 38 54 45" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M92 47 Q78 38 66 45" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
    </>,
    <>
      <rect x="10" y="8" width="100" height="26" rx="6" fill={hc} />
      <ellipse cx="40" cy="65" rx="14" ry="16" fill="white" stroke="#111" strokeWidth="2.5" />
      <ellipse cx="80" cy="65" rx="14" ry="16" fill="white" stroke="#111" strokeWidth="2.5" />
      <rect x="24" y="52" width="32" height="26" rx="11" fill="none" stroke="#111" strokeWidth="4" />
      <rect x="64" y="52" width="32" height="26" rx="11" fill="none" stroke="#111" strokeWidth="4" />
      <line x1="56" y1="65" x2="64" y2="65" stroke="#111" strokeWidth="4" />
      <circle cx="42" cy="67" r="7.5" fill="#1B5E20" />
      <circle cx="82" cy="67" r="7.5" fill="#1B5E20" />
      <circle cx="45" cy="64" r="2.5" fill="white" />
      <circle cx="85" cy="64" r="2.5" fill="white" />
      <path d="M30 91 Q60 116 90 91 L87 83 Q60 106 33 83 Z" fill="#CC3300" stroke="#111" strokeWidth="2" />
      <path d="M35 91 Q60 111 85 91" fill="white" stroke="none" />
      <path d="M45 92 L75 92" stroke="#DDD" strokeWidth="3" />
      <path d="M28 47 Q40 40 52 46" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M92 47 Q80 40 68 46" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
    </>,
    <>
      <path d="M10,28 Q60,-2 110,28 L110,18 Q60,-12 10,18 Z" fill={hc} />
      <ellipse cx="40" cy="67" rx="14" ry="15" fill="white" stroke="#111" strokeWidth="3" />
      <ellipse cx="80" cy="67" rx="14" ry="15" fill="white" stroke="#111" strokeWidth="3" />
      <circle cx="42" cy="69" r="8" fill="#333" />
      <circle cx="82" cy="69" r="8" fill="#333" />
      <circle cx="45" cy="66" r="2.5" fill="white" />
      <circle cx="85" cy="66" r="2.5" fill="white" />
      <path d="M26 44 Q40 36 52 43" stroke={hc} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M94 40 Q80 35 68 41" stroke={hc} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M38 92 Q66 108 85 88" stroke="#111" strokeWidth="4" fill="none" strokeLinecap="round" />
    </>,
    <>
      <ellipse cx="60" cy="20" rx="46" ry="17" fill={hc} />
      <ellipse cx="30" cy="26" rx="14" ry="20" fill={hc} stroke="#111" strokeWidth="2" transform="rotate(-16 30 26)" />
      <ellipse cx="90" cy="26" rx="14" ry="20" fill={hc} stroke="#111" strokeWidth="2" transform="rotate(16 90 26)" />
      <ellipse cx="40" cy="63" rx="15" ry="18" fill="white" stroke="#111" strokeWidth="3" />
      <ellipse cx="80" cy="63" rx="15" ry="18" fill="white" stroke="#111" strokeWidth="3" />
      <circle cx="42" cy="65" r="9" fill="#333" />
      <circle cx="82" cy="65" r="9" fill="#333" />
      <circle cx="45" cy="61" r="3" fill="white" />
      <circle cx="85" cy="61" r="3" fill="white" />
      <path d="M34 90 Q60 118 86 90 L83 81 Q60 106 37 81 Z" fill="#CC3300" stroke="#111" strokeWidth="2" />
      <path d="M38 90 Q60 108 82 90" fill="white" stroke="none" />
      <path d="M44 91 L76 91" stroke="#EEE" strokeWidth="3" />
      <path d="M26 43 Q40 34 54 42" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M94 43 Q80 34 66 42" stroke={hc} strokeWidth="5" fill="none" strokeLinecap="round" />
    </>,
  ];

  return (
    <svg viewBox="0 0 120 130" className={className} aria-hidden="true">
      <ellipse cx="60" cy="76" rx="50" ry="55" fill={fc} stroke="#111" strokeWidth="4" />
      <ellipse cx="10" cy="76" rx="8" ry="13" fill={fc} stroke="#111" strokeWidth="3" />
      <ellipse cx="110" cy="76" rx="8" ry="13" fill={fc} stroke="#111" strokeWidth="3" />
      {variants[v % variants.length]}
      <ellipse cx="26" cy="86" rx="9" ry="6" fill="rgba(255,80,80,0.28)" />
      <ellipse cx="94" cy="86" rx="9" ry="6" fill="rgba(255,80,80,0.28)" />
    </svg>
  );
}
