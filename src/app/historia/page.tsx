import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Nuestra historia | Ganadería Don Pedro' };
export default function HistoryPage() { return <><section className="intro section" id="historia">
 <div><p className="eyebrow">01 / NUESTRA HISTORIA</p><h1 className="page-heading">De generación<br />en <em>generación.</em></h1></div>
 <div className="intro-body"><p className="lead">Hay historias que comienzan en la tierra y continúan en quienes la trabajan.</p><p>El origen de Ganadería Don Pedro se remonta a 1940, como una idea de producción familiar. Hoy, desde la comunidad 6 de Enero en Tlacotalpan, Veracruz, su enfoque se centra en el ganado bovino y la genética.</p><p>Una propuesta que reúne la experiencia de campo, la participación de especialistas y las biotecnologías.</p><Link className="text-link" href="/genetica">Conocer nuestras razas <span>↗</span></Link></div>
</section><section className="landscape"><img src="/assets/hero.webp" alt="Paisaje ilustrativo del campo con ganado" loading="lazy" /><div><p className="eyebrow light">EL CAMPO NOS UNE</p><h2>Una historia que<br />sigue <em>viva.</em></h2></div><span>FOTOGRAFÍA ILUSTRATIVA</span></section></>; }
