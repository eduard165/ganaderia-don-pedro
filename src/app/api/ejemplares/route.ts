import { getAnimals } from '@/lib/catalog';
export async function GET() {
  return Response.json({ demo: true, animals: getAnimals() });
}
