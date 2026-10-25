import type { ReactNode } from "react";

/* Hand-drawn product scenes. Every product stands on the same little wooden shelf, in front of an arched window,
   drawn in the site's brown outline. No text, no packaging, no stock photos: just the thing and what it is made of.
   viewBox is 200 x 240; objects stand on y = 206. */
const K = "#60312B";
const CREAM = "#FFF8EE";
const S = { stroke: K, strokeWidth: 3, strokeLinejoin: "round", strokeLinecap: "round" } as const;
const S2 = { ...S, strokeWidth: 2.2 } as const;

/* ---------- small pieces ---------- */
const Spark = ({ x, y, s = 7, c = "#FE5871" }: { x: number; y: number; s?: number; c?: string }) => (
  <path transform={`translate(${x} ${y})`} d={`M0 ${-s}Q0 0 ${s} 0Q0 0 0 ${s}Q0 0 ${-s} 0Q0 0 0 ${-s}Z`} fill={c} />
);
const Leaf = ({ x, y, r, c = "#4C651E", s = 1 }: { x: number; y: number; r: number; c?: string; s?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    <path d="M0 0C10-16 30-16 40 0C30 16 10 16 0 0Z" fill={c} {...S2} />
    <path d="M3 0H33" stroke={CREAM} strokeWidth="2" strokeLinecap="round" opacity=".85" />
  </g>
);
const Bubble = ({ x, y, r }: { x: number; y: number; r: number }) => (
  <g><circle cx={x} cy={y} r={r} fill="#fff" fillOpacity=".7" stroke={K} strokeWidth="2" />
    <path d={`M${x - r * 0.45} ${y - r * 0.2}a${r * 0.5} ${r * 0.5} 0 0 1 ${r * 0.4}-${r * 0.4}`} stroke={K} strokeWidth="1.6" fill="none" strokeLinecap="round" /></g>
);
const Drop = ({ x, y, s = 1, c = "#fff" }: { x: number; y: number; s?: number; c?: string }) => (
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M0 -12C8 -2 10 4 10 8A10 10 0 0 1 -10 8C-10 4 -8 -2 0 -12Z" fill={c} fillOpacity=".85" {...S2} />
);
const Shadow = ({ cx = 100, rx = 60 }: { cx?: number; rx?: number }) => <ellipse cx={cx} cy="207" rx={rx} ry="6" fill={K} opacity=".2" />;

const Petal5 = ({ x, y, s = 1, c = "#FE5871", mid = "#FFD36B" }: { x: number; y: number; s?: number; c?: string; mid?: string }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    {[0, 72, 144, 216, 288].map((a) => <path key={a} transform={`rotate(${a})`} d="M0 0C-12-8-14-24 0-27C14-24 12-8 0 0Z" fill={c} {...S2} />)}
    <circle r="5" fill="#AA473B" stroke={K} strokeWidth="1.8" /><path d="M0 0V-15" stroke={mid} strokeWidth="3" strokeLinecap="round" /><circle cy="-16" r="2.4" fill={mid} />
  </g>
);
const Rose = ({ x, y, s = 1, c = "#FA9EAD" }: { x: number; y: number; s?: number; c?: string }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <circle r="19" fill={c} {...S2} />
    <path d="M0 0c0-7 8-7 8 0s-11 9-16 1-1-18 11-18 18 16 8 24" fill="none" stroke={K} strokeWidth="2.2" strokeLinecap="round" />
  </g>
);
const Grain = ({ x, y, r = 20, c = CREAM }: { x: number; y: number; r?: number; c?: string }) => (
  <ellipse cx={x} cy={y} rx="3.4" ry="8" transform={`rotate(${r} ${x} ${y})`} fill={c} stroke={K} strokeWidth="1.8" />
);
const RiceStalk = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M0 0C-4-40-2-80 18-112" fill="none" stroke="#4C651E" strokeWidth="3" strokeLinecap="round" />
    {[-92, -76, -60, -44, -28].map((yy, i) => <g key={yy}><Grain x={14 - i * 1.5 + 8} y={yy} r={28} c="#F3E3B8" /><Grain x={8 - i * 1.5 - 8} y={yy + 6} r={-28} c="#F3E3B8" /></g>)}
  </g>
);
const Mulethi = ({ x, y, r = 0, s = 1 }: { x: number; y: number; r?: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    {[[-9, "#B07A4A", 0], [0, "#C58971", -3], [9, "#9A6A3C", 2]].map(([dx, c, dy]) => (
      <g key={String(dx)}><rect x={Number(dx) - 4.5} y={Number(dy) - 52} width="9" height="52" rx="4" fill={String(c)} {...S2} strokeWidth={2} /><ellipse cx={Number(dx)} cy={Number(dy) - 50} rx="3.4" ry="2" fill="#EBD9CF" stroke={K} strokeWidth="1.4" /></g>))}
  </g>
);
const Orange = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <circle r="24" fill="#F2A33A" {...S} /><circle r="19" fill="#FFD27A" stroke={K} strokeWidth="1.8" />
    {[0, 45, 90, 135].map((a) => <path key={a} transform={`rotate(${a})`} d="M0-19V19" stroke="#F2A33A" strokeWidth="2.4" />)}
    <circle r="3" fill="#F2A33A" />
  </g>
);
const Aloe = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M0 0C-14-10-18-34-10-56C-4-38 2-20 0 0Z" fill="#7C9A3C" {...S2} />
    <path d="M0 0C14-10 18-34 10-56C4-38-2-20 0 0Z" fill="#4C651E" {...S2} />
    <path d="M0 0C-6-16-6-38 0-62C6-38 6-16 0 0Z" fill="#9DB554" {...S2} />
  </g>
);
const Turmeric = ({ x, y, r = 0, s = 1 }: { x: number; y: number; r?: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    <path d="M-22 6Q-26-6-14-10L12-26Q24-32 26-20Q26-12 16-6L-8 10Q-18 16-22 6Z" fill="#E6A82E" {...S2} />
    <path d="M-8-2l5 5M2-9l5 5M12-16l4 4" stroke={K} strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </g>
);
const Alum = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M-24 8L-14-18L8-26L26-6L18 20L-8 22Z" fill="#E4F1F4" {...S2} />
    <path d="M-14-18L-4 0L26-6M-4 0L-8 22M-4 0L18 20" fill="none" stroke={K} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M-18-4l4-9" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
  </g>
);
const Clove = ({ x, y, r = 0 }: { x: number; y: number; r?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r})`}>
    <path d="M0 18V-2" stroke="#6B3E2E" strokeWidth="5" strokeLinecap="round" /><circle cy="-8" r="5.5" fill="#6B3E2E" {...S2} strokeWidth={1.8} />
    <path d="M-5-11l-3-3M5-11l3-3M0-14v-4" stroke={K} strokeWidth="2" strokeLinecap="round" />
  </g>
);
const Bean = ({ x, y, r = 0, c = "#7A4A32" }: { x: number; y: number; r?: number; c?: string }) => (
  <g transform={`translate(${x} ${y}) rotate(${r})`}><ellipse rx="8" ry="11" fill={c} {...S2} strokeWidth={1.8} /><path d="M0-9C3-3 3 3 0 9" stroke="#EBD9CF" strokeWidth="1.6" fill="none" strokeLinecap="round" /></g>
);
const Seed = ({ x, y, r = 0, c = "#E6A82E" }: { x: number; y: number; r?: number; c?: string }) => (
  <ellipse cx={x} cy={y} rx="3" ry="4.4" transform={`rotate(${r} ${x} ${y})`} fill={c} stroke={K} strokeWidth="1.3" />
);

/* ---------- soaps ---------- */
const WINGS = ["M0 -4C-6-34-54-40-52-8C-51 8-18 8 0-4Z", "M0 -4C6-34 54-40 52-8C51 8 18 8 0-4Z", "M0 4C-4 12-36 12-34 34C-31 48-6 38 0 10Z", "M0 4C4 12 36 12 34 34C31 48 6 38 0 10Z"];
const Butterfly = ({ x, y, s = 1, r = 0, fill, hi, dark }: { x: number; y: number; s?: number; r?: number; fill: string; hi: string; dark: string }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    <g transform="translate(0 6)">{WINGS.map((d) => <path key={d} d={d} fill={dark} {...S} />)}</g>
    {WINGS.map((d) => <path key={d} d={d} fill={fill} {...S} />)}
    <path d="M-38-14C-30-20-20-18-14-10M38-14C30-20 20-18 14-10M-24 26C-18 20-10 22-8 28M24 26C18 20 10 22 8 28" stroke={hi} strokeWidth="2.4" fill="none" strokeLinecap="round" />
    <path d="M0-22V28" stroke={K} strokeWidth="8" strokeLinecap="round" /><path d="M0-22V28" stroke={fill} strokeWidth="3.6" strokeLinecap="round" />
  </g>
);
const Sunflower = ({ x, y, s = 1, fill, hi, dark }: { x: number; y: number; s?: number; fill: string; hi: string; dark: string }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <g transform="translate(0 6)">{Array.from({ length: 14 }, (_, i) => <ellipse key={i} cy="-31" rx="9" ry="14" transform={`rotate(${i * (360 / 14)})`} fill={dark} {...S2} />)}</g>
    {Array.from({ length: 14 }, (_, i) => <ellipse key={i} cy="-31" rx="9" ry="14" transform={`rotate(${i * (360 / 14)})`} fill={fill} {...S2} />)}
    <circle r="22" fill={dark} stroke={K} strokeWidth="2.4" />
    {[[0, 0], [9, 4], [-9, 4], [0, -10], [0, 11], [11, -7], [-11, -7], [6, 13], [-6, 13]].map(([a, b], i) => <circle key={i} cx={a} cy={b} r="2.2" fill={hi} />)}
  </g>
);
const OvalBar = ({ x, y, rx = 40, ry = 26, r = 0, fill, hi, dark }: { x: number; y: number; rx?: number; ry?: number; r?: number; fill: string; hi: string; dark: string }) => (
  <g transform={`translate(${x} ${y}) rotate(${r})`}>
    <ellipse cy="7" rx={rx} ry={ry} fill={dark} {...S} />
    <ellipse rx={rx} ry={ry} fill={fill} {...S} />
    <ellipse rx={rx - 9} ry={ry - 8} fill="none" stroke={hi} strokeWidth="2.4" strokeDasharray="1 7" strokeLinecap="round" />
    <path d={`M-10 0C-4-14 6-14 10 0C6 14-4 14-10 0Z`} fill={hi} opacity=".55" />
  </g>
);
const Scallop = ({ x, y, s = 1, fill, dark }: { x: number; y: number; s?: number; fill: string; dark: string }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <g transform="translate(0 7)">{Array.from({ length: 12 }, (_, i) => <circle key={i} cx={Math.cos((i * Math.PI) / 6) * 38} cy={Math.sin((i * Math.PI) / 6) * 38} r="8" fill={dark} {...S2} />)}<circle r="39" fill={dark} stroke={K} strokeWidth="3" /></g>
    {Array.from({ length: 12 }, (_, i) => <circle key={i} cx={Math.cos((i * Math.PI) / 6) * 38} cy={Math.sin((i * Math.PI) / 6) * 38} r="8" fill={fill} {...S2} />)}
    <circle r="39" fill={fill} stroke={K} strokeWidth="3" />
    {[[-14, -10], [8, -18], [18, 4], [-4, 8], [-20, 16], [10, 22], [0, -2], [22, -10], [-24, 0]].map(([a, b], i) => <circle key={i} cx={a} cy={b} r="2.6" fill={i % 2 ? "#C58971" : "#EBD9CF"} stroke={K} strokeWidth="1.2" />)}
  </g>
);

/* ---------- vessels ---------- */
const Pump = ({ x, y, w, h, fill, cap = "#EBD9CF", emblem = "#4C651E" }: { x: number; y: number; w: number; h: number; fill: string; cap?: string; emblem?: string }) => (
  <g>
    <rect x={x - w / 2} y={y - h} width={w} height={h} rx="14" fill={fill} {...S} />
    <path d={`M${x - w / 2 + 6} ${y - h + 16}V${y - 22}`} stroke="#fff" strokeOpacity=".5" strokeWidth="4" strokeLinecap="round" />
    <rect x={x - 11} y={y - h - 12} width="22" height="14" rx="3" fill={cap} {...S2} />
    <path d={`M${x} ${y - h - 12}V${y - h - 26}H${x + 18}`} stroke={K} strokeWidth="9" strokeLinecap="round" fill="none" /><path d={`M${x} ${y - h - 12}V${y - h - 26}H${x + 18}`} stroke={cap} strokeWidth="4" strokeLinecap="round" fill="none" />
    <ellipse cx={x} cy={y - h * 0.42} rx={w * 0.26} ry={w * 0.26} fill={CREAM} {...S2} />
    <path d={`M${x - 7} ${y - h * 0.42 + 6}C${x - 7} ${y - h * 0.42 - 8} ${x + 4} ${y - h * 0.42 - 10} ${x + 9} ${y - h * 0.42 - 7}C${x + 9} ${y - h * 0.42 + 4} ${x + 1} ${y - h * 0.42 + 9} ${x - 7} ${y - h * 0.42 + 6}Z`} fill={emblem} stroke={K} strokeWidth="1.8" strokeLinejoin="round" />
  </g>
);
const Jar = ({ x, y, w, h, fill, lid = CREAM, lidH = 14, rot = 0 }: { x: number; y: number; w: number; h: number; fill: string; lid?: string; lidH?: number; rot?: number }) => (
  <g transform={`rotate(${rot} ${x} ${y})`}>
    <path d={`M${x - w / 2} ${y - h}H${x + w / 2}V${y - 12}Q${x + w / 2} ${y} ${x + w / 2 - 12} ${y}H${x - w / 2 + 12}Q${x - w / 2} ${y} ${x - w / 2} ${y - 12}Z`} fill={fill} {...S} />
    <path d={`M${x - w / 2 + 7} ${y - h + 8}V${y - 14}`} stroke="#fff" strokeOpacity=".5" strokeWidth="3.4" strokeLinecap="round" />
    <rect x={x - w / 2 - 3} y={y - h - lidH + 2} width={w + 6} height={lidH} rx="5" fill={lid} {...S} />
  </g>
);
const Bowl = ({ x, y, w, fill, content, shade }: { x: number; y: number; w: number; fill: string; content: string; shade: string }) => (
  <g>
    <path d={`M${x - w / 2} ${y - 30}H${x + w / 2}C${x + w / 2} ${y - 6} ${x + w / 4} ${y} ${x} ${y}C${x - w / 4} ${y} ${x - w / 2} ${y - 6} ${x - w / 2} ${y - 30}Z`} fill={fill} {...S} />
    <path d={`M${x - w / 2 + 12} ${y - 14}Q${x} ${y - 4} ${x + w / 2 - 12} ${y - 14}`} stroke={K} strokeOpacity=".3" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    <ellipse cx={x} cy={y - 30} rx={w / 2} ry="9" fill={shade} {...S} />
    <path d={`M${x - w / 2 + 8} ${y - 31}Q${x - w / 4} ${y - 62} ${x} ${y - 56}Q${x + w / 4} ${y - 62} ${x + w / 2 - 8} ${y - 31}Q${x} ${y - 22} ${x - w / 2 + 8} ${y - 31}Z`} fill={content} stroke={K} strokeWidth="2.4" strokeLinejoin="round" />
  </g>
);
const Spoon = ({ x, y, r = 0 }: { x: number; y: number; r?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r})`}><path d="M0 0V-44" stroke={K} strokeWidth="8" strokeLinecap="round" /><path d="M0 0V-44" stroke="#D7A874" strokeWidth="4" strokeLinecap="round" /><ellipse cy="4" rx="9" ry="12" fill="#D7A874" {...S2} /></g>
);
const Sachet = ({ x, y, r = 0, fill = "#9CCBE3" }: { x: number; y: number; r?: number; fill?: string }) => (
  <g transform={`translate(${x} ${y}) rotate(${r})`}>
    <path d="M-17-24H17L20 20H-20Z" fill={fill} {...S2} /><path d="M-17-18H17M-17 14H17" stroke={K} strokeWidth="1.8" strokeDasharray="2 3" />
    <path d="M-6-4C-6-10 2-10 6-6C4 2-2 4-6-4Z" fill={CREAM} stroke={K} strokeWidth="1.6" strokeLinejoin="round" />
  </g>
);

