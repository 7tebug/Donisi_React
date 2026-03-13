# Donisi React

Sito web dell'azienda **Donisi Idraulica** — migrazione da HTML/CSS puro a **React 18 + TypeScript**.

## Struttura del progetto

```
frontend/
├── public/
│   ├── index.html          # entry point HTML (font Google + CSS linkati)
│   ├── style.css           # CSS originale preservato
│   ├── resetcss.css        # reset CSS
│   └── img/                # immagini (logo, assets, works)
└── src/
    ├── App.tsx             # composizione principale
    ├── components/
    │   ├── Navbar.tsx
    │   ├── DigitCounter.tsx
    │   └── sections/
    │       ├── HeroSection.tsx
    │       ├── StepsSection.tsx
    │       ├── StatsSection.tsx
    │       └── WorksSection.tsx
    ├── data/
    │   ├── steps.ts        # contenuti sezione steps
    │   ├── stats.ts        # valori contatori animati
    │   └── works.ts        # lista immagini galleria
    └── hooks/
        └── useDigitAnimation.ts  # animazione numerica (IntersectionObserver)
```

## Avvio locale

```bash
cd frontend
npm install
npm start
```

## Piano di migrazione

Vedi [`MIGRATION.md`](./MIGRATION.md) per il piano completo e i prossimi step.
