'use client';

import Image from 'next/image';

const NAME = 'Roniel Fernando Chambilla Del Carpio';

// Contadores reales: proyectos (3 en producción + 4 académicos), tecnologías usadas
const STATS = {
  projects: 7,
  technologies: 30,
};

export function About() {
  const stats = [
    { label: 'Proyectos web realizados', value: `${STATS.projects}` },
    { label: 'Tecnologías (base dev)', value: `${STATS.technologies}+` },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Sobre <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">mí</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl border border-border/50 shadow-xl overflow-hidden bg-card">
              <Image
                src="/roniel.png"
                alt={NAME}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-muted-foreground">{NAME}</p>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg text-foreground leading-relaxed text-pretty">
              Soy <strong>desarrollador full-stack</strong> y durante años he construido aplicaciones web: frontend, backend, APIs, bases de datos. Esa base me dio soltura con redes, servidores, Linux y cómo se rompen (o se protegen) las cosas en la web.
            </p>

            <p className="text-lg text-foreground leading-relaxed text-pretty">
              Ahora <strong>quiero dedicarme a la ciberseguridad</strong>. Ya no me apasiona tanto solo desarrollar productos; me apasiona entender ataques, defensas y trabajar en seguridad. Me estoy formando de forma <strong>autodidacta</strong>: laboratorios, prácticas en entornos controlados y recursos abiertos.
            </p>

            <p className="text-lg text-foreground leading-relaxed text-pretty">
              Lo que aporto: experiencia real en desarrollo (auth, APIs, Docker, Linux), capacidad de leer código y entender arquitecturas, y ganas de especializarme en seguridad. Busco oportunidades para entrar al sector y seguir aprendiendo.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border bg-card/50 p-4 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
