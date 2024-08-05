'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo puedo unirme a la central de compras?",
    answer: "Puedes unirte a la central de compras contactándonos a través de nuestro formulario de contacto o llamando a nuestro número de atención al cliente.",
  },
  {
    question: "¿Cuáles son los beneficios de ser un socio?",
    answer: "Los beneficios incluyen precios competitivos, gestión centralizada de compras, acceso a productos de alta calidad y un servicio excepcional.",
  },
  {
    question: "¿Qué productos están disponibles?",
    answer: "Ofrecemos una amplia variedad de productos, incluyendo herramientas, materiales de construcción, maquinaria y más.",
  },
  {
    question: "¿Cómo se gestionan las importaciones?",
    answer: "Gestionamos las importaciones de manera eficiente, asegurando productos de alta calidad con mejores márgenes.",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-white text-black min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-black my-12">Preguntas Frecuentes</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-bold bg-primary text-white p-4 cursor-pointer rounded-md">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 text-justify bg-gray-100 rounded-md my-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
