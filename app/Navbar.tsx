"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


{/*Navbar Names and it's references */}
const NavbarLinkNames = [
  { label: "Resources", href: "/Components_Resources" },
  { label: "Programs", href: "/Components_Fellowships" },
  { label: "Officers", href: "/officers" },
  { label: "Sponsorship", href: "/sponsorship" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-[#0D1929]">
      {/* Desktop */}
      <div className="hidden md:flex max-w-5xl mx-auto items-center justify-between py-4 px-12">

        {/* Left links */}
        <div className="flex flex-1 items-center gap-10">
          {NavbarLinkNames.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-[16px] font-semibold tracking-wide hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center logo + wordmark */}
        <Link href="/" className="flex items-center gap-2 shrink-0 mr-16 translate-x-7">
          <Image
            src="/ColorstackStevensLogo.png"
            alt="ColorStack Stevens"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <span className="text-white font-bold text-lg tracking-tight whitespace-nowrap text-[25px] ">
            Stevens <span className="text-[#c42e2e]">ColorStack</span>
          </span>
        </Link>

        {/* Right links + login pill */}
        <div className="flex flex-1 items-center justify-end gap-10 translate-x-5">
          {NavbarLinkNames.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-[16px] font-semibold tracking-wide hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/Components_Login" className="border-2 border-white text-white text-sm font-semibold px-5 py-1.5 rounded-full hover:bg-white hover:text-[#0D1929] transition-colors whitespace-nowrap">
            Log In
          </Link>
        </div>
      </div>



                                          {/*Mobile version*/}
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/ColorstackStevensLogo.png"
            alt="ColorStack Stevens"
            width={28}
            height={28}
            className="object-contain"
            priority
          />
          <span className="text-white font-bold text-sm tracking-tight">
            SIT <span className="text-[#c42e2e]">ColorStack</span>
          </span>
        </Link>

        {/* Burger button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white p-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#162233] flex flex-col px-5 pb-4 gap-4">
          {NavbarLinkNames.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/Components_Login"
            onClick={() => setOpen(false)}
            className="self-start border-2 border-white text-white text-sm font-semibold px-5 py-1.5 rounded-full hover:bg-white hover:text-[#0D1929] transition-colors"
          >
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
}
