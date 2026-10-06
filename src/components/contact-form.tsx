'use client';
import { useState, type FormEvent } from 'react';
import { CONTACT_SUBJECTS } from '@/lib/contact';
export function ContactForm() {
  const [subject, setSubject] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [hasError, setHasError] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setBusy(true);setNotice('');setHasError(false);
    try {
      const response = await fetch('/api/contacto', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(['name','email','subject','breed','message'].map(key => [key, fields.get(key) || '']))),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error || 'No pudimos enviar tu consulta. Intenta de nuevo.');
      setNotice(data.message);form.reset();setSubject('');
    } catch (error) {
      setHasError(true);setNotice(error instanceof Error ? error.message : 'No pudimos enviar tu consulta. Intenta de nuevo.');
    } finally { setBusy(false); }
  }
  return <section className="contact-form-panel" aria-labelledby="form-title">
    <p className="eyebrow">ENVÍANOS TU CONSULTA</p>
    <h2 id="form-title">¿En qué podemos ayudarte?</h2>
    <p>Selecciona un asunto y déjanos tu correo para responderte.</p>
    <form onSubmit={submit}>
      <div className="form-grid">
        <label htmlFor="contact-name">Nombre <span>*</span><input id="contact-name" name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Tu nombre" /></label>
        <label htmlFor="contact-email">Correo electrónico <span>*</span><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="nombre@correo.com" /></label>
      </div>
      <label htmlFor="contact-subject">Asunto <span>*</span><select id="contact-subject" name="subject" value={subject} required onChange={e => setSubject(e.target.value)}><option value="" disabled>Selecciona un asunto</option>{CONTACT_SUBJECTS.map(value => <option key={value} value={value}>{value}</option>)}</select></label>
      <label htmlFor="contact-breed">Raza de interés <select id="contact-breed" name="breed" defaultValue="Sin preferencia"><option>Sin preferencia</option><option>Gyr</option><option>Sardo Negro</option></select></label>
      <label htmlFor="contact-message">Mensaje {subject === 'Otra consulta' ? <span>*</span> : <small>(opcional)</small>}<textarea id="contact-message" name="message" rows={3} maxLength={2000} required={subject === 'Otra consulta'} placeholder="Cuéntanos un poco más sobre lo que necesitas." /></label>
      <button className="button white" type="submit" disabled={busy}>{busy ? 'Enviando…' : 'Enviar consulta por correo'}<span aria-hidden="true">↗</span></button>
      <p className="form-note">* Campos obligatorios. Usaremos tu correo para responder a esta consulta.</p>
      <p className={'form-status' + (hasError ? ' error' : '')} role={hasError ? 'alert' : 'status'} aria-live="polite">{notice}</p>
    </form>
  </section>;
}
