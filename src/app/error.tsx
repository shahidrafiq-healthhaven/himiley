"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="text-[22px] font-semibold text-[#111111]">Something went wrong.</h2>
      <p className="text-[14px] text-[#555555] max-w-[420px]">
        Please try again. If this keeps happening, refresh the page.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center justify-center px-6 py-3 bg-[#9D174D] text-white text-[14px] font-semibold rounded-sm hover:bg-[#7E0F3E] transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
