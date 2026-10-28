/* Hand-drawn scene: the woman behind GP Herbal, in her home kitchen in Abohar, Punjab.
   Decorative illustration; the story is told in the surrounding text. */
const K = "#60312B"; // outline brown
const S = { stroke: K, strokeWidth: 3, strokeLinejoin: "round", strokeLinecap: "round" } as const;
const SK = "#D9A074"; // skin
const SUIT = "#E6A82E"; // mustard kameez
const DUP = "#FE5871"; // phulkari dupatta
const CREAM = "#FFF8EE";

function Bundle({ x, y, c = "#2E5A22" }: { x: number; y: number; c?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0V16" stroke={K} strokeWidth="2.4" />
      {[-26, -10, 8, 24].map((r, i) => <path key={i} transform={`translate(0 14) rotate(${r})`} d="M0 0C-7 14 -6 30 0 40C6 30 7 14 0 0Z" fill={c} stroke={K} strokeWidth="2" strokeLinejoin="round" />)}
    </g>
  );
}
function Wheat({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={K} strokeWidth="2" strokeLinecap="round">
      <path d="M0 0V-46" fill="none" />
      {[-40, -30, -20, -10].map((yy) => (<g key={yy}><ellipse cx="-5" cy={yy} rx="3" ry="6" fill="#E6A82E" transform={`rotate(-30 -5 ${yy})`} /><ellipse cx="5" cy={yy - 3} rx="3" ry="6" fill="#E6A82E" transform={`rotate(30 5 ${yy - 3})`} /></g>))}
    </g>
  );
}

