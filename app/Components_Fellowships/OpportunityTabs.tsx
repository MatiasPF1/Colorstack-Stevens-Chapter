"use client";

import Image from "next/image";
import { ArrowUpRight, BookOpenText, CalendarDays, FlaskConical, GraduationCap, History, MapPin } from "lucide-react";
import { useState } from "react";

export interface OpportunityCard {
  id: string;
  image: string;
  college_image: string | null;
  host_name: string | null;
  location: string | null;
  title: string;
  description: string;
  deadline: string;
  tag: string;
  eligibility: string;
  link: string;
  timeline_status: "Open now" | "Opens soon" | "Expected" | "Watch";
  timeline: string;
  previous_timeline: string | null;
  sort_order: number;
  opportunity_type: "program" | "hackathon";
  proximity_rank: number;
  source_checked_on: string;
}

type OpportunityType = "hackathons" | "programs" | "faculty" | "learning";

type FacultyResearcher = {
  name: string;
  title: string;
  school: string;
  research: string;
  topics: string[];
  link: string;
  image: string | null;
  accent: string;
};

type LearningResource = {
  title: string;
  creator: string;
  format: "Build guide" | "Video course";
  description: string;
  topics: string[];
  link: string;
  image: string;
};

const learningResources: LearningResource[] = [
  {
    title: "Build Your Own X",
    creator: "codecrafters-io",
    format: "Build guide",
    description: "A curated collection of step-by-step guides for recreating technologies from scratch, from databases and browsers to AI models and operating systems.",
    topics: ["Systems", "AI", "Open Source"],
    link: "https://github.com/codecrafters-io/build-your-own-x",
    image: "https://opengraph.githubassets.com/1/codecrafters-io/build-your-own-x",
  },
  {
    title: "Build & Deploy a Patient Management System",
    creator: "Chris Blakely · YouTube",
    format: "Video course",
    description: "Build a production-ready patient management system with Java, Spring Boot, microservices, and AWS.",
    topics: ["Java", "Spring Boot", "AWS"],
    link: "https://www.youtube.com/watch?v=tseqdcFfTUY",
    image: "https://i.ytimg.com/vi/tseqdcFfTUY/hqdefault.jpg",
  },
  {
    title: "Spring Boot, React.js & AWS S3",
    creator: "Amigoscode · YouTube",
    format: "Video course",
    description: "Build a full-stack application with Spring Boot, React.js, and AWS S3 storage, with the linked video starting at the selected lesson.",
    topics: ["React", "Spring Boot", "AWS S3"],
    link: "https://www.youtube.com/watch?v=9i1gQ7w2V24&t=2068s",
    image: "https://i.ytimg.com/vi/9i1gQ7w2V24/hqdefault.jpg",
  },
];

