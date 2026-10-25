import { getReviews, type Review } from "@/lib/reviews";
import { reviewLink } from "@/lib/whatsapp";
import ShotViewer from "./ShotViewer";
import WhatsAppButton from "./WhatsAppButton";

/* six different "scraps of paper" so the line never looks like a grid of identical cards */
const styles = [
  { box: "bg-blush text-ink -rotate-2", extra: "rounded-md [clip-path:polygon(0_0,100%_0,100%_93%,92%_100%,0_100%)]" },
  { box: "bg-white text-ink rotate-1 border-2 border-brown", extra: "rounded-2xl" },
  { box: "bg-coral text-cream -rotate-1", extra: "rounded-[2rem] rounded-bl-md" },
  { box: "bg-leaf text-cream rotate-2", extra: "rounded-xl outline outline-2 outline-dashed outline-cream/50 -outline-offset-8" },
  { box: "bg-beige text-ink -rotate-1", extra: "rounded-lg" },
  { box: "bg-sun/90 text-ink rotate-1", extra: "rounded-md [clip-path:polygon(0_0,100%_0,100%_100%,8%_100%,0_93%)]" },
] as const;

function Note({ r, i }: { r: Review; i: number }) {
  const st = styles[i % styles.length];
  const light = st.box.includes("text-cream");
  return (
    <figure className={`${st.box} ${st.extra} relative p-6 pt-9 shadow-[4px_6px_0_rgba(96,49,43,.18)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}>
      <span aria-hidden className={`font-script text-6xl leading-none absolute top-1 left-3 ${light ? "text-cream/60" : "text-coral"}`}>“</span>
      <blockquote className="font-display italic text-[1.08rem] leading-snug">{r.quote}</blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="font-semibold">{r.name}{r.place && <span className="font-normal opacity-80">, {r.place}</span>}</span>
        {r.product && <span className={`mt-1.5 block w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${light ? "bg-cream/20" : "bg-cream/75"}`}>{r.product}</span>}
      </figcaption>
      {r.shot && <ShotViewer shot={r.shot} who={r.product ?? "GP Herbal"} light={light} />}
    </figure>
  );
}

/** One clothesline cell: a segment of string, a peg, and whatever hangs from it. */
function Cell({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <li className="relative px-3 pt-8 pb-6" style={{ marginTop: [0, 18, 6][i % 3] }}>
      <span aria-hidden className="absolute left-0 right-0 top-3 border-t-2 border-brown/50" />
      <span aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-10 rounded-sm bg-terra border-2 border-brown z-10" />
      <span aria-hidden className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brown z-20" />
      {children}
    </li>
  );
}

const Heart = ({ className = "", c = "#FE5871" }: { className?: string; c?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden><path d="M12 21C4 15 2 10.5 4.2 7.2C6.2 4.4 10 5.2 12 8c2-2.8 5.8-3.6 7.8-.8C22 10.5 20 15 12 21Z" fill={c} stroke="#60312B" strokeWidth="1.8" strokeLinejoin="round" /></svg>
);

export default function Reviews() {
  const list = getReviews();
  const first = list.slice(0, 6), more = list.slice(6);
  return (
    <section aria-labelledby="reviews-h" className="relative bg-beige/40 py-16 mt-6 overflow-hidden">
      {/* a few hearts drifting about */}
      <Heart className="float absolute left-[4%] top-12 w-8 hidden sm:block" />
      <Heart className="float absolute right-[5%] top-40 w-6 hidden sm:block [animation-delay:-2s]" c="#FA9EAD" />
      <Heart className="float absolute left-[7%] bottom-24 w-6 hidden md:block [animation-delay:-3s]" c="#FA9EAD" />
      <Heart className="float absolute right-[8%] bottom-16 w-9 hidden md:block [animation-delay:-1s]" />

      <div className="mx-auto max-w-6xl px-4 relative">
        <p className="text-leaf text-sm font-semibold text-center">Customer notes</p>
        <h2 id="reviews-h" className="font-display text-4xl md:text-5xl text-brick text-center mt-2">
          kind reviews, <span className="font-script text-leaf text-5xl md:text-6xl">w've got.</span>
        </h2>
        <p className="mt-3 text-center max-w-md mx-auto text-ink/80">Straight from our WhatsApp inbox.</p>

        <div className="spin-slow absolute -right-1 top-0 hidden lg:block w-24 h-24" aria-hidden>
          <svg viewBox="0 0 100 100"><defs><path id="rv" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0" /></defs>
            <circle cx="50" cy="50" r="48" fill="#2E5A22" stroke="#F9F4EB" strokeWidth="2" />
            <text fontSize="9" fill="#F9F4EB" letterSpacing="1.4" fontFamily="sans-serif" fontWeight="600"><textPath href="#rv">REAL • WHATSAPP • NOTES • </textPath></text>
            <path d="M50 38C60 32 68 40 62 49C58 55 50 60 50 62C50 60 42 55 38 49C32 40 40 32 50 38Z" fill="#FA9EAD" /></svg>
        </div>

        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 items-start">{first.map((r, i) => <Cell key={r.id} i={i}><Note r={r} i={i} /></Cell>)}</ul>

        {more.length > 0 && (
          <details className="group mt-2">
            <summary className="btn btn-olive flex! w-fit mx-auto cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">Hang up {more.length} more notes</span>
              <span className="hidden group-open:inline">Tuck the extra notes away</span>
            </summary>
            <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 items-start">{more.map((r, i) => <Cell key={r.id} i={i}><Note r={r} i={i + 6} /></Cell>)}</ul>
          </details>
        )}
      </div>
    </section>
  );
}
