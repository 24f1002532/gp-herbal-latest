/* Hand-drawn style category illustrations. Decorative only: no labels, no branded packaging. */
const S = { stroke: "#60312B", strokeWidth: 3, strokeLinejoin: "round", strokeLinecap: "round" } as const;
const CREAM = "#FFF8EE";

const Sprig = ({ x, y, r, c = "#4C651E", s = 1 }: { x: number; y: number; r: number; c?: string; s?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    <path d="M0 0C10-18 30-18 40 1C30 18 10 18 0 0Z" fill={c} {...S} />
    <path d="M3 0H33" stroke={CREAM} strokeWidth="2" strokeLinecap="round" />
  </g>
);
const Spark = ({ x, y, s = 8, c = "#FE5871" }: { x: number; y: number; s?: number; c?: string }) => (
  <path transform={`translate(${x} ${y})`} d={`M0 ${-s}Q0 0 ${s} 0Q0 0 0 ${s}Q0 0 ${-s} 0Q0 0 0 ${-s}Z`} fill={c} />
);
const Bubble = ({ x, y, r }: { x: number; y: number; r: number }) => (
  <g><circle cx={x} cy={y} r={r} fill="#FFFFFF" fillOpacity=".7" stroke="#60312B" strokeWidth="2" />
    <path d={`M${x - r * 0.45} ${y - r * 0.2}a${r * 0.5} ${r * 0.5} 0 0 1 ${r * 0.4}-${r * 0.4}`} stroke="#60312B" strokeWidth="1.6" fill="none" strokeLinecap="round" /></g>
);
const Flower = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    {[0, 72, 144, 216, 288].map((a) => <ellipse key={a} cy="-10" rx="7" ry="10" transform={`rotate(${a})`} fill="#FE5871" {...S} strokeWidth={2.4} />)}
    <circle r="5" fill="#F9F4EB" stroke="#60312B" strokeWidth="2" />
  </g>
);
const Shadow = ({ cx = 100, rx = 58 }: { cx?: number; rx?: number }) => <ellipse cx={cx} cy="176" rx={rx} ry="8" fill="#60312B" opacity=".16" />;

