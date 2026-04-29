import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import favicon from './favicon.ico';

// Importa la fuente Poppins desde next/font/google con el peso especificado
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Grupo DEMAT",
  description: "Central de Compras para Ferreterías - Grupo DEMAT",
  icons: {
    icon: favicon.src,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${poppins.className} h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
