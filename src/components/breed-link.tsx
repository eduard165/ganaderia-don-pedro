import Link from 'next/link';
import type { Breed } from '@/lib/catalog';
export function BreedLink({ breed }: { breed: Breed }) {
  return <Link className="text-link breed-link" href={`/ejemplares?raza=${encodeURIComponent(breed)}`}>Ver ejemplares {breed} <span>↗</span></Link>;
}
