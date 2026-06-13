"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  async function signup() {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!strongPassword.test(password)) {
      alert(
        "Password must be at least 12 characters and include uppercase, lowercase, number and special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Account created successfully! Please check your email to verify your account."
    );

    window.location.href = "/login";
  }

  return (
    <main className="min-h-screen bg-black text-white flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-black via-red-950 to-black p-16 flex-col justify-center">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-2xl font-bold">
            P
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              PingWatch
            </h1>

            <p className="text-slate-400">
              Website Monitoring Platform
            </p>
          </div>
        </div>

        <h2 className="text-5xl font-bold leading-tight mb-8">
          Monitor Websites,
          <br />
          APIs & SSL Certificates
          <br />
          24/7
        </h2>

        <p className="text-xl text-slate-300 max-w-xl">
          Get instant alerts when your services go down.
          Monitor uptime, SSL certificates and API
          response times from a single dashboard.
        </p>

        <div className="flex gap-12 mt-16">
          <div>
            <h3 className="text-red-500 text-5xl font-bold">
              99.99%
            </h3>
            <p className="text-slate-400 mt-2">
              Uptime Tracking
            </p>
          </div>

          <div>
            <h3 className="text-red-500 text-5xl font-bold">
              24/7
            </h3>
            <p className="text-slate-400 mt-2">
              Monitoring
            </p>
          </div>

          <div>
            <h3 className="text-red-500 text-5xl font-bold">
              SSL
            </h3>
            <p className="text-slate-400 mt-2">
              Certificate Checks
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold">
              Create Account
            </h1>

            <p className="text-slate-400 mt-3">
              Start monitoring in minutes.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block mb-2 text-slate-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-red-500"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Password
              </label>

              <div className="relative">
                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create a strong password"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 pr-12 outline-none focus:border-red-500"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-3 text-slate-400"
                >
                  👁
                </button>
              </div>

              <p className="text-xs text-slate-500 mt-2">
                Minimum 12 characters,
                uppercase, lowercase,
                number and special character.
              </p>
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Repeat password"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 pr-12 outline-none focus:border-red-500"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-4 top-3 text-slate-400"
                >
                  👁
                </button>
              </div>
            </div>

            <button
              onClick={signup}
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </div>

          <p className="text-center text-slate-400 mt-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-red-500 font-semibold hover:text-red-400"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
