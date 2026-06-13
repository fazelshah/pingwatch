export default function FeaturesPage() {
  const features = [
    {
      title: "Website Monitoring",
      icon: "🌐",
      description:
        "Monitor websites every minute and receive instant downtime alerts.",
    },
    {
      title: "API Monitoring",
      icon: "⚡",
      description:
        "Track API availability, response times and reliability.",
    },
    {
      title: "SSL Monitoring",
      icon: "🔒",
      description:
        "Get notified before SSL certificates expire.",
    },
    {
      title: "Email Alerts",
      icon: "📧",
      description:
        "Receive instant email notifications when incidents occur.",
    },
    {
      title: "Public Status Pages",
      icon: "📊",
      description:
        "Share service status and uptime information with customers.",
    },
    {
      title: "1 Minute Checks",
      icon: "🚀",
      description:
        "Detect outages quickly with frequent monitoring checks.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold">
            Powerful Monitoring
            <span className="text-red-500"> Features</span>
          </h1>

          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to monitor websites, APIs and SSL
            certificates from a single dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-red-500 transition"
            >
              <div className="text-4xl mb-6">
                {feature.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {feature.title}
              </h2>

              <p className="text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Start Monitoring?
          </h2>

          <p className="mt-4 text-slate-400 text-lg">
            Create your free account and start monitoring your
            services in minutes.
          </p>

          <a
            href="/signup"
            className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            Start Free
          </a>
        </div>
      </div>
    </main>
  );
}
