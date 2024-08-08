import { motion } from 'framer-motion';
import Image from 'next/image';
import gerente from '../../../public/gerente.jpg';

export default function TeamSection() {
  return (
    <motion.section 
        id="team" 
        className="py-8 px-16 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">Conoce nuestro equipo</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground font-light">
              En nuestro equipo, somos profesionales con una amplia experiencia en la industria de la ferretería.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Image
                  src={gerente.src}
                  width={200}
                  height={200}
                  alt="Team Member 1"
                  className="mx-auto rounded-full object-cover shadow-xl"
                  style={{ width: '200px', height: '200px' }}
                />
                <h3 className="text-xl font-bold">Persona 1</h3>
                <p className="text-muted-foreground font-light">Gerente General</p>
              </motion.div>
              <motion.div className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Image
                  src={gerente.src}
                  width={200}
                  height={200}
                  alt="Team Member 2"
                  className="mx-auto rounded-full object-cover shadow-xl"
                  style={{ width: '200px', height: '200px' }}
                />
                <h3 className="text-xl font-bold">Persona 2</h3>
                <p className="text-muted-foreground font-light">Gerente de Administración y Finanzas</p>
              </motion.div>
              <motion.div className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Image
                  src={gerente.src}
                  width={200}
                  height={200}
                  alt="Team Member 3"
                  className="mx-auto rounded-full object-cover shadow-xl"
                  style={{ width: '200px', height: '200px' }}
                />
                <h3 className="text-xl font-bold">Persona 3</h3>
                <p className="text-muted-foreground font-light">Gerente Comercial</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
  );
}
