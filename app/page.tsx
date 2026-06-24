import { createClient } from "@/lib/supabase/server";
import HeroSection from "./components_main/HeroSection";
import WhereWeveLanded from "./components_main/WhereWeveLanded";
import Mission from "./components_main/Mission";
import Footer from "./components_main/Footer";
import { absoluteUrl, siteConfig } from "./seo";

export default async function Home() {
  const supabase = await createClient();

  const [{ data: heroRows }, { data: landingLogos }, { data: missionRows }] =
    await Promise.all([
      supabase.from("hero_photos").select("*").order("sort_order"),
      supabase.from("landing_logos").select("*").order("sort_order"),
      supabase.from("mission_photos").select("slot, img_path"),
    ]);

  const heroPhotos = (heroRows ?? []).map((p) => ({
    id: p.id as string,
    img_path: p.img_path as string,
    url: p.url as string,
    height: p.height as number,
    sort_order: p.sort_order as number,
  }));

  const missionPhotos = Object.fromEntries(
    (missionRows ?? []).map((r) => [r.slot, r.img_path])
  );

  return (
    <main className="flex-1 flex flex-col">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: absoluteUrl("/"),
            logo: absoluteUrl("/mainPhotos/ColorstackStevensLogo.png"),
            image: absoluteUrl("/mainPhotos/Colorstack-Eboard.jpg"),
            email: siteConfig.email,
            sameAs: [siteConfig.instagram, siteConfig.discord, "https://www.colorstack.org"],
            address: {
              "@type": "PostalAddress",
              ...siteConfig.address,
            },
            parentOrganization: {
              "@type": "Organization",
              name: "ColorStack",
              url: "https://www.colorstack.org",
            },
          }),
        }}
      />
      {/* Main Component Section */}
      <div className="md:-translate-y-7 md:ml-35">
        <HeroSection items={heroPhotos} />
      </div>
      <WhereWeveLanded logos={landingLogos ?? []} />
      <Mission missionPhotos={missionPhotos} />
      <Footer />
    </main>
  );
}
