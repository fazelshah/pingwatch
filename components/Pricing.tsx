export default function Pricing() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Pricing Plans
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        <div className="border rounded-xl p-8 shadow">
          <h3 className="text-2xl font-bold">Free</h3>

          <ul className="mt-4 space-y-2">
            <li>✅ 3 monitors</li>
            <li>✅ 5-minute checks</li>
          </ul>

          <p className="mt-6 text-4xl font-bold">
            ₹0<span className="text-lg">/month</span>
          </p>
        </div>

        <div className="border rounded-xl p-8 shadow">
          <h3 className="text-2xl font-bold">Pro</h3>

          <ul className="mt-4 space-y-2">
            <li>✅ 50 monitors</li>
            <li>✅ 1-minute checks</li>
            <li>✅ Email alerts</li>
          </ul>

          <p className="mt-6 text-4xl font-bold">
            ₹199<span className="text-lg">/month</span>
          </p>
        </div>

      </div>
    </section>
  );
}
