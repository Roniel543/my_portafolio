'use client';

interface SkillCategory {
  title: string;
  skills: string[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Seguridad (en aprendizaje)',
      skills: ['Linux', 'Bash', 'Parrot OS', 'Laboratorios virtuales', 'Redes', 'OWASP'],
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'Tailwind', 'Next.js'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'PHP', 'Django', 'REST APIs'],
    },
    {
      title: 'Bases de datos',
      skills: ['MySQL', 'PostgreSQL'],
    },
    {
      title: 'Web3',
      skills: ['Solidity', 'Hardhat', 'Fundamentos blockchain'],
    },
    {
      title: 'DevOps / Cloud',
      skills: ['Docker', 'Azure', 'Vercel', 'Render', 'Hostinger'],
    },
    {
      title: 'Diseño',
      skills: ['Figma', 'Photoshop', 'Illustrator'],
    },
    {
      title: 'Herramientas',
      skills: ['Git', 'GitHub', 'Ngrok', 'Warp Terminal', 'Notion', 'Jira'],
    },
  ];

  return (
    <section id="skills" className="w-full bg-background text-foreground border-b border-border py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4">
            Habilidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Mi base es el <strong className="text-foreground">desarrollo web</strong>; me estoy formando en <strong className="text-primary">ciberseguridad</strong>. Aquí, todo lo que uso y aprendo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-xl border bg-card p-6 hover:shadow-lg transition-all duration-300 group ${
                category.title.startsWith('Seguridad')
                  ? 'border-primary/40 bg-primary/5 hover:border-primary/60'
                  : 'border-border hover:border-primary/50 hover:shadow-primary/5'
              }`}
            >
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-background/50 text-foreground group-hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