const facultyResearchers: FacultyResearcher[] = [
  {
    name: "Eman Alomar",
    title: "Assistant Professor",
    school: "Department of Systems Engineering",
    research: "Software engineering and AI for code quality, refactoring, maintenance, software evolution, and technical debt.",
    topics: ["Software Engineering", "AI", "Code Quality"],
    link: "https://www.stevens.edu/profile/ealomar",
    image: null,
    accent: "from-rose-700 via-rose-600 to-orange-400",
  },
  {
    name: "Yue Ning",
    title: "Associate Professor",
    school: "School of Computing",
    research: "Machine learning and data science, with graph learning and use-inspired AI applications in healthcare, political science, and finance.",
    topics: ["Machine Learning", "Graph AI", "Data Science"],
    link: "https://www.stevens.edu/profile/yning5",
    image: "https://images.stevens.edu/mviowpldu823/22bbrALytQe8R7fS3b0NpJ/d6f6a1c3d43760949a68e906f42e3a6c/yning5.jpg?w=400&h=400&f=faces&q=80&fit=fill",
    accent: "from-violet-800 via-indigo-700 to-sky-500",
  },
  {
    name: "Eui-Hyeok Yang",
    title: "Professor",
    school: "Department of Mechanical Engineering",
    research: "Nanotechnology and 0D, 1D, and 2D materials for spintronics and bioelectronics, including AI/ML-enabled device diagnostics and quantum/AI technology applications.",
    topics: ["Nanotechnology", "2D Materials", "AI/ML Diagnostics"],
    link: "https://www.stevens.edu/profile/eyang",
    image: "https://images.stevens.edu/mviowpldu823/6rJyzciqqo27UBaX1S0jFG/9de647f87b593cf9784b44ee8cf8868c/eyang.jpg?w=400&h=400&f=faces&q=80&fit=fill",
    accent: "from-cyan-800 via-teal-700 to-emerald-400",
  },
  {
    name: "Ionut Florescu",
    title: "Research Professor",
    school: "School of Business · Hanlon Financial Systems Lab",
    research: "Stochastic processes, high-frequency finance, machine learning in financial markets, rare events, and market microstructure.",
    topics: ["Quant Finance", "Machine Learning", "Stochastic Models"],
    link: "https://fsc.stevens.edu/dr-ionut-florescu/",
    image: "https://fsc.stevens.edu/content/images/2019/10/Ionut_Florescu-2.jpg",
    accent: "from-amber-800 via-orange-700 to-yellow-400",
  },
  {
    name: "Zining Zhu",
    title: "Assistant Professor",
    school: "School of Computing",
    research: "Explainable and controllable AI, including model interpretability, efficient AI, reasoning, AI agents, and natural language processing.",
    topics: ["Explainable AI", "NLP", "AI Agents"],
    link: "https://www.stevens.edu/profile/zzhu41",
    image: "https://images.stevens.edu/mviowpldu823/28uunPeUec4vNpm3lf1O3R/e94a19a65c051d1b3dc68e637f980234/zzhu41.jpg?w=400&h=400&f=faces&q=80&fit=fill",
    accent: "from-fuchsia-800 via-purple-700 to-violet-400",
  },
  {
    name: "Dragos Bozdog",
    title: "Teaching Associate Professor",
    school: "School of Business · Hanlon Financial Systems Lab",
    research: "Rare-event analysis of high-frequency financial data, early-warning systems, market liquidity, and machine learning in finance.",
    topics: ["Financial Data", "Market Liquidity", "Risk"],
    link: "https://www.stevens.edu/profile/dbozdog",
    image: "https://images.stevens.edu/mviowpldu823/4Nj60ocrD6wboxv08hb1Ga/f3d1eb5f83a89619cea7badabdefb653/dbozdog.jpg?w=400&h=400&f=faces&q=80&fit=fill",
    accent: "from-slate-800 via-slate-700 to-sky-500",
  },
  {
    name: "Kai Li",
    title: "Assistant Professor",
    school: "School of Computing",
    research: "Distributed-systems security, cybercrime prevention, blockchain and cryptocurrency security, and network performance optimization.",
    topics: ["Cybersecurity", "Blockchain", "Systems"],
    link: "https://www.stevens.edu/profile/kli50",
    image: "https://images.stevens.edu/mviowpldu823/4SH0N3edd196YKMADiJHhg/0b3f2b70b71a323f4f79a33be8a0048c/kli50.jpg?w=400&h=400&f=faces&q=80&fit=fill",
    accent: "from-blue-900 via-blue-700 to-cyan-400",
  },
  {
    name: "Philippos Mordohai",
    title: "Professor",
    school: "School of Computing",
    research: "Geometric computer vision, multi-view 3D reconstruction, robotic perception, object recognition, active vision, and machine learning.",
    topics: ["Computer Vision", "Robotics", "3D Reconstruction"],
    link: "https://www.stevens.edu/profile/pmordoha",
    image: "https://images.stevens.edu/mviowpldu823/4bNlsFmFACs9omMQw92CfI/c2e7b40167b1fefda8e4aca34cd4367c/pmordoha.jpg?w=400&h=400&f=faces&q=80&fit=fill",
    accent: "from-emerald-900 via-green-700 to-lime-400",
  },
  {
    name: "Nikhil Muralidhar",
    title: "Assistant Professor",
    school: "School of Computing · ScAI Lab",
    research: "Scientific AI and knowledge-guided machine learning that combines scientific knowledge with data-driven models.",
    topics: ["Scientific AI", "Machine Learning", "Knowledge-Guided AI"],
    link: "https://www.stevens.edu/profile/nmurali1",
    image: "https://images.stevens.edu/mviowpldu823/35xs0IKJjZmhyZ5RzwBWho/49df6890e3a3d63d7155a29a072da859/nmurali1.jpg?w=400&h=400&f=faces&q=80&fit=fill",
    accent: "from-sky-900 via-blue-700 to-indigo-400",
  },
];

