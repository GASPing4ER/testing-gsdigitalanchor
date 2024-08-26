// app/not-found.js

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-50">
      <h1 className="text-6xl font-semibold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="mb-8 text-lg text-center max-w-md">
        Sorry, the page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-slate-50 text-slate-900 rounded-md hover:bg-slate-50/50 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
