"use client";

import Link from "next/link";

const socials = [
  {
    label: "Email",
    href: "mailto:colorstackstevens@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/fFA2hn75SB",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.053a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/colorstackstevens/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0D1929]">
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-12 pb-8 sm:px-8 sm:pt-20 sm:pb-10">

                                    {/* Top section — 4 columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:justify-items-stretch">

          {/* Col 1 — Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#dc2626]">
              ColorStack Stevens
            </p>
            <h2 className="text-3xl font-bold text-white leading-tight">
              Connect<br />
              <span className="text-[#dc2626]">with us.</span>
            </h2>
            <p className="text-sm text-white/50 leading-relaxed">
              Dedicated to increasing the number of Black and Latinx CS graduates
              who go on to launch rewarding technical careers.
            </p>
          </div>

          {/* Col 2 — Quick links */}
          <div className="flex flex-col gap-3 lg:ml-30">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">Quick Links</p>
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "#mission" },
              { label: "Events", href: "#events" },
              { label: "Join Us", href: "https://discord.gg/fFA2hn75SB" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-3 text-sm text-white/50 lg:ml-15">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">Contact</p>
            <a
              href="mailto:colorstackstevens@gmail.com"
              className="hover:text-[#dc2626] transition-colors text-white/70"
            >
              colorstackstevens@gmail.com
            </a>
            <p>ColorStack Stevens</p>
            <p>1 Castle Point Terrace</p>
            <p>Hoboken, NJ 07030</p>
          </div>

          {/* Col 4 — Follow Us */}
          <div className="flex flex-col gap-3 lg:ml-30">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">Follow Us</p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-[#dc2626] transition-colors group"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#dc2626]/10 transition-colors">
                    {s.icon}
                  </span>
                  <span className="text-sm">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-white/5" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} ColorStack  Stevens Institute of Technology. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Part of the{" "}
            <a
              href="https://www.colorstack.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors"
            >
              ColorStack National Network
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
