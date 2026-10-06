import Link from 'next/link';
export default function Home() {
  return <>
<section id="inicio" className="hero">
 <img src="/assets/hero.webp" alt="Imagen ilustrativa de un bovino cebú en un paisaje tropical" fetchPriority="high" />
 <div className="hero-shade"></div>
 <div className="hero-content"><p className="eyebrow light"><span></span> TLACOTALPAN, VERACRUZ · DESDE 1940</p>
 <h1>El campo es origen.<br />La genética,<br /><em>futuro.</em></h1>
 <p className="hero-copy">Una tradición familiar que sigue creciendo.<br />Descubre Ganadería Don Pedro y sus razas Gyr y Sardo Negro.</p>
 <Link className="button white" href="/ejemplares">Explorar ejemplares <span>↗</span></Link>
 </div>
 <div className="hero-bottom"><span>RAÍCES EN EL CAMPO. VISIÓN HACIA EL FUTURO.</span><Link href="/historia">CONOCE NUESTRA HISTORIA <span>↗</span></Link></div>
</section>
<section className="home-directory" aria-label="Explorar Ganadería Don Pedro">
  <Link href="/historia"><small>01 / NUESTRA HISTORIA</small><span>Conoce nuestro origen <b>↗</b></span></Link>
  <Link href="/genetica"><small>02 / GENÉTICA</small><span>Gyr y Sardo Negro <b>↗</b></span></Link>
  <Link href="/ejemplares"><small>03 / CATÁLOGO</small><span>Explora los ejemplares <b>↗</b></span></Link>
</section>
  </>;
}
