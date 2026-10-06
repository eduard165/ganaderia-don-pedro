import type { Metadata } from 'next';
import { BreedLink } from '@/components/breed-link';
export const metadata: Metadata = { title: 'Genética y razas | Ganadería Don Pedro' };
export default function GeneticsPage() { return <><section id="razas" className="breeds section">
 <div className="section-top"><div><p className="eyebrow">03 / GENÉTICA Y RAZAS</p><h1 className="page-heading">Dos razas.<br />Una misma <em>visión.</em></h1></div><p>Gyr y Sardo Negro forman parte<br />de la propuesta de Ganadería Don Pedro.</p></div>
 <div className="breed-grid"><article><span className="breed-no">01</span><h3>Gyr</h3><p>Explora los ejemplares de esta raza y consulta con nuestro equipo la información de su genética y linaje.</p><BreedLink breed="Gyr" /></article><article><span className="breed-no">02</span><h3>Sardo Negro</h3><p>Conoce los ejemplares de esta raza y solicita los detalles que necesitas para tu proyecto ganadero.</p><BreedLink breed="Sardo Negro" /></article></div>
</section></>; }
