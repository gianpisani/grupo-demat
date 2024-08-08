import { motion } from 'framer-motion';
import { FaShippingFast, FaGlobe, FaWarehouse, FaTrademark } from 'react-icons/fa';
import { GiFactory, GiTeamUpgrade } from 'react-icons/gi';

export default function WhyJoinSection() {
  return (
    <motion.section
        className="py-16 bg-primary text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-extrabold mb-8">¿Por qué pertenecer al grupo DEMAT?</h2>
          <p className="text-lg font-light mb-4">Al pertenecer al grupo DEMAT, obtienes:</p>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <motion.div whileHover={{ scale: 1.1 }} className="p-4">
              <FaShippingFast className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold">Logística eficiente</h3>
              <p className="mt-2 text-lg font-light">Optimización de la logística y tiempos de entrega para una mejor eficiencia.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="p-4">
              <FaGlobe className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold">Alcance internacional</h3>
              <p className="mt-2 text-lg font-light">Importación de productos de alta calidad con mejores márgenes.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="p-4">
              <FaWarehouse className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold">Almacenamiento seguro</h3>
              <p className="mt-2 text-lg font-light">Gestión de almacenes y stock para una mejor disponibilidad de productos.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="p-4">
              <FaTrademark className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold">Marcas propias</h3>
              <p className="mt-2 text-lg font-light">Creación de marcas exclusivas para mejorar el posicionamiento en el mercado.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="p-4">
              <GiFactory className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold">Desarrollo sostenible</h3>
              <p className="mt-2 text-lg font-light">Promovemos prácticas sostenibles y responsables.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="p-4">
              <GiTeamUpgrade className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold">Crecimiento conjunto</h3>
              <p className="mt-2 text-lg font-light">Aumenta la rentabilidad y competitividad de cada asociado.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
  );
}
