'use client';
import { useState } from 'react';
export function ContactLinks() {
  const [notice, setNotice] = useState('');
  async function copyEmail() {
    try { await navigator.clipboard.writeText('udvtz@hotmail.com'); setNotice('Correo copiado'); }
    catch { setNotice('No se pudo copiar. Selecciona el correo y cópialo manualmente.'); }
  }
  return <>
    <button type="button" className="copy-email" onClick={copyEmail} aria-label="Copiar correo udvtz@hotmail.com" title="Copiar correo">
      <span>udvtz@hotmail.com</span><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></svg>
    </button>
    <span className="copy-status" role="status" aria-live="polite">{notice}</span>
    <a className="whatsapp-contact" href="https://wa.me/522299070676" target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp con Ganadería Don Pedro: 229 907 0676">
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.9 7.3L3 20l1.2-4.6a8.5 8.5 0 1 1 16.3-3.9Z" /><path d="M8 7.5c-.8.2-1 1.1-.7 2.1 1 3.3 3.3 5.6 6.6 6.3 1 .2 1.9-.4 2.1-1.2l-2.4-1.4-.9.8c-1.7-.7-2.7-1.8-3.3-3.3l.7-.9L8.9 7.5Z" /></svg>
      <span><small>WHATSAPP</small>229 907 0676</span><span className="contact-arrow" aria-hidden="true">↗</span>
    </a>
  </>;
}
