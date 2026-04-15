"use client";
import { useState } from "react";

export default function AuthPage() {
  const [tab, setTab] = useState("in");
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07080f] text-white overflow-hidden">

      <div className="relative z-10 grid md:grid-cols-2 min-h-screen">
        {/* left */}
        <div className="hidden md:flex flex-col justify-between p-12 border-r border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              +
            </div>
            <div className="font-bold text-xl">i<span className="text-cyan-400">Spend</span></div>
          </div>

          <div className="space-y-6">
            <div className="text-xs text-cyan-400">AI-powered finance tracking</div>
            <h1 className="text-5xl font-extrabold leading-tight">
              Spend smarter,<br /> save <span className="text-cyan-400">faster.</span>
            </h1>
            <p className="text-white/50 max-w-md">
              One dashboard for your budgets, saving goals, bills, and AI insights.
            </p>
          </div>

          <div className="flex">
            <div className="flex-1 p-4 border border-white/10 rounded-l-xl">
              <div className="text-cyan-400 font-bold">10k+</div>
              <div className="text-xs text-white/50">Users</div>
            </div>
            <div className="flex-1 p-4 border-t border-b border-white/10">
              <div className="font-bold">₹2Cr+</div>
              <div className="text-xs text-white/50">Tracked</div>
            </div>
            <div className="flex-1 p-4 border border-white/10 rounded-r-xl">
              <div className="font-bold">4.9★</div>
              <div className="text-xs text-white/50">Rating</div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-center p-6 relative">

          {/* Floating Cards */}
          <div className="absolute top-24 left-6 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-xl animate-float">
            <div className="text-xs text-white/50">FinanceScore</div>
            <div className="text-cyan-400 font-bold text-lg">78 / 100</div>
          </div>

          <div className="absolute bottom-24 left-6 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-xl animate-float">
            <div className="text-xs text-white/50">Saved this month</div>
            <div className="text-green-400 font-bold text-lg">₹18,600 ↑</div>
          </div>

          <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">

            {/* Tabs */}
            <div className="flex bg-white/5 p-1 rounded-lg mb-6">
              <button
                onClick={() => setTab("in")}
                className={`flex-1 py-2 rounded-md text-sm ${tab === "in" ? "bg-cyan-400/20 text-cyan-400" : "text-white/50"}`}
              >
                Sign in
              </button>
              <button
                onClick={() => setTab("up")}
                className={`flex-1 py-2 rounded-md text-sm ${tab === "up" ? "bg-cyan-400/20 text-cyan-400" : "text-white/50"}`}
              >
                Sign up
              </button>
            </div>

            {tab === "in" ? (
              <div className="space-y-4">
                <h2 className="text-lg font-bold">Welcome back</h2>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
                />

                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-3"
                  >
                    {showPass ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-7-9-7a18.76 18.76 0 013.06-3.97M6.53 6.53A9.97 9.97 0 0112 5c5 0 9 7 9 7a18.78 18.78 0 01-2.5 3.36M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 6L3 3" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0s-4-7-9-7-9 7-9 7 4 7 9 7 9-7 9-7z" />
                      </svg>
                    )}
                  </button>
                </div>

                <button className="w-full py-3 rounded-lg bg-linear-to-r from-cyan-400 to-indigo-400 text-black font-bold">
                  Sign in
                </button>

                <div className="text-center text-xs text-white/40">or</div>

                <button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.64 12.2c0-.78-.07-1.53-.2-2.25H12v4.27h6.54c-.28 1.46-1.12 2.7-2.38 3.53v2.94h3.84c2.24-2.06 3.52-5.1 3.52-8.49z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.94-2.94l-3.84-2.94c-1.06.72-2.42 1.15-4.1 1.15-3.15 0-5.82-2.13-6.78-5H1.28v3.14C3.26 21.36 7.31 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.22 14.27A7.98 7.98 0 015 12c0-.79.14-1.55.38-2.27V6.59H1.28A11.96 11.96 0 000 12c0 1.92.46 3.73 1.28 5.41l3.94-3.14z"/>
                    <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.59 1.77l3.44-3.44C17.96 1.14 15.24 0 12 0 7.31 0 3.26 2.64 1.28 6.59l3.94 3.14c.96-2.87 3.63-4.96 6.78-4.96z"/>
                  </svg>
                  Continue with Google
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-lg font-bold">Create account</h2>

                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
                />

                <button className="w-full py-3 rounded-lg bg-linear-to-r from-cyan-400 to-indigo-400 text-black font-bold">
                  Create account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
