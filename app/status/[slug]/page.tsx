import { supabase } from "@/lib/supabase";

export default async function StatusPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: monitors } = await supabase
    .from("monitors")
    .select("*")
    .eq("status_page_slug", slug)
    .order("created_at", {
      ascending: false,
    });

  const overallStatus =
    monitors?.some(
      (monitor) =>
        monitor.status === "DOWN"
    )
      ? "DOWN"
      : "UP";

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto p-10">

        <h1 className="text-5xl font-bold mb-3">
          Status Page
        </h1>

        <p className="text-zinc-500 mb-10">
          Public system status
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            System Status
          </h2>

          <p
            className={`text-xl font-bold ${
              overallStatus === "UP"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {overallStatus === "UP"
              ? "🟢 All Systems Operational"
              : "🔴 Partial Outage"}
          </p>
        </div>

        <div className="space-y-4">
          {(monitors || []).map(
            (monitor) => (
              <div
                key={monitor.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {monitor.name}
                  </h3>

                  <p className="text-zinc-500 text-sm">
                    {monitor.url}
                  </p>
                </div>

                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      monitor.status ===
                      "UP"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {monitor.status ===
                    "UP"
                      ? "🟢 Operational"
                      : "🔴 Down"}
                  </p>

                  <p className="text-zinc-500 text-xs mt-1">
                    Last Check:{" "}
                    {monitor.last_checked
                      ? new Date(
                          monitor.last_checked
                        ).toLocaleString()
                      : "Never"}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-10 text-center text-zinc-600 text-sm">
          Powered by PingWatch
        </div>

      </div>
    </div>
  );
}