const statusStyles: Record<OpportunityCard["timeline_status"], string> = {
  "Open now": "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Opens soon": "border-amber-200 bg-amber-50 text-amber-800",
  Expected: "border-blue-200 bg-blue-50 text-blue-700",
  Watch: "border-slate-200 bg-slate-100 text-slate-600",
};

function formatCheckedDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

function safeHref(url: string) {
  return /^https?:\/\//.test(url) ? url : "#";
}

function isHackathon(card: OpportunityCard) {
  return card.opportunity_type === "hackathon";
}

function OpportunityCardComponent({ card }: { card: OpportunityCard }) {
  return (
    <article className="group relative isolate flex min-h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_22px_55px_-40px_rgba(15,23,42,0.45)] ring-1 ring-slate-100 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-slate-200 before:to-transparent hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_70px_-44px_rgba(15,23,42,0.5)]">
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        <Image
          src={card.college_image || card.image}
          alt={card.host_name ? `${card.host_name} campus` : card.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/62 via-black/10 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-md border border-white/20 bg-[#111827]/85 px-3 py-1 text-xs font-semibold text-slate-100 shadow-lg shadow-black/25 backdrop-blur-md">
          {card.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c42e2e]">
            {card.timeline_status === "Watch" ? "Cycle closed" : "Application status"}
          </p>
          <span className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-bold ${statusStyles[card.timeline_status]}`}>
            {card.timeline_status}
          </span>
        </div>

        <h2 className="mt-3 text-xl font-semibold leading-snug text-slate-950">
          {card.title}
        </h2>
        {(card.host_name || card.location) && (
          <p className="mt-2 flex items-start gap-1.5 text-xs font-medium text-slate-500">
            <MapPin className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{[card.host_name, card.location].filter(Boolean).join(" · ")}</span>
          </p>
        )}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
          {card.description}
        </p>

        <div className="mt-6 space-y-3 border-t border-slate-200 pt-4">
          <div className="flex items-start gap-2.5 text-sm font-medium leading-snug text-slate-700">
            <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
            <span>{card.timeline || card.deadline}</span>
          </div>
          {card.previous_timeline && (
            <div className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-500">
              <History className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{card.previous_timeline}</span>
            </div>
          )}
          <div className="flex items-start gap-2.5 text-xs text-slate-500">
            <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{card.eligibility}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 border-t border-slate-200 pt-4">
          <span className="text-[11px] font-medium text-slate-400">
            Checked {formatCheckedDate(card.source_checked_on)}
          </span>
          <a
            href={safeHref(card.link)}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:border-[#c42e2e]/40 hover:text-[#c42e2e]"
          >
            Learn more
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function FacultyResearchCard({ faculty }: { faculty: FacultyResearcher }) {
  return (
    <article className="group relative isolate flex min-h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_22px_55px_-40px_rgba(15,23,42,0.45)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_70px_-44px_rgba(15,23,42,0.5)]">
      <div className={`relative flex h-44 items-end overflow-hidden bg-linear-to-br ${faculty.accent} p-6`}>
        {faculty.image ? (
          <Image
            src={faculty.image}
            alt={`Portrait of ${faculty.name}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-linear-to-br from-rose-800 via-rose-700 to-orange-400 text-6xl font-semibold tracking-tight text-white/90">
            {faculty.name.split(" ").map((name) => name[0]).join("")}
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
            Faculty research
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c42e2e]">Stevens faculty</p>
        <h2 className="mt-3 text-xl font-semibold leading-snug text-slate-950">{faculty.name}</h2>
        <p className="mt-1 text-sm font-medium text-slate-600">{faculty.title}</p>
        <p className="mt-1 text-xs text-slate-500">{faculty.school}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{faculty.research}</p>

        <div className="mt-6 border-t border-slate-200 pt-4">
          <div className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600">
            <BookOpenText className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
            <div className="flex flex-wrap gap-1.5">
              {faculty.topics.map((topic) => (
                <span key={topic} className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600">{topic}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end border-t border-slate-200 pt-4">
          <a
            href={faculty.link}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:border-[#c42e2e]/40 hover:text-[#c42e2e]"
          >
            Faculty profile
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function LearningResourceCard({ resource }: { resource: LearningResource }) {
  return (
    <article className="group relative isolate flex min-h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_22px_55px_-40px_rgba(15,23,42,0.45)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_70px_-44px_rgba(15,23,42,0.5)]">
      <div className="relative h-44 overflow-hidden bg-slate-950">
        <Image
          src={resource.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-md border border-white/25 bg-slate-950/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
          {resource.format}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c42e2e]">Learning by building</p>
        <h2 className="mt-3 text-xl font-semibold leading-snug text-slate-950">{resource.title}</h2>
        <p className="mt-1 text-sm font-medium text-slate-600">{resource.creator}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{resource.description}</p>

        <div className="mt-6 border-t border-slate-200 pt-4">
          <div className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600">
            <BookOpenText className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
            <div className="flex flex-wrap gap-1.5">
              {resource.topics.map((topic) => (
                <span key={topic} className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600">{topic}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end border-t border-slate-200 pt-4">
          <a
            href={resource.link}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:border-[#c42e2e]/40 hover:text-[#c42e2e]"
          >
            Start building
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function OpportunityTabs({
  opportunities,
}: {
  opportunities: OpportunityCard[];
}) {
  const [activeTab, setActiveTab] = useState<OpportunityType>("hackathons");
  const statusPriority: Record<OpportunityCard["timeline_status"], number> = {
    "Open now": 0,
    "Opens soon": 1,
    Expected: 2,
    Watch: 3,
  };
  const hackathons = opportunities.filter(isHackathon).sort((a, b) =>
    statusPriority[a.timeline_status] - statusPriority[b.timeline_status] ||
    a.proximity_rank - b.proximity_rank ||
    a.sort_order - b.sort_order
  );
  const programs = opportunities.filter((card) => !isHackathon(card));
  const visibleCards = activeTab === "hackathons" ? hackathons : programs;

  const tabs: Array<{ id: OpportunityType; label: string; count: number }> = [
    { id: "hackathons", label: "Hackathons", count: hackathons.length },
    { id: "programs", label: "Programs", count: programs.length },
    { id: "faculty", label: "Faculty Research", count: facultyResearchers.length },
    { id: "learning", label: "Learning by Building", count: learningResources.length },
  ];

  return (
    <div className="mt-14">
      <div
        role="tablist"
        aria-label="Filter opportunities"
        className="mx-auto grid w-full max-w-4xl grid-cols-2 rounded-lg border border-slate-200 bg-white p-1 shadow-sm sm:grid-cols-4"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`${tab.id}-tab`}
              aria-selected={isActive}
              aria-controls={`${tab.id}-panel`}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-slate-950 text-white"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {tab.label}
              <span className={`ml-2 text-xs ${isActive ? "text-white/60" : "text-slate-400"}`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${activeTab}-panel`}
        aria-labelledby={`${activeTab}-tab`}
        className="mt-12"
      >
        <div className="mb-8 border-b border-slate-200 pb-6">
          <h2 className="text-2xl font-bold text-slate-950">
            {activeTab === "hackathons"
              ? "Upcoming Hackathons"
              : activeTab === "programs"
                ? "Fellowships, Internships & Programs"
                : activeTab === "faculty"
                  ? "Faculty Research at Stevens"
                  : "Learning by Building"}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            {activeTab === "hackathons"
              ? "Open events appear first, ordered by proximity to Stevens. Unpublished deadlines are clearly labeled."
              : activeTab === "programs"
                ? "Current openings appear first, followed by programs expected to reopen in a future cycle."
                : activeTab === "faculty"
                  ? "Explore research areas and faculty profiles across computing, engineering, and financial technology."
                  : "Learn through hands-on projects that take you from a blank editor to a working system."}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeTab === "faculty" ? (
            facultyResearchers.map((faculty) => <FacultyResearchCard key={faculty.name} faculty={faculty} />)
          ) : activeTab === "learning" ? (
            learningResources.map((resource) => <LearningResourceCard key={resource.link} resource={resource} />)
          ) : (
            visibleCards.map((card) => <OpportunityCardComponent key={card.id} card={card} />)
          )}
        </div>
      </div>
    </div>
  );
}
