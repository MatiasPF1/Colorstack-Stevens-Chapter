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
    <section className="flex-1 flex items-center max-w-7xl mx-auto w-full  gap-26 ">
      {/* Left — Masonry */}
      <div className="flex-[1.5] flex items-center justify-center -mt-120 mr-30">
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
      <div className="flex-1 flex flex-col gap-7 min-w-0 -translate-x-20 mb-15">

        <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight tracking-tight mt-1">
          SIT
          <span className="text-[#c42e2e] ml-3">ColorStack</span>
        </h1>

        <p className="text-white/75 text-base md:text-lg leading-relaxed">
          ColorStack at Stevens Institute of Technology is a community
          dedicated to increasing the number of Black and Latinx students
          who graduate with a degree in computing and enter the tech industry.
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href="https://www.colorstack.org/member-application-requirements"
            className="bg-[#c42e2e] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#a82828] active:scale-95 transition-all duration-200 shadow-lg shadow-red-900/30"
          >
            Join National ColorStack
          </a>
          <a
            href="https://www.colorstack.org/"
            className="border-2 border-white/80 text-white font-semibold px-7 py-3 rounded-full hover:bg-white hover:text-[#0D1929] active:scale-95 transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

    </section>
  );
}
