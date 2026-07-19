# PAPER — Cyfrowe Wydawnictwo

## Product Blueprint v1.0

**Data:** 19 lipca 2026  
**Status:** kierunek strategiczny i projekt systemu przed rozpoczęciem projektowania ekranów oraz implementacji  
**Źródło wizualne:** moodboard „Koncepcja aplikacji magazynowej Relour”  
**Zakres:** produkt, doświadczenie czytelnika, architektura platformy, system redakcyjny i plan rozwoju na 24 miesiące

---

## 0. Decyzja produktowa w jednym zdaniu

PAPER to cyfrowy dom wydawniczy, w którym podstawową jednostką doświadczenia, publikacji, sprzedaży i kolekcjonowania jest **zamknięty, artystycznie wyreżyserowany numer magazynu**, a nie pojedynczy artykuł.

### Obietnica marki

> Raz w miesiącu otrzymujesz skończony numer, do którego chcesz usiąść, który chcesz przeczytać do końca i zachować.

### Najważniejsze decyzje

1. **PAPER jest wydawnictwem i silnikiem.** Peloton, Needle oraz przyszłe tytuły są odrębnymi markami działającymi na wspólnej platformie.
2. **Numer jest produktem.** Ma okładkę, temat, rytm, spis treści, początek i zakończenie. Artykuł zawsze pozostaje częścią numeru, również po wejściu z linku zewnętrznego.
3. **Czytanie jest liniowe, ale nie zamknięte.** Domyślna droga prowadzi od okładki do końca numeru; spis treści pozwala przeskoczyć do wybranego materiału.
4. **Nie imitujemy mechanicznie papieru.** Przejścia między rozdziałami przypominają przewracanie stron, ale długi tekst czyta się naturalnie w pionie. Dosłowny „page flip” na każdym ekranie byłby wolniejszy, mniej dostępny i szybko stałby się efektem specjalnym.
5. **CMS jest narzędziem kuratorskim, nie dowolnym page builderem.** Redakcja składa numer z ograniczonego zestawu dopracowanych modułów. To ograniczenie chroni jakość i rozpoznawalność.
6. **Najpierw jeden tytuł i realny numer.** Silnik od początku będzie wielomarkowy, ale produkt należy potwierdzić na jednym magazynie i co najmniej dwóch kompletnych wydaniach przed uruchomieniem kolejnych marek.
7. **Jakość jest ważniejsza od częstotliwości.** Data publikacji nie może wymuszać kompromisu w korekcie, prawach do materiałów, ilustracji ani dostępności.

### Czym PAPER nie będzie

- portalem informacyjnym,
- feedem optymalizowanym pod liczbę odsłon,
- agregatorem przypadkowych tekstów,
- aplikacją z codziennym „engagement loopem”,
- katalogiem reklam,
- imitacją pliku PDF na ekranie telefonu.

### Główna metryka

**Ukończone numery na aktywnego czytelnika w kwartale.**

Metryki pomocnicze to: rozpoczęcie numeru, ukończenie materiału, ukończenie całego numeru, powrót przy premierze kolejnego numeru, zapisanie numeru, czas od rozpoczęcia pracy redakcyjnej do publikacji oraz liczba błędów wykrytych po publikacji. Nie optymalizujemy produktu pod dzienne odsłony ani czas spędzony za wszelką cenę.

---

# 1. Architektura informacji

## 1.1. Model mentalny czytelnika

Czytelnik porusza się po czterech poziomach:

1. **Wydawnictwo PAPER** — biblioteka tytułów.
2. **Magazyn** — Peloton, Needle lub kolejny tytuł.
3. **Numer** — zamknięte wydanie z własnym tematem i okładką.
4. **Materiał** — artykuł, esej fotograficzny, rozmowa, test, galeria albo rekomendacje należące do danego numeru.

Hierarchia powinna być widoczna w interfejsie i adresach, ale nigdy nie może dominować nad treścią. PAPER jest dyskretnym sygnetem wydawcy; na okładce i podczas czytania pierwszeństwo ma marka magazynu.

## 1.2. Mapa produktu czytelniczego

### A. Biblioteka PAPER

- aktualne wydania wszystkich magazynów,
- wybór tytułu,
- półka ostatnich numerów,
- zapowiedź kolejnej premiery,
- wejście do osobistej biblioteki,
- krótka deklaracja wydawnicza „O PAPER”.

To nie jest siatka artykułów. Dominantą jest jedna duża okładka aktualnie wyróżnionego numeru, a pozostałe tytuły zachowują się jak kolekcja magazynów lub płyt.

### B. Foyer magazynu

- masthead i charakter marki,
- aktualny numer jako główny obiekt,
- temat i krótka nota redakcyjna,
- poprzednie numery na półce,
- kalendarz lub zapowiedź następnego numeru,
- manifest tytułu i zespół redakcyjny.

### C. Wejście do numeru

- okładka,
- numer, data, motyw przewodni,
- przycisk „Otwórz numer” lub „Kontynuuj”,
- spis treści,
- nota redaktora naczelnego,
- informacje o dostępie: bezpłatny, kupiony, w subskrypcji lub próbka.

### D. Czytnik numeru

- okładka otwierająca,
- spis treści,
- materiały w ustalonej kolejności,
- kontrola orientacji: numer, tytuł materiału, postęp,
- dyskretne akcje: zapisz, udostępnij, rozmiar tekstu, audio, jeśli dostępne,
- przejście „Następny materiał”,
- kolofon i zakończenie numeru.

### E. Osobista biblioteka

- zapisane i kupione numery,
- ostatnio czytane,
- postęp,
- pobrane offline,
- ulubione wydania,
- ustawienia czytania i dostępności.

### F. Informacje wspólne

- o wydawnictwie,
- redakcje i autorzy,
- pomoc,
- regulamin, prywatność, dostępność,
- konto i subskrypcja,
- kontakt dotyczący praw i współpracy.

## 1.3. Nawigacja

### Nawigacja globalna

Logo PAPER prowadzi do biblioteki wydawnictwa. Przełącznik magazynu jest dostępny w menu, lecz podczas czytania pozostaje schowany. Konto i biblioteka mają stałe, spokojne miejsce; nie używamy czerwonych badge’y ani mechanik „co przegapiłeś”.

### Nawigacja magazynu

Masthead prowadzi do foyer tytułu. Podstawowe sekcje to: „Aktualny numer”, „Archiwum” i „O magazynie”. Kategorie artykułów służą redakcji i spisowi treści, ale nie tworzą portalowego menu.

### Nawigacja numeru

Numer ma własny spis treści, pasek postępu i kontrolę powrotu. Czytelnik może przejść do następnego lub poprzedniego materiału, ale nie dostaje algorytmicznych rekomendacji odrywających go od numeru.

## 1.4. Zasada linku zewnętrznego

Udostępniony artykuł może mieć własny adres i podgląd społecznościowy, jednak po otwarciu jasno komunikuje: „Peloton, numer 18 — materiał 2 z 5”. Na końcu prowadzi do kolejnego materiału z tego samego numeru, a nie do losowej listy podobnych tekstów.

