import React from 'react';
import { steps } from '../../data/steps';

const StepsSection: React.FC = () => {
  return (
    <section className="hero grid reversed" id="storia" data-testid="steps-section">
      <div className="hero-right">
        <img src="/img/assets/nuvola.webp" className="bg-shape" alt="" />
        <img src="/img/assets/plumber-2.webp" className="plumber-2" alt="" />
      </div>

      <div className="hero-left container-flex" style={{ '--gap': '32px' } as React.CSSProperties}>
        {steps.map((step) => (
          <article key={step.title} className="container-flex" data-testid={`step-${step.title.toLowerCase()}`}>
            <h3>
              <span className="title-span">{step.title}</span>
            </h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
