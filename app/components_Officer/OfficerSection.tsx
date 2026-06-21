import EBoardCard from "./EBoardCard";

interface Officer {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
}

const officers: Officer[] = [
  { name: "Officer Name", role: "President",     img: "/mainPhotos/Colorstack-Eboard.jpg" },
  { name: "Officer Name", role: "Vice President",img: "/mainPhotos/Colorstack-Eboard.jpg" },
  { name: "Officer Name", role: "Secretary",     img: "/mainPhotos/Colorstack-Eboard.jpg" },
  { name: "Officer Name", role: "Treasurer",     img: "/mainPhotos/Colorstack-Eboard.jpg" },
  { name: "Officer Name", role: "Outreach Lead", img: "/mainPhotos/Colorstack-Eboard.jpg" },
  { name: "Officer Name", role: "Tech Lead",     img: "/mainPhotos/Colorstack-Eboard.jpg" },
  { name: "Officer Name", role: "Events Lead",   img: "/mainPhotos/Colorstack-Eboard.jpg" },
  { name: "Officer Name", role: "Marketing Lead",img: "/mainPhotos/Colorstack-Eboard.jpg" },
];

export default function OfficerSection() {
  return (
    <section
      id="officers"
      aria-label="ColorStack Stevens officers"
      className="w-full bg-[#0D1929] px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c42e2e]">
            Leadership
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Meet the team behind
            <span className="text-[#c42e2e]"> Stevens ColorStack.</span>
          </h1>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10">
          {officers.map((o) => (
            <EBoardCard
              key={`${o.role}-${o.name}`}
              name={o.name}
              role={o.role}
              img={o.img}
              linkedin={o.linkedin}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