## 1.5. Wyszukiwanie

Wyszukiwanie nie jest elementem MVP. Gdy archiwum będzie wystarczająco duże, pozwoli odnajdywać tytuły, numery, autorów, tematy i materiały. Wyniki mają być grupowane według numerów, aby nie rozbić modelu wydawniczego na listę linków.

---

# 2. Struktura całego systemu

## 2.1. Warstwy domeny

| Warstwa | Rola | Przykład |
|---|---|---|
| Wydawca | właściciel platformy, praw i polityk | PAPER |
| Publikacja | marka, zespół, tematyka i design system | Peloton, Needle |
| Numer | temat, data, okładka, kolejność i dostęp | Peloton #18 |
| Materiał | samodzielna jednostka redakcyjna w numerze | „Tour przed Tour” |
| Blok treści | element narracji i layoutu | lead, akapit, cytat, zdjęcie, galeria |
| Wydanie publikacyjne | zamrożona wersja numeru | wersja 1.0, korekta 1.1 |
| Uprawnienie | prawo użytkownika do numeru | zakup, subskrypcja, dostęp bezpłatny |

## 2.2. Produkty systemowe

### Reader Web / PWA

Publiczne doświadczenie biblioteki, magazynów, numerów i czytania. Opublikowane treści są generowane i buforowane jak stabilne wydanie, a dane osobiste — postęp, zapisane numery, uprawnienia — dołączane po zalogowaniu.

### Editorial Studio

Osobna, chroniona przestrzeń dla redakcji. Umożliwia planowanie numeru, tworzenie materiałów, zarządzanie prawami do mediów, podgląd na różnych ekranach, akceptację i publikację.

### Publishing Core

Wspólny model treści, workflow, wersjonowanie, harmonogram publikacji oraz mechanizm atomowego wydania całego numeru. Czytelnik nigdy nie powinien zobaczyć połowy opublikowanego numeru.

### Theme Registry

Rejestr wersjonowanych motywów publikacji i numerów: logotypy, palety, typografia, reguły okładek, warianty komponentów, parametry ruchu i tekstury. Nowy magazyn jest konfiguracją i zestawem assetów, a nie kopią aplikacji.

### Media Pipeline

Przechowuje oryginały, generuje warianty responsywne, sprawdza rozmiary i profile kolorystyczne, zapisuje punkt skupienia kadru, alt text, autora, licencję, terytorium oraz termin wygaśnięcia praw.

### Identity & Commerce

Konta, profile, role redakcyjne, uprawnienia do numerów i późniejsze subskrypcje. Płatności pozostają oddzielone od modelu treści, dzięki czemu można zmienić operatora bez przebudowy biblioteki czytelnika.

### Analytics & Observability

Prywatnościowy pomiar ukończenia numerów, błędów, wydajności i jakości publikacji. Nie rejestrujemy ruchu kursora ani pełnych sesji czytelniczych bez wyraźnej potrzeby i zgody.

## 2.3. Granice techniczne

- **Next.js / React / TypeScript** obsługują Reader i Editorial Studio we wspólnej bazie komponentów.
- **Supabase / PostgreSQL** przechowują treść, workflow, użytkowników, role i postęp.
- **Supabase Storage** ma osobne obszary na chronione oryginały, publiczne rendery oraz pliki tymczasowe.
- **Authentication i Row Level Security** ograniczają dane użytkownika i zakres pracy redaktorów do przypisanych publikacji.
- **Published snapshot** zamraża numer w momencie publikacji. Zwykła edycja draftu nie zmienia tego, co widzi czytelnik.
- **Content API** jest niezależne od widoku, aby późniejsze aplikacje iOS, Android, audio i eksporty korzystały z tego samego źródła.
- **PWA** jest pierwszym krokiem do instalowalności i offline; nie udaje natywnej aplikacji tam, gdzie system operacyjny oferuje lepszy wzorzec.

## 2.4. Cykl życia numeru

1. **Idea** — temat, teza i proponowana zawartość.
2. **Commissioned** — materiały przypisane autorom i terminy.
3. **In production** — tekst, ilustracje, zdjęcia, audio.
4. **Content review** — redakcja merytoryczna i fact-check.
5. **Design review** — rytm, kadry, okładka, warianty responsywne.
6. **Content lock** — zamknięcie struktury numeru.
7. **Proof & QA** — korekta, prawa, alt texty, wydajność, dostępność, linki.
8. **Scheduled** — gotowy numer czeka na datę i godzinę.
9. **Published** — jeden atomowy release i odświeżenie cache.
10. **Corrected** — jawna korekta z notą i numerem wersji.
11. **Archived** — numer pozostaje dostępny, ale nie jest bieżący.

## 2.5. Zasady wielomarkowości

Wspólne dla wszystkich tytułów są: zachowanie czytnika, dostępność, konta, płatności, komponenty bazowe, model numeru, ikony, siatka i workflow. Zmieniane per magazyn są: masthead, display typography, paleta, sposób kadrowania, motywy ilustracyjne, podpisy sekcji, warianty okładki i subtelna sygnatura ruchu. Numer może nadpisać jedynie akcent i wybrane elementy artystyczne, nigdy zasady czytelności.

---

# 3. User Flow

## 3.1. Nowy czytelnik — odkrycie i pierwszy numer

1. Czytelnik trafia do biblioteki PAPER.
2. Widzi wyróżnioną okładkę i krótką obietnicę danego numeru.
3. Wybiera magazyn albo bezpośrednio otwiera numer.
4. Okładka przechodzi w spis treści; użytkownik poznaje skalę całości: 2–5 materiałów.
5. Wybiera „Czytaj od początku” lub konkretny materiał.
6. Podczas czytania interfejs wycofuje się, a postęp jest widoczny dopiero po dotknięciu, przewinięciu w górę albo przy końcu sekcji.
7. Po materiale widzi spokojną kartę przejścia do następnego rozdziału.
8. Zakończenie numeru pokazuje kolofon, podziękowanie, datę następnego wydania i możliwość zachowania numeru.
9. Konto proponujemy dopiero w chwili, gdy daje realną wartość: zapis postępu, biblioteka lub zakup.

## 3.2. Powracający czytelnik

1. Biblioteka rozpoznaje ostatnio czytany magazyn, ale nie przekierowuje automatycznie.
2. Główna okładka ma akcję „Kontynuuj — materiał 3 z 5”.
3. Czytelnik wraca do ostatniej sensownej pozycji, nie do dokładnego piksela w połowie zdania.
4. Po ukończeniu materiału postęp synchronizuje się pomiędzy urządzeniami.
5. Premiera kolejnego numeru pojawia się jako nowa okładka na półce, bez agresywnego modala.

## 3.3. Wejście z udostępnionego artykułu

1. Użytkownik trafia na stronę materiału z czytelnym kontekstem numeru.
2. Widzi lead i — zależnie od modelu dostępu — pełny tekst albo elegancką próbkę.
3. Po przeczytaniu kontynuuje numer lub otwiera jego spis treści.
4. Udostępnienie buduje zainteresowanie numerem, nie generuje portalowej pętli rekomendacji.

## 3.4. Zapisanie i offline

