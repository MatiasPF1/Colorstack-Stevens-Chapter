import "./globals.css";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";
import { Inter, Geist } from "next/font/google";




const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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
