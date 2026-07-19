# Magazyny

Dwa cyfrowe magazyny zbudowane jako interaktywne, responsywne wydania:

- **Peloton** — magazyn kolarski, numer #01 „Przed świtem”.
- **Rowki** — magazyn o winylach, hi-fi i muzyce, numer #01 „Igła wraca”.

Strony są zbudowane w React i Vite. Wersje produkcyjne są automatycznie publikowane przez GitHub Pages po każdym pushu do gałęzi `main`.

## Uruchomienie lokalne

```bash
cd peloton-prototype
npm ci
npm run dev
```

## Build produkcyjny

```bash
cd peloton-prototype
npm ci
npm run build
```

```bash
cd vinyl-prototype
npm ci
npm run build
```

Materiały produktowe znajdują się w [PAPER_Product_Blueprint.md](./PAPER_Product_Blueprint.md), a notatki projektowe i QA w katalogu `peloton-prototype`.
