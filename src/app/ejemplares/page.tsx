import type { Metadata } from 'next';
import { Catalog } from '@/components/catalog';
import { getAnimals } from '@/lib/catalog';
export const metadata: Metadata = { title: 'Ejemplares | Ganadería Don Pedro' };
export default async function AnimalsPage({ searchParams }: {
  searchParams: Promise<{ raza?: string | string[] }>;
}) {
  const { raza } = await searchParams;
  const initialBreed = raza === 'Gyr' || raza === 'Sardo Negro' ? raza : 'Todas';
  return <Catalog animals={getAnimals()} initialBreed={initialBreed} />;
}
