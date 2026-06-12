"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center px-20 bg-gradient-to-br from-black via-zinc-950 to-red-950">
        <h1 className="text-7xl font-bold text-white mb-6">
          PingWatch
        </h1>

        <h2 className="text-4xl font-bold text-white leading-tight mb-6">
          Monitor Websites,
          <br />
          APIs & SSL Certificates
          <br />
          24/7
        </h2>

        <p className="text-zinc-400 text-xl max-w-xl">
          Get instant alerts when your services go
          down. Track uptime, response time and SSL
          expiry from a beautiful dashboard.
        </p>

        <div className="mt-10 flex gap-8">
          <div>
            <p className="text-4xl font-bold text-red-500">
              99.99%
            </p>
            <p className="text-zinc-500">
              Uptime Tracking
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-red-500">
              24/7
            </p>
            <p className="text-zinc-500">
              Monitoring
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-red-500">
              SSL
            </p>
            <p className="text-zinc-500">
              Certificate Checks
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-white">
                Welcome Back
              </h1>

              <p className="text-zinc-500 mt-2">
                Sign in to your PingWatch account
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-zinc-400 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex justify-between text-sm">
                <label className="text-zinc-400 flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button className="text-red-500 hover:text-red-400">
                  Forgot password?
                </button>
              </div>

              <button
                onClick={login}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Sign In
              </button>

              <div className="text-center text-zinc-500">
                Don't have an account?
                <a
                  href="/signup"
                  className="text-red-500 ml-2"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-zinc-600 mt-6 text-sm">
            © 2026 PingWatch. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
