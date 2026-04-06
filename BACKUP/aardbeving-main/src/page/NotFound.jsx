import React from "react";

export default function NotFound() {
  return (
    <main className="flex items-center justify-center py-10 md:py-5">
      <div className="text-center text-black">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-[--muted-foreground]">
          Oops! Page not found
        </p>
        <a href="/" className="underline hover:text-red-500">
          Return to Home
        </a>
      </div>
    </main>
  );
}
