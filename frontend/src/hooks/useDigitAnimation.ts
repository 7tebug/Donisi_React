import { useEffect, useRef } from 'react';

/**
 * Hook che anima i digit-slot di un contatore numerico allo scroll.
 * Sostituisce il plugin jQuery `digitAnimation` originale.
 *
 * @param value  - valore target (es. 100, 500)
 * @param digits - quante cifre mostrare (es. 3 → "100")
 */
export function useDigitAnimation(value: number, digits: number) {
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            animateDigits(el, value, digits);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, digits]);

  return ref;
}

function animateDigits(container: HTMLDivElement, value: number, digits: number) {
  const DURATION = 800;
  const DELAY_BETWEEN = 200;
  const DIGIT_HEIGHT = 50;

  const valueStr = value.toString().padStart(digits, '0');
  const containers = container.querySelectorAll<HTMLElement>('.number-container');

  containers.forEach((digitContainer, index) => {
    const targetDigit = parseInt(valueStr[index] ?? '0', 10);
    const numbers = digitContainer.querySelectorAll<HTMLElement>('.number');

    let lastIndex = 0;
    numbers.forEach((span, i) => {
      if (parseInt(span.textContent ?? '0', 10) === targetDigit) {
        lastIndex = i;
      }
    });

    const translateY = -DIGIT_HEIGHT * lastIndex;
    const delay = DELAY_BETWEEN * index;

    setTimeout(() => {
      digitContainer.style.transition = `transform ${DURATION}ms ease-out`;
      digitContainer.style.transform = `translateY(${translateY}px)`;
    }, delay);
  });
}
