"use client";

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

  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          PingWatch Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-6 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        <input
          className="border p-3 rounded w-full"
          placeholder="Website Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-3 rounded w-full"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          onClick={addMonitor}
          className="bg-black text-white px-6 rounded"
        >
          Add
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">URL</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Response</th>
            <th className="p-3 text-left">SSL Days</th>
          </tr>
        </thead>

        <tbody>
          {monitors.map((monitor) => (
            <tr key={monitor.id} className="border-b">
              <td className="p-3">{monitor.name}</td>
              <td className="p-3">{monitor.url}</td>
              <td className="p-3">
                {monitor.status === "UP"
                  ? "🟢 UP"
                  : "🔴 DOWN"}
              </td>
              <td className="p-3">
                {monitor.response_time || "-"} ms
              </td>
              <td className="p-3">
                {monitor.ssl_days_remaining || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
