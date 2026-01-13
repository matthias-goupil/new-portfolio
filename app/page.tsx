import HeroSection from "@/components/hero-section";
import AboutMeSection from "@/components/about-me-section";

export default function Home() {
  return (
      <main className="w-full z-0 relative">
          <div
              className="absolute top-20 left-10 h-72 w-72 rounded-full bg-emerald-600 opacity-60 blur-[120px] -z-10">
          </div>

          <div
              className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-400 opacity-60 blur-[120px] -z-10">
          </div>
          <HeroSection/>
          <AboutMeSection/>


      </main>
  );
}
