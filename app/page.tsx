import { HeroSection } from "./components/HeroSection";
import { AboutPreview } from "./components/AboutPreview";
import { ProjectsPreview } from "./components/ProjectsPreview";
import { SkillsPreview } from "./components/SkillsPreview";
import { EducationPreview } from "./components/EducationPreview";
import { FocusAreasPreview } from "./components/FocusAreasPreview";
import { ContactCta } from "./components/ContactCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 grid gap-16 mt-12">
        <AboutPreview />
        <ProjectsPreview />
        <SkillsPreview />
        <EducationPreview />
        <FocusAreasPreview />
        <ContactCta />
      </div>
    </>
  );
}
