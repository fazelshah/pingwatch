"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [monitors, setMonitors] = useState<any[]>([]);

  async function loadMonitors() {
    const res = await fetch("/api/monitors");
    const data = await res.json();

    setMonitors(data || []);
  }

  async function addMonitor() {
    if (!name || !url) {
      alert("Please fill all fields");
      return;
    }

    await fetch("/api/monitors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        url,
      }),
    });

    setName("");
    setUrl("");

    loadMonitors();
  }

  useEffect(() => {
    loadMonitors();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        PingWatch Dashboard
      </h1>

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
