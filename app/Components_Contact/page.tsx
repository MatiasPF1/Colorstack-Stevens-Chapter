"use client";

import { useState } from "react";

const GOAL_OPTIONS = [
  "Get involved with ColorStack",
  "Learn about upcoming events",
  "Ask about sponsorship",
  "Report an issue",
  "Something else",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    goal: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const messageMax = 500;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.message) return;

    // Basic email format check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) { setStatus("error"); return; }

    setStatus("sending");
    // TODO: wire to email provider or Supabase table
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  }

  return (
    <main className="min-h-screen w-full bg-[#0D1929] px-6 py-20">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[#c42e2e] font-extrabold italic text-2xl md:text-3xl leading-snug uppercase">
            Please reach out to us with any questions,<br />suggestions, or issues!
          </h1>
        </div>

        {/* Form */}
        {status === "sent" ? (
          <div className="py-16 text-center space-y-3">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#c42e2e]/15 border border-[#c42e2e]/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#c42e2e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white font-semibold text-lg">Message sent!</p>
            <p className="text-white/50 text-sm">We&apos;ll get back to you soon.</p>
            <button
              onClick={() => { setForm({ firstName: "", lastName: "", email: "", goal: "", message: "" }); setStatus("idle"); }}
              className="mt-4 text-sm text-white/50 hover:text-white underline underline-offset-2 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>

            {/* Row 1 */}
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField label="First Name">
                <input
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  required
                  maxLength={80}
                  className="input-base"
                />
              </FormField>
              <FormField label="Last Name">
                <input
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  required
                  maxLength={80}
                  className="input-base"
                />
              </FormField>
            </div>

            {/* Row 2 */}
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  maxLength={254}
                  className="input-base"
                />
              </FormField>
              <FormField label="My main goal is to:">
                <select
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="input-base"
                >
                  <option value="" className="bg-[#0D1929]"></option>
                  {GOAL_OPTIONS.map((o) => (
                    <option key={o} value={o} className="bg-[#0D1929]">{o}</option>
                  ))}
                </select>
              </FormField>
            </div>

            {/* Message */}
            <FormField label="Message">
              <textarea
                value={form.message}
                onChange={(e) => {
                  if (e.target.value.length <= messageMax)
                    setForm({ ...form, message: e.target.value });
                }}
                required
                rows={7}
                className="input-base resize-y"
              />
              <p className="text-xs text-white/30 mt-1">
                {form.message.length}/{messageMax}
              </p>
            </FormField>

            {/* Error */}
            {status === "error" && (
              <p className="text-sm text-[#c42e2e]">Please check your email address and try again.</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-2.5 rounded bg-[#c42e2e] text-white font-semibold text-sm hover:bg-[#a82828] active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
      </div>

      <style jsx>{`
        .input-base {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 0.375rem;
          padding: 0.625rem 0.75rem;
          font-size: 0.875rem;
          color: white;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-base::placeholder { color: rgba(255,255,255,0.25); }
        .input-base:focus { border-color: rgba(196,46,46,0.6); }
      `}</style>
    </main>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-white/80">{label}</label>
      {children}
    </div>
  );
}
