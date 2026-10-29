/* A template (unlike a layout) is re-created on every navigation, so each page gently eases in. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
