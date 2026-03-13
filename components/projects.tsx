'use client';

import { Button } from '@/components/ui/button';
import { BookOpen, Code2, Container, ExternalLink, Github, Plane, Shield, Store, Wallet } from 'lucide-react';
import Image from 'next/image';

type ProjectIcon = 'Plane' | 'Shield' | 'Container' | 'Code2' | 'Wallet' | 'BookOpen' | 'Store';

const iconMap: Record<ProjectIcon, React.ComponentType<{ className?: string }>> = {
  Plane,
  Shield,
  Container,
  Code2,
  Wallet,
  BookOpen,
  Store,
};

type ProjectBase = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  repoUrl: string;
  logoSrc?: string;
  icon?: ProjectIcon;
};

type ProductionProject = ProjectBase & {
  type: 'production';
  demoUrl: string;
  featured?: boolean;
};

type AcademicProject = ProjectBase & {
  type: 'academic';
  demoUrl?: never;
};

type Project = ProductionProject | AcademicProject;

export function Projects() {
  const productionProjects: ProductionProject[] = [
    {
      id: 1,
      type: 'production',
      title: 'FagSol — Escuela Virtual',
      description:
        'Plataforma educativa en producción (Azure). Parte corporativa estática + app dinámica con API REST. Cursos para cualquier rubro, roles (estudiante, instructor, admin), registro e inicio de sesión (JWT), pasarela de pagos con Mercado Pago (tarjetas reales), multi-moneda, certificados, dashboards y webhooks. Clean Architecture en backend, feature-based en frontend.',
      tags: ['Django 5', 'Next.js 14', 'PostgreSQL', 'Docker', 'Redis', 'Celery', 'Mercado Pago', 'JWT'],
      image: 'bg-gradient-to-br from-primary/20 via-transparent to-secondary/10',
      logoSrc: '/logo_fagsol.svg',
      demoUrl: 'https://fagsol.com',
      repoUrl: 'https://github.com/Roniel543/fagsol',
      featured: true,
    },
    {
      id: 2,
      type: 'production',
      title: 'EduTravel del Perú',
      description:
        'Sitio web para tour operador con +50 años de experiencia. Turismo nacional, internacional y estudiantil; programas por regiones y ciudades, cotización rápida, formulario de contacto, WhatsApp, panel admin. PHP, MySQL, HTML/CSS y Tailwind, MVC, desplegado en Hostinger.',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'Tailwind', 'Hostinger'],
      image: 'bg-gradient-to-br from-primary/15 via-transparent to-transparent',
      logoSrc: '/Logo_edutravel.png',
      demoUrl: 'https://www.edutravelaqp.com',
      repoUrl: 'https://github.com/Roniel543/edutravel/tree/version/1',
      featured: false,
    },
    {
      id: 3,
      type: 'production',
      title: 'Fabriconstruc — E-Commerce Industrial',
      description:
        'Plataforma corporativa + e-commerce para empresa industrial peruana (productos y servicios). HTML, CSS personalizado y Bootstrap 5 en front; backend PHP con panel de administración (categorías, productos, pedidos), sesiones, CSRF y pasarela Mercado Pago. Desplegado en cPanel en producción.',
      tags: ['HTML', 'CSS', 'Bootstrap 5', 'PHP', 'MySQL', 'Mercado Pago', 'cPanel'],
      image: 'bg-gradient-to-br from-primary/10 via-transparent to-secondary/10',
      logoSrc: '/logo_fabriconstruc.svg',
      icon: 'Store',
      demoUrl: 'https://solind.pe',
      repoUrl: 'https://github.com/Roniel543/solind',
      featured: false,
    },
  ];

  const academicProjects: AcademicProject[] = [
    {
      id: 101,
      type: 'academic',
      title: 'Sphere of Crypto',
      description:
        'Plataforma de LMS con pasarela de pagos integrada con blockchain y criptomonedas. Smart contracts, flujo de pagos con crypto. Proyecto académico en equipo, desarrollo local; código disponible en GitHub.',
      tags: ['Blockchain', 'Smart Contracts', 'Criptomonedas', 'React', 'TypeScript'],
      image: 'bg-gradient-to-br from-secondary/20 via-transparent to-primary/10',
      icon: 'Wallet',
      repoUrl: 'https://github.com/Roniel543/sphere-of-crypto', // 
    },
    {
      id: 102,
      type: 'academic',
      title: 'Viajes y Viajes',
      description:
        'Plataforma para reservar viajes con pasarela de pago, envío de PDF al usuario y CRUD de reservas/usuarios. Proyecto académico, desarrollo local; código en GitHub.',
      tags: ['React', 'Node.js', 'Payments', 'PDF', 'CRUD'],
      image: 'bg-gradient-to-br from-primary/15 via-transparent to-transparent',
      icon: 'Plane',
      repoUrl: 'https://github.com/Roniel543/Viajes1', //
    }

  ];

  const featured = productionProjects.find((p) => p.featured);
  const otherProduction = productionProjects.filter((p) => !p.featured);

  const renderProjectCard = (
    project: Project,
    options: { featured?: boolean; showDemo?: boolean }
  ) => {
    const isFeatured = options.featured ?? false;
    const showDemo = options.showDemo ?? (project.type === 'production' && 'demoUrl' in project && !!project.demoUrl);

    const cardContent = (
      <>
        <div
          className={`${project.image} flex items-center justify-center border-b border-border relative overflow-hidden ${isFeatured ? 'h-56 sm:h-64' : 'h-48'
            }`}
        >
          <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-primary/5 transition-opacity z-10" />
          {project.logoSrc ? (
            <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6">
              <Image
                src={project.logoSrc}
                alt={project.title}
                width={isFeatured ? 280 : 200}
                height={isFeatured ? 120 : 80}
                className={`object-contain w-auto ${isFeatured ? 'max-h-32 sm:max-h-40' : 'max-h-24'}`}
              />
              <span
                className={`absolute rounded bg-background/80 px-1.5 py-0.5 text-xs font-bold text-primary border border-primary/30 ${isFeatured ? 'top-3 right-3' : 'top-2 right-2'
                  }`}
              >
                {String(project.id).padStart(2, '0')}
              </span>
              {isFeatured && (
                <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-sm font-semibold text-primary">
                  En producción · Azure
                </p>
              )}
            </div>
          ) : project.icon ? (
            <>
              {(() => {
                const IconComponent = iconMap[project.icon!];
                return IconComponent ? (
                  <IconComponent
                    className={`text-primary/30 group-hover:text-primary/50 transition-colors ${isFeatured ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-16 h-16 sm:w-20 sm:h-20'
                      }`}
                  />
                ) : null;
              })()}
              <span
                className={`absolute font-black text-primary/20 group-hover:text-primary/40 transition-colors ${isFeatured ? 'top-3 right-3 text-lg' : 'bottom-2 right-2 text-2xl'
                  }`}
              >
                {String(project.id).padStart(2, '0')}
              </span>
            </>
          ) : (
            <span className="text-5xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
              {String(project.id).padStart(2, '0')}
            </span>
          )}
        </div>

        <div className={`flex-1 flex flex-col ${isFeatured ? 'p-6 sm:p-8' : 'p-6'}`}>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className={`font-bold leading-tight ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
              {project.title}
            </h3>
            {project.type === 'academic' && (
              <span className="rounded-full border border-muted-foreground/50 bg-muted/30 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                Proyecto académico
              </span>
            )}
          </div>
          <p
            className={`text-muted-foreground leading-relaxed flex-1 ${isFeatured ? 'mb-6 max-w-3xl text-base' : 'mb-4 text-sm'
              }`}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-lg border px-3 py-1 text-xs font-medium text-foreground ${isFeatured ? 'border-primary/30 bg-primary/5' : 'border-border'
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {showDemo && 'demoUrl' in project && project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={isFeatured ? 'flex-1 min-w-[140px]' : 'flex-1'}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-lg border-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver demo
                </Button>
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={isFeatured ? 'flex-1 min-w-[140px]' : 'flex-1'}
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-lg border-border hover:border-primary hover:bg-primary/10"
              >
                <Github className="w-4 h-4 mr-2" />
                {project.type === 'academic' ? 'Ver código' : 'Repositorio'}
              </Button>
            </a>
          </div>
        </div>
      </>
    );

    if (isFeatured) {
      return (
        <div
          key={project.id}
          className="mb-12 rounded-2xl border-2 border-primary/40 bg-card overflow-hidden hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
        >
          {cardContent}
        </div>
      );
    }

    return (
      <div
        key={project.id}
        className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
      >
        {cardContent}
      </div>
    );
  };

  return (
    <section id="projects" className="w-full bg-background text-foreground border-b border-border py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4">
            Proyectos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Mi base en <strong className="text-foreground">desarrollo web</strong>: aplicaciones en producción para clientes y proyectos académicos (código en GitHub). Experiencia en pagos, APIs, Web3 y despliegue.
          </p>
        </div>

        {/* En producción */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="rounded-full bg-primary/20 text-primary px-2 py-0.5 text-sm">En producción</span>
          </h3>
          <p className="text-sm text-muted-foreground mb-6">Proyectos desplegados para clientes o uso real.</p>

          {featured && renderProjectCard(featured, { featured: true, showDemo: true })}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProduction.map((p) => renderProjectCard(p, { showDemo: true }))}
          </div>
        </div>

        {/* Proyectos académicos */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="rounded-full border border-muted-foreground/50 bg-muted/20 text-muted-foreground px-2 py-0.5 text-sm">
              Proyectos académicos
            </span>
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Desarrollo local, en equipo. Código disponible en GitHub; no desplegados en producción.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicProjects.map((p) => renderProjectCard(p, { showDemo: false }))}
          </div>
        </div>
      </div>
    </section>
  );
}
