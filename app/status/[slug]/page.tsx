import { supabase } from "@/lib/supabase";

export default async function StatusPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: statusPage } = await supabase
  .from("status_pages")
  .select("*")
  .eq("slug", slug)
  .single();

if (!statusPage) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Status Page Not Found
      </h1>
    </div>
  );
}

  const { data: monitors } = await supabase
    .from("monitors")
    .select("*")
.eq(

    "status_page_id",

    statusPage.id

  )
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
  {statusPage.name}
</h1>

<p className="text-zinc-500 mb-10">
  Real-time availability and uptime information.
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
  Service Monitor
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
