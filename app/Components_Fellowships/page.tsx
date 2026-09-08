import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import OpportunityTabs, { type OpportunityCard } from "./OpportunityTabs";

export const metadata: Metadata = {
  title: "Hackathons, Programs, Fellowships, and Internships",
  description:
    "Explore hackathons, fellowships, internships, research programs, and early career opportunities curated by ColorStack Stevens.",
  alternates: {
    canonical: "/Components_Fellowships",
  },
  openGraph: {
    title: "Hackathons and Career Opportunities | Stevens ColorStack",
    description:
      "Curated hackathons, internships, research programs, and fellowships for Stevens computer science students.",
    url: "/Components_Fellowships",
    images: [
      {
        url: "/mainPhotos/Colorstack-Eboard.jpg",
        width: 1400,
        height: 700,
        alt: "ColorStack Stevens students and officers",
      },
    ],
  },
};

export default async function OpportunitiesPage() {
  const supabase = await createClient();
  const { data: cards, error } = await supabase
    .from("programs")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Failed to load opportunities:", error.message);
  }

  return (
    <main className="min-h-screen w-full bg-[#f7f8fb] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            Opportunities
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-600">
            Explore upcoming hackathons, internships, fellowships, and programs
            curated for Stevens students.
          </p>
        </div>

        <OpportunityTabs opportunities={(cards ?? []) as OpportunityCard[]} />
      </div>
    </main>
  );
}
