import Link from 'next/link';
import { ContactForm } from './contact-form';
import { ContactLinks } from './contact-links';
export function Footer() {
  return <footer className="site-footer" id="contacto">
    
    <div className="footer-information">
      <section className="footer-contact" aria-labelledby="contact-title">
        <p className="eyebrow">GANADERÍA DON PEDRO</p>
        <h2 id="contact-title">Hablemos del <em>campo.</em></h2>
        
        <p>Información de ejemplares, genética y condiciones de entrega.</p>
        <div className="footer-contact-grid">
          <div><h3>UBICACIÓN</h3><p>Comunidad 6 de Enero<br />Tlacotalpan, Veracruz</p><small>Ubicación aproximada</small></div>
          <div><h3>CORREO Y WHATSAPP</h3><ContactLinks /></div>
        </div>
<h2 id="faq-title">Preguntas frecuentes</h2>
        <details><summary>¿Cómo consulto un ejemplar?<span>+</span></summary><p>Visita el <Link href="/ejemplares">catálogo de ejemplares</Link>, abre su detalle y pulsa “Consultar por WhatsApp”. Los registros de esta muestra son ilustrativos; la ganadería confirmará su oferta real.</p></details>
        <details><summary>¿Cómo solicito el pedigree?<span>+</span></summary><p>La información de pedigree se facilita por solicitud. Contacta a la ganadería e indica el ejemplar que te interesa.</p></details>
        <details><summary>¿En qué región atienden?<span>+</span></summary><p>La cobertura indicada es Veracruz y sus alrededores. Consulta directamente las condiciones de entrega para tu ubicación.</p></details>

      </section>
      <ContactForm />
    </div>
    
    <div className="footer-top">
      <Link className="wordmark" href="/" aria-label="Ganadería Don Pedro, inicio"><img className="brand-logo" src="/assets/logo-don-pedro.jpeg" alt="" width="56" height="56" /><span><small>GANADERÍA</small><strong>DON PEDRO</strong></span></Link>
      <span>Ganadería Don Pedro · Muestra de diseño 2026</span>
      <span>Desde 1940 · Tlacotalpan, Veracruz</span>
    </div>
    
  </footer>;
}
