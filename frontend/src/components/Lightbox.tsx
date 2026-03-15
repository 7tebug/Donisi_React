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
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  // Blocca scroll del body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Swipe mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  // Click sulla foto: metà sinistra → prev, metà destra → next
  const onImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    clickX < rect.width / 2 ? prev() : next();
  };

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      data-testid="lightbox"
    >
      <img
        src={`/img/works/${images[index]}`}
        alt={`Lavoro ${index + 1}`}
        className="lightbox-img"
        onClick={onImageClick}
        data-testid="lightbox-image"
      />

      <span className="lightbox-counter">{index + 1} / {images.length}</span>
    </div>
  );
};

export default Lightbox;
