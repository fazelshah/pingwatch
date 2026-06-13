// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h3 className="text-xl font-bold text-white">
              PingWatch
            </h3>

            <p className="text-slate-400 mt-2">
              Website, API & SSL Monitoring.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400">
              support@fazelshah.fun
            </p>

            <p className="text-slate-500 text-sm mt-2">
              © 2026 PingWatch. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
