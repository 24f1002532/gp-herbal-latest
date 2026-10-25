import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ href, label, variant = "olive", className = "" }:
  { href: string; label: string; variant?: "olive" | "line" | "text"; className?: string }) {
  const cls = variant === "text"
    ? "inline-flex items-center gap-2 font-semibold text-olive underline underline-offset-4 hover:text-coral"
    : `btn btn-${variant}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${cls} ${className}`}>
      <MessageCircle size={18} aria-hidden /> {label}
      <span className="sr-only"> (opens WhatsApp in a new tab)</span>
    </a>
  );
}
