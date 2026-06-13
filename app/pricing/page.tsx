export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold">
            Simple & Transparent
            <span className="text-red-500"> Pricing</span>
          </h1>

          <p className="mt-6 text-xl text-slate-400">
            Start free and upgrade when you need more
            monitors and faster checks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">
              Free
            </h2>

            <div className="mb-8">
              <span className="text-6xl font-bold text-red-500">
                ₹0
              </span>

              <span className="text-slate-400 text-xl">
                /month
              </span>
            </div>

            <ul className="space-y-4 text-slate-300">
              <li>✓ 5 Website Monitors</li>
              <li>✓ 5 Minute Checks</li>
              <li>✓ Email Alerts</li>
              <li>✓ SSL Monitoring</li>
              <li>✓ Public Status Pages</li>
            </ul>

            <a
              href="/signup"
              className="block text-center mt-10 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition"
            >
              Start Free
            </a>
          </div>

          {/* Pro */}
          <div className="bg-slate-900 border border-red-600 rounded-3xl p-10 relative">
            <div className="absolute top-6 right-6 bg-red-600 px-3 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>

            <h2 className="text-3xl font-bold mb-6">
              Pro
            </h2>

            <div className="mb-8">
              <span className="text-6xl font-bold text-red-500">
                ₹299
              </span>

              <span className="text-slate-400 text-xl">
                /month
              </span>
            </div>

            <ul className="space-y-4 text-slate-300">
              <li>✓ 50 Website Monitors</li>
              <li>✓ 1 Minute Checks</li>
              <li>✓ Instant Email Alerts</li>
              <li>✓ SSL Monitoring</li>
              <li>✓ API Monitoring</li>
              <li>✓ Public Status Pages</li>
              <li>✓ Priority Support</li>
            </ul>

            <a
              href="/signup"
              className="block text-center mt-10 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition"
            >
              Upgrade to Pro
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Can I use PingWatch for free?
              </h3>
              <p className="text-slate-400">
                Yes. The Free plan includes 5 monitors,
                SSL monitoring and email alerts.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                How often are websites checked?
              </h3>
              <p className="text-slate-400">
                Free plans are checked every 5 minutes.
                Pro plans are checked every minute.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Do you monitor SSL certificates?
              </h3>
              <p className="text-slate-400">
                Yes. PingWatch automatically alerts you
                before SSL certificates expire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
