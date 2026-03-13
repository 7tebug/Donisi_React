// Dati per la sezione Steps (Consulenza, Realizzazione, Risultato)
export interface Step {
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    title: 'Consulenza',
    description:
      'Ascoltiamo le tue esigenze e analizziamo la situazione esistente per offrirti la soluzione più efficace e personalizzata.',
  },
  {
    title: 'Realizzazione',
    description:
      'Il nostro team qualificato interviene con rapidità e professionalità, utilizzando materiali di qualità e tecniche all\'avanguardia.',
  },
  {
    title: 'Risultato',
    description:
      'Impianti efficienti, sicuri e duraturi. Il lavoro è garantito e seguito nel tempo per assicurare la massima soddisfazione.',
  },
];
