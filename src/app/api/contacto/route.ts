import nodemailer from 'nodemailer';
import { parseContact } from '@/lib/contact';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return Response.json({ error: 'Formato de consulta no válido.' }, { status: 415 });
  }
  let input: unknown;
  try {
    const body = await request.text();
    if (body.length > 12000) return Response.json({ error: 'La consulta es demasiado extensa.' }, { status: 413 });
    input = JSON.parse(body);
  } catch {
    return Response.json({ error: 'Revisa los datos del formulario.' }, { status: 400 });
  }
  const data = parseContact(input);
  if (!data) return Response.json({ error: 'Revisa tu nombre, correo, asunto y mensaje.' }, { status: 400 });
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_FROM_EMAIL } = process.env;
  const to = process.env.CONTACT_TO_EMAIL || 'udvtz@hotmail.com';
  const port = Number(SMTP_PORT || 587);
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_FROM_EMAIL || !Number.isInteger(port) || port < 1 || port > 65535) {
    return Response.json({ error: 'No podemos enviar tu consulta en este momento. Intenta más tarde o contáctanos directamente.' }, { status: 503 });
  }
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  try {
    const result = await transport.sendMail({
      from: { name: 'Ganadería Don Pedro · Sitio web', address: CONTACT_FROM_EMAIL },
      to,
      replyTo: { name: data.name, address: data.email },
      subject: `Consulta web: ${data.subject}`,
      text: `Nueva consulta desde el sitio de Ganadería Don Pedro\n\nNombre: ${data.name}\nCorreo: ${data.email}\nAsunto: ${data.subject}\nRaza de interés: ${data.breed}\n\nMensaje:\n${data.message || 'Sin detalles adicionales.'}`,
    });
    if (!result.accepted?.length) throw new Error('Recipient not accepted');
    return Response.json({ success: true, message: 'Tu consulta fue enviada. Gracias por contactarnos.' });
  } catch {
    return Response.json({ error: 'No pudimos enviar tu consulta. Tus datos siguen en el formulario; puedes intentar de nuevo.' }, { status: 502 });
  } finally { transport.close(); }
}