1. Czytelnik wybiera „Zachowaj numer”.
2. Niezalogowany otrzymuje jednoznaczną propozycję konta.
3. Zalogowany dodaje numer do biblioteki.
4. W późniejszym etapie „Pobierz” pokazuje rozmiar, stan pobierania i dostępność audio.
5. Numer offline zachowuje treść, media, kolejność i postęp; linki zewnętrzne są oznaczone jako niedostępne bez sieci.

## 3.5. Zakup lub subskrypcja — etap późniejszy

1. Czytelnik widzi zakres numeru przed paywallem.
2. Może wybrać pojedynczy numer, subskrypcję jednego tytułu lub docelowo PAPER Pass.
3. Płatność nie wyrywa z estetyki produktu, ale zawsze jasno pokazuje cenę, okres, odnowienie i zasady rezygnacji.
4. Po płatności użytkownik wraca dokładnie do miejsca, z którego rozpoczął zakup.

## 3.6. Redakcja — stworzenie numeru

1. Redaktor naczelny tworzy numer z tematem, datą i briefem artystycznym.
2. Redaktor prowadzący ustawia kolejność 2–5 materiałów, odpowiedzialnych i terminy.
3. Autorzy oraz fotoedytorzy pracują na wersjach materiałów i assetach.
4. Art director składa okładkę i kontroluje rytm całego numeru w widoku „contact sheet”.
5. Korekta, prawa i dostępność przechodzą osobne checklisty.
6. Osoba z rolą Publisher zatwierdza zamknięty release.
7. System publikuje cały numer jednocześnie i zapisuje niezmienny snapshot.

---

# 4. Model bazy danych

## 4.1. Założenie modelu

Najlepszy będzie model hybrydowy: kluczowe obiekty biznesowe są relacyjne i łatwe do audytu, natomiast treść artykułu składa się z wersjonowanych bloków o kontrolowanych schematach. Nie przechowujemy całego magazynu jako jednego nieprzezroczystego JSON-a i nie rozbijamy każdego zdania na osobną tabelę.

## 4.2. Rdzeń wydawniczy

| Encja | Najważniejsze pola | Relacje i uwagi |
|---|---|---|
| `publishers` | nazwa, slug, dane prawne, status | właściciel wielu publikacji |
| `publications` | publisher, nazwa, slug, opis, status, locale, cadence | Peloton, Needle; ma wiele numerów |
| `publication_themes` | publication, version, token set, asset refs, status | wersjonowany motyw, jeden aktywny |
| `issues` | publication, numer, slug, tytuł motywu, opis, data, status, access model | podstawowa jednostka produktu |
| `issue_releases` | issue, version, snapshot, published_at, correction_note | niezmienny zapis tego, co opublikowano |
| `issue_entries` | issue, typ, pozycja, story/ref, label, transition variant | kolejność materiałów, otwarć i zakończeń |
| `stories` | publication, typ, working title, status, locale | trwała tożsamość materiału |
| `story_versions` | story, version, headline, dek, lead, body schema, status | drafty oraz zamrożona wersja publikacyjna |
| `content_blocks` | story_version, type, position, payload, presentation variant, schema version | kontrolowane bloki redakcyjne |
| `authors` | imię, bio, avatar, linki, status | autor może pisać dla wielu tytułów |
| `story_authors` | story, author, rola, kolejność | tekst, zdjęcia, ilustracje, rozmowa |
| `sections` | publication, nazwa, slug, kolejność | taksonomia do spisu treści, nie główna nawigacja portalu |
| `tags` / `story_tags` | nazwa, slug | wyszukiwanie i archiwum w późniejszym etapie |

## 4.3. Media i prawa

| Encja | Najważniejsze pola | Uwagi |
|---|---|---|
| `media_assets` | typ, original path, autor, alt text, caption, focal point, palette, status | zdjęcie, ilustracja, audio, wideo |
| `asset_variants` | asset, format, szerokość, wysokość, path, size | AVIF/WebP/JPEG, rendery social i offline |
| `asset_usages` | asset, publication, issue, story, placement | gdzie i jak wykorzystano materiał |
| `rights` | asset, owner, license, territory, starts_at, expires_at, restrictions | publikacja blokowana, gdy prawa są niekompletne |
| `galleries` / `gallery_items` | tytuł, opis, asset, pozycja | kuratorskie galerie i eseje fotograficzne |

## 4.4. Moduły redakcyjne i komercyjne

| Encja | Rola |
|---|---|
| `products` | produkt, producent, cena informacyjna, waluta, link, data weryfikacji, disclosure |
| `recommendations` | redakcyjna rekomendacja powiązana z produktem, miejscem, płytą lub książką |
| `quotes` | opcjonalnie reużywalny cytat z autorem, źródłem i zgodą; zwykłe cytaty pozostają blokami |
| `collections` | ręcznie kuratorowane zestawy numerów, np. „Alpy” lub „Analogowe lato” |
| `audio_tracks` | narracja całego materiału lub numeru, lektor, czas, transkrypcja |

## 4.5. Użytkownicy i dostęp

| Encja | Rola |
|---|---|
| `profiles` | publiczne minimum profilu powiązane z użytkownikiem Auth |
| `memberships` | rola w wydawnictwie lub publikacji; zakres i daty |
| `entitlements` | prawo do numeru/publikacji: free, purchase, subscription, grant |
| `subscriptions` | dostawca, plan, stan, okres, bez przechowywania danych karty |
| `library_items` | zapisany, kupiony, pobrany lub ulubiony numer |
| `reading_progress` | user, issue, story, kotwica sekcji, percent, completed_at |
| `reading_preferences` | rozmiar tekstu, kontrast, ograniczenie ruchu, audio |

## 4.6. Operacje redakcyjne

| Encja | Rola |
|---|---|
| `editorial_tasks` | odpowiedzialny, termin, rodzaj akceptacji, status |
| `editorial_comments` | komentarze przypisane do wersji i bloku |
| `approvals` | kto, co i kiedy zaakceptował |
| `publish_jobs` | harmonogram, status, wynik i diagnostyka publikacji |
| `corrections` | jawna historia poprawek po publikacji |
| `audit_log` | nieedytowalna historia kluczowych działań |

## 4.7. Reguły integralności i bezpieczeństwa

- Numer nie może przejść do `scheduled`, jeśli nie ma okładki, kolejności, praw do assetów, tekstów alternatywnych i kompletu akceptacji.
- Opublikowany release wskazuje konkretne wersje materiałów i motywu; późniejsze drafty nie zmieniają publikacji.
- Publiczny użytkownik odczytuje wyłącznie opublikowane elementy i dozwolone warianty mediów.
- Czytelnik widzi i zapisuje wyłącznie własny postęp, bibliotekę i preferencje.
- Redaktor ma dostęp tylko do przydzielonego wydawnictwa lub tytułu.
- Rola techniczna publikująca i webhooki płatności nie są dostępne z klienta.
- Oryginały w pełnej rozdzielczości są prywatne; publiczne są wyłącznie przygotowane rendery.

---

# 5. Struktura komponentów React

## 5.1. Zasada architektury komponentów

