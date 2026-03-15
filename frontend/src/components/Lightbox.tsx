import React, { useEffect, useRef } from 'react';

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, index, onClose, onChange }) => {
  const touchStartX = useRef<number | null>(null);

  const prev = () => onChange((index - 1 + images.length) % images.length);
  const next = () => onChange((index + 1) % images.length);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      data-testid="lightbox"
    >
      {/* Immagine — stopPropagation per non chiudere al click sull'img */}
      <img
        src={`/img/works/${images[index]}`}
        alt={`Lavoro ${index + 1}`}
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
        data-testid="lightbox-image"
      />

      {/* Freccia sinistra */}
      <button
        className="lightbox-arrow lightbox-arrow--left"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Precedente"
        data-testid="lightbox-prev"
      >
        &#8249;
      </button>

      {/* Freccia destra */}
      <button
        className="lightbox-arrow lightbox-arrow--right"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Successiva"
        data-testid="lightbox-next"
      >
        &#8250;
      </button>

      {/* Chiudi */}
      <button
        className="lightbox-close"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Chiudi"
        data-testid="lightbox-close"
      >
        &#10005;
      </button>

      {/* Contatore */}
      <span className="lightbox-counter">{index + 1} / {images.length}</span>
    </div>
  );
};

export default Lightbox;
