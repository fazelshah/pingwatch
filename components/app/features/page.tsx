export default function FeaturesPage() {
  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">Features</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Website Monitoring</h2>
          <p>Monitor your websites 24/7.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">API Monitoring</h2>
          <p>Track API availability and response times.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">SSL Monitoring</h2>
          <p>Get alerts before certificates expire.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Email Alerts</h2>
          <p>Receive notifications when services go down.</p>
        </div>
      </div>
    </main>
  );
}
