import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">

          <h1 className="text-6xl font-bold leading-tight">
            Monitor Websites,
            <br />
            APIs & SSL Certificates
            <br />
            24/7
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant alerts when your website goes down.
            Monitor uptime, response times and SSL expiry
            from a single dashboard.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <a
              href="/signup"
              className="bg-black text-white px-8 py-4 rounded-xl hover:opacity-90"
            >
              Start Free
            </a>

            <a
              href="/pricing"
              className="border px-8 py-4 rounded-xl"
            >
              Pricing
            </a>

          </div>

        </section>

        {/* Dashboard Preview */}
        <section className="max-w-5xl mx-auto px-6">

          <div className="border rounded-2xl shadow-xl bg-white overflow-hidden">

            <div className="border-b p-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            <div className="p-8">

              <h2 className="text-2xl font-bold mb-6">
                PingWatch Dashboard
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between border rounded-lg p-4">
                  <span>google.com</span>
                  <span className="text-green-600 font-semibold">
                    🟢 UP
                  </span>
                </div>

                <div className="flex justify-between border rounded-lg p-4">
                  <span>github.com</span>
                  <span className="text-green-600 font-semibold">
                    🟢 UP
                  </span>
                </div>

                <div className="flex justify-between border rounded-lg p-4">
                  <span>api.myapp.com</span>
                  <span className="text-red-600 font-semibold">
                    🔴 DOWN
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Stats Section */}
        <section className="max-w-6xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-bold">
                99.99%
              </h3>

              <p className="mt-2 text-gray-600">
                Uptime Tracking
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                24/7
              </h3>

              <p className="mt-2 text-gray-600">
                Monitoring
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                &lt;30s
              </h3>

              <p className="mt-2 text-gray-600">
                Alert Delivery
              </p>
            </div>

          </div>

        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-4xl font-bold text-center mb-12">
            Everything You Need
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-xl p-8 shadow-sm">
              <h3 className="font-bold text-2xl mb-4">
                Website Monitoring
              </h3>

              <p className="text-gray-600">
                Monitor websites every minute and get
                notified instantly when they go offline.
              </p>
            </div>

            <div className="border rounded-xl p-8 shadow-sm">
              <h3 className="font-bold text-2xl mb-4">
                API Monitoring
              </h3>

              <p className="text-gray-600">
                Track API response times and
                availability from one dashboard.
              </p>
            </div>

            <div className="border rounded-xl p-8 shadow-sm">
              <h3 className="font-bold text-2xl mb-4">
                SSL Monitoring
              </h3>

              <p className="text-gray-600">
                Receive alerts before SSL certificates
                expire and avoid downtime.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-24 text-center bg-gray-50 mt-20">

          <h2 className="text-5xl font-bold">
            Start Monitoring Today
          </h2>

          <p className="mt-4 text-xl text-gray-600">
            Free plan available. No credit card required.
          </p>

          <a
            href="/signup"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-xl"
          >
            Create Free Account
          </a>

        </section>

      </main>

      <Footer />
    </>
  );
}
