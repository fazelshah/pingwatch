export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold">
            Contact
            <span className="text-red-500"> PingWatch</span>
          </h1>

          <p className="mt-6 text-xl text-slate-400">
            Have questions, feedback, or need support?
            We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Support
            </h2>

            <p className="text-slate-400 mb-6">
              For technical issues, monitoring alerts,
              account questions, or general help.
            </p>

            <a
              href="mailto:support@fazelshah.fun"
              className="text-red-500 text-lg font-semibold"
            >
              support@fazelshah.fun
            </a>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Response Time
            </h2>

            <p className="text-slate-400">
              We typically respond to support requests
              within 24 hours.
            </p>

            <div className="mt-6">
              <span className="inline-block bg-red-600 px-4 py-2 rounded-xl font-semibold">
                24/7 Monitoring
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold">
            Need Help Getting Started?
          </h2>

          <p className="mt-4 text-slate-400">
            Create your first monitor in less than a minute
            and start receiving uptime alerts.
          </p>

          <a
            href="/signup"
            className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            Create Free Account
          </a>
        </div>
      </div>
    </main>
  );
}
