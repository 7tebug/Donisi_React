import React from 'react';
import ScrollReveal from '../ScrollReveal';

const HeroSection: React.FC = () => {
  return (
    <section className="hero grid" id="home" data-testid="hero-section">
      <div className="hero-left container-flex" style={{ '--gap': '24px' } as React.CSSProperties}>
        <ScrollReveal direction="left" delay={0}>
          <img
            src="/img/logo/DonisiSRLText.svg"
            alt="Donisi S.r.l."
            className="hero-logo-svg"
          />
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

      <ScrollReveal direction="right" delay={200} className="hero-right">
        <img src="/img/assets/nuvola.webp" className="bg-shape" alt="" fetchPriority="high" />
        <img src="/img/assets/plumber-1.webp" className="plumber" alt="" fetchPriority="high" />
      </ScrollReveal>
    </section>
  );
};

export default HeroSection;
