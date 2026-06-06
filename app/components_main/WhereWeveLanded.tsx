"use client";

import Image from "next/image";
import styles from "./styles/WhereWeveLanded.module.css";

const logos = [
  { name: "adobe",       src: "/NationalSponsors/adobe.svg",        alt: "Adobe" },
  { name: "airbnb",      src: "/NationalSponsors/airbnb.svg",       alt: "Airbnb" },
  { name: "amazon",      src: "/NationalSponsors/amazon.svg",       alt: "Amazon" },
  { name: "apple",       src: "/NationalSponsors/apple.svg",        alt: "Apple" },
  { name: "bloomberg",   src: "/NationalSponsors/bloomberg.svg",    alt: "Bloomberg" },
  { name: "duolingo",    src: "/NationalSponsors/duolingo.svg",     alt: "Duolingo" },
  { name: "goldman",     src: "/NationalSponsors/goldman-sachs.svg",alt: "Goldman Sachs" },
  { name: "google",      src: "/NationalSponsors/google.svg",       alt: "Google" },
  { name: "janestreet",  src: "/NationalSponsors/janestreet.svg",   alt: "Jane Street" },
  { name: "jpmorgan",    src: "/NationalSponsors/jpmorgan.svg",     alt: "JPMorgan" },
  { name: "meta",        src: "/NationalSponsors/meta.svg",         alt: "Meta" },
  { name: "microsoft",   src: "/NationalSponsors/microsoft.svg",    alt: "Microsoft" },
  { name: "netflix",     src: "/NationalSponsors/netflix.svg",      alt: "Netflix" },
  { name: "spotify",     src: "/NationalSponsors/spotify.svg",      alt: "Spotify" },
  { name: "uber",        src: "/NationalSponsors/uber.svg",         alt: "Uber" },
];

export default function WhereWeveLanded() {
  return (
    <section
      id="companies"
      aria-label="Companies where ColorStack Stevens members have interned and worked"
      className="w-full py-4 md:py-16 px-6 text-center"
    >

{/*Container for the where we landed*/}
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

