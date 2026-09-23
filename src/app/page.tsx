import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { ContactComposer } from "@/components/sections/ContactComposer";
import { AboutSection } from "@/components/sections/AboutSection";
import {
  CapabilitiesSection,
  ExperienceSection,
  LeadershipSection,
} from "@/components/sections/ContentSections";
import { Hero } from "@/components/sections/HeroProfile";
import { Section } from "@/components/ui/Section";
import { projects } from "@/models/projects";
import { CareerGrowthSection } from "@/components/sections/CareerGrowthSection";
import { ScrollMotion } from "@/components/motion/ScrollMotion";

export default function Home() {
  return (
    <div data-portfolio-home>
      <ScrollMotion />
      <Hero />
      <AboutSection />
      <CareerGrowthSection />

      <Section id="work" title="Selected work">
        <ProjectShowcase projects={projects} />
      </Section>

      <ExperienceSection />
      <CapabilitiesSection />
      <LeadershipSection />

      <Section id="contact" title="Contact">
        <ContactComposer />
      </Section>
    </div>
  );
}
