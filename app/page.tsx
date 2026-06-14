import { createClient } from "@/lib/supabase/server";
import HeroSection from "./components_main/HeroSection";
import WhereWeveLanded from "./components_main/WhereWeveLanded";
import Mission from "./components_main/Mission";
import Footer from "./components_main/Footer";

export default async function Home() {
  const supabase = await createClient();

  const [{ data: heroPhotos }, { data: landingLogos }, { data: missionRows }] =
    await Promise.all([
      supabase.from("hero_photos").select("*").order("sort_order"),
      supabase.from("landing_logos").select("*").order("sort_order"),
      supabase.from("mission_photos").select("slot, img_path"),
    ]);

  const missionPhotos = Object.fromEntries(
    (missionRows ?? []).map((r) => [r.slot, r.img_path])
  );

  return (
    <main className="flex-1 flex flex-col">
      {/* Main Component Section */}
      <div className="-translate-y-7 ml-35">
        <HeroSection items={heroPhotos ?? []} />
      </div>
      <WhereWeveLanded logos={landingLogos ?? []} />
      <Mission missionPhotos={missionPhotos} />
      <Footer />
    </main>
  );
}
