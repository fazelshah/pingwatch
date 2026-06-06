"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
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

    alert("Check your email");
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-5">Signup</h1>

      <input
        className="border p-2 mr-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2 mr-2"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={signup}
        className="bg-black text-white px-4 py-2"
      >
        Signup
      </button>
    </div>
  );
}
