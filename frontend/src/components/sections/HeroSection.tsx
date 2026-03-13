import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero grid" id="home" data-testid="hero-section">
      <div className="hero-left container-flex" style={{ '--gap': '24px' } as React.CSSProperties}>
        <h1>
          DONI<span className="title-span">S</span>I
        </h1>
        <div className="container-flex" style={{ '--gap': '24px' } as React.CSSProperties}>
          <p>
            Da quasi 60 anni aiutiamo privati e imprese a ottenere impianti efficienti, sicuri e
            duraturi. Dalla progettazione alla realizzazione, offriamo un servizio completo.
          </p>
          <h6>
            La scelta giusta per la <br />
            salute dei tuoi tubi
          </h6>
        </div>
      </div>

      <div className="hero-right">
        <img src="/img/assets/nuvola.webp" className="bg-shape" alt="" />
        <img src="/img/assets/plumber-1.webp" className="plumber" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
