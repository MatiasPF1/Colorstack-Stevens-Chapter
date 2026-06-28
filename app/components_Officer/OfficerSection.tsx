import { createClient } from "@/lib/supabase/server";
import EBoardCard from "./EBoardCard";

interface Officer {
  id?: string;
  sort_order?: number;
  name: string;
  role: string;
  img: string;
  bio?: string | null;
  linkedin?: string | null;
  email?: string | null;
}

const fallbackOfficers: Officer[] = [
  {
    name: "Alejandro",
    role: "President",
    img: "/E-Board/Alejandro_President.jpg",
    linkedin: "https://www.linkedin.com/in/luis-alejandro-ruiz-20xx/",
    email: "lruiz1@stevens.edu",
    bio: "Leads the chapter vision, oversees strategy, and keeps the team aligned across initiatives.",
  },
  {
    name: "Matias",
    role: "Vice President",
    img: "/E-Board/Matias_VP.jpg",
    linkedin: "https://www.linkedin.com/in/matias43/",
    email: "mfreire@stevens.edu",
    bio: "Supports chapter operations, coordinates leadership efforts, and helps drive execution across programs.",
  },
  {
    name: "Alvaro",
    role: "Head of Tech",
    img: "/E-Board/Alvaro_HeadOfTech.jpg",
    linkedin: "https://www.linkedin.com/in/alvaro-izquierdo1/",
    email: "aizquier1@stevens.edu",
    bio: "Builds technical systems, manages web initiatives, and supports the chapter's digital infrastructure.",
  },
  {
    name: "Grant",
    role: "Head of Tech",
    img: "/E-Board/Grant_HeadofTech.jpg",
    linkedin: "https://www.linkedin.com/in/grant-dibiase-ba6b52382/",
    email: "gdibiase@stevens.edu",
    bio: "Shapes technical projects, improves online experiences, and helps maintain chapter tools and platforms.",
  },
  {
    name: "Juliana",
    role: "Treasurer",
    img: "/E-Board/Juliana_Treasurer.jpg",
    linkedin: "https://www.linkedin.com/in/juliana-matos-220b62247/",
    email: "jpimente@stevens.edu",
    bio: "Manages budgeting, tracks finances, and helps the chapter allocate resources responsibly.",
  },
  {
    name: "Kevin",
    role: "Secretary",
    img: "/E-Board/Kevin_Secretary.jpg",
    linkedin: "https://www.linkedin.com/in/kevin-hyun-030b9a347/",
    email: "khyun@stevens.edu",
    bio: "Keeps records organized, documents decisions, and supports communication across the executive board.",
  },
  {
    name: "Sydney",
    role: "PR",
    img: "/E-Board/Sydney_PR.png",
    linkedin: "https://www.linkedin.com/in/sydney-faranetta-a02836304/",
    email: "sfaranet@stevens.edu",
    bio: "Supports promotional campaigns, social presence, and communication that keeps the community engaged.",
  },
  {
    name: "Gregorio",
    role: "PR Chair",
    img: "/E-Board/Gregorio_PR Chair.jpg",
    linkedin: "https://www.linkedin.com/in/gregorio-rg/",
    email: "ggarcia9@stevens.edu",
    bio: "Leads public relations efforts, strengthens visibility, and helps shape how the chapter is presented.",
  },
  {
    name: "JayJay",
    role: "External Relations",
    img: "/E-Board/JayJay_ExternalRelations.jpg",
    linkedin: "https://www.linkedin.com/in/jaydenallende/",
    email: "jallende@stevens.edu",
    bio: "Builds relationships with partners, expands outreach, and represents the chapter beyond campus.",
  },

];

export default async function OfficerSection() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("eboard_members")
    .select("id, sort_order, name, role, img, bio, linkedin, email")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Failed to load officers:", error.message);
  }

  const officers: Officer[] = data && data.length > 0 ? data : fallbackOfficers;

  return (
    <section
      id="officers"
      aria-label="ColorStack Stevens officers"
      className="w-full bg-[#f7f8fb] px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c42e2e]">
            Leadership
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            Meet the team behind
            <span className="text-[#c42e2e]"> Stevens ColorStack.</span>
          </h1>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10">
          {officers.map((o) => (
            <EBoardCard
              key={o.id ?? `${o.role}-${o.name}`}
              name={o.name}
              role={o.role}
              img={o.img}
              bio={o.bio ?? undefined}
              linkedin={o.linkedin ?? undefined}
              email={o.email ?? undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
