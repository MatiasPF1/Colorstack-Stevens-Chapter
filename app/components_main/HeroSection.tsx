"use client"
import Masonry from '../reactBitsComponents/Masonry';

interface MasonryItem {
  id: string;
  img: string;
  url: string;
  height: number;
}
const items: MasonryItem[] = [
  {
    id: "1",
    img: "/mainPhotos/one.JPG",
    url: "https://www.colorstack.org/",
    height: 400,
  },
  {
    id: "2",
    img: "/mainPhotos/two.JPG",
    url: "https://www.colorstack.org/",
    height: 300,
  },
  {
    id: "3",
    img: "/mainPhotos/three.JPG",
    url: "https://www.colorstack.org/",
    height: 500,
  },
  {
    id: "4",
    img: "/mainPhotos/fourth.JPG",
    url: "https://www.colorstack.org/",
    height: 350,
  },
  {
    id: "5",
    img: "/mainPhotos/fifht.jpg",
    url: "https://www.colorstack.org/",
    height: 450,
  },
  {
    id: "6",
    img: "/mainPhotos/Colorstack-Eboard.jpg",
    url: "https://www.colorstack.org/",
    height: 320,
  },
  {
    id: "7",
    img: "/mainPhotos/sixth.jpeg",
    url: "https://www.colorstack.org/",
    height: 320,
  },
  {
    id: "8",
    img: "/mainPhotos/seventh.jpeg",
    url: "https://www.colorstack.org/",
    height: 320,
  },
  {
    id: "9",
    img: "/mainPhotos/eight.jpeg",
    url: "https://www.colorstack.org/",
    height: 320,
  },
  {
    id: "10",
    img: "/mainPhotos/ninth.jpeg",
    url: "https://www.colorstack.org/",
    height: 320,
  },
  {
    id: "11",
    img: "/mainPhotos/thenth.jpeg",
    url: "https://www.colorstack.org/",
    height: 320,
  },












  
];


export default function HeroSection() {
  return (
    <section className="flex-1 min-h-screen flex flex-col md:flex-row items-center max-w-7xl mx-auto w-full md:gap-26 px-6 md:px-0">
      {/* Left — Masonry (desktop only) */}
      <div className="hidden md:flex flex-[1.5] items-center justify-center -mt-120 mr-30">
        <Masonry
          items={items}
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
          <span className="h-px w-8 bg-[#c42e2e]" />
          <p className="text-[#c42e2e] font-semibold text-xs tracking-[0.2em] uppercase">
            About Us
          </p>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-1">
          <h1 className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight">
            SIT <span className="text-[#c42e2e]">ColorStack</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-medium leading-snug max-w-md">
          Helping Black and Latinx Computer Science students get{" "}
          <span className="text-[#c42e2e] font-bold italic">degreed</span> and{" "}
          <span className="text-[#c42e2e] font-bold italic">hired</span> nationwide.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-3">
          <a
            href="https://www.colorstack.org/member-application-requirements"
            className="bg-[#c42e2e] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a82828] active:scale-95 transition-all duration-200 shadow-lg shadow-red-900/40"
          >
            Become a Member
          </a>
          <a
            href="https://www.colorstack.org/"
            className="border border-white/30 text-white/80 font-semibold px-8 py-3.5 rounded-full hover:border-white hover:text-white active:scale-95 transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>





      {/* Mobile version for Masonry */}
      <div className="md:hidden w-full pb-10">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {items.slice(0, 8).map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="flex-none snap-center"
            >
              <img
                src={item.img}
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
