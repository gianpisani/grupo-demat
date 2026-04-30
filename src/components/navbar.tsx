'use client';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoDematBlanco from '../../public/logo/logo_demat_blanco.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isHomePage = pathname === '/';

  const navLinks = [
    { href: '#propuesta', label: 'Propuesta' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#experiencia', label: 'Experiencia' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isHomePage && !isScrolled && !isMobileOpen
            ? "bg-transparent"
            : "bg-primary shadow-xl shadow-primary/20"
        }`}
      >
        <div className="max-w-7xl mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" prefetch={false}>
            <Image src={logoDematBlanco} alt="Grupo DEMAT" className="h-6 sm:h-7 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-white/70 hover:text-white transition-colors tracking-[0.15em] uppercase"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="https://api.whatsapp.com/send/?phone=56981882271&text&type=phone_number&app_absent=0"
              className="text-[13px] font-semibold bg-secondary text-white px-5 lg:px-6 py-2.5 rounded tracking-[0.15em] uppercase hover:bg-secondary/90 transition-all duration-300 shadow-md shadow-secondary/20"
              prefetch={false}
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary transition-all duration-300 md:hidden ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-semibold text-white/80 hover:text-white transition-colors tracking-[0.15em] uppercase"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="https://api.whatsapp.com/send/?phone=56981882271&text&type=phone_number&app_absent=0"
            className="text-lg font-semibold bg-secondary text-white px-8 py-3 rounded tracking-[0.15em] uppercase hover:bg-secondary/90 transition-all duration-300 shadow-md shadow-secondary/20 mt-4"
            prefetch={false}
            onClick={() => setIsMobileOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </>
  );
}
