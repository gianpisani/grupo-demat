'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { Mountain } from "lucide-react";
import logoDematOriginal from '../../public/logo/logo_demat_original.png';
import logoDematBlanco from '../../public/logo/logo_demat_blanco.png';
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsScrolled(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
        isScrolled ? "bg-primary text-primary-foreground" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center" prefetch={false}>
          {/* <Image src={logoDematOriginal} alt="Grupo DEMAT" className="h-6 w-auto" /> */}
          <Image src={logoDematBlanco} alt="Grupo DEMAT" className="h-6 w-auto" />
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link href="#" className="rounded-md px-3 py-2 text-sm font-bold hover:bg-primary/20 hover:bg-white hover:text-black" prefetch={false}>
            Propuestas
          </Link>
          <Link href="#" className="rounded-md px-3 py-2 text-sm font-bold hover:bg-primary/20 hover:bg-white hover:text-black" prefetch={false}>
            Servicios
          </Link>
          <Link href="#" className="rounded-md px-3 py-2 text-sm font-bold hover:bg-primary/20 hover:bg-white hover:text-black" prefetch={false}>
            Sobre nosotros
          </Link>
          <Link href="#" className="rounded-md px-3 py-2 text-sm font-bold hover:bg-primary/20 hover:bg-white hover:text-black" prefetch={false}>
            Preguntas frecuentes
          </Link>
        </nav>
        <Button className="hidden md:inline-flex font-bold text-primary bg-secondary hover:bg-white">Contactanos</Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden text-secondary">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Cerrar menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col items-start space-y-4 p-4">
              <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" prefetch={false}>
                Propuestas
              </Link>
              <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" prefetch={false}>
                Servicios
              </Link>
              <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" prefetch={false}>
                Sobre Nosotros
              </Link>
              <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" prefetch={false}>
                Preguntas frecuentes
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
