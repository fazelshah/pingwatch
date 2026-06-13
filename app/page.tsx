import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <main>
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-6 py-32 text-center">
            <h1 className="text-7xl font-bold leading-tight">
              Know When Your Website
              <br />
              Goes Down Before
              <br />
              <span className="text-red-500">
                Your Customers Do
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-400 max-w-3xl mx-auto">
              Monitor websites, APIs and SSL certificates
              from one dashboard. Get instant email alerts
              before downtime impacts your customers.
            </p>

            <div className="mt-12 flex justify-center gap-4">
              <a
                href="/signup"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Start Free
              </a>

              <a
                href="/pricing"
                className="border border-slate-700 px-8 py-4 rounded-xl hover:bg-slate-900 transition"
              >
                Pricing
              </a>
            </div>
          </section>

          {/* Dashboard Preview */}
          <section className="max-w-6xl mx-auto px-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="border-b border-slate-800 p-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-8">
                  PingWatch Dashboard
                </h2>

                <div className="space-y-4">
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex justify-between">
                    <span>google.com</span>

                    <span className="text-green-400 font-semibold">
                      🟢 UP
                    </span>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex justify-between">
                    <span>github.com</span>

                    <span className="text-green-400 font-semibold">
                      🟢 UP
                    </span>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex justify-between">
                    <span>api.myapp.com</span>

                    <span className="text-red-400 font-semibold">
                      🔴 DOWN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="max-w-6xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
                <h3 className="text-5xl font-bold text-red-500">
                  99.99%
                </h3>

                <p className="mt-3 text-slate-400">
                  Uptime Tracking
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
                <h3 className="text-5xl font-bold text-red-500">
                  1 Min
                </h3>

                <p className="mt-3 text-slate-400">
                  Check Frequency
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
                <h3 className="text-5xl font-bold text-red-500">
                  &lt;30s
                </h3>

                <p className="mt-3 text-slate-400">
                  Alert Delivery
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-5xl font-bold text-center mb-16">
              Everything You Need
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h3 className="font-bold text-2xl mb-4 text-red-500">
                  Website Monitoring
                </h3>

                <p className="text-slate-400">
                  Monitor websites every minute and get
                  notified instantly when they go offline.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h3 className="font-bold text-2xl mb-4 text-red-500">
                  API Monitoring
                </h3>

                <p className="text-slate-400">
                  Track API response times and availability
                  from one dashboard.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h3 className="font-bold text-2xl mb-4 text-red-500">
                  SSL Monitoring
                </h3>

                <p className="text-slate-400">
                  Receive alerts before SSL certificates
                  expire and avoid downtime.
                </p>
              </div>
            </div>
          </section>

          


          {/* CTA */}
          <section className="py-28 mt-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-6xl font-bold">
                Ready to Stop Downtime Before It Costs You
                Customers?
              </h2>

              <p className="mt-6 text-xl text-slate-400">
                Monitor websites, APIs and SSL certificates
                from one dashboard with instant email
                alerts.
              </p>

              <div className="mt-8 space-y-2 text-slate-300">
                <p>✓ Website Monitoring</p>
                <p>✓ SSL Expiry Alerts</p>
                <p>✓ Public Status Pages</p>
              </div>

              <a
                href="/signup"
                className="inline-block mt-10 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-semibold transition"
              >
                Create Free Account
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
