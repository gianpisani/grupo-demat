'use client';
import Image from 'next/image';
import proposalImage from '../../../public/ferreteria.jpg';
import { FaCheckCircle } from 'react-icons/fa';
import { Button } from '@headlessui/react';
import { Check } from 'lucide-react';

export default function ProposalsPage() {
  return (
    <div className="bg-gray-100 text-black min-h-screen py-12">
      <div className="container mx-auto px-4 my-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <Image src={proposalImage} alt="Proposals" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 p-4 space-y-4">
            <h1 className="text-4xl font-bold">Nuestras Propuestas</h1>
            <p className="text-lg font-light text-justify">
              Implementamos una <span className="font-bold">Central de compras</span> con el objetivo de aumentar la competitividad de los socios mediante el apalancamiento de volumen de compras que hoy se encuentra atomizado.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-lg">
                <Check className="text-secondary mr-2" />
                Disminuir precios de compras
              </li>
              <li className="flex items-center text-lg">
                <Check className="text-secondary mr-2" />
                Efectuar importaciones
              </li>
              <li className="flex items-center text-lg">
                <Check className="text-secondary mr-2" /> 
                Desarrollar marcas propias
              </li>
              <li className="flex items-center text-lg">
                <Check className="text-secondary mr-2" />
                Generar Logística común
              </li>
              <li className="flex items-center text-lg">
                <Check className="text-secondary mr-2" />
                Disminuir mínimos de compra
              </li>
              <li className="flex items-center text-lg">
                <Check className="text-secondary mr-2" />
                Aumentar la rentabilidad de cada asociado
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
