import Image from 'next/image'
import ferreteria from '../../../public/ferreteria.jpg'
import logoDematOriginal from '../../../public/logo/logo_demat_original.png'
import Link from 'next/link'

export default function HeroSection(){
    return (
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
          <p className="mt-4 text-xl md:text-2xl text-center text-white">Únete al poder de compra y poder ser competitivo</p>
          <Link href="/propuesta" className="mt-8 inline-block bg-secondary text-white hover:text-black transition-colors duration-500 py-3 px-6 rounded-md font-bold hover:bg-white text-center">
            Descubre más
          </Link>
        </div>
      </div>
    )
}