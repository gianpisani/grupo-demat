import { motion } from 'framer-motion';
import { TrendingUp, Package, Award } from 'lucide-react';

export default function ExperienciaSection() {
  return (
    <motion.section 
        className="bg-primary py-16 text-center shadow-lg mt-12 px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container  mx-auto">
          <h2 className="text-4xl font-extrabold text-secondary">Nuestra Experiencia, Nuestro Compromiso</h2>
          <p className="mt-4 text-lg text-white text-balance font-light">
            Nuestro equipo ya probó el éxito de esta forma de operar en <span className='font-black'>MASISA</span>.
          </p>
          <p className="text-lg text-white text-balance font-light">
            En <span className='font-black'>Grupo DEMAT</span>, nos comprometemos a ofrecer soluciones innovadoras y sostenibles para mejorar la eficiencia y competitividad de nuestros clientes.
          </p>

          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <motion.div className="bg-gray-100 p-6 shadow-xl rounded-2xl text-black" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <TrendingUp className="h-12 w-12 mx-auto text-secondary" />
                <h4 className="text-xl font-bold mb-2">Mejoras en nivel de servicio</h4>
                <p className='font-light'>
                Mejores plazos de entrega, stock y consignación.
                </p>
              </motion.div>
              <motion.div className="bg-gray-100 p-6 shadow-xl rounded-2xl text-black" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Package className="h-12 w-12 mx-auto text-secondary" />
                <h4 className="text-xl font-bold mb-2">Rediseño de producto</h4>
                <p className='font-light'>
                  Baja de precios por redefinición de productos
                </p>
              </motion.div>
              <motion.div className="bg-gray-100 p-6 shadow-xl rounded-2xl text-black" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <Award className="h-12 w-12 mx-auto text-secondary" />
                <h4 className="text-xl font-bold mb-2">Productos marca propia</h4>
                <p className='font-light'>
                Mejor margen, posicionamiento de marca
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
  );
}
