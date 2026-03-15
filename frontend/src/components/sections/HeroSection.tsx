import React from 'react';
import ScrollReveal from '../ScrollReveal';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const HeroSection: React.FC = () => {
  const plumberRef = useScrollReveal<HTMLDivElement>(200);

  return (
    <section className="hero grid" id="home" data-testid="hero-section">
      <div className="hero-left container-flex" style={{ '--gap': '24px' } as React.CSSProperties}>
        <ScrollReveal direction="left" delay={0}>
          <h1>
            DONI<span className="title-span">S</span>I
          </h1>
        </ScrollReveal>

        <div className="container-flex" style={{ '--gap': '24px' } as React.CSSProperties}>
          <ScrollReveal direction="up" delay={150}>
            <p>
              Da quasi 60 anni aiutiamo privati e imprese a ottenere impianti efficienti, sicuri e
              duraturi. Dalla progettazione alla realizzazione, offriamo un servizio completo.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300}>
            <h6>
              La scelta giusta per la <br />
              salute dei tuoi tubi
            </h6>
          </ScrollReveal>
        </div>
      </div>

      {/* Nuvola senza animazione, plumber con reveal */}
      <div className="hero-right">
        <img src="/img/assets/nuvola.webp" className="bg-shape" alt="" />
        <div ref={plumberRef} className="reveal reveal-right" style={{ position: 'absolute', inset: 0 }}>
          <img src="/img/assets/plumber-1.webp" className="plumber" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
