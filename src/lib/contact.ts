export const CONTACT_SUBJECTS = [
  'Información de un ejemplar',
  'Disponibilidad y precios',
  'Genética y linaje',
  'Solicitud de pedigree',
  'Condiciones de entrega',
  'Otra consulta',
] as const;
export type ContactData = { name: string; email: string; subject: string; breed: string; message: string };
export function parseContact(value: unknown): ContactData | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const input = value as Record<string, unknown>;
  for (const key of ['name', 'email', 'subject', 'breed', 'message']) {
    if (typeof input[key] !== 'string') return null;
  }
  const data = Object.fromEntries(Object.entries(input).filter(([key]) => ['name','email','subject','breed','message'].includes(key)).map(([key,v]) => [key, (v as string).trim()])) as ContactData;
  if (data.name.length < 2 || data.name.length > 100 || /[\r\n]/.test(data.name)) return null;
  if (data.email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email)) return null;
  if (!CONTACT_SUBJECTS.some(subject => subject === data.subject)) return null;
  if (!['Gyr', 'Sardo Negro', 'Sin preferencia'].includes(data.breed)) return null;
  if (data.message.length > 2000 || (data.subject === 'Otra consulta' && !data.message)) return null;
  return data;
}