export default function Founder({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} role="img"
      aria-label="Illustration of the woman behind GP Herbal in her home kitchen in Abohar, Punjab, grinding herbs with a mortar and pestle, with neem, aloe vera, soaps and jars around her.">
      <defs>
        <clipPath id="arch"><path d="M30 600V250C30 112 150 20 300 20S570 112 570 250V600Z" /></clipPath>
      </defs>

      {/* arched window onto the fields */}
      <path d="M30 600V250C30 112 150 20 300 20S570 112 570 250V600Z" fill="#FBE3B8" />
      <g clipPath="url(#arch)">
        <circle cx="300" cy="150" r="130" fill="#FFF1D2" opacity=".9" />
        <circle cx="300" cy="150" r="70" fill="#FFC95E" stroke={K} strokeWidth="3" />
        {Array.from({ length: 14 }, (_, i) => <path key={i} transform={`rotate(${i * (360 / 14)} 300 150)`} d="M300 62V42" stroke={K} strokeWidth="3" strokeLinecap="round" />)}
        <path d="M0 330C90 296 170 300 260 326S440 340 600 300V600H0Z" fill="#C9D77E" />
        <path d="M0 372C110 340 220 356 320 376S500 380 600 346V600H0Z" fill="#9DB554" />
        <path d="M0 330C90 296 170 300 260 326S440 340 600 300" fill="none" stroke={K} strokeWidth="3" />
        <path d="M0 372C110 340 220 356 320 376S500 380 600 346" fill="none" stroke={K} strokeWidth="3" />
        {[70, 112, 154, 440, 482, 524].map((x, i) => <Wheat key={x} x={x} y={392 + (i % 2) * 8} s={0.9} />)}
        {/* herbs drying on a line */}
        <path d="M40 92Q300 128 560 92" fill="none" stroke={K} strokeWidth="2.4" />
        <Bundle x={92} y={103} /><Bundle x={150} y={110} c="#C58971" /><Bundle x={450} y={110} /><Bundle x={508} y={103} c="#C58971" />
        <g transform="translate(96 214)"><circle r="14" fill="#FE5871" {...S} strokeWidth={2.4} /><circle r="5" fill={CREAM} stroke={K} strokeWidth="2" /></g>
        <g transform="translate(516 232)"><circle r="12" fill="#FA9EAD" {...S} strokeWidth={2.4} /><circle r="4" fill={CREAM} stroke={K} strokeWidth="2" /></g>
      </g>
      <path d="M30 600V250C30 112 150 20 300 20S570 112 570 250V600Z" fill="none" stroke={K} strokeWidth="5" />

      {/* --- she --- */}
      {/* dupatta back */}
      <path d="M214 150C206 74 252 46 300 46S394 74 386 150C392 200 414 236 420 330H180C186 236 208 200 214 150Z" fill={DUP} {...S} />
      {/* kameez */}
      <path d="M226 252C250 236 350 236 374 252L396 420H204Z" fill={SUIT} {...S} />
      <path d="M262 250Q300 292 338 250" fill="none" stroke={K} strokeWidth="3" />
      <path d="M300 280V420" stroke={K} strokeWidth="2.4" strokeDasharray="2 7" />
      {[318, 346, 374, 402].map((y) => <circle key={y} cx="300" cy={y} r="3" fill={K} />)}
      {/* neck + face */}
      <path d="M286 206H314V250Q300 262 286 250Z" fill="#C98C62" {...S} />
      <ellipse cx="300" cy="158" rx="46" ry="54" fill={SK} {...S} />
      {/* hair & dupatta over head */}
      <path d="M252 150C250 98 282 82 300 82S350 98 348 150C336 128 322 112 300 108C278 112 264 128 252 150Z" fill="#2B1410" {...S} />
      <path d="M300 82V110" stroke={DUP} strokeWidth="3" />
      <path d="M244 160C236 92 270 62 300 62S364 92 356 160C366 110 340 80 300 80S234 110 244 160Z" fill={DUP} {...S} />
      {/* phulkari embroidery */}
      {[[232, 270], [262, 300], [232, 330], [262, 360], [232, 390], [338, 300], [368, 270], [368, 330], [338, 360], [368, 390]].map(([x, y]) => (
        <path key={`${x}${y}`} d={`M${x} ${y - 10}L${x + 10} ${y}L${x} ${y + 10}L${x - 10} ${y}Z`} fill="#FFD36B" stroke={K} strokeWidth="1.6" opacity=".95" />
      ))}
      {/* face details */}
      <path d="M274 150q8-7 16 0M310 150q8-7 16 0" stroke={K} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M272 140q10-6 20-2M308 138q10-4 20 2" stroke="#2B1410" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M300 156v14q-4 3-8 1" stroke={K} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <circle cx="288" cy="173" r="2" fill="#FFD36B" stroke={K} strokeWidth="1.2" />
      <path d="M284 188Q300 202 316 188" stroke="#AA473B" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="300" cy="118" r="5" fill="#C0392B" stroke={K} strokeWidth="1.6" />
      <ellipse cx="268" cy="182" rx="9" ry="6" fill="#FA9EAD" opacity=".55" /><ellipse cx="332" cy="182" rx="9" ry="6" fill="#FA9EAD" opacity=".55" />
      <g fill="#FFD36B" stroke={K} strokeWidth="2"><circle cx="253" cy="176" r="4" /><path d="M253 180v12" /><circle cx="253" cy="196" r="4" /><circle cx="347" cy="176" r="4" /><path d="M347 180v12" /><circle cx="347" cy="196" r="4" /></g>

      {/* counter */}
      <path d="M0 420H600V600H0Z" fill="#B9824E" stroke={K} strokeWidth="4" />
      <path d="M0 420H600V446H0Z" fill="#D7A874" stroke={K} strokeWidth="4" />
      {[120, 240, 360, 480].map((x) => <path key={x} d={`M${x} 446V600`} stroke={K} strokeWidth="2" opacity=".25" />)}

      {/* arms and mortar */}
      <path d="M232 268C206 316 214 372 248 410L278 396C262 364 262 322 270 280Z" fill={SUIT} {...S} />
      <path d="M368 268C394 316 386 372 352 410L322 396C338 364 338 322 330 280Z" fill={SUIT} {...S} />
      <path d="M234 392l36 14-6 18-38-12Z" fill={SK} {...S} />
      <path d="M366 392l-36 14 6 18 38-12Z" fill={SK} {...S} />
      <g fill="none" stroke="#2E5A22" strokeWidth="5" strokeLinecap="round"><path d="M240 386l32 12" /><path d="M360 386l-32 12" /></g>
      <g fill="none" stroke="#FFD36B" strokeWidth="3" strokeLinecap="round"><path d="M243 396l32 12" /><path d="M357 396l-32 12" /></g>
      {/* pestle */}
      <path d="M316 428L352 352" stroke={K} strokeWidth="18" strokeLinecap="round" /><path d="M316 428L352 352" stroke="#CFC6B8" strokeWidth="11" strokeLinecap="round" />
      <path d="M232 432Q300 452 368 432L356 502Q300 520 244 502Z" fill="#B9B1A6" {...S} />
      <ellipse cx="300" cy="432" rx="68" ry="14" fill="#8F877B" {...S} />
      <ellipse cx="300" cy="432" rx="56" ry="9" fill="#7C9A3C" stroke={K} strokeWidth="2" />
      <path d="M270 430q8-8 16 0M306 432q8-8 16 0M290 436q6-5 12 0" stroke="#2E5A22" strokeWidth="2.4" fill="none" strokeLinecap="round" />

      {/* left of counter: aloe in a pot + turmeric bowl */}
      <g transform="translate(78 430)">
        {[-34, -14, 6, 26].map((r, i) => <path key={i} transform={`rotate(${r} 0 0)`} d="M0 0C-12 -30 -8 -64 0 -86C8 -64 12 -30 0 0Z" fill={i % 2 ? "#4C651E" : "#7C9A3C"} stroke={K} strokeWidth="2.6" strokeLinejoin="round" />)}
        <path d="M-30 0H30L22 52H-22Z" fill="#C58971" {...S} />
        <rect x="-34" y="-6" width="68" height="14" rx="4" fill="#AA473B" {...S} />
      </g>
      <g transform="translate(160 482)"><path d="M-34 0H34Q30 34 0 34Q-30 34 -34 0Z" fill="#D9BFB3" {...S} /><ellipse rx="34" ry="9" fill="#E6A82E" stroke={K} strokeWidth="2.6" /><path d="M-14 -2q14-14 28 0" fill="#F2BE4E" stroke={K} strokeWidth="2" /></g>

      {/* right of counter: tray of soaps, jar, bottle, rose */}
      <g transform="translate(446 438)">
        <rect x="-4" y="40" width="130" height="14" rx="6" fill="#8A5A34" {...S} />
        <path d="M18 40c-16-4-16-34 0-34c10 0 18 8 18 16c0 10-8 18-18 18Z" fill="#4C651E" {...S} strokeWidth={2.4} />
        <path d="M76 38C58 34 56 8 70 2C86 -4 104 14 96 30C92 38 84 40 76 38Z" fill="#FFF8EE" {...S} strokeWidth={2.4} />
        <rect x="52" y="24" width="30" height="16" rx="5" fill="#FA9EAD" {...S} strokeWidth={2.4} />
        <path d="M116 38C120 24 130 18 138 24C138 36 130 42 116 38Z" fill="#E6A82E" {...S} strokeWidth={2.4} />
      </g>
      <g transform="translate(500 400)">
        <path d="M0 0H26V10H0Z" fill="#FFF8EE" {...S} strokeWidth={2.4} />
        <path d="M-4 10H30V46Q30 52 24 52H2Q-4 52 -4 46Z" fill="#FA9EAD" {...S} strokeWidth={2.4} />
        <rect x="6" y="-10" width="14" height="10" rx="3" fill="#4C651E" {...S} strokeWidth={2.4} />
      </g>
      <g transform="translate(548 392)">
        <path d="M0 40V10" stroke="#2E5A22" strokeWidth="4" strokeLinecap="round" />
        {[0, 72, 144, 216, 288].map((a) => <ellipse key={a} cy="-4" rx="8" ry="11" transform={`rotate(${a} 0 6)`} fill="#FE5871" {...S} strokeWidth={2.2} />)}
        <circle cy="6" r="5" fill="#FFD36B" stroke={K} strokeWidth="2" />
      </g>
    </svg>
  );
}
