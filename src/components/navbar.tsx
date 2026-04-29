'use client';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoDematBlanco from '../../public/logo/logo_demat_blanco.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === '/';

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isHomePage && !isScrolled
          ? "bg-transparent"
          : "bg-primary shadow-xl shadow-primary/20"
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        <Link href="/" prefetch={false}>
          <Image src={logoDematBlanco} alt="Grupo DEMAT" className="h-7 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#propuesta" className="text-[13px] font-medium text-white/70 hover:text-white transition-colors tracking-[0.15em] uppercase">
            Propuesta
          </a>
          <a href="#servicios" className="text-[13px] font-medium text-white/70 hover:text-white transition-colors tracking-[0.15em] uppercase">
            Servicios
          </a>
          <a href="#experiencia" className="text-[13px] font-medium text-white/70 hover:text-white transition-colors tracking-[0.15em] uppercase">
            Experiencia
          </a>
          <Link
            href="https://api.whatsapp.com/send/?phone=56981882271&text&type=phone_number&app_absent=0"
            className="text-[13px] font-semibold bg-secondary text-white px-6 py-2.5 rounded tracking-[0.15em] uppercase hover:bg-secondary/90 transition-all duration-300 shadow-md shadow-secondary/20"
            prefetch={false}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
