import HeroSection from "./components_main/HeroSection";
import WhereWeveLanded from "./components_main/WhereWeveLanded";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Main Component Section */}
      <HeroSection />
      <WhereWeveLanded />
    </main>
  );
}
