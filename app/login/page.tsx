"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            PingWatch
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back 👋
          </p>
        </div>

        <div className="space-y-4">

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-lg p-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full border rounded-lg p-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={login}
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90"
          >
            Login
          </button>

        </div>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-black"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </main>
  );
}
