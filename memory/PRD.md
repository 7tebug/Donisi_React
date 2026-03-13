# PRD — Donisi Web App

## Problema originale
Migrare il sito web Donisi (idraulici, ~60 anni di attività) da HTML/CSS puro a React + TypeScript, mantenendo design, contenuti e struttura visiva originali.

## Stack tecnologico
- **Frontend**: React 18 + TypeScript (Create React App)
- **CSS**: CSS originale conservato in `public/` (non processato da webpack)
- **Backend**: Non ancora sviluppato (fase futura)
- **DB**: Non ancora configurato (fase futura)

## Utenti target
- Privati e imprese che cercano servizi idraulici
- Navigazione prevalentemente mobile

## Requisiti core (statici)
1. Design identico all'originale HTML/CSS
2. Nessuna libreria superflua
3. CSS originale preservato
4. Sezioni ripetitive dinamiche (array/oggetti)
5. Struttura componentizzata e riutilizzabile

---

## Cosa è stato implementato

### 2025-03 — Step 1: Migrazione completa frontend

#### Componenti creati
- `Navbar.tsx` — navbar fixed con logo + link + CTA
- `HeroSection.tsx` — sezione hero con titolo + plumber-1
- `StepsSection.tsx` — 3 step da `data/steps.ts`
- `StatsSection.tsx` — 2 contatori animati da `data/stats.ts`
- `DigitCounter.tsx` — slot animati cifra per cifra
- `WorksSection.tsx` — galleria 3 colonne da `data/works.ts`

#### Hook creati
- `useDigitAnimation.ts` — sostituisce jQuery `digitAnimation` con IntersectionObserver nativo

#### Dati esternalizzati
- `data/steps.ts` — 3 step (Consulenza / Realizzazione / Risultato)
- `data/stats.ts` — 2 stat (100% clienti / 500+ lavori)
- `data/works.ts` — 6 immagini galleria

#### Asset
- Immagini copiate da `Assets/img/` → `public/img/`
- CSS originali copiati in `public/style.css` e `public/resetcss.css`
- Favicon preservato

---

## Backlog prioritizzato

### P0 (prossima sessione)
- Sezione contatti / form "Chiamaci"
- Scroll smooth per i link navbar

### P1
- Step 2: React Router (se si vuole multi-pagina)
- Lightbox per galleria lavori
- Lazy loading immagini

### P2
- Step 3: CSS Modules per scoping locale
- Step 4: Ottimizzazione immagini (srcset / WebP)
- Step 5: Backend FastAPI + MongoDB per form contatti
- Step 6: Admin panel per gestire lavori e contenuti
