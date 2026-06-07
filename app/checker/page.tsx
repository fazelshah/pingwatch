"use client";

import { useState } from "react";

export default function CheckerPage() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const checkWebsite = async () => {
    if (!url) return;

    let website = url.trim();

    if (
      !website.startsWith("http://") &&
      !website.startsWith("https://")
    ) {
      website = `https://${website}`;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `/api/check?url=${encodeURIComponent(website)}`
      );

      const data = await res.json();

      setResult(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">
            Website Health Checker
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Monitor uptime, response time and SSL certificates
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="google.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 border rounded-xl px-4 py-4 text-lg"
            />

            <button
              onClick={checkWebsite}
              disabled={loading}
              className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800"
            >
              {loading ? "Checking..." : "Check"}
            </button>

          </div>

        </div>

        {result && (
          <div className="mt-10">

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">

              <h2 className="text-xl font-bold mb-2">
                Website
              </h2>

              <p className="text-gray-600">
                {result.website}
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-white p-6 rounded-2xl shadow">
                <p className="text-gray-500 mb-2">Status</p>

                <span
                  className={`px-4 py-2 rounded-full text-white font-bold ${
                    result.status === "UP"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {result.status}
                </span>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <p className="text-gray-500 mb-2">
                  Response Time
                </p>

                <p className="text-3xl font-bold">
                  {result.responseTime} ms
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <p className="text-gray-500 mb-2">
                  Status Code
                </p>

                <p className="text-3xl font-bold">
                  {result.statusCode}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <p className="text-gray-500 mb-2">
                  SSL Certificate
                </p>

                <p className="text-3xl font-bold">
                  {result.sslValid ? "Valid" : "Invalid"}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <p className="text-gray-500 mb-2">
                  SSL Days Left
                </p>

                <p className="text-3xl font-bold">
                  {result.sslDaysRemaining}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <p className="text-gray-500 mb-2">
                  Checked At
                </p>

                <p className="font-semibold">
                  {result.checkedAt
                    ? new Date(
                        result.checkedAt
                      ).toLocaleString()
                    : "-"}
                </p>
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}
