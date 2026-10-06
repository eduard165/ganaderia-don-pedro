export type Breed = 'Gyr' | 'Sardo Negro';
export type Animal = {
  id: string;
  breed: Breed;
  category: 'Semental' | 'Vaquilla';
  sex: 'Macho' | 'Hembra';
  imagePosition: string;
  isDemo: boolean;
};
// Datos ilustrativos. Reemplazar este repositorio por una consulta a la fuente real.
const animals: Animal[] = [
  { id: '01', breed: 'Gyr', category: 'Semental', sex: 'Macho', imagePosition: '0% 0%', isDemo: true },
  { id: '02', breed: 'Sardo Negro', category: 'Vaquilla', sex: 'Hembra', imagePosition: '100% 0%', isDemo: true },
  { id: '03', breed: 'Gyr', category: 'Vaquilla', sex: 'Hembra', imagePosition: '0% 100%', isDemo: true },
  { id: '04', breed: 'Sardo Negro', category: 'Vaquilla', sex: 'Hembra', imagePosition: '100% 100%', isDemo: true },
  { id: '05', breed: 'Gyr', category: 'Semental', sex: 'Macho', imagePosition: '0% 0%', isDemo: true },
];
export function getAnimals(): Animal[] { return animals.map(a => ({ ...a })); }
