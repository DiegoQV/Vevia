import type { Metadata, Viewport } from 'next';
import { Manrope, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import CartDrawer from '@/components/cart/CartDrawer';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'VEVIVA — Carteras de Autor a Crochet | Alta Artesanía',
  description:
    'Piezas exclusivas confeccionadas a mano en punto crochet. Hilados seleccionados, herrajes macizos y arquitectura textil de autor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="bg-[#08090b] text-[#e8e2d9] font-manrope antialiased selection:bg-[#e8e2d9]/25 selection:text-white">
        {children}
        <CartDrawer />
      </body>
    </html>
  );
}
