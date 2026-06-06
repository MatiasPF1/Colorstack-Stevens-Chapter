"use client";

import Image from "next/image";

const WATERMARK_TEXT = "ColorStack · Mission · Strategy · Vision · Community · ";

const cards = [
  {
    title: "Mission",
    description:
      "Increase the number of Black and Latinx Computer Science graduates that go on to launch rewarding technical careers.",
    img: "/mainPhotos/one.JPG",
  },
  {
    title: "Strategy",
    description:
      "Organizing a portfolio of tools, resources, and opportunities to ensure that every member is equipped to complete their degree and land a full-time, technical job.",
    img: "/mainPhotos/fourth.JPG",
  },
  {
    title: "Vision",
    description:
      "A future where Black and Latinx technologists are at the forefront of innovation.",
    img: "/mainPhotos/fifht.jpg",
  },
];

const bulletPoints = [
  {
    title: "Professional mentorship",
    description: "Guidance from industry professionals and experienced peers",
  },
  {
    title: "Collaborate on real-world projects",
    description: "Hands-on development alongside fellow members and industry mentors",
  },
  {
    title: "Open to every skill level",
    description: "Whether you're just starting out or tackling complex problems, there's a place for you",
  },
];

export default function Mission() {
  return (
    <section
      id="mission"
      aria-label="ColorStack Stevens mission, strategy, and vision"
      className="relative w-full overflow-hidden bg-[#0d0d1a] py-20 px-6"
    >
      {/* Watermark background text */}


      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Eyebrow label */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#dc2626]">
          What We Do
        </p>

        {/* Top split layout */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left — heading + bullets */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              ColorStack&apos;s mission
              <br />
              <span className="text-[#dc2626]">at Stevens.</span>
            </h2>

            <p className="mt-5 max-w-lg text-base text-white/60 md:text-lg leading-relaxed">
              National Organization dedicated to increase the number of Black and Latinx Computer
              Science graduates who go on to launch rewarding technical careers.{" "}
              <span className="text-white/80 font-medium">Everyone is invited to be part of it.</span>
            </p>

            <ul className="mt-8 space-y-5">
              {bulletPoints.map((bp) => (
                <li key={bp.title} className="flex items-start gap-4">
                  <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-[#dc2626]" />
                  <div>
                    <p className="font-semibold text-white text-sm">{bp.title}</p>
                    <p className="text-sm text-white/45 mt-0.5 leading-relaxed">{bp.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — e-board photo */}
          <div className="group relative w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 lg:w-[52%] lg:h-[62%]">
            {/* red top accent */}
            <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#dc2626] z-10 transition-all duration-500 group-hover:w-full" />
            <Image
              src="/mainPhotos/Colorstack-Eboard.jpg"
              alt="ColorStack @ Stevens E-Board"
              width={1400}
              height={700}
              className="block h-auto w-full transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-5 flex items-center justify-between">
              <p className="text-sm font-semibold tracking-wide text-white/90">
                ColorStack Stevens E-Board
              </p>
              <span className="text-xs text-white/40 bg-white/10 px-3 py-1 rounded-full">
                2024 – 2025
              </span>
            </div>
          </div>
        </div>

        {/* Cards row */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:ring-[#dc2626]/50 hover:-translate-y-1 min-h-72"
            >
              {/* Sliding red top border */}
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#dc2626] transition-all duration-500 group-hover:w-full z-10" />

              {/* Card background photo */}
              <div className="absolute inset-0">
                <Image
                  src={card.img}
                  alt={`${card.title}: ${card.description}`}
                  fill
                  className="object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                />
              </div>

              {/* Card content */}
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