function CreamArt() {
  return (<>
    <Shadow />
    <Sprig x={38} y={104} r={-40} /><Sprig x={128} y={96} r={-150} c="#C58971" s={0.9} />
    <path d="M54 102H146V150Q146 172 124 172H76Q54 172 54 150Z" fill={CREAM} {...S} />
    <circle cx="100" cy="140" r="17" fill="#FA9EAD" {...S} />
    <path d="M91 146C93 134 104 130 110 132C110 142 102 148 91 146Z" fill="#4C651E" stroke="#60312B" strokeWidth="2" strokeLinejoin="round" />
    <rect x="47" y="80" width="106" height="26" rx="10" fill="#FE5871" {...S} />
    {[62, 78, 94, 110, 126, 140].map((x) => <path key={x} d={`M${x} 86v14`} stroke="#60312B" strokeWidth="2" opacity=".3" strokeLinecap="round" />)}
    <path d="M70 80c-2-12 8-18 16-14c4-9 22-9 26 0c10-3 18 6 14 14" fill={CREAM} {...S} />
    <Flower x={160} y={52} s={0.9} /><Spark x={36} y={58} /><Spark x={170} y={118} s={6} c="#4C651E" />
  </>);
}
function FaceWashArt() {
  return (<>
    <Shadow rx={44} />
    <Sprig x={118} y={150} r={-30} s={0.9} /><Sprig x={128} y={128} r={-70} s={0.8} c="#C58971" />
    <path d="M76 44L72 152Q72 160 80 160H120Q128 160 128 152L124 44Z" fill="#4C651E" {...S} />
    <rect x="74" y="32" width="52" height="14" rx="3" fill="#D9BFB3" {...S} />
    {[82, 90, 98, 106, 114, 120].map((x) => <path key={x} d={`M${x} 36v6`} stroke="#60312B" strokeWidth="2" strokeLinecap="round" />)}
    <rect x="82" y="160" width="36" height="16" rx="5" fill={CREAM} {...S} />
    <circle cx="100" cy="102" r="20" fill={CREAM} {...S} />
    <path d="M88 108C90 94 104 90 112 94C112 106 102 114 88 108Z" fill="#FE5871" stroke="#60312B" strokeWidth="2" strokeLinejoin="round" />
    <Bubble x={152} y={64} r={14} /><Bubble x={168} y={96} r={8} /><Bubble x={40} y={70} r={11} /><Bubble x={52} y={104} r={6} /><Bubble x={146} y={36} r={6} />
    <path d="M30 140c6 8 6 14 0 18c-6-4-6-10 0-18Z" fill="#FA9EAD" {...S} strokeWidth={2.4} />
    <Spark x={22} y={36} s={7} />
  </>);
}
function FacePackArt() {
  return (<>
    <Shadow rx={70} />
    <Sprig x={24} y={118} r={-60} s={0.9} /><Sprig x={146} y={112} r={-120} s={0.8} c="#C58971" />
    <path d="M118 96L168 38" stroke="#60312B" strokeWidth="16" strokeLinecap="round" />
    <path d="M118 96L168 38" stroke="#D9BFB3" strokeWidth="10" strokeLinecap="round" />
    <path d="M30 104H170Q166 160 100 168Q34 160 30 104Z" fill="#C58971" {...S} />
    <path d="M52 140Q100 156 148 140" stroke="#60312B" strokeWidth="2.4" fill="none" opacity=".35" strokeLinecap="round" />
    <ellipse cx="100" cy="104" rx="70" ry="15" fill="#D9BFB3" {...S} />
    <ellipse cx="100" cy="104" rx="58" ry="10" fill="#AFBF7A" stroke="#60312B" strokeWidth="2" />
    <path d="M70 104c10-6 20 6 30 0s20 6 30 0" stroke="#4C651E" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    <path d="M18 168c4-8 10-8 14-2c-4 6-10 8-14 2Z" fill="#FA9EAD" {...S} strokeWidth={2.2} /><path d="M164 164c4-8 10-8 14-2c-4 6-10 8-14 2Z" fill="#FE5871" {...S} strokeWidth={2.2} />
    <Spark x={40} y={52} /><Spark x={92} y={40} s={6} c="#4C651E" /><Spark x={176} y={140} s={6} />
  </>);
}
function ShampooArt() {
  return (<>
    <Shadow rx={46} />
    <Sprig x={22} y={150} r={-45} /><Sprig x={128} y={152} r={-135} c="#C58971" s={0.9} />
    <path d="M70 92Q70 80 82 80H118Q130 80 130 92V158Q130 174 114 174H86Q70 174 70 158Z" fill={CREAM} {...S} />
    <path d="M72 116q7-7 14 0t14 0t14 0t14 0V158Q128 172 114 172H86Q72 172 72 158Z" fill="#FA9EAD" stroke="#60312B" strokeWidth="2.4" strokeLinejoin="round" />
    <rect x="90" y="64" width="20" height="18" rx="3" fill={CREAM} {...S} />
    <rect x="84" y="50" width="32" height="16" rx="4" fill="#4C651E" {...S} />
    <path d="M116 56h24q8 0 8 8v6" fill="none" stroke="#60312B" strokeWidth="9" strokeLinecap="round" />
    <path d="M116 56h24q8 0 8 8v6" fill="none" stroke={CREAM} strokeWidth="4" strokeLinecap="round" />
    <Bubble x={160} y={104} r={13} /><Bubble x={174} y={132} r={7} /><Bubble x={40} y={84} r={10} /><Bubble x={54} y={58} r={6} />
    <Flower x={162} y={168} s={0.7} /><Spark x={30} y={30} /><Spark x={170} y={40} s={6} c="#4C651E" />
  </>);
}

