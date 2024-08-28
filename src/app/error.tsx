"use client";

import { useEffect } from "react";
import Link from "next/link";
import { cormorant } from "../lib/fonts";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-50">
      <h1 className={`${cormorant.className} text-6xl font-bold mb-4`}>
        Something Went Wrong
      </h1>
      <p className="mb-6 text-lg text-center max-w-md">
        We encountered an unexpected error. Please try again later.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-slate-50 text-slate-900 rounded-md transition"
          aria-label="Try Again"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-slate-900 text-slate-50 border border-slate-50 rounded-md transition"
          aria-label="Go Back Home"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