Treść, temat marki i sposób prezentacji muszą być rozdzielone. Ten sam semantyczny blok „cytat” może wyglądać inaczej w Pelotonie i Needle, ale zachowuje dostępność, kontrakt danych i zachowanie responsywne. Komponenty nie powinny znać konkretnego numeru ani zaszytych kolorów.

## 5.2. Warstwy komponentów

| Warstwa | Odpowiedzialność | Przykłady |
|---|---|---|
| Foundations | tokeny, siatka, typografia, dostępność, motion | Theme, Type, Grid, Focus, Reduced Motion |
| Primitives | najmniejsze elementy UI | Button, IconButton, Link, Divider, Badge, Progress |
| Editorial | moduły treści | Paragraph, Lead, PullQuote, Image, Gallery, FactBox |
| Issue | doświadczenie całego numeru | Cover, Contents, EntryTransition, IssueProgress, Colophon |
| Library | kolekcjonowanie i odkrywanie | MagazineTile, IssueCover, IssueShelf, ContinueCard |
| Reader | spokojne czytanie i orientacja | ReaderShell, ReaderToolbar, StoryHeader, NextStory |
| Account | biblioteka i preferencje | SavedIssues, Downloads, ReadingSettings, Subscription |
| Studio | workflow redakcyjny | IssuePlanner, BlockEditor, CoverComposer, QA Checklist |

## 5.3. Drzewo aplikacji czytelniczej

- **PAPER App Shell**
  - Global Header / Magazine Switcher
  - PAPER Library
    - Featured Issue Stage
    - Publication Selector
    - Issue Shelf
    - Upcoming Issue Note
  - Publication Foyer
    - Magazine Masthead
    - Current Issue Stage
    - Archive Shelf
    - Publication Manifest
  - Issue Experience
    - Issue Cover
    - Editor’s Note
    - Table of Contents
    - Issue Reader
      - Story Header
      - Editorial Block Renderer
      - Inline Media / Gallery / Quote / Recommendation
      - Story End Card
      - Next Entry Transition
    - Issue Colophon
  - Personal Library
  - Account / Reading Preferences
  - Global Footer / Legal

## 5.4. Kontrolowany zestaw bloków redakcyjnych

### Typografia

- kicker i kategoria,
- headline,
- dek / podtytuł,
- lead,
- akapit,
- śródtytuł,
- lista,
- podpis i przypis,
- drop cap,
- cytat w tekście i pull quote.

### Obraz i narracja

- hero image,
- obraz w kolumnie,
- full bleed,
- dyptyk / tryptyk,
- galeria,
- esej fotograficzny,
- ilustracja z kontrolowanym parallaxem,
- sekwencja rozdziałowa,
- oś czasu,
- mapa lub diagram jako prawdziwy asset.

### Wiedza i rekomendacje

- fact box,
- spec table,
- profil osoby,
- rekomendacja redakcyjna,
- produkt,
- album / książka / miejsce,
- credits i disclosure,
- audio player z transkrypcją.

Każdy blok ma semantyczny typ, wersję schematu, dozwolone warianty prezentacji, zachowanie mobilne, wymagania dostępności i zestaw pól obowiązkowych. Redakcja nie ustawia ręcznie marginesów, font-size ani arbitralnych kolorów.

## 5.5. Komponenty specjalne

### Cover Composer

Nie jest dowolnym edytorem grafiki. Pozwala wybrać jeden z zatwierdzonych systemów okładki, ustawić key art, punkt kadrowania, masthead, numer, datę i krótką linię okładkową. Generuje podglądy dla telefonu, desktopu, social i archiwum.

### Issue Contact Sheet

Widok całego numeru jako sekwencji miniatur. Art director ocenia rytm: jasne/ciemne rozkładówki, gęstość tekstu, powtarzalność kadrów i miejsca oddechu.

### Editorial Block Renderer

Renderuje wyłącznie zatwierdzone schematy i potrafi odczytać starsze wersje numerów. Zmiana nowego design systemu nie może wizualnie zepsuć archiwalnych wydań.

### Reading Progress

Zapisuje ukończone sekcje i stabilne kotwice, nie pozycję piksela. Dzięki temu zmiana szerokości, fontu lub urządzenia nie przenosi czytelnika w przypadkowe miejsce.

---

# 6. Design System

## 6.1. Charakter

System powinien łączyć trzy cechy: **redakcyjną wyrazistość**, **muzealny spokój** i **systemową precyzję Apple**. Moodboard wskazuje na ciepły papier, cienkie obramowania, duże mastheady, ilustrację o ograniczonej palecie, kontrast czerni z kremem oraz pojedynczy rdzawo-pomarańczowy akcent.

## 6.2. Warstwy tokenów

1. **Foundation tokens** — spacing, breakpoints, promienie, obramowania, podstawowy papier, ink, font UI, focus, motion i dostępność.
2. **Publication tokens** — masthead, display serif, paleta tytułu, reguły ilustracji, warianty cover/TOC.
3. **Issue tokens** — jeden kolor akcentowy, faktura, key art, intro i wybrane przejścia.

Token numeru nie może obniżyć kontrastu, zmienić fontu tekstu głównego ani zachowania podstawowych kontrolek.

## 6.3. Siatka i przestrzeń

- baza spacingu: 4 px, z rytmem 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96,
- telefon: 4 kolumny i margines 20 px,
- tablet: 8 kolumn i margines 32 px,
- desktop: 12 kolumn, margines 48–80 px,
- maksymalna szerokość tekstu: 62–72 znaki,
- maksymalna szerokość sceny wydania: około 1440 px,
- duże przerwy między rozdziałami są częścią narracji, nie „pustym miejscem”.

## 6.4. Kształt i głębia

- promień bazowy 8 px; okładki 4–8 px, kontrolki okrągłe lub 999 px tylko wtedy, gdy wynikają z funkcji,
- obramowanie 1 px w ciepłym kolorze ink/line,
- okładka może mieć miękki cień sugerujący fizyczny obiekt,
- powierzchnie czytelnicze pozostają płaskie,
- gradienty tylko jako część ilustracji lub poprawa czytelności tekstu na obrazie,
- żadnego glassmorphismu, neonu ani „futurystycznych” poświat.

## 6.5. Papier i faktura

Faktura ma być subtelnym, statycznym ziarnem o bardzo niskim kontraście. Nie może zmniejszać czytelności tekstu ani pulsować podczas scrollowania. Stosujemy ją na okładkach, dużych polach i planszach przejściowych; główna kolumna tekstu może używać czystego koloru papieru.

## 6.6. Motion

| Rodzaj | Czas orientacyjny | Zastosowanie |
|---|---:|---|
| Micro | 120–180 ms | focus, naciśnięcie, ikona |
| UI | 180–260 ms | menu, toolbar, stan zapisu |
| Editorial | 380–600 ms | wejście okładki, przejście rozdziału |
| Ambient | 8–20 s | niemal niewidoczna pętla chmur, koła, winylu |

