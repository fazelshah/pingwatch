// components/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <Link href="/" className="font-bold text-xl">
          PingWatch
        </Link>

        <div className="flex gap-6">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
