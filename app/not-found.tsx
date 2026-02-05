// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-gradient-hero text-white px-6 py-3 rounded-lg font-semibold"
      >
        Go back home
      </Link>
    </div>
  );
}
