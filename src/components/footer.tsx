import Link from "next/link";
import Image from "next/image";
import logoDematBlanco from "../../public/logo/logo_demat_blanco.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <Image src={logoDematBlanco} alt="Grupo DEMAT" className="h-8 w-auto mb-4" />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Central de compras para ferreterías. Potenciamos la competitividad de nuestros asociados.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Navegación</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about-us" className="text-sm text-white/70 hover:text-white transition-colors" prefetch={false}>
                Sobre Nosotros
              </Link>
              <a href="/#propuesta" className="text-sm text-white/70 hover:text-white transition-colors">
                Propuesta
              </a>
              <Link href="/faq" className="text-sm text-white/70 hover:text-white transition-colors" prefetch={false}>
                Preguntas Frecuentes
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Contacto</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:contacto@demat.cl" className="text-sm text-white/70 hover:text-white transition-colors">
                contacto@demat.cl
              </a>
              <Link
                href="https://api.whatsapp.com/send/?phone=56981882271&text&type=phone_number&app_absent=0"
                className="text-sm text-white/70 hover:text-white transition-colors"
                prefetch={false}
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/40">&copy; {new Date().getFullYear()} Grupo DEMAT. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
