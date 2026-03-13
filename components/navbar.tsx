'use client';

import { Button } from '@/components/ui/button';
import { Github, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Contacto', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-36">
          <div className="shrink-0">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="/Logo_hm.svg"
                alt="Logo Roniel Chambilla"
                className="h-24 w-auto"
              />
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Roniel543"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-primary/50 hover:border-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-lg"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 text-foreground hover:text-primary focus:outline-none transition-colors rounded-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-card/95 border-t border-border backdrop-blur-md">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 text-sm font-semibold text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
