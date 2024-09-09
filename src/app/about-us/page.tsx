'use client';
import Image from 'next/image';
import teamImage from '../../../public/grupodemat.jpg';

export default function AboutUsPage() {
  return (
    <div className="bg-gray-50 text-black min-h-screen py-12">
      <div className="container mx-auto px-4 my-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <Image src={teamImage} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 p-4 space-y-4">
            <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
            <p className="text-lg font-light text-justify">
              Somos una empresa dedicada a proporcionar soluciones innovadoras y sostenibles para el sector ferretero. Nuestro objetivo es fortalecer la competitividad de nuestras ferreterías asociadas mediante una gestión centralizada y eficiente.
            </p>
            <p className="text-lg font-light text-justify">
              Con un equipo de profesionales experimentados, nos comprometemos a ofrecer productos de alta calidad, precios competitivos y un servicio excepcional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
