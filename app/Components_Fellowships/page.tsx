import { createClient } from "@/lib/supabase/server";

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
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/25 hover:bg-white/8 transition-all duration-300">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0D1929]/80 to-transparent" />
        <span className="absolute top-3 left-3 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm border border-white/10">
          {card.tag}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/30">
          {card.eligibility}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-semibold text-white leading-snug">
          {card.title}
        </h3>
        <p className="text-sm text-white/55 leading-relaxed flex-1">
          {card.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div className="flex items-center gap-1.5 text-xs text-white/45">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Apply by {card.deadline}</span>
          </div>
          <a
            href={/^https?:\/\//.test(card.link) ? card.link : "#"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-xs font-medium text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
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
