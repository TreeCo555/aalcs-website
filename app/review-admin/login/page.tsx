"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReviewAdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const response = await fetch("/api/review-admin/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
    });

    const data = await response.json();

    if (data.success) {
        router.push("/review-admin");
        router.refresh();
    } else {
        setError(data.message || "Incorrect password.");
    }
    };

  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <section className="mx-auto max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#69ff2f]">
          AALCS Admin
        </p>

        <h1 className="mt-4 text-3xl font-black">
          Review Admin Login
        </h1>

        <form onSubmit={login} className="mt-6 grid gap-4">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#69ff2f]"
          />

          <button
            type="submit"
            className="rounded-full bg-[#69ff2f] px-6 py-3 font-black text-black"
          >
            Login
          </button>

          {error && <p className="text-red-400">{error}</p>}
        </form>
      </section>
    </main>
  );
}