export default function FeaturesPage() {
  const features = [
    {
      title: "Website Monitoring",
      icon: "🌐",
      description: "Monitor websites 24/7 and detect downtime instantly.",
    },
    {
      title: "API Monitoring",
      icon: "🔌",
      description: "Track API availability and response times.",
    },
    {
      title: "SSL Alerts",
      icon: "🔒",
      description: "Get notified before SSL certificates expire.",
    },
    {
      title: "Email Notifications",
      icon: "📧",
      description: "Receive alerts whenever a monitor goes down.",
    },
    {
      title: "Uptime Reports",
      icon: "📊",
      description: "View uptime percentages and historical reports.",
    },
    {
      title: "Fast Checks",
      icon: "🚀",
      description: "Run monitoring checks every minute.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          Powerful Monitoring Features
        </h1>

        <p className="text-xl text-gray-600 mt-4">
          Everything you need to keep your services online.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">
              {feature.icon}
            </div>

            <h2 className="text-xl font-semibold mb-2">
              {feature.title}
            </h2>

            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
