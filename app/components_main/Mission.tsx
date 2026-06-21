"use client";

import Image from "next/image";

interface MissionPhotos {
  eboard?: string;
  mission?: string;
  strategy?: string;
  vision?: string;
}

const WATERMARK_TEXT = "ColorStack · Mission · Strategy · Vision · Community · ";

const cardDefs = [
  {
    slot: "mission" as keyof MissionPhotos,
    title: "Mission",
    description:
      "Increase the number of Black and Latinx Computer Science graduates that go on to launch rewarding technical careers.",
    fallback: "/mainPhotos/one.JPG",
  },
  {
    slot: "strategy" as keyof MissionPhotos,
    title: "Strategy",
    description:
      "Organizing a portfolio of tools, resources, and opportunities to ensure that every member is equipped to complete their degree and land a full-time, technical job.",
    fallback: "/mainPhotos/fourth.JPG",
  },
  {
    slot: "vision" as keyof MissionPhotos,
    title: "Vision",
    description: "A future where Black and Latinx technologists are at the forefront of innovation.",
    fallback: "/mainPhotos/fifht.jpg",
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

export default function Mission({ missionPhotos = {} }: { missionPhotos?: MissionPhotos }) {
  const eboardSrc = missionPhotos.eboard ?? "/mainPhotos/Colorstack-Eboard.jpg";
  const cards = cardDefs.map((c) => ({ ...c, img: missionPhotos[c.slot] ?? c.fallback }));

  return (
    <section
      id="mission"
      aria-label="ColorStack Stevens mission, strategy, and vision"
      className="relative w-full overflow-hidden bg-[#0D1929] px-6 pb-[4.5rem] pt-8 md:pb-[5.5rem] md:pt-10"
>
      {/* Watermark background text */}


      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Eyebrow label */}
        <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.32em] text-[#ef3434]">
          What We Do
        </p>

        {/* Top split layout */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[4.5rem]">
          {/* Left — heading + bullets */}
          <div className="flex-1 lg:max-w-[36rem]">
            <h2 className="text-[3.1rem] font-extrabold leading-[0.98] tracking-[-0.02em] text-white md:text-[4.1rem] lg:text-[4.65rem]">
              ColorStack&apos;s
              <br />
              <span className="text-[#dc2626]">at Stevens.</span>
            </h2>

            <p className="mt-7 max-w-[35rem] text-[1.05rem] font-medium leading-8 text-white/65 md:text-[1.18rem]">
              National Organization dedicated to increase the number of Black and Latinx Computer
              Science graduates who go on to launch rewarding technical careers.{" "}
              <span className="font-semibold text-white/90">Everyone is invited to be part of it.</span>
            </p>

            <ul className="mt-10 space-y-6">
              {bulletPoints.map((bp) => (
                <li key={bp.title} className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef3434]" />
                  <div>
                    <p className="text-[0.98rem] font-bold leading-6 text-white">{bp.title}</p>
                    <p className="mt-1 max-w-[34rem] text-[0.95rem] leading-6 text-white/55">{bp.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — e-board photo */}
          <div className="group relative w-full overflow-hidden rounded-xl shadow-[0_24px_70px_rgba(0,0,0,0.28)] ring-1 ring-white/10 lg:w-[53%]">
            {/* red top accent */}
            <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#dc2626] z-10 transition-all duration-500 group-hover:w-full" />
            <Image
              src={eboardSrc}
              alt="ColorStack @ Stevens E-Board"
              width={1400}
              height={700}
              className="block aspect-[1.86/1] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-7 py-5">
              <p className="text-[0.98rem] font-bold tracking-[-0.01em] text-white/95">
                ColorStack Stevens E-Board
              </p>
              <span className="text-sm font-semibold text-white/45">
                2026 – 2027
              </span>
            </div>
          </div>
        </div>

        {/* Cards row */}
        <div className="mt-[4.5rem] grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative min-h-64 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:ring-[#dc2626]/45"
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
              <div className="relative z-10 p-7">
                <h3 className="text-[1.45rem] font-bold leading-8 tracking-[-0.01em] text-white">{card.title}</h3>
                <p className="mt-3 max-w-[21rem] text-[0.95rem] leading-6 text-white/65">
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