Ruch ma wolny start i miękkie wyhamowanie, bez sprężynowego „bounce”. Parallax nie przekracza kilkunastu pikseli i dotyczy najwyżej 2–3 warstw. Obrót winylu lub koła uruchamia się tylko w scenie, zatrzymuje poza viewportem i nigdy nie jest wymagany do zrozumienia treści. `Reduced motion` usuwa parallax, obrót i przesunięcia, zachowując krótkie crossfade’y lub natychmiastową zmianę stanu.

## 6.7. Ikony i kontrolki

Jedna rodzina prostych ikon o zaokrąglonej geometrii i kresce około 1,5 px. Ikony mają etykiety dostępności i nie są zastępowane emoji. Minimalny obszar interakcji to 44 × 44 px. Focus jest widoczny i spójny z paletą publikacji.

## 6.8. Dostępność jako element estetyki

- WCAG 2.2 AA jako minimum,
- tekst podstawowy co najmniej 18 px na telefonie,
- możliwość powiększenia tekstu bez rozpadu kompozycji,
- pełna obsługa klawiaturą i czytnikiem ekranu,
- poprawna hierarchia nagłówków oraz landmarków,
- podpisy, transkrypcje i alt texty redakcyjne,
- brak tekstu wtopionego w ilustrację, jeśli musi zostać odczytany,
- kontrast sprawdzany automatycznie dla każdego issue theme,
- animacja i audio nigdy nie startują z dźwiękiem,
- orientacja ekranu nie jest blokowana.

---

# 7. Paleta kolorów

## 7.1. Paleta PAPER — wspólny fundament

| Token | Kolor | Zastosowanie |
|---|---|---|
| Paper 0 | `#FFFDF7` | najjaśniejsza powierzchnia |
| Paper 50 | `#FAF5EA` | strony i czytnik |
| Paper 100 | `#F1E8D7` | tło biblioteki |
| Paper 200 | `#DED1BA` | sekcje, placeholder przed obrazem |
| Ink | `#171713` | tekst i najważniejsze kontrolki |
| Charcoal | `#2B2A25` | ciemne powierzchnie |
| Muted Ink | `#666157` | metadane i podpisy |
| Warm Line | `#C9BCA4` | obramowania i separatory |
| Moss | `#68715D` | spokojny akcent systemowy |
| Deep Navy | `#273640` | alternatywna ciemna powierzchnia |
| Rust | `#C8642F` | akcent wydawniczy |
| Focus Blue | `#315F8C` | focus i stany wymagające niezawodnego kontrastu |

Proporcja bazowa: około 70% paper, 20% ink i neutralne, maksymalnie 10% akcent. Rdzawy pomarańcz nie służy do długiego tekstu na jasnym tle; lepiej działa jako pole, detal ilustracji albo marker z czarnym tekstem.

## 7.2. Peloton — propozycja motywu

| Rola | Kolor |
|---|---|
| Tour Orange | `#E9792E` |
| Road Olive | `#69725E` |
| Summit Navy | `#2E3D47` |
| Jersey Black | `#171814` |
| Limestone | `#D8C9AD` |
| Alpine Paper | `#F4EDDF` |

Sygnatura: rytm trasy, mapy, profile wysokości, mechaniczne detale, duże pejzaże i portrety ludzi w ruchu. Pomarańcz jest energią, nie kolorem całego interfejsu.

## 7.3. Needle — propozycja motywu

| Rola | Kolor |
|---|---|
| Vinyl Black | `#10110F` |
| Listening Green | `#314435` |
| Tobacco | `#9A623B` |
| Oxide Gold | `#B28A4A` |
| Sleeve Plum | `#5B3F49` |
| Liner Paper | `#EEE5D4` |

Sygnatura: półmrok pokoju odsłuchowego, okładki płyt, drewno, aluminium, zbliżenia urządzeń i dużo negatywnej przestrzeni. Animacja winylu jest okazjonalnym detalem, nie globalnym motywem.

## 7.4. Kolor numeru

Każdy numer wybiera jeden akcent z palety publikacji albo zatwierdzony kolor sezonowy. Art director otrzymuje automatyczne kombinacje tekst/tło, a niedozwolone pary są blokowane. Okładka może być bardziej ekspresyjna; interfejs czytnika pozostaje przewidywalny.

---

# 8. Typografia

## 8.1. Architektura typograficzna

System potrzebuje nie wielu fontów, lecz wyraźnych ról:

1. **Masthead** — własny, dopracowany znak każdego magazynu.
2. **Editorial Display** — tytuły okładek, artykułów i rozdziałów.
3. **Reading Serif** — długi tekst i leady.
4. **UI Sans** — nawigacja, metadane, podpisy, system.

Masthead powinien być traktowany jak logotyp, nie zwykły zapis fontem. Wszystkie kroje muszą mieć pełne polskie znaki, odpowiednią licencję dla WWW, aplikacji, PDF i materiałów promocyjnych.

## 8.2. Rekomendacja na MVP

- **Display i tekst:** Newsreader Variable — elegancki, redakcyjny i wystarczająco elastyczny do prototypu oraz premiery.
- **UI:** Inter Variable — neutralny, bardzo czytelny i dojrzały na małych rozmiarach.
- **Mastheady:** indywidualnie dopracowane logotypy na bazie osobnego procesu brandingowego.

To rozsądny punkt startu bez mnożenia licencji. Po potwierdzeniu produktu można rozważyć licencjonowane kroje o większej unikalności, np. oddzielny display dla Pelotonu i Needle, zachowując wspólny font tekstowy i UI. Wybór produkcyjny wymaga testu polskich znaków, cyfr, kursywy, wag, wydajności oraz licencji na wszystkie planowane kanały.

## 8.3. Skala typograficzna

| Styl | Telefon | Desktop | Uwagi |
|---|---:|---:|---|
| Cover / Display XL | 42–52 px | 72–96 px | tylko krótkie tytuły |
| Article H1 | 38–44 px | 64–76 px | zwarty leading |
| H2 | 30–34 px | 42–48 px | nowa część narracji |
| H3 | 24–28 px | 30–34 px | śródtytuł |
| Lead | 21–23 px | 25–28 px | 1.4–1.5 line-height |
| Body | 18–19 px | 19–21 px | 1.58–1.72 line-height |
| UI | 14–16 px | 14–16 px | sans, wysoki kontrast |
| Caption | 13–14 px | 13–14 px | nie niżej niż 13 px |

## 8.4. Reguły składu

- 55–75 znaków w wierszu, docelowo około 66,
- prawidłowe polskie cudzysłowy, półpauzy i niełamliwe spójniki,
- kontrola wdów i sierot w tytułach, leadach i cytatach,
- kursywa do głosu i tytułów dzieł, nie jako dekoracja długich bloków,
- wersaliki wyłącznie w krótkich kickerach z większym trackingiem,
- cyfry tabelaryczne dla numerów, dat i specyfikacji,
- dzielenie wyrazów włączane ostrożnie dopiero po testach polskiego słownika,
- nigdy nie justujemy wąskiej kolumny mobilnej kosztem przypadkowych rzek światła.

---

# 9. Zasady tworzenia ilustracji

## 9.1. House style PAPER

