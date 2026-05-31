"use client";

import Image from "next/image";

const logos = [
  { name: "nvidia",     src: "/NationalSponsors/NVDA_BIG 1.png",          alt: "NVIDIA" },
  { name: "microsoft",  src: "/NationalSponsors/microsoft 1.png",          alt: "Microsoft" },
  { name: "meta",       src: "/NationalSponsors/META_BIG 1.png",           alt: "Meta" },
  { name: "intel",      src: "/NationalSponsors/intel 1.png",              alt: "Intel" },
  { name: "ibm",        src: "/NationalSponsors/IBM 1.png",                alt: "IBM" },
  { name: "honeywell",  src: "/NationalSponsors/HON_BIG 1.png",            alt: "Honeywell" },
  { name: "goldman",    src: "/NationalSponsors/GS 1.png",                 alt: "Goldman Sachs" },
  { name: "dell",       src: "/NationalSponsors/DELL 1.png",               alt: "Dell" },
  { name: "apple",      src: "/NationalSponsors/apple-dark 1.png",         alt: "Apple" },
  { name: "boa",        src: "/NationalSponsors/bankofamerica-dark 1.png", alt: "Bank of America" },
  { name: "boeing",     src: "/NationalSponsors/BA_BIG 1.png",             alt: "Boeing" },
  { name: "cat",        src: "/NationalSponsors/CAT 1.png",                alt: "Caterpillar" },
  { name: "capitalOne", src: "/NationalSponsors/COF_BIG 1.png",            alt: "Capital One" },
  { name: "lockheed",   src: "/NationalSponsors/LMT 1.png",                alt: "Lockheed Martin" },
];

export default function WhereWeveLanded() {
  return (
    <section className="w-full py-16 px-6 text-center -translate-y-20">
      <style>{`
        @keyframes slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .slider-track {
          display: flex;
          width: max-content;
          animation: slide 30s linear infinite;
        }
        .slider-track:hover {
          animation-play-state: paused;
        }
        @keyframes slide-back {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .slider-track-back {
          display: flex;
          width: max-content;
          animation: slide-back 30s linear infinite;
        }
        .slider-track-back:hover {
          animation-play-state: paused;
        }
      `}</style>

      <h2 className="text-4xl font-bold text-white">
        Where We&apos;ve Landed
      </h2>
      <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
        ColorStack members have interned and gone full time at top tech companies
      </p>

      <div
        className="mt-12 w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="slider-track">
          {[...logos, ...logos].map((logo, i) => (
            <div key={`f-${i}`} style={{ padding: "0 2.5rem", height: 56, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Image src={logo.src} alt={logo.alt} width={120} height={36}
                style={{ maxHeight: 36, maxWidth: 120, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.7 }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

