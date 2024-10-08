'use client';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import logoDematBlanco from '../../public/logo/logo_demat_blanco.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  const isHomePage = pathname === '/';

  return (
    <header
      className={`fixed top-0 z-50 w-screen transition-colors duration-500 ${
        isHomePage
          ? isScrolled
            ? "bg-primary text-primary-foreground"
            : "bg-transparent text-white"
          : "bg-primary text-primary-foreground"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-center px-4 md:px-6">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image src={logoDematBlanco} alt="Grupo DEMAT" className="h-6 w-auto" />
        </Link>
      </div>
    </header>
  );
}
