import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-shell flex flex-col items-start gap-4 py-24">
      <h1 className="text-text text-3xl font-semibold">Page not found</h1>
      <p className="text-text-muted">That route does not exist in this draft.</p>
      <Link
        href="/"
        className="bg-primary text-primary-fg inline-flex min-h-11 items-center rounded px-5 py-3 text-sm font-medium"
      >
        Back to home
      </Link>
    </div>
  );
}
