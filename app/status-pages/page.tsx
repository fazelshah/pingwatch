"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function StatusPagesPage() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [pages, setPages] = useState<any[]>([]);

  async function loadPages() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const res = await fetch("/api/status-pages");
    const data = await res.json();

    const myPages = (data || []).filter(
      (page: any) =>
        page.user_email === user.email
    );

    setPages(myPages);
  }

  async function createPage() {
    if (!name || !slug) {
      alert("Please fill all fields");
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const res = await fetch(
      "/api/status-pages",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          name,
          slug,
          user_email: user.email,
        }),
      }
    );

    const result = await res.json();

    if (result.error) {
      alert(result.error);
      return;
    }

    setName("");
    setSlug("");

    await loadPages();
  }

  useEffect(() => {
    loadPages();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-2">
        Status Pages
      </h1>

      <p className="text-zinc-500 mb-8">
        Create public status pages.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <input
          className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3"
          placeholder="Status Page Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3"
          placeholder="slug"
          value={slug}
          onChange={(e) =>
            setSlug(e.target.value)
          }
        />

        <button
          onClick={createPage}
          className="bg-red-600 hover:bg-red-700 rounded-xl"
        >
          Create
        </button>
      </div>

      <div className="space-y-4">
        {pages.map((page) => (
          <div
            key={page.id}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
          >
            <h2 className="text-xl font-semibold">
              {page.name}
            </h2>

            <p className="text-zinc-500">
              /status/{page.slug}
            </p>

            <a
              href={`/status/${page.slug}`}
              target="_blank"
              className="text-red-500"
            >
              Open Status Page →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
