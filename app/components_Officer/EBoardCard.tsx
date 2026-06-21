import Image from "next/image";

interface EBoardCardProps {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
}

export default function EBoardCard({ name, role, img, linkedin }: EBoardCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#122033] shadow-[0_18px_45px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-white/14 hover:shadow-[0_24px_65px_rgba(0,0,0,0.28)]">
      <div className="absolute left-0 top-0 h-0.5 w-0 bg-[#c42e2e] transition-all duration-500 group-hover:w-full" />

      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={img}
          alt={`${name}, ${role}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/22 to-transparent opacity-95" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="mb-4 h-px w-12 bg-[#c42e2e]/70" />
          <h3 className="text-[1.35rem] font-semibold leading-tight tracking-tight text-white drop-shadow-sm">
            {name}
          </h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
            {role}
          </p>
        </div>

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[#0D1929]/70 text-white/75 backdrop-blur-md transition-all hover:border-[#c42e2e]/45 hover:bg-[#152235] hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-8.34 14.5v-6h-2v6zM9.67 8.73a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34m8.83 8.77v-3.28c0-1.76-.38-3.11-2.44-3.11a2.14 2.14 0 0 0-1.93 1.06H14.1v-1.82h-1.92v7.15h2v-3.54c0-.93.18-1.83 1.33-1.83s1.16 1.08 1.16 1.89v3.48z" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
