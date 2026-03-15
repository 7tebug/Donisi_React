import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import Lightbox from '../Lightbox';
import { workImages } from '../../data/works';

function chunkIntoColumns<T>(arr: T[], columns: number): T[][] {
  const result: T[][] = Array.from({ length: columns }, () => []);
  arr.forEach((item, i) => result[i % columns].push(item));
  return result;
}

const COLUMNS = 3;

const WorksSection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Mantiene l'indice originale dell'array flat per la navigazione lightbox
  const indexedImages = workImages.map((img, i) => ({ img, i }));
  const columns = chunkIntoColumns(indexedImages, COLUMNS);

  return (
    <section className="works" id="lavori" data-testid="works-section">
      <div className="container-flex" style={{ '--gap': '32px' } as React.CSSProperties}>
        <ScrollReveal direction="up" delay={0}>
          <h3>
            I nostri <span className="title-span">lavori</span>
          </h3>
        </ScrollReveal>

        <div className="container-grid-img">
          {columns.map((col, colIdx) => (
            <ScrollReveal key={colIdx} direction="up" delay={colIdx * 120}>
              <div
                className="container-flex img-container"
                style={{ '--gap': '16px' } as React.CSSProperties}
              >
                {col.map(({ img, i }) => (
                  <img
                    key={img}
                    src={`/img/works/${img}`}
                    className="works-img"
                    alt={`Lavoro ${i + 1}`}
                    data-testid={`work-img-${img}`}
                    onClick={() => setLightboxIndex(i)}
                  />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={workImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </section>
  );
};

export default WorksSection;
