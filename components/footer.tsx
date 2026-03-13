'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex justify-center sm:flex-row items-center gap-4 text-sm text-muted-foreground text-center sm:text-left">
          <p className="">© {currentYear} Roniel Fernando Chambilla Del Carpio</p>
        </div>
      </div>
    </footer>
  );
}
