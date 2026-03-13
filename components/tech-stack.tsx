'use client';

import { Card } from '@/components/ui/card';

const categories = [
  {
    title: 'Lenguajes',
    items: ['TypeScript', 'Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    items: ['Django', 'Flask', 'Node.js', 'Next.js', 'Astro'],
  },
  {
    title: 'Bases de datos',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Herramientas y entorno',
    items: ['Docker', 'Git', 'Git Bash', 'Linux'],
  },
  {
    title: 'Diseño',
    items: ['Figma'],
  },
];

export function TechStack() {
  return (
    <section id="tech" className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Tech <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-4">
            Lenguajes, frameworks y herramientas con los que trabajo. En programación: backend (Django, Flask, Node), frontend (Next.js, Astro) y bases de datos. En entorno y seguridad: Git, Git Bash, Linux y sistemas.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.items.map((tech) => (
                  <Card
                    key={tech}
                    className="rounded-xl bg-card/80 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 p-5 text-center group hover:-translate-y-0.5"
                  >
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tech}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
