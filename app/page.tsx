import HeroSection from "./components_main/HeroSection";
import WhereWeveLanded from "./components_main/WhereWeveLanded";
import Mission from "./components_main/Mission";
import Footer from "./components_main/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Main Component Section */}
      <div className="-translate-y-7 ml-35">
      <HeroSection />
      </div>
      <WhereWeveLanded />
      <Mission />
      <Footer />
    </main>
  );
}
