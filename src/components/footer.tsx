import Link from "next/link";
import Image from "next/image";
import logoDematBlanco from "../../public/logo/logo_demat_blanco.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 px-4 md:flex-row md:px-6">
        <div className="flex items-center">
          <Image src={logoDematBlanco} alt="Grupo DEMAT" className="h-8 w-auto" />
          <span className="ml-2 text-sm">© 2024 Grupo DEMAT</span>
        </div>
        <div className="flex space-x-6">
          <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground" prefetch={false}>
            Sobre Nosotros
          </Link>
          <Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground" prefetch={false}>
            Servicios
          </Link>
          <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground" prefetch={false}>
            Contacto
          </Link>
          <Link href="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground" prefetch={false}>
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
