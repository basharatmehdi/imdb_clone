"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-96 flex flex-col items-center justify-center">
      <h2 className="text-lg font-semibold">Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="bg-black text-white rounded-md px-4 py-1 hover:bg-black/60 transition duration-200"
      >
        Try again
      </button>
    </div>
  );
}
