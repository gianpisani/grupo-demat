import { motion } from 'framer-motion';
import Image from 'next/image';
import { GiWoodPile, GiWheelbarrow } from 'react-icons/gi';
import { Truck, Layers, Grid } from 'lucide-react';
import ferreteria from '../../../public/ferreteria.jpg';
import { BsTools } from 'react-icons/bs';

export default function PosiblesFamiliasSection() {
  return (
    <motion.section 
        className="w-full py-12 text-center bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
            Posibles familias a trabajar
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between mt-6">
            <div className="md:w-1/2">
              <Image
                src={ferreteria.src}
                alt="Herramientas"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-0">
              <motion.div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold" initial={{ x: -25 }} whileInView={{ x: 0 }} transition={{ delay: 0.3 }}>
                <GiWoodPile className="h-8 w-8 text-secondary" />
                <span className="ml-4">Madera</span>
              </motion.div>
              <motion.div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold" initial={{ x: 25 }} whileInView={{ x: 0 }} transition={{ delay: 0.3 }}>
                <Truck className="h-8 w-8 text-secondary" />
                <span className="ml-4">Fletes</span>
              </motion.div>
              <motion.div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold" initial={{ x: -25 }} whileInView={{ x: 0 }} transition={{ delay: 0.4 }}>
                <BsTools className="h-8 w-8 text-secondary" />
                <span className="ml-4">Máquinas y herramientas</span>
              </motion.div>
              <motion.div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold" initial={{ x: 25 }} whileInView={{ x: 0 }} transition={{ delay: 0.4 }}>
                <GiWheelbarrow className="h-8 w-8 text-secondary" />
                <span className="ml-4">Carretillas</span>
              </motion.div>
              <motion.div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold" initial={{ x: -25 }} whileInView={{ x: 0 }} transition={{ delay: 0.5 }}>
                <Layers className="h-8 w-8 text-secondary" />
                <span className="ml-4">Revestimiento</span>
              </motion.div>
              <motion.div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold" initial={{ x: 25 }} whileInView={{ x: 0 }} transition={{ delay: 0.5 }}>
                <Grid className="h-8 w-8 text-secondary" />
                <span className="ml-4">Cerámicas</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
  );
}
