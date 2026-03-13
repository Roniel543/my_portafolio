'use client';

import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { TechStack } from '@/components/tech-stack';

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
