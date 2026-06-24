import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { absoluteUrl, siteConfig } from "../seo";

export const metadata: Metadata = {
  title: "Sponsorship",
  description:
    "Partner with ColorStack Stevens to support Black and Latinx computer science students through technical workshops, career programming, and community events.",
  alternates: {
    canonical: "/sponsorship",
  },
  openGraph: {
    title: "Sponsorship | Stevens ColorStack",
    description:
      "Support ColorStack Stevens programming and connect with emerging technical talent at Stevens Institute of Technology.",
    url: "/sponsorship",
    images: [
      {
        url: "/mainPhotos/2024colorstsack.png",
        width: 1400,
        height: 900,
        alt: "ColorStack Stevens members at a community event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sponsorship | Stevens ColorStack",
    description:
      "Support ColorStack Stevens programming and connect with emerging technical talent.",
    images: ["/mainPhotos/2024colorstsack.png"],
  },
};

const contactHref =
  "mailto:colorstackstevens@gmail.com?subject=ColorStack%20Stevens%20Sponsorship";

const impactStats = [
  { value: "30+", label: "active members" },
  { value: "12", label: "countries represented" },
  { value: "30+", label: "annual events" },
];

const sponsorBenefits = [
  "Logo on website and socials",
  "Host an info session or career talk",
  "Resume review or mock interview event access",
  "Featured partner spotlight at a chapter meeting",
];

const sponsorshipTiers = [
  {
    name: "Community",
    price: "$100",
    description: "Start the relationship and stay connected with our chapter.",
    included: [0],
  },
  {
    name: "Bronze",
    price: "$500",
    description: "A simple way to support programming and student visibility.",
    included: [0, 1],
  },
  {
    name: "Silver",
    price: "$1,500",
    description: "A stronger recruiting presence with direct member engagement.",
    included: [0, 1, 2],
  },
  {
    name: "Gold",
    price: "$2,500",
    description: "Our highest-impact package for year-round partner visibility.",
    included: [0, 1, 2, 3],
    featured: true,
  },
];

export default function SponsorshipPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#0D1929]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Sponsorship",
            url: absoluteUrl("/sponsorship"),
            description: metadata.description,
            isPartOf: {
              "@type": "WebSite",
              name: siteConfig.name,
              url: absoluteUrl("/"),
            },
            about: {
              "@type": "Organization",
              name: siteConfig.name,
              email: siteConfig.email,
            },
          }),
        }}
      />
      <section className="relative px-5 pt-14 pb-12 sm:px-6 md:pt-24 md:pb-20">
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#ef3434]">
              Sponsorship
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Partner with{" "}
              <span className="text-[#ef3434]">ColorStack Stevens.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-white/65 sm:text-lg md:text-xl md:leading-8">
              Help Black and Latinx computer science students at Stevens build community,
              sharpen career skills, and launch rewarding technical careers.
            </p>

            <div className="mt-9 grid max-w-2xl grid-cols-3 gap-0 sm:gap-4 md:mt-10">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-l border-white/15 px-3 first:border-l-0 first:pl-0 sm:pl-4 sm:pr-0"
                >
                  <p className="text-3xl font-extrabold tracking-tight text-[#ef3434] sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/45 sm:text-xs sm:tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-[0_28px_80px_-42px_rgba(0,0,0,0.95)]">
            <div className="absolute left-0 top-0 z-10 h-0.5 w-0 bg-[#ef3434] transition-all duration-500 group-hover:w-full" />
            <Image
              src="/mainPhotos/2024colorstsack.png"
              alt="ColorStack Stevens members at a community event"
              width={1400}
              height={900}
              priority
              className="aspect-[1.1/1] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] sm:aspect-[1.45/1]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#07111e]/78 via-transparent to-black/10" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 md:p-7">
              <div className="min-w-0">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#ef3434] sm:text-sm sm:tracking-[0.22em]">
                  Stevens Institute of Technology
                </p>
                <p className="mt-1 text-base font-bold leading-tight text-white sm:mt-2 sm:text-xl">
                  Students building the future of tech
                </p>
              </div>
              <a
                href={contactHref}
                className="hidden shrink-0 items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/16 md:inline-flex"
              >
                Contact us
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#091421] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#ef3434]">
              Partnership Packages
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Support the work. Meet the talent.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/60 md:text-lg">
              Sponsorship helps fund technical workshops, interview preparation,
              community events, and career programming for our members.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {sponsorshipTiers.map((tier) => (
              <article
                key={tier.name}
                className={[
                  "relative flex min-h-full flex-col overflow-hidden rounded-xl border p-6 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.95)] transition-all duration-300 hover:-translate-y-1",
                  tier.featured
                    ? "border-[#ef3434]/70 bg-[#b51f34] text-white"
                    : "border-white/10 bg-[#122033]/90 text-white hover:border-white/20 hover:bg-[#15263a]",
                ].join(" ")}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/35 to-transparent" />

                <p
                  className={[
                    "text-xs font-extrabold uppercase tracking-[0.32em]",
                    tier.featured ? "text-white" : "text-[#ef3434]",
                  ].join(" ")}
                >
                  {tier.name}
                </p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-sm font-bold text-white/70">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {tier.price.replace("$", "")}
                  </span>
                  <span className="pb-2 text-sm font-semibold text-white/70">/yr</span>
                </div>
                <p className="mt-4 min-h-12 text-sm leading-6 text-white/65">
                  {tier.description}
                </p>

                <div className="my-6 h-px bg-white/12" />

                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-white/70">
                  What&apos;s included
                </p>
                <ul className="mt-5 flex flex-1 flex-col gap-4">
                  {tier.included.map((benefitIndex) => (
                    <li
                      key={sponsorBenefits[benefitIndex]}
                      className="flex items-start gap-3 text-sm font-semibold leading-6 text-white"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                      <span>{sponsorBenefits[benefitIndex]}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={contactHref}
                  className={[
                    "mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition-colors",
                    tier.featured
                      ? "bg-white text-[#b51f34] hover:bg-white/90"
                      : "border border-[#ef3434]/70 text-white hover:bg-[#ef3434]",
                  ].join(" ")}
                >
                  Contact Us
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
