# Donisi — Piano di Migrazione HTML → React + TypeScript

## Step completati

### Step 1 (✅ Completato)
**Setup progetto React + TypeScript + migrazione completa**

---

## Struttura dei componenti

```
frontend/src/
├── components/
│   ├── Navbar.tsx              ← <header class="navbar"> + <nav class="menu">
│   ├── DigitCounter.tsx        ← contatore animato (rimpiazza jQuery digitAnimation)
│   └── sections/
│       ├── HeroSection.tsx     ← <section class="hero grid">
│       ├── StepsSection.tsx    ← <section class="hero grid reversed"> — dati da steps.ts
│       ├── StatsSection.tsx    ← <section class="hero grid between"> — usa DigitCounter
│       └── WorksSection.tsx    ← <section class="works"> — dati da works.ts
├── data/
│   ├── steps.ts                ← array dei 3 step (Consulenza / Realizzazione / Risultato)
│   ├── stats.ts                ← array dei 2 contatori (100% / 500+)
│   └── works.ts                ← array dei nomi file immagini lavori
├── hooks/
│   └── useDigitAnimation.ts    ← hook IntersectionObserver (rimpiazza jQuery)
└── App.tsx                     ← composizione finale
```

---

## Decisioni tecniche

| Scelta | Motivazione |
|--------|-------------|
| CSS in `public/` linkato via `<link>` | I CSS usano `url()` con path assoluti (`/img/...`) che webpack non risolve correttamente. Mantenerli fuori dal bundle evita modifiche e preserva il CSS originale al 100% |
| No jQuery | Rimosso. L'animazione numerica è reimplementata in `useDigitAnimation.ts` con `IntersectionObserver` + CSS `transform/transition` nativi — stesso comportamento visivo |
| CSS custom properties come inline style React | `style={{ '--gap': '24px' }}` — mantenuto per compatibilità 1:1 con il CSS originale che usa `var(--gap)` |
| Array di dati in `data/` | Steps, stats e immagini lavori sono esternalizzati → aggiungere/modificare contenuti senza toccare il JSX |

---

## Step futuri

### Step 2 — Routing (se necessario)
- Aggiungere `react-router-dom` se il progetto evolve in multi-pagina
- Separare le sezioni in pagine dedicate (`/storia`, `/lavori`, `/contatti`)

### Step 3 — CSS Modules (opzionale)
- Convertire `public/style.css` in `*.module.css` per componente
- Vantaggio: scoping CSS locale, evita conflitti globali
- Richiede rinomina delle classi JSX

### Step 4 — Interattività avanzata
- Form contatti (sezione "Chiamaci") con validazione
- Lightbox per la galleria lavori
- Smooth scroll per i link navbar

### Step 5 — Ottimizzazione immagini
- Convertire le immagini in `<picture>` con srcset per responsive
- Lazy loading con `loading="lazy"` per la galleria

### Step 6 — Backend integration (quando pronto)
- Form contatto → API endpoint `/api/contact`
- Galleria dinamica → fetch da MongoDB

---

## Note

- `work-06.webp` non era nell'HTML originale (intentional skip)
- La texture di sfondo (`/img/texture/texture-bg.webp`) è applicata via CSS a ogni `section`
- Il font "Science Gothic" viene caricato da Google Fonts (link in `index.html`)
