import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { ContactComposer } from "@/components/sections/ContactComposer";
import {
  CapabilitiesSection,
  ExperienceSection,
  LeadershipSection,
} from "@/components/sections/ContentSections";
import { Hero, ProfileSection } from "@/components/sections/HeroProfile";
import { Section } from "@/components/ui/Section";
import { projects } from "@/models/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />

      <Section id="work" title="Selected work">
        <ProjectShowcase projects={projects} />
      </Section>

      <ExperienceSection />
      <CapabilitiesSection />
      <LeadershipSection />

      <Section id="contact" title="Contact">
        <ContactComposer />
      </Section>
    </>
  );
}
