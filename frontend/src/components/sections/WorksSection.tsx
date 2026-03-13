import React from 'react';
import { workImages } from '../../data/works';

/**
 * Divide un array piatto in colonne da `size` elementi.
 */
function chunkIntoColumns<T>(arr: T[], columns: number): T[][] {
  const result: T[][] = Array.from({ length: columns }, () => []);
  arr.forEach((item, i) => result[i % columns].push(item));
  return result;
}

const COLUMNS = 3;

const WorksSection: React.FC = () => {
  const columns = chunkIntoColumns(workImages, COLUMNS);

  return (
    <section className="works" id="lavori" data-testid="works-section">
      <div className="container-flex" style={{ '--gap': '32px' } as React.CSSProperties}>
        <h3>
          I nostri <span className="title-span">lavori</span>
        </h3>

        <div className="container-grid-img">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className="container-flex img-container"
              style={{ '--gap': '16px' } as React.CSSProperties}
            >
              {col.map((filename) => (
                <img
                  key={filename}
                  src={`/img/works/${filename}`}
                  className="works-img"
                  alt={`Lavoro ${filename}`}
                  data-testid={`work-img-${filename}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
