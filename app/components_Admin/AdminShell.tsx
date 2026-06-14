"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Globe,
  LogOut,
  Images,
  Target,
  Building2,
  GraduationCap,
  Pencil,
  Trash2,
  Plus,
  X,
  Upload,
} from "lucide-react";

interface AdminShellProps {
  email: string;
}

const sections = [
  { id: "hero",     label: "Hero",              icon: Images },
  { id: "mission",  label: "Mission",           icon: Target },
  { id: "landing",  label: "Where We've Landed", icon: Building2 },
  { id: "programs", label: "Programs",           icon: GraduationCap },
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

/* ── Programs (Fellowships) Panel ───────────────────────── */

interface ProgramCard {
  id: string;
  title: string;
  description: string;
  deadline: string;
  tag: string;
  eligibility: string;
  image: string;
  link: string;
}

const defaultCard: Omit<ProgramCard, "id"> = {
  title: "",
  description: "",
  deadline: "",
  tag: "Internship",
  eligibility: "All Years",
  image: "",
  link: "",
};

const TAG_OPTIONS = ["Internship", "Fellowship", "Research", "Program"];
const ELIGIBILITY_OPTIONS = ["Freshman & Sophomore", "Junior & Senior", "All Years"];

function ProgramsPanel() {
  const supabase = createClient();
  const [cards, setCards] = useState<ProgramCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [form, setForm] = useState<Omit<ProgramCard, "id">>(defaultCard);
  const [saving, setSaving] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  async function uploadImage(file: File): Promise<string | null> {
    setImageUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage
      .from("program-images")
      .upload(path, file, { upsert: true });
    setImageUploading(false);
    if (error) { setError(error.message); return null; }
    const { data } = supabase.storage.from("program-images").getPublicUrl(path);
    return data.publicUrl;
  }

  async function fetchCards() {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from("programs")
      .select("*")
      .order("created_at", { ascending: true });
    if (error) setError(error.message);
    else setCards(data ?? []);
    setLoading(false);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetchCards(); }, []);

  function openEdit(card: ProgramCard) {
    setEditingId(card.id);
    setShowAddForm(false);
    setForm({ title: card.title, description: card.description, deadline: card.deadline, tag: card.tag, eligibility: card.eligibility, image: card.image, link: card.link });
  }

  function openAdd() {
    setEditingId(null);
    setForm(defaultCard);
    setShowAddForm(true);
  }

  function cancelForm() {
    setEditingId(null);
    setShowAddForm(false);
    setForm(defaultCard);
  }

  function validateLink(url: string): boolean {
    if (!url || url === "#") return true;
    try {
      const parsed = new URL(url);
      return parsed.protocol === "https:" || parsed.protocol === "http:";
    } catch {
      return false;
    }
  }

  async function saveEdit() {
    if (!editingId) return;
    if (!validateLink(form.link)) { setError("Link must be a valid https:// URL."); return; }
    setSaving(true);
    const { error } = await supabase.from("programs").update(form).eq("id", editingId);
    if (error) setError(error.message);
    else { cancelForm(); await fetchCards(); }
    setSaving(false);
  }

  async function saveAdd() {
    if (!validateLink(form.link)) { setError("Link must be a valid https:// URL."); return; }
    setSaving(true);
    const { error } = await supabase.from("programs").insert(form);
    if (error) setError(error.message);
    else { cancelForm(); await fetchCards(); }
    setSaving(false);
  }

  async function deleteCard(id: string) {
    const { error } = await supabase.from("programs").delete().eq("id", id);
    if (error) setError(error.message);
    else { if (editingId === id) cancelForm(); await fetchCards(); }
  }

  return (
    <div className="space-y-6">
      <SectionHeader title="Programs & Fellowships" description="Add, edit, or remove opportunity cards shown on the Programs page." />

      {error && (
        <div className="rounded-lg bg-[#c42e2e]/10 border border-[#c42e2e]/30 px-4 py-3 text-sm text-[#c42e2e]">
          {error}
        </div>
      )}

      {/* Card list */}
      <Card title="Current Cards">
        {loading ? (
          <div className="py-8 text-center text-sm text-white/30">Loading...</div>
        ) : (
          <div className="space-y-3">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`flex items-start gap-4 p-4 rounded-xl border transition-colors overflow-hidden ${
                  editingId === card.id
                    ? "border-white/30 bg-white/10"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                {/* Thumbnail */}
                <div className="h-14 w-20 max-w-20 shrink-0 rounded-lg overflow-hidden bg-white/5 border border-white/10">
                  {card.image ? (
                    <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-white/20 text-xs">No img</div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{card.title}</p>
                  <p className="text-xs text-white/40 mt-0.5 line-clamp-1">{card.description}</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white/60">{card.tag}</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white/60">{card.eligibility}</span>
                    <span className="text-[10px] text-white/30">Deadline: {card.deadline}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => openEdit(card)}
                    className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                    title="Edit"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => deleteCard(card.id)}
                    className="p-1.5 rounded-lg text-[#c42e2e]/50 hover:text-[#c42e2e] hover:bg-[#c42e2e]/10 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={openAdd}
          className="mt-3 w-full py-2.5 rounded-xl border border-dashed border-white/20 text-white/40 text-sm hover:border-white/40 hover:text-white/60 transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={14} /> Add Card
        </button>
      </Card>

      {/* Edit / Add form */}
      {(editingId !== null || showAddForm) && (
        <Card title={editingId ? "Edit Card" : "New Card"}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Title">
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="e.g. Google STEP Internship"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/30"
              />
            </Field>

            <Field label="Deadline">
              <input
                value={form.deadline}
                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                placeholder="e.g. Nov 1, 2025 or Rolling"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/30"
              />
            </Field>

            <Field label="Tag">
              <select
                value={form.tag}
                onChange={(e) => setForm({ ...form, tag: e.target.value })}
                className="w-full bg-[#0D1929] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30"
              >
                {TAG_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </Field>

            <Field label="Eligibility">
              <select
                value={form.eligibility}
                onChange={(e) => setForm({ ...form, eligibility: e.target.value })}
                className="w-full bg-[#0D1929] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30"
              >
                {ELIGIBILITY_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </Field>

            <Field label="Image">
              <label className="flex flex-col gap-2 cursor-pointer">
                <div className={`flex items-center gap-3 w-full border rounded-lg px-3 py-2 text-sm transition-colors ${
                  imageUploading
                    ? "border-white/10 bg-white/5 opacity-60 cursor-wait"
                    : "border-white/10 bg-white/5 hover:border-white/30"
                }`}>
                  <Upload size={14} className="text-white/40 shrink-0" />
                  <span className="text-white/40 truncate">
                    {imageUploading ? "Uploading..." : form.image ? "Change image" : "Choose image from computer"}
                  </span>
                </div>
                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                  disabled={imageUploading}
                  className="sr-only"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const url = await uploadImage(file);
                    if (url) setForm({ ...form, image: url });
                  }}
                />
              </label>
              {form.image && (
                <div className="mt-2 h-20 w-full rounded-lg overflow-hidden border border-white/10">
                  <img src={form.image} alt="Preview" className="h-full w-full object-cover" />
                </div>
              )}
            </Field>

            <Field label="Link (URL)">
              <input
                value={form.link}
                onChange={(e) => setForm({ ...form, link: e.target.value })}
                placeholder="https://..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/30"
              />
            </Field>

            <Field label="Description" className="sm:col-span-2">
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Short description of the opportunity..."
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/30 resize-none"
              />
            </Field>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={editingId ? saveEdit : saveAdd}
              disabled={saving}
              className="px-5 py-2 rounded-lg bg-[#c42e2e] text-white text-sm font-medium hover:bg-[#a82525] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? "Saving..." : editingId ? "Save Changes" : "Add Card"}
            </button>
            <button
              onClick={cancelForm}
              className="px-4 py-2 rounded-lg border border-white/15 text-white/50 text-sm hover:border-white/30 hover:text-white/70 transition-colors flex items-center gap-1.5"
            >
              <X size={13} /> Cancel
            </button>
          </div>
        </Card>
      )}
    </div>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label className="text-xs font-medium text-white/50">{label}</label>
      {children}
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
    hero:     <HeroPanel />,
    mission:  <MissionPanel />,
    landing:  <LandingPanel />,
    programs: <ProgramsPanel />,
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

