# Magazyny

Dwa cyfrowe magazyny zbudowane jako interaktywne, responsywne wydania:

- **Peloton** — magazyn kolarski, numer #01 „Przed świtem”.
- **Rowki** — magazyn o winylach, hi-fi i muzyce, numer #01 „Igła wraca”.

Każdy numer obu tytułów zawiera dokładnie pięć materiałów.

Strony są zbudowane w React i Vite, a ich źródła znajdują się w prywatnym repozytorium. Wersje produkcyjne są publikowane przez Cloudflare Pages:

- [Peloton](https://www.lpociask.dev/peloton/)
- [Rowki](https://www.lpociask.dev/peloton/rowki/)

Po każdym pushu do `main` GitHub Actions buduje oba magazyny i zapisuje gotowy do publikacji artefakt `magazines-cloudflare`.

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

## Redakcje i agenci pisarscy

Każdy magazyn ma pięć fikcyjnych, wyspecjalizowanych person pisarskich odpowiadających pięciu materiałom numeru. Redaktor naczelny obu tytułów ustala temat, prowadzi redakcję, zatwierdza publikację i jako jedyny pisze wstępniaki.

Profile, wspólny kontrakt źródłowy i prompty agentów znajdują się w [`editorial-agents`](./editorial-agents/README.md). W obu aplikacjach pełna redakcja jest dostępna z menu pod pozycją „Redakcja”.
