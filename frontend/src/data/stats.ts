// Dati per la sezione Stats (contatori animati)
export interface Stat {
  id: string;
  value: number;
  symbol: string;
  symbolClass?: string;
  caption: string;
  digits: number; // numero di cifre del contatore
}

export const stats: Stat[] = [
  {
    id: 'numbers-animation-1',
    value: 100,
    symbol: '%',
    caption: 'Clienti soddisfatti',
    digits: 3,
  },
  {
    id: 'numbers-animation-2',
    value: 500,
    symbol: '+',
    symbolClass: 'plus',
    caption: 'Lavori eseguiti',
    digits: 3,
  },
];
