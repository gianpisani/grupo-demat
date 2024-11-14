'use client';
import Image from 'next/image';
import { FaShippingFast, FaGlobe, FaWarehouse, FaTrademark } from 'react-icons/fa';
import { GiFactory, GiTeamUpgrade } from 'react-icons/gi';
import ferreteria from '../../public/ferreteria.jpg';
import gerente from '../../public/gerente.jpg';
import grupodemat from '../../public/grupodemat.jpg';
import contenedores from '../../public/contenedores.jpg';
import { Eye, Goal, CheckIcon, TrendingUp, Package, Warehouse, Ship, Truck, ClipboardCheck, Layers, Grid, Briefcase, UserCheck, Award } from 'lucide-react';
import { GiWheelbarrow, GiWoodPile } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { TbPackages } from 'react-icons/tb';
import logoDematOriginal from '../../public/logo/logo_demat_original.png';
import { Button } from '@headlessui/react';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function LandingPage() {
  return (
    <div className="bg-primary text-black">
      {/* Hero Section */}
      <div className="relative h-screen bg-black">
        <Image 
          src={ferreteria.src}
          alt="Hero Image" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
          <Image src={logoDematOriginal} alt="Grupo DEMAT" width={400} height={400} className="mb-4" />
          <h1 className="text-4xl md:text-6xl font-black text-center text-white">Transformando la Ferretería</h1>
          <p className="mt-4 text-2xl md:text-4xl text-center text-white">Central de Compras para Ferreterías</p>
          <p className="mt-4 text-xl md:text-2xl text-center text-white">Únete al poder de compra para ser competitivo en el mercado</p>
          <Link href="/propuesta" className="mt-8 inline-block bg-secondary text-white hover:text-black transition-colors duration-500 py-3 px-6 rounded-md font-bold hover:bg-white text-center">
            Descubre más
          </Link>
        </div>
      </div>

      {/* ¿Por qué pertenecer al grupo DEMAT? Section */}
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

      {/* Vision-Mision Section */}
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
            <motion.div className="p-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <div className="flex items-center mb-4 justify-center">
                <Eye className="h-8 w-8 text-secondary" />
                <h2 className="text-4xl font-extrabold ml-4 text-center items-center">Nuestra Visión</h2>
              </div>
              <p className="mt-4 text-lg font-light text-justify">
                Es convertirnos en la central de compras líder y más confiable del sector ferretero, reconocida por nuestra capacidad de innovación, excelencia en el servicio y contribución al éxito sostenible de nuestras ferreterías asociadas, y que lo más importante es que el beneficio sea mayor para el asociado que para la cadena en sí.
              </p>
            </motion.div>
            <motion.div className="p-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
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

      {/* Pilares Section */}
      <div className='bg-white'>
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
                src={contenedores.src}
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
                <motion.li className="flex items-center gap-3 transition-transform transform hover:scale-105 hover:text-primary" initial={{ x: -25 }} whileInView={{ x: 0 }} transition={{ delay: 0.3 }}>
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span className="text-black font-light">Calidad y Variedad</span>
                </motion.li>
                <motion.li className="flex items-center gap-3 transition-transform transform hover:scale-105 hover:text-primary" initial={{ x: -25 }} whileInView={{ x: 0 }} transition={{ delay: 0.3 }}>
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span className="text-black font-light">Innovación y Mejora continua</span>
                </motion.li>
                <motion.li className="flex items-center gap-3 transition-transform transform hover:scale-105 hover:text-primary" initial={{ x: -25 }} whileInView={{ x: 0 }} transition={{ delay: 0.3 }}>
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span className="text-black font-light">Desarollo Sostenible</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Propuesta Section */}
      <div className='bg-secondary'>
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
                    <div className="bg-primary p-4 rounded-lg">
                      <h3 className="text-3xl text-white font-bold">Disminuir precios de compras</h3>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col md:flex-row text-center md:space-x-6"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="bg-primary p-4 rounded-lg">
                      <h3 className="text-3xl text-white font-bold">Efectuar importaciones</h3>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col md:flex-row text-center md:space-x-6"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="bg-primary p-4 rounded-lg">
                      <h3 className="text-3xl text-white font-bold">Desarrollar marcas propias, imagen común</h3>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col md:flex-row text-center md:space-x-6"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="bg-primary p-4 rounded-lg">
                      <h3 className="text-3xl text-white font-bold">Generar Logística común</h3>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col md:flex-row text-center md:space-x-6"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="bg-primary p-4 rounded-lg">
                      <h3 className="text-3xl text-white font-bold">Disminuir mínimos de compra</h3>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col md:flex-row text-center md:space-x-6"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="bg-primary p-4 rounded-lg">
                      <h3 className="text-3xl text-white font-bold">Aumentar la rentabilidad de cada asociado</h3>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>




      {/* Posibles Familias Section */}
      <div className='bg-white'>
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
                <motion.div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold" initial={{ x: -25 }} whileInView={{ x: 0 }} transition={{ delay: 0.3 }}>
                  <BsTools className="h-8 w-8 text-secondary" />
                  <span className="ml-4">Máquinas y herramientas</span>
                </motion.div>
                <motion.div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold" initial={{ x: 25 }} whileInView={{ x: 0 }} transition={{ delay: 0.3 }}>
                  <GiWheelbarrow className="h-8 w-8 text-secondary" />
                  <span className="ml-4">Carretillas</span>
                </motion.div>
                <motion.div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold" initial={{ x: -25 }} whileInView={{ x: 0 }} transition={{ delay: 0.3 }}>
                  <Layers className="h-8 w-8 text-secondary" />
                  <span className="ml-4">Revestimiento</span>
                </motion.div>
                <motion.div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold" initial={{ x: 25 }} whileInView={{ x: 0 }} transition={{ delay: 0.3 }}>
                  <Grid className="h-8 w-8 text-secondary" />
                  <span className="ml-4">Cerámicas</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      

      {/* Servicios Section */}
      <div className='bg-gray-200'><motion.section 
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
              <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Ship className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Compras Internacionales</h3>
                <p className='font-light max-w-[400px]'>
                Importación de productos de alta calidad con mejores márgenes.
                </p>
              </motion.div>
              <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Truck className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Distribución</h3>
                <p className='font-light max-w-[400px]'>
                  Optimización de la logística y tiempos de entrega para una mejor eficiencia.
                </p>
              </motion.div>
              <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <TbPackages className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Almacenamiento</h3>
                <p className='font-light max-w-[400px]'>
                  Gestión de almacenes y stock para una mejor disponibilidad de productos.
                </p>
              </motion.div>
              <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
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
      </div>
      

      <div className="bg-white py-12">
      <motion.section
        id="team"
        className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title and Intro */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
            Conoce nuestro equipo
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Somos profesionales con una amplia experiencia en la industria de la ferretería, 
            comprometidos en entregar soluciones eficientes y de calidad.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-10 flex justify-center">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="aspect-w-16 aspect-h-9 mx-auto"
          >
            <Image
              src={grupodemat.src}
              alt="Nuestros Socios"
              width={400}
              height={450}
              className="rounded-lg object-cover shadow-lg"
            />
          </motion.div>
        </div>

        {/* Socios Section */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
            
            {/* Socio 1 */}
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">Juan Manuel Jimenez</h4>
              <p className="text-sm text-gray-600">Director</p>
            </div>
            
            {/* Socio 2 */}
            <div className="space-y-4">

              <h4 className="text-2xl font-semibold text-gray-900">Sandra Contreras</h4>
              <p className="text-sm text-gray-600">Director</p>
            </div>
            
            {/* Socio 3 */}
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">Rolando Dewulf</h4>
              <p className="text-sm text-gray-600">Director</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>


      {/* Experiencia Section */}
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
            Nuestro equipo ya probó el éxito de esta forma de operar en una multinacional.
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
              <motion.div className="bg-gray-100 p-6 shadow-xl rounded-2xl text-black" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Package className="h-12 w-12 mx-auto text-secondary" />
                <h4 className="text-xl font-bold mb-2">Rediseño de producto</h4>
                <p className='font-light'>
                  Baja de precios por redefinición de productos
                </p>
              </motion.div>
              <motion.div className="bg-gray-100 p-6 shadow-xl rounded-2xl text-black" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
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

      {/* Testimonios Section */}
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
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="text-gray-600 font-light">Directores, Grupo DEMAT</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </motion.section>
    </div>
  );
}
