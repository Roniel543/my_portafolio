'use client';

import { Card } from '@/components/ui/card';

interface SecurityLab {
  title: string;
  description: string;
  skills: string[];
  status: 'En progreso' | 'Completado';
}

export function SecurityLabs() {
  const labs: SecurityLab[] = [
    {
      title: 'Fundamentos Linux y redes',
      description: 'Entorno Linux, bash, redes y comandos. Base para luego abordar plataformas como TryHackMe o HackTheBox.',
      skills: ['Linux', 'Bash', 'Redes', 'Comandos'],
      status: 'En progreso',
    },
    {
      title: 'Seguridad web (conceptos y práctica)',
      description: 'Flujos de autenticación, APIs y OWASP. Práctica en entornos aislados antes de máquinas CTF.',
      skills: ['Autenticación', 'APIs', 'OWASP'],
      status: 'En progreso',
    },
    {
      title: 'Entornos aislados con Docker',
      description: 'Uso de contenedores para practicar sin afectar el sistema; preparación para labs y máquinas.',
      skills: ['Docker', 'Contenedores', 'Aislamiento'],
      status: 'En progreso',
    },
  ];

  return (
    <section id="security" className="py-20 lg:py-28 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Laboratorios de <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">seguridad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-4">
            Estoy <strong className="text-foreground">empezando</strong> en ciberseguridad: por ahora fundamentos (Linux, redes, seguridad web) y entornos de práctica. Aún no he resuelto máquinas en HackTheBox o TryHackMe; es la siguiente fase cuando tenga la base lista.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labs.map((lab) => (
            <Card
              key={lab.title}
              className="rounded-xl bg-card/80 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex-1 text-pretty pr-2">
                  {lab.title}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${lab.status === 'Completado'
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-secondary/20 text-secondary border border-secondary/30'
                    }`}
                >
                  {lab.status}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4 text-pretty leading-relaxed">
                {lab.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {lab.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
