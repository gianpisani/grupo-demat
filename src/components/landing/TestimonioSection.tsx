import { motion } from 'framer-motion';
import Image from 'next/image';
import gerente from '../../../public/gerente.jpg';

export default function TestimoniosSection() {
  return (
    <motion.section 
        className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-24 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center font-semibold leading-8 text-black text-3xl sm:text-4xl sm:leading-9">
              <p>“Este será un proyecto que cambiará la forma de hacer negocios en la industria de la ferretería en Chile”</p>
            </blockquote>
            <figcaption className="mt-10">
              <Image width={50} height={50} className="mx-auto h-10 w-10 rounded-full" src={gerente.src} alt="Imagen Gerente General"/>
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-black">Juan Perez</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="text-gray-600 font-light">CEO, Grupo DEMAT</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </motion.section>
  );
}
