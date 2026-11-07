import { profile } from "@/data/profile";
import { publicFileExists } from "@/lib/assets";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main id="main">
      <Hero hasPhoto={publicFileExists(profile.photo)} hasResume={publicFileExists(profile.resume)} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <Education />
      <Contact />
    </main>
  );
}
