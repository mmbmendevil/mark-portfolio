import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { TechStackSection } from "@/components/sections/tech-stack";
import { ProjectsSection } from "@/components/sections/projects";
import { ResearchSection } from "@/components/sections/research";
import { FutureProjectsSection } from "@/components/sections/future-projects";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ResearchSection />
        <FutureProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
