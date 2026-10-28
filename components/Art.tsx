import { Leaf } from "lucide-react";
import Illustration, { hasIllustration } from "./Illustrations";

const tint = { coral: "#FFD0D6", olive: "#D8E0BE", beige: "#EBD9CF", pink: "#FBC3CC" } as const;

/** Hand-drawn category illustration on a soft tint. */
export default function Art({ alt, tone = "beige", slug, className = "" }:
  { alt: string; tone?: keyof typeof tint; slug?: string; className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`} style={{ backgroundColor: tint[tone] }}>
      <div role="img" aria-label={alt || undefined} aria-hidden={alt ? undefined : true} className="absolute inset-0 grid place-items-center p-[8%]">
        {hasIllustration(slug) ? <Illustration slug={slug} /> : <Leaf size={72} strokeWidth={1.2} className="text-brown" aria-hidden />}
      </div>
    </div>
  );
}
