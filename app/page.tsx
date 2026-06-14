import { createClient } from "@/lib/supabase/server";
import HeroSection from "./components_main/HeroSection";
import WhereWeveLanded from "./components_main/WhereWeveLanded";
import Mission from "./components_main/Mission";
import Footer from "./components_main/Footer";

const HERO_PHOTOS = [
  { name: "one.JPG",               height: 320 },
  { name: "two.JPG",               height: 280 },
  { name: "three.JPG",             height: 360 },
  { name: "fourth.JPG",            height: 300 },
  { name: "fifht.jpg",             height: 340 },
  { name: "sixth.jpeg",            height: 280 },
  { name: "seventh.jpeg",          height: 320 },
  { name: "eight.jpeg",            height: 360 },
  { name: "ninth.jpeg",            height: 300 },
  { name: "thenth.jpeg",           height: 280 },
  { name: "2024colorstsack.png",   height: 340 },
  { name: "Colorstack-Eboard.jpg", height: 320 },
];

export default async function Home() {
  const supabase = await createClient();

  const [{ data: landingLogos }, { data: missionRows }] =
    await Promise.all([
      supabase.from("landing_logos").select("*").order("sort_order"),
      supabase.from("mission_photos").select("slot, img_path"),
    ]);

  const heroPhotos = HERO_PHOTOS.map((p, i) => ({
    id: p.name,
    img_path: `/mainPhotos/${p.name}`,
    url: "https://www.colorstack.org/",
    height: p.height,
    sort_order: i + 1,
  }));

  const missionPhotos = Object.fromEntries(
    (missionRows ?? []).map((r) => [r.slot, r.img_path])
  );

  return (
    <main className="flex-1 flex flex-col">
      {/* Main Component Section */}
      <div className="-translate-y-7 ml-35">
        <HeroSection items={heroPhotos} />
      </div>
      <WhereWeveLanded logos={landingLogos ?? []} />
      <Mission missionPhotos={missionPhotos} />
      <Footer />
    </main>
  );
}