Ilustracja ma wyglądać jak zamówiona przez redakcję, nie jak generyczny stock lub filtr. Jej język to cienki rysunek tuszem, płaskie plamy barwne, delikatny wash przypominający gwasz lub akwarelę, kontrolowane ziarno papieru i filmowa kompozycja.

Inspiracje powinny zostać przetworzone w oryginalny język PAPER. Korzystamy z symetrii, rytmu, ograniczonej palety i narracyjnego kadru, ale nie kopiujemy rozpoznawalnych kadrów, okładek ani stylu konkretnego twórcy jeden do jednego.

## 9.2. Reguły wizualne

- 4–6 dominujących kolorów na ilustrację,
- jedna czytelna scena lub idea, bez przeładowania detalem,
- maksymalnie trzy plany głębi przy assetach przeznaczonych do animacji,
- miękkie, matowe światło; brak plastikowego 3D i fotorealistycznego połysku,
- twarze uproszczone, lecz szanujące podobieństwo w portretach zamówionych,
- techniczne obiekty — rower, gramofon, wzmacniacz — muszą być wiarygodne konstrukcyjnie,
- szerokie pola negatywnej przestrzeni pod masthead i tekst,
- tekst nie jest wypalany w ilustracji; składamy go w systemie,
- jeden motyw przewodni może wracać w okładce, otwarciach i zakończeniu numeru.

## 9.3. System formatów

| Format | Proporcja | Minimalny master | Zastosowanie |
|---|---:|---:|---|
| Okładka | 3:4 | 3000 × 4000 px | biblioteka, wejście do numeru |
| Story hero | 16:10 | 3200 × 2000 px | otwarcie materiału |
| Portrait | 4:5 | 2400 × 3000 px | rozmowa, profil |
| Editorial spread | 3:2 | 3600 × 2400 px | desktop i tablet |
| Square | 1:1 | 2000 × 2000 px | półka, social, detale |
| Vertical mobile | 9:16 | 1800 × 3200 px | pełnoekranowa scena mobilna |

Każda główna ilustracja ma określony punkt skupienia oraz osobno zatwierdzone kadry mobile i wide. Sam automatyczny crop nie wystarcza dla okładki premium.

## 9.4. Brief ilustracyjny

Każde zamówienie powinno zawierać: tezę materiału, emocję, scenę, bohatera, epokę, techniczne referencje, paletę numeru, planowany format, strefy bezpieczne, warianty kadru, sposób animacji, listę elementów zakazanych, autora i zakres praw.

## 9.5. Kontrola jakości i etyka

- sprawdzenie anatomii, geometrii i prawdziwości sprzętu,
- weryfikacja logotypów, znaków towarowych i numerów startowych,
- zgody i oznaczenia przy wizerunku osoby,
- jawna informacja o procesie generatywnym, jeśli ilustracja korzysta z AI,
- zapis autora, źródeł i licencji,
- alt text opisuje sens ilustracji w kontekście artykułu, nie tylko jej wygląd,
- brak stereotypów i przypadkowego upodobnienia postaci do realnych osób.

---

# 10. Model CMS

## 10.1. Założenie

Editorial Studio ma przypominać stół redakcyjny i makietę numeru, nie panel administracyjny bazy danych. Najważniejszym ekranem jest **Issue Desk**: całość wydania, stan materiałów, okładka, kolejność, prawa, odpowiedzialni i termin.

## 10.2. Główne obszary CMS

### Dashboard wydawnictwa

Kalendarz premier, ryzyka, materiały oczekujące na akceptację, wygasające prawa, stan numerów i ostatnie publikacje.

### Issue Desk

Brief numeru, temat, numeracja, data, okładka, lista materiałów, drag-and-drop kolejności, statusy, contact sheet i finalna checklista. Zmiana kolejności jest jawna i wersjonowana.

### Story Editor

Edytor blokowy z ograniczoną biblioteką modułów, komentarzami, wersjami, podglądem czytelniczym i kontrolą metadanych. Nie pokazuje redaktorowi surowych struktur danych.

### Media Library

Oryginały, rendery, kadry, focal point, paleta, podpis, alt text, kredyt, licencja, termin praw, wystąpienia w numerach oraz ostrzeżenia o jakości.

### Cover Studio

Zatwierdzone układy, masthead, key art, numer, data, linie okładkowe, podgląd telefonu, desktopu, archiwum i social. Eksporty powstają z tego samego źródła.

### Preview & Proof

Podgląd w stanach mobile/tablet/desktop, symulacja słabej sieci, reduced motion, większy tekst i tryb zalogowany/niezalogowany. Link proof jest prywatny, wygasa i wskazuje konkretną wersję.

### Publication Settings

Motyw, role, szablony, masthead, język, domyślne bloki, polityki praw, konfiguracja dostępu i integracje.

## 10.3. Role

| Rola | Uprawnienia |
|---|---|
| Publisher / Owner | strategia, dostęp, finalna publikacja, role |
| Editor-in-Chief | temat numeru, zamówienia, kolejność, akceptacja treści |
| Managing Editor | terminy, workflow, kompletność i koordynacja |
| Art Director | okładka, ilustracja, kadry, rytm i theme numeru |
| Editor | tworzenie i redakcja materiałów |
| Author / Contributor | praca na przypisanych materiałach |
| Photo Editor | media, podpisy, kredyty i prawa |
| Proofreader / Fact-checker | uwagi, akceptacje, bez publikacji |
| Producer | audio, galerie, rendery i QA techniczne |

Jedna osoba może mieć kilka ról, ale finalną publikację warto oddzielić od zwykłej edycji.

## 10.4. Bramy jakości

Przed publikacją system wymaga:

- zamkniętego spisu treści,
- zatwierdzonej okładki w wymaganych kadrach,
- tytułu, leadu, autora i metadanych każdego materiału,
- korekty i fact-checku,
- podpisów, kredytów, alt textów i praw,
- podglądu na trzech klasach ekranów,
- testu dużego tekstu i reduced motion,
- sprawdzenia linków, formularzy i paywalla,
- budżetu wagowego mediów,
- daty, strefy czasowej i osoby zatwierdzającej.

## 10.5. Automatyzacje redakcyjne

- przypomnienie o terminie bez agresywnych powiadomień,
- ostrzeżenie o wygasających prawach,
- automatyczne rendery i kontrola wymiarów,
- wykrycie pustego alt textu, niepełnego podpisu i niedozwolonego kontrastu,
- link proof po nowej wersji,
- atomowa publikacja i wycofanie cache,
- manifest offline i feed dla przyszłych aplikacji,
- log zmian i raport popublikacyjny.

---

# 11. Strategia Responsive

## 11.1. Zasada

Responsive nie oznacza zmniejszenia desktopowego magazynu. Każdy breakpoint ma własną kompozycję, ale zachowuje tę samą hierarchię, kolejność, nastrój i treść. Telefon jest podstawowym urządzeniem do czytania; desktop daje szerzej reżyserowane sceny i rozkładówki.

## 11.2. Klasy ekranów

