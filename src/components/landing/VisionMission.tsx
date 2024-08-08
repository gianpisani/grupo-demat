import { motion } from 'framer-motion';
import { Eye, Goal } from 'lucide-react';

export default function VisionMissionSection() {
  return (
    <motion.section 
        id="vision-mission" 
        className="py-16 bg-primary text-white"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div className="p-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <div className="flex items-center mb-4 justify-center">
                <Eye className="h-8 w-8 text-secondary" />
                <h2 className="text-4xl font-extrabold ml-4 text-center items-center">Nuestra Visión</h2>
              </div>
              <p className="mt-4 text-lg font-light text-justify">
                Es convertirnos en la central de compras líder y más confiable del sector ferretero, reconocida por nuestra capacidad de innovación, excelencia en el servicio y contribución al éxito sostenible de nuestras ferreterías asociadas, y que lo más importante es que el beneficio sea mayor para el asociado que para la cadena en sí.
              </p>
            </motion.div>
            <motion.div className="p-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <div className="flex items-center mb-4 justify-center">
                <Goal className="h-8 w-8 text-secondary" />
                <h2 className="text-4xl font-extrabold ml-4 text-center items-center">Nuestra Misión</h2>
              </div>
              <p className="mt-4 text-lg font-light text-justify">
                Es potenciar el crecimiento y la competitividad de nuestras ferreterías asociadas, ofreciendo una gestión centralizada y eficiente de compras que garantice productos de alta calidad, precios competitivos y un servicio excepcional.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
  );
}
