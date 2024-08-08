import { motion } from 'framer-motion';
import { Warehouse, Ship, Truck, ClipboardCheck } from 'lucide-react';
import { TbPackages } from 'react-icons/tb';

export default function ServiciosSection() {
  return (
    <motion.section 
        id="features" 
        className="bg-gray-200 text-primary py-8"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">Nuestros Servicios</h2>
            <p className="max-w-3xl mx-auto text-black font-light">
              Descubre cómo podemos ayudarte a mejorar la eficiencia y competitividad de tu ferretería.
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
              <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Warehouse className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Compras nacionales</h3>
                <p className='font-light max-w-[400px]'>
                  Gestión eficiente de inventarios y negociaciones estratégicas con proveedores locales.
                </p>
              </motion.div>
              <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Ship className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Compras Internacionales</h3>
                <p className='font-light max-w-[400px]'>
                Importación de productos de alta calidad con mejores márgenes.
                </p>
              </motion.div>
              <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Truck className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Distribución</h3>
                <p className='font-light max-w-[400px]'>
                  Optimización de la logística y tiempos de entrega para una mejor eficiencia.
                </p>
              </motion.div>
              <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <TbPackages className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Almacenamiento</h3>
                <p className='font-light max-w-[400px]'>
                  Gestión de almacenes y stock para una mejor disponibilidad de productos.
                </p>
              </motion.div>
              <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <ClipboardCheck className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Desarrollo de marcas propias</h3>
                <p className='font-light max-w-[400px]'>
                  Creación de marcas exclusivas para mejorar el posicionamiento en el mercado.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
  );
}
