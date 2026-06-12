"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [monitors, setMonitors] = useState<any[]>([]);

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/login";
    }
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
    if (!name || !url) {
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

    const res = await fetch("/api/monitors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        url: finalUrl,
        email: user.email,
      }),
    });

    const result = await res.json();

    if (result.error) {
      alert(result.error);
      return;
    }

    setName("");
    setUrl("");

    loadMonitors();
  }

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  useEffect(() => {
    checkUser();
    loadMonitors();
  }, []);

  const upCount = monitors.filter(
    (m) => m.status === "UP"
  ).length;

  const downCount = monitors.filter(
    (m) => m.status === "DOWN"
  ).length;

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
          <Link
            href="/dashboard"
            className="block bg-zinc-900 border-l-4 border-red-500 px-4 py-3 rounded-r-xl"
          >
            Monitoring
          </Link>

          <Link
            href="/incidents"
            className="block px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition"
          >
            Incidents
          </Link>

          <Link
            href="/status-pages"
            className="block px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition"
          >
            Status Pages
          </Link>

          <Link
            href="/maintenance"
            className="block px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition"
          >
            Maintenance
          </Link>

          <Link
            href="/team-members"
            className="block px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition"
          >
            Team Members
          </Link>

          <Link
            href="/settings"
            className="block px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition"
          >
            Settings
          </Link>
        </div>

        <div className="mt-auto">
          <div className="bg-zinc-900 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold">
              F
            </div>

            <div>
              <p className="font-semibold">
                Fazel Shah
              </p>
              <p className="text-xs text-zinc-500">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-10">
        <div className="mb-8">
          <h2 className="text-6xl font-bold">
            Monitors
            <span className="text-red-500">.</span>
          </h2>
        </div>

        {/* Add Monitor */}
        <div className="flex gap-4 mb-8">
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

          <button
            onClick={addMonitor}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-medium"
          >
            + New
          </button>
        </div>

        {/* Monitor Cards */}
        <div className="space-y-4">
          {monitors.map((monitor) => (
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
              </div>

              <div className="flex items-center gap-8">
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

                <span>
                  {monitor.response_time || "-"} ms
                </span>

                <span>
                  SSL{" "}
                  {monitor.ssl_days_remaining || "-"}d
                </span>
              </div>
            </div>
          ))}
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
              <p className="text-zinc-400">
                Down
              </p>
            </div>

            <div>
              <p className="text-green-400 text-3xl font-bold">
                {upCount}
              </p>
              <p className="text-zinc-400">
                Up
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-3xl font-bold">
                0
              </p>
              <p className="text-zinc-400">
                Paused
              </p>
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