/* ---------- the scenes ---------- */
const scenes: Record<string, () => ReactNode> = {
  "neem-soap": () => (<>
    <Shadow rx={70} />
    <g transform="translate(22 204) rotate(-8)"><path d="M0 0C2-30 8-60 20-92" fill="none" stroke="#4C651E" strokeWidth="3.4" strokeLinecap="round" />
      {[[14, -14], [18, -30], [22, -46], [28, -62], [34, -78]].map(([a, b], i) => <g key={i}><Leaf x={a - 4} y={b} r={-155} c={i % 2 ? "#4C651E" : "#7C9A3C"} s={0.52} /><Leaf x={a} y={b - 4} r={-25} c={i % 2 ? "#7C9A3C" : "#4C651E"} s={0.52} /></g>)}</g>
    <Butterfly x={118} y={118} s={1.05} r={-10} fill="#3F6B2A" hi="#7FA24A" dark="#274A1B" />
    <Butterfly x={86} y={170} s={0.72} r={8} fill="#5D8A3A" hi="#A9C46B" dark="#35592A" />
    <Leaf x={140} y={186} r={-20} s={0.8} c="#2E5A22" /><Spark x={170} y={62} /><Spark x={30} y={90} s={5} c="#4C651E" /><Bubble x={160} y={150} r={9} /><Bubble x={40} y={150} r={6} />
  </>),
  "rice-soap": () => (<>
    <Shadow rx={74} />
    <RiceStalk x={30} y={204} s={0.85} />
    <Bowl x={108} y={206} w={110} fill="#D9A86C" content="#FFF8EE" shade="#B9824E" />
    {[[78, 172], [92, 176], [110, 174], [126, 178], [140, 172]].map(([a, b], i) => <Grain key={i} x={a} y={b} r={i * 30} />)}
    <Butterfly x={108} y={118} s={0.88} r={6} fill="#FFFBF2" hi="#D9BFB3" dark="#E6D3BE" />
    <Grain x={170} y={196} r={70} /><Grain x={160} y={202} r={20} /><Spark x={168} y={60} /><Spark x={40} y={60} s={5} c="#4C651E" /><Bubble x={160} y={96} r={8} />
  </>),
  "avocado-soap": () => (<>
    <Shadow rx={74} />
    <g transform="translate(52 160)"><path d="M0-40C22-40 34-10 34 10C34 34 18 44 0 44C-18 44-34 34-34 10C-34-10-22-40 0-40Z" fill="#2E5A22" {...S} />
      <path d="M0-33C17-33 27-8 27 10C27 29 14 37 0 37C-14 37-27 29-27 10C-27-8-17-33 0-33Z" fill="#D8E68A" stroke={K} strokeWidth="2" />
      <circle cy="12" r="14" fill="#8A5A3A" {...S2} /><path d="M-7 8q3-5 8-4" stroke="#EBD9CF" strokeWidth="2.4" fill="none" strokeLinecap="round" /></g>
    <Butterfly x={130} y={146} s={0.98} r={8} fill="#A9CF72" hi="#E8F2B8" dark="#7BA64D" />
    <Leaf x={140} y={196} r={-160} s={0.7} c="#4C651E" /><Leaf x={96} y={194} r={-25} s={0.7} c="#7C9A3C" />
    <Spark x={160} y={60} /><Spark x={30} y={80} s={5} c="#4C651E" /><Bubble x={150} y={86} r={10} />
  </>),
  "pigmentation-soap": () => (<>
    <Shadow rx={72} />
    <Aloe x={36} y={204} s={0.95} />
    <Turmeric x={150} y={192} r={-18} s={1.25} /><Turmeric x={116} y={200} r={20} s={0.9} />
    <Sunflower x={98} y={124} s={0.98} fill="#7A4A32" hi="#E6A82E" dark="#4A2A1E" />
    <Drop x={168} y={100} s={0.9} c="#FFE9A8" /><Spark x={34} y={70} /><Spark x={170} y={58} s={5} c="#E6A82E" />
  </>),
  "fitkari-soap": () => (<>
    <Shadow rx={74} />
    <OvalBar x={96} y={186} rx={46} ry={22} r={-4} fill="#D9998A" hi="#F3CFC4" dark="#B8786A" />
    <OvalBar x={106} y={148} rx={46} ry={22} r={5} fill="#E3A99A" hi="#F8DDD4" dark="#BE8072" />
    <OvalBar x={96} y={110} rx={46} ry={22} r={-6} fill="#D9998A" hi="#F3CFC4" dark="#B8786A" />
    <Alum x={162} y={188} s={0.95} /><Alum x={32} y={194} s={0.6} />
    <Drop x={156} y={110} s={0.8} c="#DDEFF5" /><Spark x={36} y={80} /><Spark x={168} y={64} s={5} c="#4C651E" />
  </>),
  "manicure-pedicure-scrub-soap": () => (<>
    <Shadow rx={70} />
    <Scallop x={98} y={178} s={0.98} fill="#F6EBDA" dark="#D8C3A8" />
    <Scallop x={110} y={116} s={0.8} fill="#FFF8EE" dark="#E3D2BA" />
    <Aloe x={168} y={204} s={0.7} />
    {[[30, 196], [46, 202], [58, 194], [24, 206], [150, 202], [136, 206]].map(([a, b], i) => <circle key={i} cx={a} cy={b} r="3" fill={i % 2 ? "#C58971" : "#EBD9CF"} stroke={K} strokeWidth="1.3" />)}
    <Bubble x={160} y={90} r={10} /><Bubble x={42} y={110} r={7} /><Spark x={36} y={66} /><Spark x={166} y={140} s={5} c="#4C651E" />
  </>),
  "moroccan-whitening-soap": () => (<>
    {/* a little zellige-tile star behind the bar, a nod to Morocco */}
    <g transform="translate(100 108)" opacity=".5"><path d="M0-56L14-34L40-40L34-14L56 0L34 14L40 40L14 34L0 56L-14 34L-40 40L-34 14L-56 0L-34-14L-40-40L-14-34Z" fill="none" stroke="#fff" strokeWidth="3" strokeLinejoin="round" /><circle r="22" fill="none" stroke="#fff" strokeWidth="2.4" /></g>
    <Shadow rx={64} />
    <Butterfly x={100} y={140} s={1.2} r={-4} fill="#4A86D8" hi="#9CC3F2" dark="#2E5DA8" />
    <path d="M24 196q8-8 16 0t16 0t16 0" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".8" /><path d="M120 200q8-8 16 0t16 0t16 0" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".8" />
    <Drop x={42} y={120} s={0.9} c="#CFE5FA" /><Drop x={160} y={100} s={0.7} c="#CFE5FA" /><Spark x={166} y={60} s={6} c="#fff" /><Spark x={34} y={64} s={5} c="#fff" />
  </>),
  /* ---------- face ---------- */
  "mulethi-majesta-face-wash": () => (<>
    <Shadow rx={56} />
    <Mulethi x={150} y={204} r={14} s={0.95} />
    <Pump x={92} y={204} w={64} h={106} fill="#C4513A" cap="#F3E3D0" emblem="#E6A82E" />
    <Bubble x={150} y={90} r={14} /><Bubble x={166} y={122} r={8} /><Bubble x={40} y={96} r={11} /><Bubble x={50} y={130} r={6} /><Bubble x={134} y={64} r={6} />
    <Spark x={36} y={60} /><Spark x={168} y={56} s={5} c="#4C651E" />
  </>),
  "rice-face-pack": () => (<>
    <Shadow rx={74} />
    <RiceStalk x={30} y={204} s={0.8} />
    <Bowl x={112} y={206} w={116} fill="#C58971" content="#FFF3DC" shade="#E3CFB6" />
    <Spoon x={158} y={180} r={28} />
    <Rose x={160} y={198} s={0.5} /><path d="M70 172q6-6 12 0M104 168q6-6 12 0" stroke={K} strokeOpacity=".25" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <Petal5 x={60} y={72} s={0.6} c="#FA9EAD" /><Spark x={156} y={80} /><Spark x={96} y={60} s={5} c="#4C651E" />
  </>),
  "vitamin-c-facial-kit": () => (<>
    <Shadow rx={84} />
    {[[34, "#F9A94B", 46], [66, "#FFD27A", 56], [100, "#F7C9A0", 66], [134, "#FFB85E", 56], [166, "#FFE4A8", 46]].map(([x, c, h]) => <Jar key={String(x)} x={Number(x)} y={204} w={28} h={Number(h)} fill={String(c)} lid="#FFF8EE" lidH={11} />)}
    <Orange x={100} y={118} s={1.2} /><Leaf x={116} y={96} r={-50} s={0.6} c="#4C651E" />
    <Orange x={42} y={140} s={0.5} /><Spark x={160} y={92} /><Spark x={36} y={90} s={5} c="#E6A82E" />
  </>),
  "green-tea-facial-kit": () => (<>
    <Shadow rx={84} />
    {[[34, "#B9D99A", 46], [66, "#8FBF74", 56], [100, "#DCEBC0", 66], [134, "#7CAE66", 56], [166, "#C4E0A4", 46]].map(([x, c, h]) => <Jar key={String(x)} x={Number(x)} y={204} w={28} h={Number(h)} fill={String(c)} lid="#FFF8EE" lidH={11} />)}
    <Leaf x={64} y={120} r={-40} s={1.1} c="#4C651E" /><Leaf x={96} y={126} r={-100} s={0.95} c="#7C9A3C" /><Leaf x={104} y={104} r={-10} s={0.8} c="#9DB554" />
    <Leaf x={146} y={132} r={-140} s={0.8} c="#4C651E" /><Spark x={166} y={92} /><Spark x={36} y={90} s={5} c="#4C651E" /><Bubble x={160} y={64} r={8} />
  </>),
  /* ---------- creams & bleach ---------- */
  "anti-aging-cream": () => (<>
    <Shadow rx={70} />
    <Jar x={100} y={206} w={92} h={56} fill="#FFF8EE" lid="#E6A82E" lidH={16} />
    <path d="M64 170Q100 156 136 170" stroke={K} strokeOpacity=".3" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    <ellipse cx="100" cy="146" rx="46" ry="9" fill="#fff" {...S2} /><path d="M70 146c8-12 20-12 30 0c10-12 22-12 30 0" fill="#FFF8EE" {...S2} />
    {[[28, 196, 20], [44, 202, -30], [158, 198, 160], [172, 190, 120], [150, 206, 40]].map(([a, b, r], i) => <Clove key={i} x={Number(a)} y={Number(b)} r={Number(r)} />)}
    <g transform="translate(44 80)"><circle r="14" fill="#FFD36B" {...S2} />{[0, 45, 90, 135, 180, 225, 270, 315].map((a) => <path key={a} transform={`rotate(${a})`} d="M0-18V-24" stroke={K} strokeWidth="2.4" strokeLinecap="round" />)}</g>
    <g transform="translate(158 80)"><path d="M6-14A16 16 0 1 0 14 8A12 12 0 0 1 6-14Z" fill="#F3E3B8" {...S2} /></g>
    <Spark x={100} y={70} s={6} />
  </>),
  "organic-bleach": () => (<>
    <Shadow rx={74} />
    <Jar x={78} y={206} w={80} h={52} fill="#FFFFFF" lid="#F3E3D0" lidH={14} />
    <ellipse cx="78" cy="152" rx="36" ry="7" fill="#F6EFE4" stroke={K} strokeWidth="2.2" />
    <Sachet x={148} y={186} r={10} /><Sachet x={166} y={196} r={-18} fill="#BFE0F0" />
    <Spoon x={134} y={132} r={-20} />
    <path d="M58 180q6-5 12 0M84 186q6-5 12 0" stroke="#9CCBE3" strokeWidth="2.6" fill="none" strokeLinecap="round" />
    <Spark x={40} y={90} /><Spark x={158} y={80} s={6} c="#9CCBE3" /><Bubble x={110} y={80} r={9} /><Bubble x={124} y={104} r={5} />
  </>),
  /* ---------- serums, oils & more ---------- */
  "mulethi-majishta-face-serum": () => (<>
    <Shadow rx={58} />
    <Mulethi x={44} y={204} r={-16} s={0.9} />
    <rect x="68" y="128" width="64" height="78" rx="14" fill="#C4513A" {...S} />
    <path d="M76 140V196" stroke="#fff" strokeOpacity=".5" strokeWidth="4" strokeLinecap="round" />
    <rect x="86" y="112" width="28" height="18" rx="4" fill="#EBD9CF" {...S2} />
    <path d="M90 112V92Q90 70 100 70Q110 70 110 92V112Z" fill="#AA473B" {...S} />
    <path d="M97 100V86" stroke="#fff" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round" />
    <circle cx="100" cy="170" r="14" fill={CREAM} {...S2} /><path d="M93 174c0-9 8-11 14-7c0 8-7 12-14 7Z" fill="#E6A82E" stroke={K} strokeWidth="1.8" strokeLinejoin="round" />
    <Drop x={160} y={150} s={1} c="#E88A5C" /><Drop x={150} y={186} s={0.55} c="#E88A5C" /><Spark x={36} y={70} /><Spark x={164} y={80} s={5} c="#E6A82E" />
  </>),
  "eyebrow-thicker-oil": () => (<>
    <Shadow rx={74} />
    {/* two soft arched brows floating above, the whole point of the oil */}
    <path d="M30 70Q60 44 98 62" stroke={K} strokeWidth="9" fill="none" strokeLinecap="round" opacity=".85" /><path d="M110 62Q146 44 172 70" stroke={K} strokeWidth="9" fill="none" strokeLinecap="round" opacity=".85" />
    <rect x="84" y="112" width="36" height="94" rx="12" fill="#F2C24A" {...S} />
    <path d="M91 124V196" stroke="#fff" strokeOpacity=".55" strokeWidth="4" strokeLinecap="round" />
    <rect x="88" y="94" width="28" height="20" rx="4" fill="#4C651E" {...S2} /><circle cx="102" cy="88" r="9" fill="#D9BFB3" {...S2} />
    <circle cx="102" cy="158" r="12" fill={CREAM} {...S2} /><path d="M96 162c0-8 7-10 12-6c0 7-6 10-12 6Z" fill="#4C651E" stroke={K} strokeWidth="1.6" />
    <Bean x={42} y={194} r={20} c="#8A6A4A" /><Bean x={58} y={200} r={-30} c="#8A6A4A" />
    <ellipse cx="150" cy="198" rx="7" ry="10" transform="rotate(25 150 198)" fill="#E3C79E" {...S2} strokeWidth={1.8} /><ellipse cx="166" cy="194" rx="7" ry="10" transform="rotate(-15 166 194)" fill="#E3C79E" {...S2} strokeWidth={1.8} />
    <Spark x={40} y={120} /><Spark x={162} y={124} s={5} c="#4C651E" />
  </>),
  "organic-rose-water": () => (<>
    <Shadow rx={56} />
    <path d="M70 206V130Q70 118 82 118H118Q130 118 130 130V206Z" fill="#F7A6B8" fillOpacity=".95" {...S} />
    <path d="M78 140V196" stroke="#fff" strokeOpacity=".6" strokeWidth="4" strokeLinecap="round" />
    <path d="M72 168q7-6 14 0t14 0t14 0t14 0" stroke="#fff" strokeOpacity=".6" strokeWidth="2.6" fill="none" strokeLinecap="round" />
    <rect x="88" y="100" width="24" height="20" rx="4" fill="#FFF8EE" {...S2} />
    <path d="M90 100V82H118Q130 82 130 92" fill="none" stroke={K} strokeWidth="11" strokeLinecap="round" /><path d="M90 100V82H118Q130 82 130 92" fill="none" stroke="#FFF8EE" strokeWidth="5" strokeLinecap="round" />
    {[[142, 66, 5], [152, 76, 3], [150, 60, 3]].map(([a, b, r], i) => <circle key={i} cx={a} cy={b} r={r} fill="#fff" fillOpacity=".8" stroke={K} strokeWidth="1.6" />)}
    <Rose x={36} y={182} s={0.9} c="#FE5871" /><Rose x={166} y={188} s={0.7} c="#FA9EAD" /><Leaf x={44} y={204} r={-30} s={0.6} c="#4C651E" /><Leaf x={152} y={204} r={-150} s={0.55} c="#4C651E" />
    <Spark x={40} y={90} /><Spark x={164} y={130} s={5} c="#4C651E" />
  </>),
  "painless-wax-powder": () => (<>
    <Shadow rx={74} />
    <Bowl x={106} y={206} w={116} fill="#8A5A3A" content="#E9C9A8" shade="#C79B73" />
    <Spoon x={34} y={200} r={-20} />
    <Bean x={160} y={194} r={20} /><Bean x={174} y={200} r={-30} /><Bean x={150} y={206} r={60} />
    <Rose x={160} y={150} s={0.8} c="#FA9EAD" /><Leaf x={168} y={168} r={-30} s={0.55} c="#4C651E" />
    <path d="M70 176q6-6 12 0M100 172q6-6 12 0" stroke={K} strokeOpacity=".25" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <Spark x={42} y={80} /><Spark x={110} y={64} s={5} c="#4C651E" /><Drop x={160} y={86} s={0.75} />
  </>),
  /* ---------- hair ---------- */
  "multi-herb-hair-protein-pack": () => (<>
    <Shadow rx={76} />
    <Bowl x={108} y={206} w={120} fill="#A8703F" content="#B58A4F" shade="#7C5230" />
    <path d="M62 170q20-16 46-6v-6q-22-12-46 8Z" fill="#7C9A3C" stroke={K} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M108 164q22-14 46 6q-8-26-46-12Z" fill="#E8B04A" stroke={K} strokeWidth="1.8" strokeLinejoin="round" />
    <Petal5 x={34} y={176} s={0.85} /><Leaf x={150} y={194} r={-150} s={0.7} c="#4C651E" />
    <circle cx="168" cy="176" r="10" fill="#A9C25A" {...S2} /><circle cx="182" cy="188" r="8" fill="#8DB04A" {...S2} />
    {[[56, 190], [70, 196], [48, 200], [150, 168], [160, 160]].map(([a, b], i) => <Seed key={i} x={a} y={b} r={i * 40} />)}
    <Spark x={40} y={86} /><Spark x={164} y={80} s={5} c="#4C651E" /><Leaf x={96} y={92} r={-60} s={0.7} c="#4C651E" />
  </>),
};

