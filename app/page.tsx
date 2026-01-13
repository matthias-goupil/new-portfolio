import HeroSection from "@/components/hero-section";
import AboutMeSection from "@/components/about-me-section";
import DiplomsAndExperiences from "@/components/diploms-and-experiences";
import ProjectSection from "@/components/project-section";
import BlobBackground from "@/components/blob-background";
import ContactMeSection from "@/components/contact-me-section";

export default function Home() {
  return (
      <main className="w-full z-0 relative">
          <BlobBackground />
          <HeroSection/>
          <AboutMeSection/>
          <DiplomsAndExperiences />
          <ProjectSection />
      </main>
  );
}
