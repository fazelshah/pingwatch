import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="PingWatch"
            width={380}
            height={185}
            priority
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-gray-700 font-medium">

          <Link
            href="/features"
            className="hover:text-black transition"
          >
            Features
          </Link>

          <Link
            href="/pricing"
            className="hover:text-black transition"
          >
            Pricing
          </Link>

          <Link
            href="/contact"
            className="hover:text-black transition"
          >
            Contact
          </Link>

          <Link
            href="/login"
            className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}
