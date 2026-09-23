import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { ContactComposer } from "@/components/sections/ContactComposer";
import { AboutSection } from "@/components/sections/AboutSection";
import {
  ExperienceSection,
  LeadershipSection,
} from "@/components/sections/ContentSections";
import { Hero } from "@/components/sections/HeroProfile";
import { Section } from "@/components/ui/Section";
import { projects } from "@/models/projects";

import { ScrollMotion } from "@/components/motion/ScrollMotion";

export default function Home() {
  return (
    <div data-portfolio-home>
      <ScrollMotion />
      <Hero />
      <AboutSection />

      <Section id="work" title="Selected work">
        <ProjectShowcase projects={projects} />
      </Section>

      <ExperienceSection />

      <LeadershipSection />

      <Section id="contact" title="Contact">
        <ContactComposer />
      </Section>
    </div>
  );
}
