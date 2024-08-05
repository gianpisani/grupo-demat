'use client';
import Image from 'next/image';
import { FaShippingFast, FaGlobe, FaWarehouse, FaTrademark } from 'react-icons/fa';
import { GiFactory, GiCommercialAirplane, GiTeamUpgrade, GiLogicGateAnd } from 'react-icons/gi';
import ferreteria from '../../public/ferreteria.jpg';
import gerente from '../../public/gerente.jpg';
import carpintero from '../../public/carpintero.jpg';
import { Award, Eye, Goal, CheckCircleIcon, CheckIcon, Package, TrendingUp, Truck, Layers, Grid, ClipboardCheck, Warehouse, Ship } from 'lucide-react';
import { GiWheelbarrow, GiWoodPile, GiCargoShip } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { User } from 'lucide-react';
import LineChart from '@/components/line-chart';
import BarChart from '@/components/bar-chart';
import PieCharts from '@/components/pie-chart';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { TbPackages } from 'react-icons/tb';
import logoDematOriginal from '../../public/logo/logo_demat_original.png';
import { Button } from '@headlessui/react';
import Link from 'next/link';

export default function LandingPage() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Disminuir precios de compras',
        'Efectuar importaciones',
        'Desarrollar marcas propias, imagen común',
        'Generar Logística común',
        'Disminuir mínimos de compra',
        'Aumentar la rentabilidad de cada asociado',
      ],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="bg-gray-100 text-black">
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
        <h1 className="text-4xl md:text-6xl font-black text-center text-white">Revolucionando la Ferretería</h1>
        <p className="mt-4 text-2xl md:text-4xl text-center text-white">Central de Compras para Ferreterías</p>
        <Link href="/propuesta" className="mt-8 inline-block bg-secondary text-white hover:text-black transition-colors duration-500 py-3 px-6 rounded-md font-bold hover:bg-white text-center">
          Descubre más
        </Link>
      </div>
    </div>


    {/* Vision-Mision Section */}
    <section id="vision-mission" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="p-4">
            <div className="flex items-center mb-4 justify-center">
              <Eye className="h-8 w-8 text-secondary" />
              <h2 className="text-4xl font-extrabold ml-4 text-center items-center">Nuestra Visión</h2>
            </div>
            <p className="mt-4 text-lg font-light text-justify">
              Es convertirnos en la central de compras líder y más confiable del sector ferretero, reconocida por nuestra capacidad de innovación, excelencia en el servicio y contribución al éxito sostenible de nuestras ferreterías asociadas, y que lo más importante es que el beneficio sea mayor para el asociado que para la cadena en sí.
            </p>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4 justify-center">
              <Goal className="h-8 w-8 text-secondary" />
              <h2 className="text-4xl font-extrabold ml-4 text-center items-center">Nuestra Misión</h2>
            </div>
            <p className="mt-4 text-lg font-light text-justify">
              Es potenciar el crecimiento y la competitividad de nuestras ferreterías asociadas, ofreciendo una gestión centralizada y eficiente de compras que garantice productos de alta calidad, precios competitivos y un servicio excepcional.
            </p>
          </div>
        </div>
      </div>
    </section>


      {/* Pilares Section */}
      <section className="w-full py-12 bg-white">
        <div className="container grid grid-cols-1 px-4 md:grid-cols-2 md:gap-12 md:px-6">
          <div className="flex w-full p-2">
            <Image
              src={ferreteria.src}
              width="400"
              height="400"
              layout="responsive"
              alt="Experience"
              className="w-1/2 rounded-2xl shadow-xl"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
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
              <li className="flex items-center gap-3 transition-transform transform hover:scale-105 hover:text-primary">
                <CheckIcon className="h-5 w-5 text-black font-light" />
                <span className="text-black font-light">Optimización de la logística</span>
              </li>
              <li className="flex items-center gap-3 transition-transform transform hover:scale-105 hover:text-primary">
                <CheckIcon className="h-5 w-5 text-primary" />
                <span className="text-black font-light">Calidad y Variedad</span>
              </li>
              <li className="flex items-center gap-3 transition-transform transform hover:scale-105 hover:text-primary">
                <CheckIcon className="h-5 w-5 text-primary" />
                <span className="text-black font-light">Innovación y Mejora continua</span>
              </li>
              <li className="flex items-center gap-3 transition-transform transform hover:scale-105 hover:text-primary">
                <CheckIcon className="h-5 w-5 text-primary" />
                <span className="text-black font-light">Desarollo Sostenible</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Propuesta Section */}
      <section className="w-full py-12 h-min-[1000px] text-center bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-6xl font-bold tracking-tighter sm:text-4xl md:text-6xl text-white">
                Nuestra propuesta
              </h2>
              <p className="max-w-[700px] mx-auto font-light text-black text-justify md:text-xl lg:text-base xl:text-xl">
                Implementar una <span className='font-bold'>Central de compras</span>, con el objetivo de aumentar la competitividad de los socios mediante el apalancamiento de volumen de compras que hoy se encuentra atomizado.
              </p>
            </div>
              <p className="max-w-[700px] mx-auto font-light text-black text-justify md:text-xl lg:text-base xl:text-xl">
                Esto nos permitirá,
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black min-h-32">
                <span ref={el}></span>
              </h1>
          </div>
        </div>
      </section>

      {/* Posibles Familias Section */}
      <section className="w-full py-12 text-center bg-white">
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
              <div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold">
                <GiWoodPile className="h-8 w-8 text-secondary" />
                <span className="ml-4">Madera</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold">
                <Truck className="h-8 w-8 text-secondary" />
                <span className="ml-4">Fletes</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold">
                <BsTools className="h-8 w-8 text-secondary" />
                <span className="ml-4">Máquinas y herramientas</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold">
                <GiWheelbarrow className="h-8 w-8 text-secondary" />
                <span className="ml-4">Carretillas</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold">
                <Layers className="h-8 w-8 text-secondary" />
                <span className="ml-4">Revestimiento</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 text-gray-800 font-light rounded-xl shadow transition-transform transform hover:scale-105 hover:bg-primary hover:text-white hover:font-bold">
                <Grid className="h-8 w-8 text-secondary" />
                <span className="ml-4">Cerámicas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="features" className="bg-gray-200 text-primary py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">Nuestros Servicios</h2>
            <p className="max-w-3xl mx-auto text-black font-light">
              Descubre cómo podemos ayudarte a mejorar la eficiencia y competitividad de tu ferretería.
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="space-y-2">
                <Warehouse className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Compras nacionales</h3>
                <p className='font-light max-w-[400px]'>
                  Gestión eficiente de inventarios y negociaciones estratégicas con proveedores locales.
                </p>
              </div>
              <div className="space-y-2">
                <Ship className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Compras Internacionales</h3>
                <p className='font-light max-w-[400px]'>
                Importación de productos de alta calidad con mejores márgenes.
                </p>
              </div>
              <div className="space-y-2">
                <Truck className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Distribución</h3>
                <p className='font-light max-w-[400px]'>
                  Optimización de la logística y tiempos de entrega para una mejor eficiencia.
                </p>
              </div>
              <div className="space-y-2">
                <TbPackages className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Almacenamiento</h3>
                <p className='font-light max-w-[400px]'>
                  Gestión de almacenes y stock para una mejor disponibilidad de productos.
                </p>
              </div>
              <div className="space-y-2">
                <ClipboardCheck className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="text-xl font-bold">Desarrollo de marcas propias</h3>
                <p className='font-light max-w-[400px]'>
                  Creación de marcas exclusivas para mejorar el posicionamiento en el mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-8 px-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">Conoce nuestro equipo</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground font-light">
              En nuestro equipo, somos profesionales con una amplia experiencia en la industria de la ferretería.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
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
              </div>
              <div className="space-y-4">
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
              </div>
              <div className="space-y-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      {/* <BarChart /> */}
      {/* <LineChart /> */}
      {/* <PieCharts /> */}

      {/* Experiencia Section */}
      <section className="bg-primary py-16 text-center shadow-lg mt-12 px-4">
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
              <div className="bg-gray-100 p-6 shadow-xl rounded-2xl text-black">
                <TrendingUp className="h-12 w-12 mx-auto text-secondary" />
                <h4 className="text-xl font-bold mb-2">Mejoras en nivel de servicio</h4>
                <p className='font-light'>
                Mejores plazos de entrega, stock y consignación.
                </p>
              </div>
              <div className="bg-gray-100 p-6 shadow-xl rounded-2xl text-black">
                <Package className="h-12 w-12 mx-auto text-secondary" />
                <h4 className="text-xl font-bold mb-2">Rediseño de producto</h4>
                <p className='font-light'>
                  Baja de precios por redefinición de productos
                </p>
              </div>
              <div className="bg-gray-100 p-6 shadow-xl rounded-2xl text-black">
                <Award className="h-12 w-12 mx-auto text-secondary" />
                <h4 className="text-xl font-bold mb-2">Productos marca propia</h4>
                <p className='font-light'>
                Mejor margen, posicionamiento de marca
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-24 lg:px-8">
        
        
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
      </section>

    </div>
  );
}
