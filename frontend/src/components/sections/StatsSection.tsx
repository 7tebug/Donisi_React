import React from 'react';
import ScrollReveal from '../ScrollReveal';
import DigitCounter from '../DigitCounter';
import { stats } from '../../data/stats';

const StatsSection: React.FC = () => {
  return (
    <section className="hero grid between" id="numeri" data-testid="stats-section">
      <div className="hero-left container-flex" style={{ '--gap': '40px' } as React.CSSProperties}>
        <ScrollReveal direction="left" delay={0}>
          <h2>
            L'<span className="title-span">idraulica</span> che funziona
            <br />
            per chi non vuole problemi
          </h2>
        </ScrollReveal>

        <div className="container-flex" style={{ '--gap': '32px' } as React.CSSProperties}>
          <ScrollReveal direction="up" delay={150}>
            <p>
              Da quasi 60 anni aiutiamo privati e imprese a ottenere impianti efficienti, sicuri e
              duraturi. Dalla progettazione alla realizzazione, offriamo un servizio completo.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <div
              className="container-flex hero-number-container"
              style={{ '--direction': 'row', '--gap': '32px' } as React.CSSProperties}
              role="group"
              aria-label="Statistiche"
            >
              {stats.map((stat) => (
                <DigitCounter
                  key={stat.id}
                  id={stat.id}
                  value={stat.value}
                  digits={stat.digits}
                  symbol={stat.symbol}
                  symbolClass={stat.symbolClass}
                  caption={stat.caption}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal direction="right" delay={100} className="hero-right">
        <img src="/img/assets/plumber-3.webp" className="plumber-3" alt="" />
      </ScrollReveal>

      <div className="shape-container">
        <img src="/img/assets/nuvola-2.webp" className="bg-shape-2" alt="" />
      </div>
    </section>
  );
};

export default StatsSection;
