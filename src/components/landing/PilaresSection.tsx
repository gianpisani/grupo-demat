import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckIcon } from 'lucide-react';
import ferreteria from '../../../public/ferreteria.jpg';

export default function PilaresSection() {
  return (
    <motion.section 
        className="w-full py-12 bg-white"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container grid grid-cols-1 px-4 md:grid-cols-2 md:gap-12 md:px-6">
          <motion.div className="flex w-full p-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <Image
              src={ferreteria.src}
              width="400"
              height="400"
              layout="responsive"
              alt="Experience"
              className="w-1/2 rounded-2xl shadow-xl"
            />
          </motion.div>
          <motion.div className="flex flex-col justify-center space-y-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pilares
              </h2>
              <p className="max-w-[700px] text-justify text-black font-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A través de estos pilares, nos esforzamos por ser el socio estratégico de confianza para nuestras ferreterías,
                promoviendo su éxito y el fortalecimiento del sector ferretero en su conjunto.
              </p>
            </div>
            <ul className="grid gap-4">
              <motion.li className="flex items-center gap-3 transition-transform transform hover:scale-105 hover:text-primary" initial={{ x: -25 }} whileInView={{ x: 0 }} transition={{ delay: 0.3 }}>
                <CheckIcon className="h-5 w-5 text-black font-light" />
                <span className="text-black font-light">Optimización de la logística</span>
              </motion.li>
              <motion.li className="flex items-center gap-3 transition-transform transform hover:scale-105 hover:text-primary" initial={{ x: -25 }} whileInView={{ x: 0 }} transition={{ delay: 0.4 }}>
                <CheckIcon className="h-5 w-5 text-primary" />
                <span className="text-black font-light">Calidad y Variedad</span>
              </motion.li>
              <motion.li className="flex items-center gap-3 transition-transform transform hover:scale-105 hover:text-primary" initial={{ x: -25 }} whileInView={{ x: 0 }} transition={{ delay: 0.5 }}>
                <CheckIcon className="h-5 w-5 text-primary" />
                <span className="text-black font-light">Innovación y Mejora continua</span>
              </motion.li>
              <motion.li className="flex items-center gap-3 transition-transform transform hover:scale-105 hover:text-primary" initial={{ x: -25 }} whileInView={{ x: 0 }} transition={{ delay: 0.6 }}>
                <CheckIcon className="h-5 w-5 text-primary" />
                <span className="text-black font-light">Desarollo Sostenible</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
  );
}
