import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";

interface ResourceCard {
  id: string;
  image: string;
  title: string;
  description: string;
  deadline: string;
  tag: string;
  eligibility: string;
  link: string;
}

function ResourceCardComponent({ card }: { card: ResourceCard }) {
  return (
    <article className="group relative isolate flex min-h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#122033]/90 shadow-[0_22px_55px_-34px_rgba(0,0,0,0.95)] ring-1 ring-white/[0.03] transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent hover:-translate-y-1 hover:border-white/20 hover:bg-[#15263a] hover:shadow-[0_28px_70px_-38px_rgba(0,0,0,0.95)]">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-200">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#07111e]/72 via-[#07111e]/8 to-white/10" />
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
          <span className="rounded-md border border-white/20 bg-[#111827]/85 px-3 py-1 text-xs font-semibold text-slate-100 shadow-lg shadow-black/25 backdrop-blur-md">
            {card.tag}
          </span>
          <span className="rounded-md border border-white/20 bg-[#111827]/85 px-3 py-1 text-xs font-semibold text-slate-100 shadow-lg shadow-black/25 backdrop-blur-md">
            {card.eligibility}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-lg font-semibold leading-snug text-white">
          {card.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-300/75">
          {card.description}
        </p>

        {/* Footer */}
        <div className="mt-1 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          <div className="flex min-w-0 items-center gap-2 text-xs font-medium text-slate-400">
            <CalendarDays className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            <span>Apply by {card.deadline}</span>
          </div>
          <a
            href={/^https?:\/\//.test(card.link) ? card.link : "#"}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-slate-200 transition-colors duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            Learn more
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default async function ResourcesPage() {
  const supabase = await createClient();
  const { data: cards, error } = await supabase
    .from("programs")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Failed to load programs:", error.message);
  }

  const programs: ResourceCard[] = cards ?? [];
  return (
    <main className="min-h-screen w-full bg-[#0D1929] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Fellowships, Internships & Programs
          </h1>
          <p className="mt-4 text-base text-white/55 leading-relaxed max-w-2xl mx-auto">
            A curated list of opportunities to strengthen your CS resume, from freshman
            programs to competitive summer internships and research fellowships. Apply
            early, the timeline matters.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((card) => (
            <ResourceCardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>
    </main>
  );
}
