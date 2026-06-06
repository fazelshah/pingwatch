"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created successfully!");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-center mb-8">

          <Image
            src="/logo.png"
            alt="PingWatch"
            width={180}
            height={50}
            className="mx-auto"
          />

          <h1 className="text-3xl font-bold mt-4">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Start monitoring your websites today.
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
              placeholder="Create a secure password"
              className="w-full border rounded-lg p-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={signup}
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90"
          >
            Create Account
          </button>

        </div>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-black"
          >
            Login
          </Link>
        </p>

      </div>

    </main>
  );
}
