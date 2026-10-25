import Link from "next/link";
export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="font-display text-8xl text-coral">404</p>
      <h1 className="font-display text-3xl text-brown mt-2">This page has wandered off</h1>
      <p className="mt-3">Let us help you find your way back.</p>
      <div className="mt-8 flex justify-center gap-3 flex-wrap">
        <Link href="/" className="btn btn-olive">Home</Link>
        <Link href="/products/" className="btn btn-line">Browse products</Link>
      </div>
    </div>
  );
}