| Klasa | Zakres orientacyjny | Strategia |
|---|---:|---|
| Compact | 320–767 px | jedna kolumna, pełna okładka, duże touch targets |
| Medium | 768–1023 px | 8 kolumn, bardziej magazynowe zestawienia |
| Expanded | 1024–1439 px | 12 kolumn, tekst + obrazy na marginesie |
| Wide | 1440 px+ | rozkładówki i sceny, bez poszerzania tekstu |

Zakresy są punktami startowymi. Komponent powinien reagować na faktycznie dostępną szerokość, nie tylko nazwę urządzenia.

## 11.3. Zachowanie kluczowych ekranów

### Biblioteka

Na telefonie aktualna okładka zajmuje większość pierwszego viewportu, a półka poprzednich wydań ma ograniczoną, czytelną liczbę elementów i przycisk „Archiwum”. Na desktopie okładka stoi na scenie z metadanymi, a starsze numery tworzą fizycznie odczuwalny regał. Nie stosujemy nieskończonego scrolla.

### Spis treści

Telefon: numer, typ, tytuł i mały pionowy kadr w jednym rytmie. Desktop: dwukolumnowa kompozycja z listą po lewej i pasem ilustracji po prawej, zgodnie z moodboardem. Kolejność w DOM pozostaje logiczna.

### Artykuł

Telefon: jedna kolumna, 18–19 px, obrazy pełnej szerokości lub edge-to-edge. Tablet: treść i wybrane przypisy na marginesie. Desktop: maksymalnie około 66 znaków w wierszu, z obrazami, cytatami i informacjami rozszerzającymi kompozycję. Wide nie rozciąga tekstu, lecz zwiększa oddech i skalę ilustracji.

### Nawigacja czytnika

Na telefonie minimalny pasek uwzględnia safe areas i znika podczas czytania. Na desktopie postęp może być dyskretnym pionowym markerem lub cienką linią. Pełny spis treści jest zawsze osiągalny jednym działaniem.

### Przejścia

Swipe nie jest wymagany w MVP, aby nie konfliktował z pionowym scrollem i nawigacją systemową. Rozdziały łączy kontrolowana karta przejścia. Na większym ekranie może pojawić się efekt rozkładówki, ale tekst pozostaje semantycznie liniowy.

## 11.4. Media

- oddzielny crop dla cover mobile i cover wide,
- `focal point` jako minimum dla każdego kluczowego assetu,
- responsywne warianty i nowoczesne formaty,
- placeholder w kolorze dominującym zamiast szarego skeletonu,
- lazy loading poza pierwszym viewportem,
- ambient animation zatrzymywana poza ekranem,
- pobieranie offline pokazuje rozmiar przed rozpoczęciem.

## 11.5. Budżety jakości

Cele startowe: LCP poniżej 2,5 s na typowym telefonie ze średnim łączem, brak skoków layoutu, Lighthouse 90+ w kluczowych kategoriach i pierwszy ekran biblioteki bez ciężkiego wideo. Okładka ma wyglądać premium dzięki kompozycji, nie wadze pliku.

---

# 12. Roadmapa 24 miesiące

## Faza 0 — Fundament i proof of concept (miesiące 0–2)

**Cel:** udowodnić rytuał czytania na jednym prawdziwym numerze.

- decyzja, który tytuł jest pilotem,
- naming i podstawowy screening prawny marek oraz domen,
- manifest redakcyjny i profil pierwszego czytelnika,
- realny issue zero: okładka, spis, 3 materiały, zakończenie,
- prototyp kluczowych ekranów mobile i desktop,
- testy z 8–12 osobami czy rozumieją model numeru,
- architektura treści, tokeny i zasady ilustracji,
- plan produkcji jednego numeru oraz budżet assetów.

**Gate:** co najmniej 80% badanych bez tłumaczenia rozumie, że otwiera cały numer, potrafi wrócić do spisu i wie, co zostało do przeczytania.

## Faza 1 — Reader i CMS MVP (miesiące 3–5)

**Cel:** opublikować pierwszy działający tytuł bez długu, który zablokuje drugi magazyn.

- biblioteka PAPER i foyer jednego magazynu,
- aktualny numer i archiwum,
- okładka, spis treści, 8–10 podstawowych bloków,
- liniowy czytnik, udostępnianie i lokalny postęp,
- Editorial Studio: Issue Desk, Story Editor, Media Library, Preview, QA,
- role, wersje, atomowa publikacja, korekty,
- bazowe analytics, dostępność i performance,
- PWA shell, bez pełnego offline,
- dwa kompletne numery gotowe przed publiczną premierą.

**Poza MVP:** płatności, audio, aplikacje natywne, PDF, wyszukiwarka i rozbudowane profile.

## Faza 2 — Premiera kontrolowana (miesiące 6–8)

**Cel:** potwierdzić retencję wokół kolejnych wydań.

- publiczna premiera pilota,
- pierwszy numer bezpłatny lub pełny numer próbny,
- konta opcjonalne dla synchronizacji postępu i biblioteki,
- zapisane numery i „kontynuuj czytanie”,
- poprawa czytnika na podstawie ukończeń i badań jakościowych,
- trzeci numer przygotowany w realnym workflow,
- dokumentacja „new publication kit” dla drugiego tytułu.

**Gate:** co najmniej 30% osób rozpoczynających numer kończy go, a znacząca grupa wraca przy kolejnej premierze. Dokładny cel powrotu należy ustalić po pierwszym kohortowym baseline, nie zgadywać przed startem.

## Faza 3 — Drugi tytuł i model członkowski (miesiące 9–12)

**Cel:** dowieść, że PAPER naprawdę jest silnikiem magazynów.

- uruchomienie drugiego theme i drugiego workflow redakcyjnego,
- Needle lub Peloton jako drugi tytuł, zależnie od pilota,
- wspólna biblioteka konta,
- ulubione wydania,
- beta subskrypcji jednego tytułu,
- entitlement model gotowy na pojedynczy zakup i PAPER Pass,
- podstawowe narzędzia obsługi klienta,
- wyszukiwanie archiwum dopiero, jeśli liczba numerów je uzasadnia.

**Gate:** drugi tytuł powstaje bez forka aplikacji i bez ręcznego obchodzenia systemu motywów; redakcja publikuje numer bez udziału developera.

## Faza 4 — Offline i dojrzała redakcja (miesiące 13–15)

**Cel:** zwiększyć wartość kolekcji i niezawodność operacyjną.

- pełne pobieranie numeru w PWA,
- zarządzanie pamięcią urządzenia,
- rozbudowane prawa i ostrzeżenia licencyjne,
- dashboard jakości wydawniczej,
- komentarze i proofing na poziomie bloku,
- początek pipeline’u audio i transkrypcji,
- eksperyment z pakietami tematycznymi numerów.

## Faza 5 — Monetyzacja premium i druk (miesiące 16–18)

**Cel:** zbudować przychód zgodny z charakterem marki.

- stabilne subskrypcje i PAPER Pass,
- roczne członkostwo z korzyściami redakcyjnymi, bez gamifikacji,
- pojedyncze wydania specjalne,
- pilotaż druku na żądanie lub numeru kolekcjonerskiego,
- osobny szablon składu PDF/druk; nie automatyczny screenshot strony,
- rekomendacje i produkty z pełnym disclosure,
- prezenty i kody dostępu.

