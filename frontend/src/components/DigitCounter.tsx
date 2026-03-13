import React from 'react';
import { useDigitAnimation } from '../hooks/useDigitAnimation';

interface DigitCounterProps {
  id: string;
  value: number;
  digits: number;
  symbol: string;
  symbolClass?: string;
  caption: string;
}

/**
 * Contatore numerico animato con slot per cifra.
 * Replica esatta della struttura HTML originale (number-container / .number).
 */
const DigitCounter: React.FC<DigitCounterProps> = ({
  id,
  value,
  digits,
  symbol,
  symbolClass,
  caption,
}) => {
  const ref = useDigitAnimation(value, digits);

  // Crea slot di cifre da 0 a 9 (+ 0 finale per richiudere il loop)
  const digitSlots = Array.from({ length: digits });

  return (
    <div className="container-flex" data-testid={`counter-${id}`}>
      <div
        id={id}
        ref={ref}
        className="container-flex animation-numbers-container"
        style={{ '--direction': 'row', '--gap': '2px' } as React.CSSProperties}
      >
        {digitSlots.map((_, colIdx) => (
          <div
            key={colIdx}
            className="container-flex flex-center number-container"
            style={{ '--wrap': 'nowrap', '--gap': '0px' } as React.CSSProperties}
          >
            {/* 0-9 poi 0 di ritorno, identico all'HTML originale */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n, i) => (
              <span key={i} className="number">
                {n}
              </span>
            ))}
          </div>
        ))}
        <span className={`symbol${symbolClass ? ` ${symbolClass}` : ''}`}>{symbol}</span>
      </div>
      <span className="caption">{caption}</span>
    </div>
  );
};

export default DigitCounter;
