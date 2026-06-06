export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          Simple & Transparent Pricing
        </h1>

        <p className="text-xl text-gray-600 mt-4">
          Start for free and upgrade as your monitoring needs grow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Free Plan */}
        <div className="border rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
          <h2 className="text-3xl font-bold">Free</h2>

          <p className="text-5xl font-bold mt-6">
            ₹0
            <span className="text-lg font-normal text-gray-500">
              /month
            </span>
          </p>

          <ul className="mt-8 space-y-4">
            <li>✅ 3 Website Monitors</li>
            <li>✅ 5 Minute Checks</li>
            <li>✅ Email Alerts</li>
            <li>✅ Uptime Dashboard</li>
          </ul>

          <button className="w-full mt-8 bg-black text-white py-3 rounded-lg">
            Start Free
          </button>
        </div>

        {/* Pro Plan */}
        <div className="border-2 border-black rounded-2xl p-8 shadow-lg relative">

          <span className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm">
            Popular
          </span>

          <h2 className="text-3xl font-bold">
            Pro
          </h2>

          <p className="text-5xl font-bold mt-6">
            ₹199
            <span className="text-lg font-normal text-gray-500">
              /month
            </span>
          </p>

          <ul className="mt-8 space-y-4">
            <li>✅ 50 Website Monitors</li>
            <li>✅ 1 Minute Checks</li>
            <li>✅ SSL Monitoring</li>
            <li>✅ API Monitoring</li>
            <li>✅ Priority Support</li>
            <li>✅ Uptime Reports</li>
          </ul>

          <button className="w-full mt-8 bg-black text-white py-3 rounded-lg">
            Upgrade to Pro
          </button>
        </div>

      </div>

      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">
          Need More?
        </h2>

        <p className="mt-4 text-gray-600">
          Contact us for custom enterprise plans.
        </p>
      </div>
    </main>
  );
}
