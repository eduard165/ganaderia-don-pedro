'use client';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { Animal, Breed } from '@/lib/catalog';
function photoStyle(animal: Animal): CSSProperties {
  return { '--pos': animal.imagePosition } as CSSProperties;
}
export function Catalog({ animals, initialBreed = 'Todas' }: { animals: Animal[]; initialBreed?: Breed | 'Todas' }) {
  const [breed, setBreed] = useState<Breed | 'Todas'>(initialBreed);
  const [selected, setSelected] = useState<Animal | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const items = animals.filter(a => breed === 'Todas' || a.breed === breed);
  useEffect(() => { setBreed(initialBreed); }, [initialBreed]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected && dialog && !dialog.open) {
      dialog.showModal();
      document.body.classList.add('modal-open');
    }
    return () => { document.body.classList.remove('modal-open'); };
  }, [selected]);
  function close() { dialogRef.current?.close(); }
  function afterClose() {
    setSelected(null);
    document.body.classList.remove('modal-open');
    triggerRef.current?.focus();
  }
  const message = selected ? encodeURIComponent(`Hola, vi la muestra del sitio de Ganadería Don Pedro y me interesa conocer su oferta real de ${selected.breed}.`) : '';
  return <>
    <section id="catalogo" className="catalog section">
      <div className="section-top"><div><p className="eyebrow">02 / NUESTROS EJEMPLARES</p><h1 className="page-heading">El siguiente capítulo<br />de tu <em>ganadería.</em></h1></div><p>Conoce las razas y explora cada ejemplar.<br />Consulta directamente con nosotros<br />para conocer la oferta real.</p></div>
      <div className="catalog-toolbar"><div className="filter-tabs" role="group" aria-label="Filtrar por raza">
        {(['Todas','Gyr','Sardo Negro'] as const).map(value => <button key={value} className={breed === value ? 'active' : ''} aria-pressed={breed === value} onClick={() => setBreed(value)}>{value === 'Todas' ? 'Todos' : value}</button>)}
      </div><span aria-live="polite">{items.length} ejemplos</span></div>
      <div className="animal-grid">
        {items.map(animal => <article className="animal-card" key={animal.id}>
          <div className="animal-image" style={photoStyle(animal)} role="img" aria-label={`Fotografía ilustrativa de ${animal.category.toLowerCase()} ${animal.breed}`}><span className="example-tag">EJEMPLO {animal.id}</span></div>
          <div className="card-meta"><span>{animal.breed.toUpperCase()}</span><span>{animal.sex.toUpperCase()}</span></div>
          <h3>{animal.category} {animal.breed}</h3>
          <div className="card-bottom"><span>Información por confirmar</span><button className="detail-button" aria-label={`Ver ejemplo ${animal.id}: ${animal.category} ${animal.breed}`} onClick={e => { triggerRef.current = e.currentTarget; setSelected(animal); }}>Ver detalle <span>↗</span></button></div>
        </article>)}
      </div>
      <p className="catalog-note">Catálogo de muestra: fotografías y registros ilustrativos. Precios, disponibilidad y datos se incorporarán con información validada por la ganadería.</p>
    </section>
    <dialog ref={dialogRef} aria-labelledby="dialog-title" onClose={afterClose} onClick={e => {
      if (e.target === e.currentTarget) {
        const rect = e.currentTarget.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) close();
      }
    }}>
      <button className="close-modal" aria-label="Cerrar detalle" onClick={close}>×</button>
      {selected && <div className="modal-layout">
        <div className="modal-image" style={photoStyle(selected)} role="img" aria-label={`Imagen ilustrativa de ${selected.breed}`} />
        <div className="modal-body"><p className="eyebrow">EJEMPLO {selected.id} / CATÁLOGO DE MUESTRA</p><h2 id="dialog-title">{selected.category}<br /><em>{selected.breed}</em></h2><p>Así podría presentarse la información de cada ejemplar, una vez validada por la ganadería.</p>
          <dl className="modal-data">
            {[['Raza',selected.breed],['Sexo',selected.sex],['Identificación','Por completar'],['Edad y linaje','Por completar'],['Precio y disponibilidad','Por confirmar'],['Pedigree','Por solicitud']].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <a className="button dark" href={`https://wa.me/522299070676?text=${message}`} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp <span>↗</span></a>
          <p className="modal-note">La imagen y el registro son ilustrativos; no representan un animal disponible para venta.</p>
        </div>
      </div>}
    </dialog>
  </>;
}