/** Backdrop colours, one per product (all soft, all from the site palette). */
export const artTint: Record<string, string> = {
  "neem-soap": "#D8E6B4", "rice-soap": "#F6E3CF", "avocado-soap": "#E3EDB8", "pigmentation-soap": "#FBD98B", "fitkari-soap": "#DCEEF2",
  "manicure-pedicure-scrub-soap": "#F4DCCB", "moroccan-whitening-soap": "#C9DEF6", "mulethi-majesta-face-wash": "#F8D1C6", "rice-face-pack": "#F3E6D2",
  "vitamin-c-facial-kit": "#FFE1AE", "green-tea-facial-kit": "#D3E5B4", "anti-aging-cream": "#FBD3DA", "organic-bleach": "#D9ECF3",
  "mulethi-majishta-face-serum": "#F5CDBE", "eyebrow-thicker-oil": "#EEE3B6", "organic-rose-water": "#FCD5DE", "painless-wax-powder": "#F1DCC8",
  "multi-herb-hair-protein-pack": "#E4E3B4",
};

export const hasArt = (slug: string) => slug in scenes;

export default function ProductArt({ slug, label, className = "" }: { slug: string; label?: string; className?: string }) {
  const Scene = scenes[slug];
  const tint = artTint[slug] ?? "#F3E6D2";
  if (!Scene) return null;
  return (
    <svg viewBox="0 0 200 240" role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} className={`block w-full h-auto ${className}`}>
      <rect width="200" height="240" fill={tint} />
      <path d="M22 206V96C22 54 58 26 100 26S178 54 178 96V206Z" fill="#fff" fillOpacity=".5" />
      <path d="M34 206V100C34 64 64 40 100 40S166 64 166 100V206Z" fill="none" stroke="#fff" strokeOpacity=".85" strokeWidth="2" />
      <rect y="206" width="200" height="34" fill="#C99A63" /><rect y="206" width="200" height="5" fill="#E3BE8C" />
      <path d="M0 222H200M0 233H200" stroke="#A97A46" strokeOpacity=".35" strokeWidth="1.4" />
      <Scene />
    </svg>
  );
}
