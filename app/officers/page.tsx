import type { Metadata } from "next";
import OfficerSection from "../components_Officer/OfficerSection";

export const metadata: Metadata = {
  title: "Officers",
  description:
    "Meet the ColorStack Stevens executive board and student leaders supporting Black and Latinx computer science students at Stevens.",
  alternates: {
    canonical: "/officers",
  },
  openGraph: {
    title: "Officers | Stevens ColorStack",
    description:
      "Meet the ColorStack Stevens executive board and student leaders.",
    url: "/officers",
    images: [
      {
        url: "/mainPhotos/Colorstack-Eboard.jpg",
        width: 1400,
        height: 700,
        alt: "ColorStack Stevens E-Board members",
      },
    ],
  },
};

export default function OfficersPage() {
  return (
    <main className="min-h-screen w-full bg-[#f7f8fb]">
      <OfficerSection />
    </main>
  );
}
