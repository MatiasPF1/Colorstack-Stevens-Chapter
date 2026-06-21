import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";
import { Inter, Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Stevens ColorStack — Empowering Black & Latinx CS Students",
    template: "%s | Stevens ColorStack",
  },
  description:
    "ColorStack at Stevens Institute of Technology supports Black and Latinx Computer Science students with mentorship, career resources, and community to help them graduate and launch rewarding tech careers.",
  keywords: [
    "ColorStack Stevens",
    "Black CS students",
    "Latinx CS students",
    "Stevens Institute of Technology",
    "computer science diversity",
    "diversity in tech",
    "tech careers",
    "Hoboken NJ",
    "Stevens tech community",
  ],
  authors: [{ name: "ColorStack Stevens" }],
  icons: {
    icon: "/mainPhotos/ColorstackStevensLogo.png",
    shortcut: "/mainPhotos/ColorstackStevensLogo.png",
    apple: "/mainPhotos/ColorstackStevensLogo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Stevens ColorStack",
    title: "Stevens ColorStack — Empowering Black & Latinx CS Students",
    description:
      "Supporting Black and Latinx Computer Science students at Stevens Institute of Technology with mentorship, career resources, and a strong community.",
    images: [
      {
        url: "/mainPhotos/Colorstack-Eboard.jpg",
        width: 1400,
        height: 700,
        alt: "ColorStack Stevens E-Board members",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#0D1929]" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
