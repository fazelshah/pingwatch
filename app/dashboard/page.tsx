"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [alertEmail, setAlertEmail] = useState("");
  const [monitors, setMonitors] = useState<any[]>([]);
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  const pathname = usePathname();

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/login";
      return;
    }

    setUserEmail(user.email || "");
    setLoading(false);
  }

  async function loadMonitors() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const res = await fetch("/api/monitors");
    const data = await res.json();

    const myMonitors = (data || []).filter(
      (monitor: any) => monitor.email === user.email
    );

    setMonitors(myMonitors);
  }

  async function addMonitor() {
    if (!name || !url || !alertEmail) {
      alert("Please fill all fields");
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login");
      return;
    }

    let finalUrl = url.trim();

    if (
      !finalUrl.startsWith("http://") &&
      !finalUrl.startsWith("https://")
    ) {
      finalUrl = `https://${finalUrl}`;
    }

    try {
      new URL(finalUrl);
    } catch {
      alert("Please enter a valid URL");
      return;
    }
const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(alertEmail)) {
  alert("Please enter a valid alert email");
  return;
}
    setAdding(true);

    const res = await fetch("/api/monitors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        url: finalUrl,
        email: user.email,
       alert_email: alertEmail,
      }),
    });

    const result = await res.json();

    if (result.error) {
      setAdding(false);
      alert(result.error);
      return;
    }

    setName("");
    setUrl("");
   setAlertEmail("");

    await fetch("/api/run-checks");
    await loadMonitors();

    setAdding(false);
  }

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  useEffect(() => {
    checkUser();
    loadMonitors();

    const interval = setInterval(() => {
      loadMonitors();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const upCount = monitors.filter(
    (m) => m.status === "UP"
  ).length;

  const downCount = monitors.filter(
    (m) => m.status === "DOWN"
  ).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl font-semibold">
          Loading Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-72 bg-zinc-950 border-r border-red-950 p-6 flex flex-col">
        <h1 className="text-4xl font-bold mb-8">
          <span className="text-red-500">●</span> PingWatch
        </h1>

        <button
          onClick={logout}
          className="mb-8 w-full border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition px-4 py-3 rounded-xl text-left font-medium"
        >
          Logout
        </button>

        <div className="space-y-2">
          {[
            { href: "/dashboard", label: "Monitoring" },
            { href: "/incidents", label: "Incidents" },
            { href: "/status-pages", label: "Status Pages" },
            { href: "/maintenance", label: "Maintenance" },
            { href: "/team-members", label: "Team Members" },
            { href: "/settings", label: "Settings" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-xl transition ${
                pathname === item.href
                  ? "bg-zinc-900 border-l-4 border-red-500 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-auto">
	          <div className="bg-zinc-900 rounded-xl p-4 flex items-center gap-3 border border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white">
              {userEmail
                ? userEmail.charAt(0).toUpperCase()
                : "U"}
            </div>

            <div>
              <p className="font-semibold text-white">
                {userEmail
                  ? userEmail
                      .split("@")[0]
                      .replace(/[._-]/g, " ")
                      .replace(/\b\w/g, (c) =>
                        c.toUpperCase()
                      )
                  : "User"}
              </p>

              <p className="text-xs text-zinc-500">
                {userEmail}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-10">
        <div className="mb-8">
          <h2 className="text-5xl font-bold tracking-tight">
            Monitors
            <span className="text-red-500">.</span>
          </h2>

          <p className="text-zinc-500 mt-2">
            Monitor websites, APIs and SSL certificates.
          </p>
        </div>

        {/* Add Monitor */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <input
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 flex-1"
            placeholder="Website Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 flex-1"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input

    className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3"

    placeholder="alerts@example.com"

    value={alertEmail}

    onChange={(e) => setAlertEmail(e.target.value)}

  />
          <button
            onClick={addMonitor}
            disabled={adding}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-medium disabled:opacity-50"
          >
            {adding ? "Checking..." : "+ New"}
          </button>
        </div>

        {/* Monitor Cards */}
        <div className="space-y-4">
          {monitors.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center">
              <h3 className="text-xl font-semibold mb-2">
                No Monitors Yet
              </h3>

              <p className="text-zinc-500">
                Add your first website above to start monitoring.
              </p>
            </div>
          ) : (
            monitors.map((monitor) => (
              <div
                key={monitor.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex justify-between items-center hover:border-red-900 transition"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {monitor.name}
                  </h3>

                  <p className="text-zinc-400 text-sm">
                    {monitor.url}
                  </p>
                 <p className="text-zinc-500 text-xs mt-1">
  Alert Email: {monitor.alert_email || "Not Configured"}
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

                <div className="flex items-center gap-10 text-sm">
                  <span
                    className={`font-semibold ${
                      monitor.status === "UP"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {monitor.status === "UP"
                      ? "🟢 UP"
                      : "🔴 DOWN"}
                  </span>

                  <span className="text-zinc-300">
                    ⚡ {monitor.response_time ?? "-"} ms
                  </span>

                  <span className="text-zinc-300">
                    🔒 {monitor.ssl_days_remaining ?? "-"} days
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-80 border-l border-zinc-900 p-6">
        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-6">
            Current Status
          </h3>

          <div className="grid grid-cols-3 text-center">
            <div>
              <p className="text-red-500 text-3xl font-bold">
                {downCount}
              </p>
              <p className="text-zinc-400">Down</p>
            </div>

            <div>
              <p className="text-green-400 text-3xl font-bold">
                {upCount}
              </p>
              <p className="text-zinc-400">Up</p>
            </div>

            <div>
              <p className="text-zinc-500 text-3xl font-bold">
                0
              </p>
              <p className="text-zinc-400">Paused</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6">
            Last 24 Hours
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-green-400 text-3xl font-bold">
                100%
              </p>
              <p className="text-zinc-400">
                Overall Uptime
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">
                {monitors.length}
              </p>
              <p className="text-zinc-400">
                Total Monitors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
