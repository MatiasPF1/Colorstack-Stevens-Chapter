"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Globe,
  LogOut,
  Images,
  Target,
  Building2,
} from "lucide-react";

interface AdminShellProps {
  email: string;
}

const sections = [
  { id: "hero",    label: "Hero",             icon: Images },
  { id: "mission", label: "Mission",          icon: Target },
  { id: "landing", label: "Where We've Landed", icon: Building2 },
];


function HeroPanel() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Hero Section" description="Manage the gallery photos shown on the landing page." />

      <Card title="Gallery Photos">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/20 text-xs">
              Photo {i + 1}
            </div>
          ))}
        </div>
        <button className="mt-4 w-full py-2 rounded-lg border border-dashed border-white/20 text-white/40 text-sm hover:border-white/40 hover:text-white/60 transition-colors">
          + Upload Photo
        </button>
      </Card>
    </div>
  );
}

function MissionPanel() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Mission Section" description="Manage the photos used in the mission pillar cards." />

      <Card title="Pillar Card Photos">
        <div className="grid grid-cols-3 gap-3">
          {["Mission", "Strategy", "Vision"].map((label) => (
            <div key={label} className="space-y-2">
              <p className="text-xs text-white/40">{label}</p>
              <div className="aspect-video rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/20 text-xs">
                Photo
              </div>
              <button className="w-full py-1.5 rounded-lg border border-dashed border-white/20 text-white/40 text-xs hover:border-white/40 hover:text-white/60 transition-colors">
                + Upload
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function LandingPanel() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Where We've Landed" description="Manage the scrolling company logos strip." />

      <Card title="Company Logos">
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
          {["Adobe", "Airbnb", "Amazon", "Apple", "Bloomberg", "Duolingo", "Goldman Sachs", "Google", "Jane Street", "JPMorgan", "Meta", "Microsoft"].map((name) => (
            <div key={name} className="rounded-lg bg-white/5 border border-white/10 p-3 flex flex-col items-center gap-2">
              <div className="h-8 w-full bg-white/10 rounded" />
              <span className="text-[10px] text-white/40 text-center leading-tight">{name}</span>
              <button className="text-[10px] text-[#c42e2e]/60 hover:text-[#c42e2e] transition-colors">Remove</button>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full py-2 rounded-lg border border-dashed border-white/20 text-white/40 text-sm hover:border-white/40 hover:text-white/60 transition-colors">
          + Add Company
        </button>
      </Card>
    </div>
  );
}

/* ── shared sub-components ───────────────────────────────── */

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-b border-white/10 pb-4">
      <h1 className="text-lg font-semibold text-white">{title}</h1>
      <p className="text-sm text-white/40 mt-0.5">{description}</p>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
      <p className="text-xs font-semibold text-white/50 uppercase tracking-widest">{title}</p>
      {children}
    </div>
  );
}

/* main shell */

export default function AdminShell({ email }: AdminShellProps) {
  const router = useRouter();
  const [active, setActive] = useState("hero");

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/Components_Login");
  }

  const panel: Record<string, React.ReactNode> = {
    hero:    <HeroPanel />,
    mission: <MissionPanel />,
    landing: <LandingPanel />,
  };

  return (
    <div className="flex h-screen bg-[#0D1929] font-sans">
      {/* Sidebar */}
      <aside className="w-56 bg-[#0a1422] border-r border-white/10 flex flex-col">
        {/* Brand */}
        <div className="px-5 pt-6 pb-4 border-b border-white/10">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest leading-tight">ColorStack</p>
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest leading-tight">Admin Portal</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          <p className="px-3 pb-1 text-[10px] font-semibold text-white/20 uppercase tracking-widest">Main Site</p>
          {sections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === id
                  ? "bg-[#c42e2e] text-white"
                  : "text-white/50 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-white/10 space-y-2">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-xs text-white/50 truncate">{email}</span>
          </div>
          <button
            onClick={() => router.push("/")}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-white/15 text-sm text-white/70 hover:bg-white/10 transition-colors"
          >
            <Globe size={15} />
            View Site
          </button>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-[#c42e2e]/40 text-sm text-[#c42e2e] hover:bg-[#c42e2e]/10 transition-colors"
          >
            <LogOut size={15} />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-8">
        {panel[active]}
      </main>
    </div>
  );
}

