import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  studentName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ studentName }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Video', href: '#video-seccion' },
    { label: 'Introducción', href: '#introduccion' },
    { label: 'Conceptos', href: '#conceptos' },
    { label: 'Cuestionario (12)', href: '#cuestionario' },
    { label: 'Aplicación Práctica', href: '#practica' },
    { label: 'Recursos Visuales', href: '#recursos' },
    { label: 'Conclusión', href: '#conclusion' },
    { label: 'Fuentes (2)', href: '#fuentes' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-amber-950/90 backdrop-blur-md border-b border-amber-600/30 text-amber-100 shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Student Name */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 font-bold text-amber-50 hover:text-amber-300 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 to-yellow-400 text-slate-950 flex items-center justify-center font-extrabold text-sm shadow-sm">
              TN
            </span>
            <div className="leading-tight">
              <span className="block text-sm font-bold text-amber-100 sm:text-base">
                Lo que aprendí del video
              </span>
              <span className="block text-xs font-semibold text-amber-400/90 truncate max-w-[150px] sm:max-w-[200px]">
                {studentName}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 rounded-lg text-amber-200/90 hover:text-amber-100 hover:bg-amber-900/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-amber-200 hover:text-amber-100 hover:bg-amber-900/60"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-amber-800/80 bg-amber-950/95 px-4 pt-2 pb-4 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-amber-200 hover:bg-amber-900/80 hover:text-amber-100 rounded-md"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
