"use client";

import Image from "next/image";
import styles from "./styles/WhereWeveLanded.module.css";

interface Logo {
  id: string;
  name: string;
  src: string;
  alt: string;
  sort_order: number;
}

const FALLBACK_LOGOS: Logo[] = [
  { id: "adobe",      name: "adobe",      src: "/NationalSponsors/adobe.svg",         alt: "Adobe",        sort_order: 1  },
  { id: "airbnb",     name: "airbnb",     src: "/NationalSponsors/airbnb.svg",        alt: "Airbnb",       sort_order: 2  },
  { id: "amazon",     name: "amazon",     src: "/NationalSponsors/amazon.svg",        alt: "Amazon",       sort_order: 3  },
  { id: "apple",      name: "apple",      src: "/NationalSponsors/apple.svg",         alt: "Apple",        sort_order: 4  },
  { id: "bloomberg",  name: "bloomberg",  src: "/NationalSponsors/bloomberg.svg",     alt: "Bloomberg",    sort_order: 5  },
  { id: "duolingo",   name: "duolingo",   src: "/NationalSponsors/duolingo.svg",      alt: "Duolingo",     sort_order: 6  },
  { id: "goldman",    name: "goldman",    src: "/NationalSponsors/goldman-sachs.svg", alt: "Goldman Sachs", sort_order: 7 },
  { id: "google",     name: "google",     src: "/NationalSponsors/google.svg",        alt: "Google",       sort_order: 8  },
  { id: "janestreet", name: "janestreet", src: "/NationalSponsors/janestreet.svg",    alt: "Jane Street",  sort_order: 9  },
  { id: "jpmorgan",   name: "jpmorgan",   src: "/NationalSponsors/jpmorgan.svg",      alt: "JPMorgan",     sort_order: 10 },
  { id: "meta",       name: "meta",       src: "/NationalSponsors/meta.svg",          alt: "Meta",         sort_order: 11 },
  { id: "microsoft",  name: "microsoft",  src: "/NationalSponsors/microsoft.svg",     alt: "Microsoft",    sort_order: 12 },
  { id: "netflix",    name: "netflix",    src: "/NationalSponsors/netflix.svg",       alt: "Netflix",      sort_order: 13 },
  { id: "spotify",    name: "spotify",    src: "/NationalSponsors/spotify.svg",       alt: "Spotify",      sort_order: 14 },
  { id: "uber",       name: "uber",       src: "/NationalSponsors/uber.svg",          alt: "Uber",         sort_order: 15 },
];

export default function WhereWeveLanded({ logos = FALLBACK_LOGOS }: { logos?: Logo[] }) {
  return (
    <section
      id="companies"
      aria-label="Companies where ColorStack Stevens members have interned and worked"
      className="w-full py-4 md:py-16 px-6 text-center"
    >

{/*Container for the where we landed(if you are from NYU colorstack watching this, thanks for the component)*/}
    <div className="md:-translate-y-22">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Where We&apos;ve Landed
      </h2>
      <p className="mt-3 text-base md:text-lg text-white/60 max-w-2xl mx-auto">
        ColorStack members have interned and gone full time at top tech companies
      </p>
    </div>

      <div
        className="mt-6 md:mt-0 md:-translate-y-5 w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className={styles.trackFwd}>
          {[...logos, ...logos].map((logo, i) => (
            <div key={`f-${i}`} className={styles.logoItem}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={36}
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