function SoapArt() {
  return (<>
    <Shadow rx={70} />
    <Sprig x={22} y={140} r={-55} /><Sprig x={150} y={150} r={-130} c="#C58971" s={0.9} />
    <rect x="44" y="92" width="112" height="70" rx="30" fill="#D8E0BE" {...S} />
    <rect x="58" y="104" width="84" height="46" rx="22" fill="#EEF2DE" stroke="#60312B" strokeWidth="2.4" />
    <path d="M100 112C84 98 70 112 80 126C70 134 84 148 100 130C116 148 130 134 120 126C130 112 116 98 100 112Z" fill="#4C651E" {...S} strokeWidth={2.4} />
    <path d="M100 112V132" stroke="#F9F4EB" strokeWidth="2" strokeLinecap="round" />
    <rect x="62" y="58" width="92" height="40" rx="18" fill="#FFF8EE" {...S} transform="rotate(-8 108 78)" />
    <Bubble x={164} y={70} r={12} /><Bubble x={40} y={74} r={8} /><Flower x={168} y={150} s={0.7} /><Spark x={30} y={36} />
  </>);
}
function KitArt() {
  return (<>
    <Shadow rx={74} />
    <Sprig x={14} y={138} r={-50} s={0.9} /><Sprig x={156} y={140} r={-135} c="#C58971" s={0.8} />
    {[[32, 112, "#FA9EAD"], [78, 98, "#F9F4EB"], [124, 112, "#D8E0BE"]].map(([x, y, c]) => (
      <g key={String(x)}>
        <path d={`M${x} ${y}H${Number(x) + 46}V${Number(y) + 46}Q${Number(x) + 46} ${Number(y) + 58} ${Number(x) + 34} ${Number(y) + 58}H${Number(x) + 12}Q${x} ${Number(y) + 58} ${x} ${Number(y) + 46}Z`} fill={String(c)} {...S} />
        <rect x={Number(x) - 3} y={Number(y) - 12} width="52" height="14" rx="5" fill="#FFF8EE" {...S} />
        <ellipse cx={Number(x) + 23} cy={Number(y) + 22} rx="12" ry="7" fill="#FFF8EE" opacity=".7" />
      </g>))}
    <circle cx="100" cy="44" r="16" fill="#FFB84D" {...S} /><path d="M100 28c4 6 4 26 0 32M84 44c6-4 26-4 32 0" stroke="#60312B" strokeWidth="2" fill="none" />
    <Spark x={30} y={50} /><Spark x={172} y={64} s={6} c="#4C651E" />
  </>);
}
function BeautyArt() {
  return (<>
    <Shadow rx={64} />
    <Sprig x={14} y={150} r={-50} s={0.9} />
    <path d="M62 80Q62 70 72 70H88Q98 70 98 80V164Q98 172 90 172H70Q62 172 62 164Z" fill="#FA9EAD" {...S} />
    <rect x="70" y="48" width="20" height="24" rx="4" fill="#FFF8EE" {...S} /><rect x="66" y="36" width="28" height="14" rx="4" fill="#4C651E" {...S} />
    <path d="M94 42h18" stroke="#60312B" strokeWidth="3" strokeLinecap="round" />
    <circle cx="124" cy="136" r="13" fill="#FFF8EE" {...S} /><path d="M118 140c0-9 9-12 15-8c0 8-7 12-15 8Z" fill="#FE5871" stroke="#60312B" strokeWidth="2" />
    <path d="M124 70v38" stroke="#60312B" strokeWidth="9" strokeLinecap="round" /><path d="M124 70v38" stroke="#D9BFB3" strokeWidth="4" strokeLinecap="round" />
    <path d="M124 108v22" stroke="#60312B" strokeWidth="3" /><circle cx="124" cy="134" r="3" fill="#E6A82E" />
    <Flower x={158} y={70} s={0.9} /><Bubble x={168} y={118} r={9} /><Spark x={36} y={46} /><Spark x={150} y={30} s={6} c="#4C651E" />
  </>);
}

const map = { creams: CreamArt, "face-washes": FaceWashArt, "face-packs": FacePackArt, shampoos: ShampooArt, "hair-care": ShampooArt, soaps: SoapArt, "facial-kits": KitArt, "beauty-essentials": BeautyArt, "sun-care": BeautyArt, oils: BeautyArt } as const;
export const hasIllustration = (slug?: string): slug is keyof typeof map => !!slug && slug in map;
export default function Illustration({ slug }: { slug: keyof typeof map }) {
  const Art = map[slug];
  return <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden><Art /></svg>;
}
