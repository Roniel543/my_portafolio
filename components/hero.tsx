'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, FileDown, Github, Shield } from 'lucide-react';
import Image from 'next/image';

const NAME = 'Roniel Fernando Chambilla Del Carpio';

export function Hero() {
  return (
    <section className="w-full bg-background text-foreground border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,107,0,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33333320_1px,transparent_1px),linear-gradient(to_bottom,#33333320_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <p className="text-sm font-medium text-muted-foreground">{NAME}</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-2">
              <Shield className="w-4 h-4" />
              En transición a ciberseguridad
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-balance">
              De desarrollo web
              <br />
              <span className="text-primary">a ciberseguridad</span>
            </h1>

            <p className="text-xl text-foreground/90 font-medium">
              Tengo base sólida como desarrollador full-stack. Ahora me formo en ciberseguridad de forma autodidacta y busco oportunidades en el sector.
            </p>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Aprovecho mi experiencia en web (APIs, auth, redes, Linux) para entender vulnerabilidades y buenas prácticas. Proyectos y aprendizaje continuo.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Ver proyectos
                </Button>
              </a>
              <a href="#skills">
                <Button variant="outline" className="border-border hover:border-primary hover:bg-primary/10 font-semibold rounded-xl">
                  Habilidades
                </Button>
              </a>
              <a href="https://github.com/Roniel543" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-secondary/50 hover:border-secondary hover:bg-secondary/10 text-foreground font-semibold rounded-xl">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
              <a href="/Roniel_Chambilla_CV.html" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-border hover:border-primary hover:bg-primary/10 font-semibold rounded-xl">
                  <FileDown className="w-4 h-4 mr-2" />
                  Descargar CV
                </Button>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl border border-border/50 shadow-2xl shadow-black/20 overflow-hidden bg-card">
              <Image
                src="/roniel.png"
                alt={NAME}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 0px, 384px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
