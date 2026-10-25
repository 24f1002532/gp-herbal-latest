/** A little gold rosette sticker, tilted like it was pressed on by hand. Used for best-selling products. */
export default function BestSellerSeal({ size = "md", className = "" }: { size?: "md" | "lg"; className?: string }) {
  const dim = size === "lg" ? "h-[6.5rem] w-[6.5rem] md:h-32 md:w-32" : "h-[4.75rem] w-[4.75rem] sm:h-[5.25rem] sm:w-[5.25rem]";
  // 16-point scalloped edge
  const pts = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2;
    return [50 + 46 * Math.cos(a), 50 + 46 * Math.sin(a)] as const;
  });
  const f = { fontFamily: "var(--font-display)" } as const;
  return (
    <span role="img" aria-label="Best seller"
      className={`seal-wobble pointer-events-none inline-block drop-shadow-[0_3px_0_rgba(96,49,43,.28)] ${dim} ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="seal-gold" cx="35%" cy="28%" r="85%">
            <stop offset="0" stopColor="#FFE9A8" /><stop offset=".55" stopColor="#E6A82E" /><stop offset="1" stopColor="#C98A1B" />
          </radialGradient>
        </defs>
        {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="8.6" fill="url(#seal-gold)" />)}
        <circle cx="50" cy="50" r="43" fill="url(#seal-gold)" />
        <circle cx="50" cy="50" r="37" fill="none" stroke="#60312B" strokeWidth="1.3" strokeDasharray="2.2 3.2" strokeLinecap="round" opacity=".7" />
        {/* star */}
        <path d="M50 17.5l3.1 6.3 6.9 1-5 4.9 1.2 6.9L50 33.3l-6.2 3.3 1.2-6.9-5-4.9 6.9-1z" fill="#AA473B" />
        <text x="50" y="56" textAnchor="middle" fontSize="17" fontWeight="700" fill="#60312B" style={f}>Best</text>
        <text x="50" y="72" textAnchor="middle" fontSize="15.5" fontStyle="italic" fontWeight="600" fill="#60312B" style={f}>Seller</text>
        <path d="M33 77q17 6 34 0" fill="none" stroke="#AA473B" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}
