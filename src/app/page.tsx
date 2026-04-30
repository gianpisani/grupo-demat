'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Eye, Goal, TrendingUp, Package, Warehouse, Ship, Truck,
  ClipboardCheck, Layers, Grid, Award, ArrowRight, ChevronDown,
} from 'lucide-react';
import { FaShippingFast, FaGlobe, FaWarehouse, FaTrademark } from 'react-icons/fa';
import { GiFactory, GiTeamUpgrade, GiWheelbarrow, GiWoodPile } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { TbPackages } from 'react-icons/tb';
import logoDematOriginal from '../../public/logo/logo_demat_original.png';
import ferreteria from '../../public/ferreteria.jpg';
import contenedores from '../../public/contenedores.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.85, delay: i * 0.12 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function LandingPage() {
  return (
    <div className="bg-white text-foreground overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          HERO — Pantalla completa, impacto inmediato
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[580px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src={ferreteria.src}
          alt="Ferretería"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Overlay — sutil, deja ver la foto real */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={logoDematOriginal}
              alt="Grupo DEMAT"
              width={320}
              height={320}
              className="mx-auto mb-6 sm:mb-8 drop-shadow-2xl w-[180px] sm:w-[240px] md:w-[300px] lg:w-[320px] h-auto"
            />
          </motion.div>

          <motion.div
            className="inline-block mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/70 whitespace-nowrap">
              Red Ferretera
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Transformando{' '}
            <span className="text-secondary">la Ferretería</span>
          </motion.h1>

          <motion.div
            className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#propuesta"
              className="group inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-md text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30"
            >
              Descubre más
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="https://api.whatsapp.com/send/?phone=56981882271&text&type=phone_number&app_absent=0"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-white/40 text-white font-medium px-8 sm:px-10 py-3.5 sm:py-4 rounded-md text-xs sm:text-sm uppercase tracking-widest hover:bg-white/5 transition-all duration-300"
            >
              Contáctanos
            </Link>
          </motion.div>
        </div>

        {/* Trusted by — logos dentro del hero, oculto en mobile */}
        <motion.div
          className="absolute bottom-16 left-0 right-0 z-10 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-center text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-white/30 mb-4">
            Ferreterías que confían en nosotros
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 px-6">
            {[
              { src: '/asociados/ferreteria-mas-logo.png', alt: 'Ferretería MAS', h: 'h-9 sm:h-11', filter: 'brightness-0 invert' },
              { src: '/asociados/placacentro-logo.png', alt: 'Placacentro Mafasil', h: 'h-5 sm:h-7', filter: '' },
              { src: '/asociados/ferrejardin-logo.png', alt: 'Ferre Jardín', h: 'h-9 sm:h-11', filter: 'brightness-0 invert' },
            ].map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={50}
                className={`${logo.h} w-auto object-contain ${logo.filter} opacity-40 hover:opacity-70 transition-opacity duration-300`}
              />
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-5 w-5 text-white/25" />
          </motion.div>
        </motion.div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          STRIP DE IMPACTO — Cifras que generan confianza
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-primary py-10 overflow-hidden">
        {/* Decorative gradient line top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: '6', label: 'Servicios integrales' },
              { number: '+25', label: 'Años de experiencia' },
              { number: '100%', label: 'Compromiso' },
              { number: '6', label: 'Familias de producto' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <p className="text-4xl md:text-5xl font-extrabold text-secondary">{stat.number}</p>
                <p className="mt-2 text-sm text-white/50 font-light uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative gradient line bottom */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          POR QUÉ PERTENECER — Beneficios con cards sofisticadas
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white relative">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="max-w-3xl mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-secondary" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Beneficios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
              ¿Por qué pertenecer<br />al Grupo DEMAT?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              Al asociarte, accedes a ventajas competitivas que transforman la rentabilidad de tu ferretería.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FaShippingFast, title: 'Logística eficiente', desc: 'Optimización de la logística y tiempos de entrega para una mejor eficiencia operativa.' },
              { icon: FaGlobe, title: 'Alcance internacional', desc: 'Importación de productos de alta calidad con mejores márgenes de rentabilidad.' },
              { icon: FaWarehouse, title: 'Almacenamiento seguro', desc: 'Gestión de almacenes y stock para una mejor disponibilidad de productos.' },
              { icon: FaTrademark, title: 'Marcas propias', desc: 'Creación de marcas exclusivas para mejorar el posicionamiento en el mercado.' },
              { icon: GiFactory, title: 'Desarrollo sostenible', desc: 'Promovemos prácticas sostenibles y responsables en toda la cadena.' },
              { icon: GiTeamUpgrade, title: 'Crecimiento conjunto', desc: 'Aumenta la rentabilidad y competitividad de cada asociado del grupo.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="group relative p-8 rounded-xl bg-white border border-gray-100 hover:border-secondary/20 shadow-sm hover:shadow-xl transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={scaleIn}
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-14 h-14 rounded-xl bg-primary/[0.05] group-hover:bg-secondary/10 flex items-center justify-center mb-6 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          VISIÓN & MISIÓN — Con fondo y decoración
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] border border-secondary/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] border border-primary/5 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-10 h-[2px] bg-secondary" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Quiénes somos</span>
              <div className="w-10 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              Nuestra Visión y Misión
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0">
            {/* Visión */}
            <motion.div
              className="relative p-10 lg:p-14 bg-white rounded-2xl lg:rounded-r-none shadow-lg border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <div className="absolute top-10 left-0 w-1 h-16 bg-secondary rounded-r-full" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                  <Eye className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-2xl font-extrabold text-primary">Visión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed font-light">
                Convertirnos en la central de compras líder y más confiable del sector ferretero,
                reconocida por nuestra capacidad de innovación, excelencia en el servicio y contribución
                al éxito sostenible de nuestras ferreterías asociadas, donde lo más importante es que
                el beneficio sea mayor para el asociado que para la cadena en sí.
              </p>
            </motion.div>

            {/* Misión */}
            <motion.div
              className="relative p-10 lg:p-14 bg-primary rounded-2xl lg:rounded-l-none shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <div className="absolute top-10 right-0 w-1 h-16 bg-secondary rounded-l-full hidden lg:block" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Goal className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Misión</h3>
              </div>
              <p className="text-white/70 leading-relaxed font-light">
                Potenciar el crecimiento y la competitividad de nuestras ferreterías asociadas,
                ofreciendo una gestión centralizada y eficiente de compras que garantice productos
                de alta calidad, precios competitivos y un servicio excepcional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          PROPUESTA — Central de Compras, layout asimétrico
      ═══════════════════════════════════════════════════════════════ */}
      <section id="propuesta" className="py-16 md:py-20 bg-primary relative overflow-hidden">
        {/* Decorative bg elements */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/[0.03] rounded-full" />
        <div className="absolute bottom-10 left-10 w-40 h-40 border border-secondary/10 rounded-full" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-secondary" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Nuestra propuesta</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Central de{' '}
                <span className="text-secondary">Compras</span>
              </h2>
              <p className="text-white/60 leading-relaxed font-light mb-8 text-lg">
                Implementar una central de compras con el objetivo de aumentar la competitividad de los socios
                mediante el apalancamiento de volumen de compras que hoy se encuentra atomizado.
              </p>

              <div className="space-y-5">
                {[
                  'Disminuir precios de compras',
                  'Efectuar importaciones',
                  'Desarrollar marcas propias e imagen común',
                  'Generar logística común',
                  'Disminuir mínimos de compra',
                  'Aumentar la rentabilidad de cada asociado',
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    className="group flex items-center gap-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <span className="text-secondary text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 border-b border-white/[0.06] pb-4">
                      <span className="text-white/90 font-medium group-hover:text-secondary transition-colors duration-300">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={scaleIn}
            >
              {/* Image frame decoration */}
              <div className="absolute -inset-4 border border-secondary/20 rounded-2xl hidden lg:block" />
              <Image
                src={contenedores.src}
                width={600}
                height={450}
                alt="Logística y contenedores"
                className="relative rounded-xl shadow-2xl w-full object-cover"
              />
              {/* Floating accent card */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-secondary to-secondary/80 text-white p-7 rounded-xl shadow-2xl hidden lg:block">
                <p className="text-4xl font-extrabold">100%</p>
                <p className="text-sm font-medium mt-1 text-white/80">Compromiso con<br/>nuestros asociados</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          PILARES — Números grandes + texto, diseño editorial
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-10 h-[2px] bg-secondary" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Fundamentos</span>
              <div className="w-10 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              Nuestros Pilares
            </h2>
            <p className="mt-5 text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
              A través de estos pilares, nos esforzamos por ser el socio estratégico de confianza
              para nuestras ferreterías.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { num: '01', title: 'Optimización logística', desc: 'Eficiencia en toda la cadena de distribución y entrega.' },
              { num: '02', title: 'Calidad y variedad', desc: 'Productos que cumplen los más altos estándares del mercado.' },
              { num: '03', title: 'Innovación continua', desc: 'Mejora constante de procesos y soluciones para nuestros asociados.' },
              { num: '04', title: 'Desarrollo sostenible', desc: 'Crecimiento responsable con visión de largo plazo.' },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                className={`group relative p-10 hover:bg-primary transition-all duration-300 cursor-default ${
                  i < 3 ? 'lg:border-r border-b lg:border-b-0 border-gray-100' : ''
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <span className="text-6xl font-extrabold text-gray-100 group-hover:text-white/10 transition-colors duration-300">{item.num}</span>
                <h3 className="mt-4 text-lg font-bold text-primary group-hover:text-white transition-colors duration-300">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-white/60 font-light leading-relaxed transition-colors duration-300">{item.desc}</p>
                {/* Bottom accent on hover */}
                <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          FAMILIAS DE PRODUCTO — Grid visual con iconos grandes
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/[0.02] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-10 h-[2px] bg-secondary" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Productos</span>
              <div className="w-10 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              Familias a trabajar
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              { icon: GiWoodPile, name: 'Madera' },
              { icon: Truck, name: 'Fletes' },
              { icon: BsTools, name: 'Máquinas y herramientas' },
              { icon: GiWheelbarrow, name: 'Carretillas' },
              { icon: Layers, name: 'Revestimiento' },
              { icon: Grid, name: 'Cerámicas' },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                className="group flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={scaleIn}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/[0.04] group-hover:bg-secondary/10 flex items-center justify-center mb-4 transition-all duration-300">
                  <item.icon className="h-7 w-7 text-primary/60 group-hover:text-secondary transition-colors duration-300" />
                </div>
                <span className="text-sm font-semibold text-primary text-center leading-tight">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SERVICIOS — Cards premium con icono y borde
      ═══════════════════════════════════════════════════════════════ */}
      <section id="servicios" className="py-16 md:py-20 bg-white relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/[0.02] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="max-w-3xl mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-secondary" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Servicios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
              Nuestros Servicios
            </h2>
            <p className="mt-5 text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              Descubre cómo podemos ayudarte a mejorar la eficiencia y competitividad de tu ferretería.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Warehouse, title: 'Compras nacionales', desc: 'Gestión eficiente de inventarios y negociaciones estratégicas con proveedores locales.' },
              { icon: Ship, title: 'Compras internacionales', desc: 'Importación de productos de alta calidad con mejores márgenes de rentabilidad.' },
              { icon: Truck, title: 'Distribución', desc: 'Optimización de la logística y tiempos de entrega para una mejor eficiencia.' },
              { icon: TbPackages, title: 'Almacenamiento', desc: 'Gestión de almacenes y stock para una mejor disponibilidad de productos.' },
              { icon: ClipboardCheck, title: 'Marcas propias', desc: 'Creación de marcas exclusivas para mejorar el posicionamiento en el mercado.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="group relative p-8 rounded-xl bg-white border border-gray-100 hover:border-secondary/20 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={scaleIn}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/[0.05] group-hover:bg-secondary/10 flex items-center justify-center mb-6 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          EXPERIENCIA — Sección oscura premium con glass cards
      ═══════════════════════════════════════════════════════════════ */}
      <section id="experiencia" className="py-16 md:py-20 bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="absolute top-40 -right-20 w-80 h-80 bg-secondary/[0.05] rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-secondary/[0.03] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-10 h-[2px] bg-secondary" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Trayectoria</span>
              <div className="w-10 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Nuestra Experiencia,{' '}
              <span className="text-secondary">Nuestro Compromiso</span>
            </h2>
            <p className="mt-6 text-white/50 leading-relaxed font-light text-lg max-w-2xl mx-auto">
              Nuestro equipo ya probó el éxito de esta forma de operar en una multinacional.
              En <span className="font-semibold text-white/80">Grupo DEMAT</span>, nos comprometemos a ofrecer
              soluciones innovadoras y sostenibles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Mejoras en nivel de servicio', desc: 'Mejores plazos de entrega, stock y consignación para nuestros asociados.' },
              { icon: Package, title: 'Rediseño de producto', desc: 'Baja de precios por redefinición y optimización de productos.' },
              { icon: Award, title: 'Productos marca propia', desc: 'Mejor margen y posicionamiento de marca en el mercado.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-10 hover:bg-white/[0.08] hover:border-secondary/20 transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={scaleIn}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{item.desc}</p>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
                  <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-secondary/40 to-transparent" />
                  <div className="absolute top-0 right-0 h-px w-12 bg-gradient-to-l from-secondary/40 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          ASOCIADOS — Ferreterías que confían en nosotros
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-10 h-[2px] bg-secondary" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Asociados</span>
              <div className="w-10 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              Ferreterías que confían en nosotros
            </h2>
            <p className="mt-5 text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
              Empresas de distintas regiones de Chile que ya forman parte del Grupo DEMAT.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Ferretería MAS',
                location: 'San Antonio, Valparaíso',
                logo: '/asociados/ferreteria-mas-logo.png',
                logoFilter: '',
                photo: '/asociados/ferreteria-mas-store.webp',
                desc: 'Amplia variedad de productos, desde construcción hasta remodelación. Despacho gratuito en la zona.',
                url: 'https://www.ferreteriamas.cl',
              },
              {
                name: 'Placacentro Mafasil',
                location: 'San Vicente de Tagua Tagua, O\'Higgins',
                logo: '/asociados/placacentro-logo.png',
                logoFilter: 'brightness-0',
                photo: '/asociados/placacentro-store.jpg',
                desc: 'Centro especializado en maderas y materiales de construcción, parte de la red Placacentro Masisa.',
                url: 'https://placacentro.com/blog/local/placacentro-masisa-mafasil/',
              },
              {
                name: 'Ferre Jardín',
                location: 'Curacaví, Región Metropolitana',
                logo: '/asociados/ferrejardin-logo.png',
                logoFilter: '',
                photo: '/asociados/ferrejardin-store.webp',
                desc: 'Ferretería integral con herramientas, materiales de construcción, jardín y equipamiento profesional.',
                url: 'https://www.ferrejardin.cl',
              },
            ].map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl bg-white border border-gray-100 hover:border-secondary/20 shadow-sm hover:shadow-xl transition-all duration-300 block overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                {/* Store photo */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={partner.photo}
                    alt={partner.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Logo badge */}
                  <div className="absolute bottom-3 left-4 bg-white rounded-lg p-2 shadow-md">
                    <Image
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      width={80}
                      height={32}
                      className={`h-6 w-auto object-contain ${partner.logoFilter}`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300">{partner.name}</h3>
                      <p className="text-xs text-secondary font-medium mt-0.5">{partner.location}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300 mt-1 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mt-3">{partner.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* More partners coming */}
          <motion.div
            className="mt-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
          >
            <p className="text-sm text-muted-foreground/60 font-light">
              Y más ferreterías sumándose a lo largo de Chile
            </p>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIAL & CTA — Cierre elegante
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Decorative quote mark */}
            <div className="text-8xl font-extrabold text-secondary/10 leading-none mb-2">&ldquo;</div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-snug tracking-tight -mt-8">
              Este será un proyecto que cambiará la forma de hacer negocios en la industria de la ferretería en Chile
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-secondary/40" />
              <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">
                Directores, Grupo DEMAT
              </p>
              <div className="w-12 h-[1px] bg-secondary/40" />
            </div>
          </motion.div>

          <motion.div
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          >
            <Link
              href="https://api.whatsapp.com/send/?phone=56981882271&text&type=phone_number&app_absent=0"
              className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-12 py-5 rounded-md text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              Conversemos
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-4 text-xs text-muted-foreground font-light">
              Escríbenos por WhatsApp y te contamos más
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
