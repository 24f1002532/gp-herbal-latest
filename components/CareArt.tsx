/* Hand-drawn botanical motifs for the Ingredients & Care page. Decorative only. */
const S = { stroke: "#60312B", strokeWidth: 2.6, strokeLinejoin: "round", strokeLinecap: "round" } as const;

export type Kind = "leaf" | "flower" | "seed" | "oil" | "base";

export function Motif({ kind, className = "" }: { kind: Kind; className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden fill="none">
      {kind === "leaf" && (<>
        <path d="M40 72V30" {...S} />
        <path d="M40 66C18 62 12 40 20 24C36 26 44 44 40 66Z" fill="#4C651E" {...S} />
        <path d="M40 54C60 52 68 34 62 16C46 18 38 34 40 54Z" fill="#7FA03A" {...S} />
        <path d="M40 60C32 50 27 40 24 30M40 46C48 38 54 30 58 22" stroke="#F9F4EB" strokeWidth="2" strokeLinecap="round" opacity=".8" />
      </>)}
      {kind === "flower" && (<>
        {[0, 60, 120, 180, 240, 300].map((a) => <ellipse key={a} cy="-17" rx="10" ry="15" transform={`translate(40 38) rotate(${a})`} fill={a % 120 ? "#FA9EAD" : "#FE5871"} {...S} />)}
        <circle cx="40" cy="38" r="8" fill="#E6A82E" {...S} />
        <path d="M40 62C40 70 36 74 30 76" {...S} />
      </>)}
      {kind === "seed" && (<>
        <path d="M40 12C58 24 62 48 40 70C18 48 22 24 40 12Z" fill="#E6A82E" {...S} />
        <path d="M40 22V62" stroke="#60312B" strokeWidth="2" opacity=".5" strokeLinecap="round" />
        <path d="M40 34C34 32 31 28 30 24M40 44C46 42 50 38 51 33" stroke="#60312B" strokeWidth="2" opacity=".5" strokeLinecap="round" />
        <circle cx="62" cy="62" r="5" fill="#AA473B" {...S} /><circle cx="18" cy="60" r="4" fill="#C58971" {...S} />
      </>)}
      {kind === "oil" && (<>
        <path d="M40 8C54 28 62 38 62 50A22 22 0 0 1 18 50C18 38 26 28 40 8Z" fill="#E6A82E" {...S} />
        <path d="M28 52C28 60 33 65 40 66" stroke="#FFF8EE" strokeWidth="3" strokeLinecap="round" />
        <circle cx="54" cy="28" r="3" fill="#E6A82E" {...S} strokeWidth={2} />
      </>)}
      {kind === "base" && (<>
        <path d="M10 36H70C70 56 58 70 40 70C22 70 10 56 10 36Z" fill="#C58971" {...S} />
        <path d="M14 36C14 30 26 26 40 26C54 26 66 30 66 36" fill="#FFF8EE" {...S} />
        <path d="M52 8L38 32" stroke="#60312B" strokeWidth="6" strokeLinecap="round" />
        <circle cx="28" cy="20" r="4" fill="#7FA03A" {...S} strokeWidth={2} /><circle cx="22" cy="12" r="2.5" fill="#FA9EAD" {...S} strokeWidth={2} />
      </>)}
    </svg>
  );
}

export function Sprig({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 160 220" className={className} aria-hidden fill="none" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M80 214C78 160 84 100 96 14" {...S} />
      {[[88, 170, -50], [84, 140, 40], [88, 112, -50], [90, 84, 40], [92, 56, -50], [95, 32, 35]].map(([x, y, r], i) => (
        <path key={i} transform={`translate(${x} ${y}) rotate(${r})`} d="M0 0C14-24 44-24 58 0C44 24 14 24 0 0Z" fill={i % 2 ? "#7FA03A" : "#4C651E"} {...S} />
      ))}
    </svg>
  );
}

export function SoapDish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden fill="none">
      <ellipse cx="100" cy="100" rx="86" ry="14" fill="#B9824E" {...S} />
      <path d="M30 94H170" stroke="#60312B" strokeWidth="2.6" strokeLinecap="round" />
      {[52, 70, 88, 106, 124, 142].map((x) => <path key={x} d={`M${x} 88V80`} stroke="#60312B" strokeWidth="3" strokeLinecap="round" />)}
      <rect x="48" y="32" width="104" height="48" rx="20" fill="#7FA03A" {...S} />
      <path d="M62 44C80 38 110 38 138 46" stroke="#F9F4EB" strokeWidth="3" strokeLinecap="round" opacity=".7" />
      <circle cx="152" cy="18" r="9" fill="#fff" fillOpacity=".7" {...S} strokeWidth={2} />
      <circle cx="170" cy="36" r="5" fill="#fff" fillOpacity=".7" {...S} strokeWidth={2} />
      <circle cx="36" cy="24" r="6" fill="#fff" fillOpacity=".7" {...S} strokeWidth={2} />
    </svg>
  );
}
