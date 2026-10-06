'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="header">
    <Link className="wordmark" href="/" aria-label="Ganadería Don Pedro, inicio" onClick={() => setOpen(false)}><img className="brand-logo" src="/assets/logo-don-pedro.jpeg" alt="" width="56" height="56" /><span><small>GANADERÍA</small><strong>DON PEDRO</strong></span></Link>
    <nav id="navigation" className={open ? 'open' : ''} aria-label="Navegación principal">
      {[['/','Inicio'],['/historia','Historia'],['/genetica','Genética'],['/ejemplares','Ejemplares']].map(([href,label]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
    </nav>
    <Link className="header-cta" href="/ejemplares">Conocer ejemplares <span>↗</span></Link>
    <button className="menu-toggle" aria-expanded={open} aria-controls="navigation" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button>
  </header>;
}
