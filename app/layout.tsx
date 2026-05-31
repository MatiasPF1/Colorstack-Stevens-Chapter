import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
import "./globals.css";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


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
