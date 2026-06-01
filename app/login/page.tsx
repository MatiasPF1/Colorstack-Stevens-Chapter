"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md flex flex-col gap-8">

        {/* Logo + wordmark */}
        <div className="flex flex-col items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/ColorstackStevensLogo.png"
              alt="ColorStack Stevens"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
            <span className="text-white font-bold text-2xl tracking-tight">
              SIT <span className="text-[#c42e2e]">ColorStack</span>
            </span>
          </Link>
          <p className="text-white/50 text-sm">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-6 shadow-xl shadow-black/30">

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-white/70 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@sit.edu"
              className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-[#c42e2e] focus:ring-1 focus:ring-[#c42e2e] transition-colors"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-white/70 text-sm font-medium" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-[#c42e2e] focus:ring-1 focus:ring-[#c42e2e] transition-colors pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors text-xs font-medium"
                aria-label="Toggle password visibility"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="w-full bg-[#c42e2e] text-white font-semibold py-3.5 rounded-full hover:bg-[#a82828] active:scale-95 transition-all duration-200 shadow-lg shadow-red-900/40 mt-1"
          >
            Sign In
          </button>

        </div>



      </div>
    </main>
  );
}
