'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!FORMSPREE_ENDPOINT) {
      setError('Formulario no configurado: añade NEXT_PUBLIC_FORMSPREE_ENDPOINT en .env.local (ver instrucciones en el código).');
      return;
    }

    setSubmitted(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error('Error al enviar');
      setFormData({ name: '', email: '', message: '' });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch {
      setError('No se pudo enviar. Usa el email directo de abajo o inténtalo más tarde.');
    } finally {
      setSubmitted(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:roniel.car.50@gmail.com',
      value: 'roniel.car.50@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Roniel543',
      value: 'Mi perfil',
    },
  ];

  return (
    <section id="contact" className="w-full bg-background text-foreground border-b border-border py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            ¿Tienes un proyecto o quieres colaborar? Escríbeme.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card/50 p-8 shadow-lg">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-foreground">
                Nombre
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="rounded-lg bg-background border-border focus:border-primary focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="rounded-lg bg-background border-border focus:border-primary focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                required
                className="rounded-lg bg-background border-border focus:border-primary focus:ring-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
              disabled={submitted}
            >
              {submitted ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar
                </>
              )}
            </Button>

            {submitSuccess && (
              <div className="rounded-lg border border-primary bg-primary/10 p-4 text-primary text-sm text-center font-medium">
                Mensaje enviado. Te responderé pronto.
              </div>
            )}
            {error && (
              <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive text-sm text-center font-medium">
                {error}
              </div>
            )}
          </form>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {contactLinks.map(({ icon: Icon, label, href, value }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 rounded-xl border border-border px-6 py-3 hover:border-primary hover:bg-primary/10 transition-all group"
              >
                <Icon className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{label}</p>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
