import EBoardCard from "./EBoardCard";

interface Officer {
  name: string;
  role: string;
  img: string;
  bio?: string;
  linkedin?: string;
  email?: string;
}

const officers: Officer[] = [
  {
    name: "Alejandro",
    role: "President",
    img: "/E-Board/Alejandro_President.jpg",
    bio: "Leads the chapter vision, oversees strategy, and keeps the team aligned across initiatives.",
  },
  {
    name: "Matias",
    role: "Vice President",
    img: "/E-Board/Matias_VP.jpg",
    bio: "Supports chapter operations, coordinates leadership efforts, and helps drive execution across programs.",
  },
  {
    name: "Alvaro",
    role: "Head of Tech",
    img: "/E-Board/Alvaro_HeadOfTech.jpg",
    bio: "Builds technical systems, manages web initiatives, and supports the chapter's digital infrastructure.",
  },
  {
    name: "Grant",
    role: "Head of Tech",
    img: "/E-Board/Grant_HeadofTech.jpg",
    bio: "Shapes technical projects, improves online experiences, and helps maintain chapter tools and platforms.",
  },
  {
    name: "Juliana",
    role: "Treasurer",
    img: "/E-Board/Juliana_Treasurer.jpg",
    bio: "Manages budgeting, tracks finances, and helps the chapter allocate resources responsibly.",
  },
  {
    name: "Kevin",
    role: "Secretary",
    img: "/E-Board/Kevin_Secretary.jpg",
    bio: "Keeps records organized, documents decisions, and supports communication across the executive board.",
  },
  {
    name: "JayJay",
    role: "External Relations",
    img: "/E-Board/JayJay_ExternalRelations.jpg",
    bio: "Builds relationships with partners, expands outreach, and represents the chapter beyond campus.",
  },
  {
    name: "Gregorio",
    role: "PR Chair",
    img: "/E-Board/Gregorio_PR Chair.jpg",
    bio: "Leads public relations efforts, strengthens visibility, and helps shape how the chapter is presented.",
  },
  {
    name: "Sydney",
    role: "PR",
    img: "/E-Board/Sydney_PR.png",
    bio: "Supports promotional campaigns, social presence, and communication that keeps the community engaged.",
  },
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
              bio={o.bio}
              linkedin={o.linkedin}
              email={o.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
