import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";
import { Inter, Geist } from "next/font/google";
import { absoluteUrl, siteConfig, siteUrl } from "./seo";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: "%s | Stevens ColorStack",
  },
  description: siteConfig.description,
  keywords: [
    "ColorStack Stevens",
    "Stevens ColorStack",
    "Black CS students",
    "Latinx CS students",
    "Black computer science students",
    "Latinx computer science students",
    "Stevens Institute of Technology",
    "Stevens computer science",
    "Stevens student organization",
    "computer science diversity",
    "diversity in tech",
    "tech careers",
    "career mentorship",
    "Hoboken NJ",
    "Stevens tech community",
  ],
  authors: [{ name: "ColorStack Stevens" }],
  creator: "ColorStack Stevens",
  publisher: "ColorStack Stevens",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/mainPhotos/ColorstackStevensLogo.png",
    shortcut: "/mainPhotos/ColorstackStevensLogo.png",
    apple: "/mainPhotos/ColorstackStevensLogo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/mainPhotos/Colorstack-Eboard.jpg"),
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
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl("/mainPhotos/Colorstack-Eboard.jpg")],
  },
  category: "education",
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
      <body className="min-h-full flex flex-col bg-[#f7f8fb]" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
