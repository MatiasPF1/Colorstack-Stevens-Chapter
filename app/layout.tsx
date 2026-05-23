import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
import "./globals.css";
import Navbar from "./Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} font-sans`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
