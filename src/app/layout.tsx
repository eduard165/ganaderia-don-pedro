import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';
export const metadata: Metadata = {
  title: 'Ganadería Don Pedro · Tradición y genética',
  description: 'Primera muestra de Ganadería Don Pedro: historia, razas Gyr y Sardo Negro y catálogo ilustrativo.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>
    <Header />
    <main id="contenido">{children}</main>
    <Footer />
  </body></html>;
}
