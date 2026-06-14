"use client"
import Masonry from '../reactBitsComponents/Masonry';
import { MapPin } from 'lucide-react';

interface HeroPhoto {
  id: string;
  img_path: string;
  url: string;
  height: number;
  sort_order: number;
}












export default function HeroSection({ items }: { items: HeroPhoto[] }) {
  const masonryItems = items.map((p) => ({
    id: p.id,
    img: p.img_path,
    url: p.url,
    height: p.height,
  }));

  return (
    <section
      id="hero"
      aria-label="Introduction to ColorStack at Stevens Institute of Technology"
      className="flex-1 min-h-screen flex flex-col md:flex-row items-center max-w-7xl mx-auto w-full md:gap-26 px-6 md:px-0"
    >
      {/* Left — Masonry (desktop only) */}
      <div className="hidden md:flex flex-[1.5] items-center justify-center -mt-120 mr-30">
        <Masonry
          items={masonryItems}
          ease="power2.out"
          duration={0.3}
          stagger={0.17}
          animateFrom="bottom"
          scaleOnHover
          hoverScale={0.95}
          blurToFocus
          colorShiftOnHover={false}
        />
      </div>


      {/* Right — About Text */}
      <div className="flex-1 flex flex-col gap-5 min-w-0 md:-translate-x-20 md:mb-15 w-full px-2 md:px-0 pt-16 pb-6 md:py-0">

        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <p className="text-[#c42e2e] font-semibold text-xs tracking-[0.2em] uppercase">
            About Us
          </p>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <h1 className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight">
            Stevens <span className="text-[#c42e2e]">ColorStack</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-medium leading-snug max-w-md">
          Helping Black and Latino Computer Science students get{" "}
          <span className="text-[#c42e2e] font-bold italic">degreed</span> and{" "}
          <span className="text-[#c42e2e] font-bold italic">hired</span> nationwide.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-3">
          <a
            href="https://www.colorstack.org/member-application-requirements"
            className="bg-[#c42e2e] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a82828] active:scale-95 transition-all duration-200 shadow-lg shadow-red-900/40"
          >
            Become a National Member
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-white/50 text-sm mt-1">
          <MapPin size={14} className="text-[#c42e2e] shrink-0" />
          <span>1 Castle Point Terrace, Hoboken, NJ</span>
        </div>
      </div>





      {/* Mobile version for Masonry */}
      <div className="md:hidden w-full pb-10">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {items.slice(0, 8).map((item) => (
            <a
              key={item.id}
              href={item.url}
              aria-label="ColorStack Stevens community photo"
              className="flex-none snap-center"
            >
              <img
                src={item.img_path}
                alt=""
                className="h-52 w-40 object-cover rounded-2xl"
                draggable={false}
              />
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
