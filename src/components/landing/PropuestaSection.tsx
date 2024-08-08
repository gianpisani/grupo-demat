import { motion } from 'framer-motion';

export default function PropuestaSection() {
  return (
    <motion.section 
        className="w-full py-16 bg-secondary text-white text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-2">
            <div className="space-y-4">
                <h2 className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-6xl">
                Nuestra propuesta
                </h2>
                <p className="max-w-[900px] mx-auto font-light text-black text-justify md:text-xl lg:text-base xl:text-xl">
                Implementar una <span className='font-bold'>Central de compras</span>, con el objetivo de aumentar la competitividad de los socios mediante el apalancamiento de volumen de compras que hoy se encuentra atomizado.
                </p>
                <div className="flex flex-col justify-center items-center space-y-2">
                <motion.div
                    className="flex flex-col md:flex-row text-center md:space-x-6"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-black p-4 rounded-lg">
                    <h3 className="text-3xl text-white font-bold">Disminuir precios de compras</h3>
                    </div>
                </motion.div>
                <motion.div
                    className="flex flex-col md:flex-row text-center md:space-x-6"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-black p-4 rounded-lg">
                    <h3 className="text-3xl text-white font-bold">Efectuar importaciones</h3>
                    </div>
                </motion.div>
                <motion.div
                    className="flex flex-col md:flex-row text-center md:space-x-6"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-black p-4 rounded-lg">
                    <h3 className="text-3xl text-white font-bold">Desarrollar marcas propias, imagen común</h3>
                    </div>
                </motion.div>
                <motion.div
                    className="flex flex-col md:flex-row text-center md:space-x-6"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-black p-4 rounded-lg">
                    <h3 className="text-3xl text-white font-bold">Generar Logística común</h3>
                    </div>
                </motion.div>
                <motion.div
                    className="flex flex-col md:flex-row text-center md:space-x-6"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-black p-4 rounded-lg">
                    <h3 className="text-3xl text-white font-bold">Disminuir mínimos de compra</h3>
                    </div>
                </motion.div>
                <motion.div
                    className="flex flex-col md:flex-row text-center md:space-x-6"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-black p-4 rounded-lg">
                    <h3 className="text-3xl text-white font-bold">Aumentar la rentabilidad de cada asociado</h3>
                    </div>
                </motion.div>
                </div>
            </div>
            </div>
        </div>
        </motion.section>
  );
}
