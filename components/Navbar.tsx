import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-red-900/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <Link href="/" className="flex items-center gap-4">
          <div className="relative">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          <div>
            <h1 className="text-3xl font-bold leading-none">
              <span className="text-white">Ping</span>
              <span className="text-red-500">Watch</span>
            </h1>

            <p className="text-xs text-slate-400 mt-1 tracking-wide">
              WEBSITE MONITORING PLATFORM
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-8 text-slate-300 font-medium">
          <Link
            href="/features"
            className="hover:text-red-500 transition"
          >
            Features
          </Link>

          <Link
            href="/pricing"
            className="hover:text-red-500 transition"
          >
            Pricing
          </Link>

          <Link
            href="/contact"
            className="hover:text-red-500 transition"
          >
            Contact
          </Link>

          <Link
            href="/login"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition font-semibold"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}
