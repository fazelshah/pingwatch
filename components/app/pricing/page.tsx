export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-10">Pricing</h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border p-6 rounded">
          <h2 className="text-2xl font-bold">Free</h2>
          <p className="text-4xl mt-4">₹0</p>

          <ul className="mt-6 space-y-2">
            <li>✓ 3 Monitors</li>
            <li>✓ 5-minute checks</li>
            <li>✓ Email alerts</li>
          </ul>
        </div>

        <div className="border p-6 rounded">
          <h2 className="text-2xl font-bold">Pro</h2>
          <p className="text-4xl mt-4">₹199/mo</p>

          <ul className="mt-6 space-y-2">
            <li>✓ 50 Monitors</li>
            <li>✓ 1-minute checks</li>
            <li>✓ SSL Monitoring</li>
            <li>✓ Priority Support</li>
          </ul>
        </div>

      </div>
    </main>
  );
}