## Faza 6 — Audio i decyzja natywna (miesiące 19–21)

**Cel:** rozszerzyć rytuał bez rozmycia produktu.

- narracja wybranych materiałów i całych numerów,
- transkrypcje i synchronizacja pozycji tekst/audio,
- badanie potrzeby aplikacji natywnych na podstawie zachowań offline, audio i płatności,
- decyzja: natywny iOS/Android, wspólna warstwa cross-platform lub dalszy rozwój PWA,
- publiczne, stabilne Content API dla klientów natywnych.

## Faza 7 — Ekspansja kontrolowana (miesiące 22–24)

**Cel:** przygotować PAPER do kolejnych tytułów bez obniżenia jakości.

- trzeci magazyn tylko przy wystarczającej przepustowości redakcyjnej,
- lokalizacja i wielojęzyczność na poziomie wersji materiału,
- program wydań specjalnych i kolaboracji,
- beta aplikacji natywnej, jeśli poprzedni gate ją uzasadnił,
- eksperyment przestrzenny / Vision Pro wyłącznie dla wybranego numeru, nie jako osobny produkt,
- przegląd design systemu i archiwalnej zgodności po dwóch latach.

---

# 13. Model biznesowy i pozycjonowanie

## 13.1. Rekomendowany model

Na starcie: pierwszy pełny numer dostępny bezpłatnie, konto opcjonalne. Po zbudowaniu zaufania: subskrypcja pojedynczego tytułu oraz później PAPER Pass obejmujący wszystkie magazyny. Pojedyncze zakupy pozostają dla wydań specjalnych i osób unikających subskrypcji.

Przychód powinien pochodzić z czytelników, wydań kolekcjonerskich, druku, wydarzeń i transparentnych partnerstw redakcyjnych. Reklamy display, programatyczne boksy i płatne lokowanie udające tekst redakcyjny są sprzeczne z obietnicą marki.

## 13.2. Segment startowy

Nie „wszyscy zainteresowani kolarstwem lub muzyką”, lecz osoby, które:

- chcą mniej, ale lepiej opracowanych treści,
- cenią przedmioty, rzemiosło, design i kolekcjonowanie,
- czytają dłuższe formy na telefonie lub tablecie,
- są gotowe zapłacić za spokój, selekcję i jakość,
- dzielą się okładką lub pojedynczym kadrem, bo identyfikują się z tytułem.

## 13.3. Rytuał premiery

Każdy numer otrzymuje datę, okładkę reveal, krótką notę od redakcji i jedną spokojną wiadomość do zainteresowanych. Cały numer publikuje się jednocześnie. Po premierze komunikacja pokazuje fragmenty i proces twórczy, ale nie rozdrabnia numeru na codzienny clickbait.

---

# 14. Ryzyka i zabezpieczenia

| Ryzyko | Skutek | Zabezpieczenie |
|---|---|---|
| Budowa dwóch magazynów naraz | rozmycie jakości i kosztów | jeden pilot, drugi dopiero po dwóch numerach |
| Zbyt dosłowne udawanie papieru | wolne i frustrujące czytanie | pionowy tekst, „page turn” tylko między rozdziałami |
| CMS jako dowolny builder | niespójne numery | ograniczone moduły, warianty i bramy jakości |
| Piękne, ciężkie media | słaba wydajność | budżety, warianty, focal point, brak wideo na pierwszym ekranie |
| Motywy łamiące dostępność | atrakcyjna, lecz niedostępna publikacja | tokeny semantyczne i automatyczny kontrast |
| Nowy design psuje archiwum | utrata kolekcjonerskiej wartości | wersjonowanie theme i rendererów |
| Prawa do obrazów i fontów | wycofanie numeru lub koszty | rights registry i blokada publikacji |
| Produkcja assetów staje się wąskim gardłem | opóźnienia numerów | art bible, formaty, lista ilustratorów, wcześniejszy content lock |
| Nazwy podobne do istniejących marek | problem prawny i marketingowy | profesjonalny screening nazw, znaków i domen przed brandingiem |
| Optymalizacja pod engagement | produkt zmienia się w portal | north star oparty na ukończeniu i powrocie przy premierze |

---

# 15. Definicja MVP

MVP nie jest „stroną z trzema przykładowymi kartami”. To zdolność redakcji do samodzielnego stworzenia, sprawdzenia i jednoczesnego opublikowania kompletnego numeru, który czytelnik może przejść od okładki do kolofonu.

## W MVP musi być

- PAPER Library dla jednego aktywnego tytułu i gotowość konfiguracji drugiego,
- foyer magazynu, aktualny numer i archiwum,
- okładka, spis treści, 3–5 materiałów i zakończenie,
- stabilny czytnik mobile/tablet/desktop,
- 8–10 dopracowanych bloków,
- udostępnianie materiału z zachowaniem kontekstu numeru,
- lokalny postęp oraz opcjonalne konto do synchronizacji,
- Issue Desk, Story Editor, Media Library, Cover Studio, Preview i QA,
- role, wersjonowanie, snapshot, atomowa publikacja i korekty,
- wydajność, dostępność, prawa i podstawowe analytics,
- minimum dwa kompletne, prawdziwe numery przed premierą.

## Świadomie poza MVP

- płatności i subskrypcje,
- pełne offline,
- audio,
- PDF i druk,
- aplikacje natywne,
- rozbudowana wyszukiwarka,
- komentarze społecznościowe,
- personalizowany feed,
- Apple Vision Pro.

---

# 16. Kryteria jakości przed rozpoczęciem kodowania

Przed implementacją powinny istnieć i zostać zatwierdzone:

1. manifest PAPER oraz manifest pierwszego magazynu,
2. decyzja o tytule pilota i screeningu nazwy,
3. scenariusz jednego prawdziwego numeru z treścią, nie lorem ipsum,
4. mapa ekranów i klikalny flow mobile + desktop,
5. trzy dopracowane kierunki wizualne rozwijające moodboard, z wyborem jednego,
6. master okładki i zasady cropów,
7. biblioteka bloków wraz ze stanami responsywnymi,
8. prototyp czytania długiego tekstu i przejścia między materiałami,
9. test typografii z polskimi znakami i licencjami,
10. model danych, role, workflow i zasady publikacji,
11. budżety obrazów, ruchu, dostępności i wydajności,
12. plan produkcji dwóch pierwszych numerów.

---

# 17. Ostateczna rekomendacja

Największą przewagą PAPER nie będzie technologia ani liczba tytułów. Będzie nią powtarzalny system tworzenia **skończonych obiektów redakcyjnych**, które za każdym razem są świeże, ale natychmiast rozpoznawalne jako część jednego wydawnictwa.

Dlatego pierwszym produktem, który należy naprawdę zaprojektować, nie jest strona główna. Jest nim **jeden kompletny numer od okładki do ostatniej strony**, wraz z procesem jego stworzenia. Jeśli ten numer będzie piękny, czytelny, możliwy do ukończenia i możliwy do powtórzenia przez redakcję, silnik magazynów powstanie na właściwym fundamencie.
