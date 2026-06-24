import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Events and Resources",
  description:
    "Find ColorStack Stevens event materials, workshop slides, career resources, and student programming for computer science members at Stevens.",
  alternates: {
    canonical: "/Components_Resources",
  },
  openGraph: {
    title: "Events and Resources | Stevens ColorStack",
    description:
      "Workshop slides, event materials, and career resources from ColorStack Stevens.",
    url: "/Components_Resources",
    images: [
      {
        url: "/resources/ScheduleHelpDay.png",
        width: 1200,
        height: 630,
        alt: "ColorStack Stevens event resource",
      },
    ],
  },
};

interface ResourceCard {
  id: string;
  sort_order: number;
  title: string;
  event: string;
  description: string;
  date: string;
  image: string;
  slides_url: string;
  is_active: boolean;
}

const fallbackResourceCards: ResourceCard[] = [
  {
    id: "freshman-schedule-help-day",
    sort_order: 1,
    title: "Freshman Schedule Help Day",
    event: "Workshop Slides",
    description:
      "Presentation deck from our schedule planning session, built to help members choose classes and plan a stronger semester.",
    date: "ColorStack Stevens",
    image: "/resources/ScheduleHelpDay.png",
    slides_url: "https://canva.link/xk9xdoog1q9nt89",
    is_active: true,
  },
];

function safeHref(url: string) {
  return /^https?:\/\//.test(url) ? url : "#";
}

export default async function ResourcesPage() {
  const supabase = await createClient();
  const { data: cards, error } = await supabase
    .from("resources")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  const resourceCards: ResourceCard[] = error ? fallbackResourceCards : cards ?? [];

  return (
    <main className="min-h-screen w-full bg-[#0D1929] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Events &amp; Resources
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/55">
            This is where you&apos;ll find everything ColorStack Stevens has to offer:
            upcoming events, workshops, networking opportunities, career resources,
            and more.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceCards.map((card) => (
            <a
              key={card.id}
              href={safeHref(card.slides_url)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative isolate flex min-h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#122033]/90 shadow-[0_22px_55px_-34px_rgba(0,0,0,0.95)] ring-1 ring-white/[0.03] transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent hover:-translate-y-1 hover:border-white/20 hover:bg-[#15263a] hover:shadow-[0_28px_70px_-38px_rgba(0,0,0,0.95)]"
            >
              <div className="relative h-44 w-full overflow-hidden bg-[#0a1422]">
                <Image
                  src={card.image}
                  alt={`${card.title} event resource`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#07111e]/72 via-[#07111e]/10 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-md border border-white/20 bg-[#111827]/85 px-3 py-1 text-xs font-semibold text-slate-100 shadow-lg shadow-black/25 backdrop-blur-md">
                  Resource
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c42e2e]">
                  {card.event}
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-snug text-white">
                  {card.title}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300/75">
                  {card.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                  <div className="flex min-w-0 items-center gap-2 text-xs font-medium text-slate-400">
                    <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{card.date}</span>
                  </div>
                  <div className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-slate-200 transition-colors duration-200 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-white">
                    Open slides
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}
