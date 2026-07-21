import { assetPath } from "../assetPath";

export const ciszaNapedu = {
  id: "cisza-napedu",
  number: "02",
  type: "Technika",
  title: "Cisza napędu",
  time: "13 min",
  description: "Wosk, olej i wojna religijna o kilka watów.",
  byline: "TEKST — TOMASZ DĄBEK / REDAKCJA PELOTON",
  hero: assetPath("peloton-drivetrain-listening-hero-v2.jpg"),
  heroPosition: "50% 50%",
  thumb: assetPath("peloton-drivetrain-listening-hero-v2.jpg"),
  thumbMode: "standalone",
  thumbPosition: "50% 50%",
  lead:
    "O łańcuch można dbać albo odprawiać nad nim nabożeństwo. Pomiędzy kolejną butelką cudownego preparatu a garnkiem wosku ginie czasem rzecz podstawowa: diagnoza. Ten tekst jest o ciszy, ale także o kosztownej obsesji, by uciszyć każdy szmer.",
  caption:
    "Najpierw słuchanie, później narzędzia. Dobry serwis zaczyna się od właściwego pytania.",
  alt: "Mechanik w cichym warsztacie słucha napędu szosowego roweru zawieszonego na stojaku.",
  quote:
    "Najdroższy środek smarny nie naprostuje haka przerzutki. Marketing lubi butelki; mechanika woli najpierw ustalić, co właściwie hałasuje.",
  quoteAfter: 3,
  editorialDebate: {
    afterSection: 3,
    kicker: "SPÓR PELOTONU · WARSZTAT",
    question: "Wosk czy olej: czy łańcuch naprawdę potrzebuje religii?",
    positions: [
      {
        label: "TEZA",
        title: "Wosk to czystość i konsekwencja",
        text: "Dobrze przygotowany układ pozostaje czysty, ogranicza przyklejanie brudu i może zmniejszyć zużycie. Dla kolarza, który lubi procedurę i jeździ głównie na sucho, to logiczny system, nie internetowa moda.",
      },
      {
        label: "KONTRA",
        title: "Olej działa także poza laboratorium",
        text: "Mokry środek bywa praktyczniejszy w deszczu, podczas podróży i dla człowieka, który nie chce urządzać kuchni dla łańcucha. Źle wykonane woskowanie jest tylko bardziej ceremonialną wersją złej konserwacji.",
      },
    ],
    verdict: "Wygrywa nie plemię, lecz powtarzalny proces. Wybierz system pasujący do pogody i własnej cierpliwości, a później naprawdę go stosuj. Łańcuch nie czyta komentarzy pod filmami GCN.",
  },
  media: [
    {
      afterSection: 1,
      src: "peloton-drivetrain-workshop.png",
      webp: "peloton-drivetrain-workshop.webp",
      layout: "wide",
      alt: "Dłonie mechanika pracują przy monumentalnym łańcuchu i kasecie rowerowej.",
      caption: "Diagnoza zaczyna się od słuchania. Klucz pojawia się dopiero wtedy, gdy dźwięk ma już adres.",
      credit: "ILUSTRACJA — PAPER STUDIO",
    },
    {
      afterSection: 5,
      src: "peloton-drivetrain-road-test-v2.jpg",
      layout: "standard",
      alt: "Kolarz sprawdza pracę napędu po mokrej jeździe, stojąc z rowerem w otwartych drzwiach warsztatu.",
      caption: "Regulację potwierdza droga. Napęd ma być cichy także pod obciążeniem i po deszczu.",
      credit: "ILUSTRACJA — PAPER STUDIO",
    },
  ],
  sources: [
    {
      label: "Shimano — czyszczenie oraz dobór suchego i mokrego smaru",
      url: "https://bike.shimano.com/en-UK/stories/article/a-clean-chain.html",
    },
    {
      label: "Cycling Weekly — korzyści i koszty woskowania łańcucha",
      url: "https://www.cyclingweekly.com/products/should-i-be-waxing-my-chain",
    },
  ],
  sections: [
    {
      label: "01 — WARSZTAT",
      heading: "Dźwięk o 7:12",
      paragraphs: [
        "Deszcz skończył się pół godziny temu, ale woda nadal spływa po szybie warsztatu. Na stojaku wisi szosówka, która z daleka wygląda jak przygotowana do startu: czysta owijka, równo ustawione klamki, błyszcząca kaseta. Dopiero kiedy mechanik obraca korbą, spod tylnego koła wychodzi chropowate szuranie. Nie jest głośne. To raczej dźwięk, który po trzydziestu kilometrach zaczyna zajmować w głowie więcej miejsca niż droga.",
        "Właściciel roweru słyszał go od tygodnia. Najpierw tylko na dużej tarczy, później również na podjazdach. Wieczorem dolał smaru. Następnego dnia dolał jeszcze trochę, bo napęd wciąż nie brzmiał dobrze. Teraz zewnętrzne płytki łańcucha są czarne, a na kółkach przerzutki utworzył się pierścień z piasku, oleju i pyłu. Rower nie potrzebował więcej środka smarnego. Potrzebował diagnozy.",
        "Mechanik nie sięga od razu po klucz. Ustawia łańcuch na środkowej części kasety i kręci powoli, później szybciej. Przerzuca bieg w górę, wraca o dwa w dół. Lekko naciska bok przerzutki. Słucha, czy ton zmienia się wraz z położeniem łańcucha. Warsztat na chwilę zamienia się w studio nagraniowe, a napęd w instrument, którego każde fałszywe brzmienie prowadzi do innego miejsca.",
        "Idealnie cichy rower nie istnieje. Opona przesuwa powietrze, zapadki bębenka odmierzają drogę, szeroki karbonowy profil wzmacnia drobne rezonanse. Cisza napędu oznacza coś innego: brak dźwięków przypadkowych, narastających i trudnych do przewidzenia. To stan, w którym metal nie walczy z metalem, a ruch korby bez zbędnego komentarza dociera do tylnego koła.",
      ],
    },
    {
      label: "02 — DIAGNOZA",
      heading: "Rower ma metrum",
      paragraphs: [
        "Najpierw trzeba ustalić rytm hałasu. Kliknięcie pojawiające się raz na obrót korby każe patrzeć w stronę pedałów, mechanizmu korbowego, przedniej zębatki albo miejsca, w którym łańcuch ociera o prowadnicę przedniej przerzutki. Dźwięk wracający znacznie rzadziej może wędrować razem z konkretnym ogniwem. Szmer występujący wyłącznie na części kasety częściej wskazuje na indeksację, odległość górnego kółka przerzutki lub geometrię haka.",
        "Stojak pokazuje tylko połowę prawdy. Bez ciężaru kolarza łańcuch pracuje pod niewielkim napięciem, rama prawie się nie ugina, a koło obraca się bez siły przekazywanej z pedałów. Dlatego napęd, który brzmi poprawnie w warsztacie, może odezwać się na pierwszym stromym odcinku. Jeżeli trzask pojawia się tylko podczas mocnego nacisku, trzeba sprawdzić nie tylko ustawienie przerzutki, ale również zużycie łańcucha i zębów, połączenie korby, pedały oraz śruby zębatek.",
        "Dźwięk potrafi również podróżować po ramie. Stuk z okolicy suportu bywa luźnym zaciskiem sztycy, źle osadzonym kołem albo końcówką linki dotykającą karbonu. Dlatego próba powinna być powtarzalna: ten sam bieg, podobna kadencja, raz w siodle i raz na stojąco. Jeżeli hałas znika po odciążeniu jednej części roweru, to cenna wskazówka. W warsztacie nie wygrywa osoba, która pierwsza rozkręci korbę, lecz ta, która potrafi wykluczyć sprawne elementy bez ich demontażu.",
        "Najlepszym narzędziem diagnostycznym pozostaje prosty porządek. Czy hałas występuje na małej i dużej tarczy? Na wszystkich koronkach czy na dwóch sąsiadujących? Pod obciążeniem, podczas swobodnego kręcenia, a może tylko po zmianie biegu? Czy zaczął się po myciu, transporcie samochodem albo drobnym przewróceniu roweru? Odpowiedzi pozwalają ograniczyć obszar poszukiwań, zanim ktokolwiek zacznie obracać śrubami.",
        "Śruby ograniczające przerzutki nie służą do codziennego wyciszania napędu. Wyznaczają granice jej ruchu i chronią łańcuch przed spadnięciem między kasetę a szprychy lub poza najmniejszą koronkę. Przypadkowa korekta może uciszyć jeden bieg, jednocześnie tworząc problem znacznie poważniejszy. Najpierw czystość, koło osadzone prawidłowo w ramie, stan haka i indeksacja. Granice zostawia się na koniec — najlepiej komuś, kto wie, co sprawdza.",
      ],
    },
    {
      label: "03 — CZYSZCZENIE",
      heading: "Czystość nie jest połyskiem",
      paragraphs: [
        "Łańcuch może wyglądać dobrze i wciąż pracować jak papier ścierny. Najważniejsze tarcie powstaje nie na zewnętrznych płytkach, lecz wewnątrz połączeń: pomiędzy sworzniem, płytkami i rolką. To tam środek smarny ma utworzyć warstwę oddzielającą współpracujące powierzchnie. Jeżeli wcześniej dostanie się tam drobny pył, olej zmienia go w pastę, która przyspiesza zużycie całego układu.",
        "W warsztacie pierwsze przejście szmatki przez łańcuch zostawia czarny ślad. Drugie jest niewiele lepsze. Zanim pojawi się nowy smar, trzeba usunąć stary brud z łańcucha, zębów kasety, tarcz oraz kółek przerzutki. Łagodny, przeznaczony do napędów preparat i miękka szczotka wystarczą w większości przypadków. Agresywna chemia nie jest oznaką dokładności. Producenci ostrzegają przed kwaśnymi i zasadowymi rozpuszczalnikami oraz długim moczeniem elementów, bo mogą osłabić części lub uszkodzić tworzywa.",
        "Równie ważne jest suszenie. Nakładanie oleju na mokry łańcuch zamyka wodę i zanieczyszczenia tam, skąd miały zostać usunięte. Po płukaniu napęd należy wytrzeć, dać mu odparować i dopiero wtedy smarować. Myjka ciśnieniowa skraca pracę tylko pozornie: strumień potrafi wepchnąć wodę w okolice łożysk i elektronicznych podzespołów, a brud przenieść głębiej.",
        "Czyszczenie jest przy okazji najtańszym przeglądem technicznym. W dłoni łatwiej wyczuć sztywne ogniwo, zauważyć płytkę wygiętą po zmianie biegu pod dużym obciążeniem albo szybkozłączkę, która nie układa się tak jak pozostałe połączenia. Warto obejrzeć także zęby: pojedynczy uszkodzony może dawać regularny impuls, którego nie usunie żadna regulacja. Jeśli ogniwo nie porusza się swobodnie lub widać pęknięcie, jazda kończy się przed kolejną próbą na drodze.",
        "Kalendarz jest gorszym doradcą niż warunki. Dwieście kilometrów po suchej, czystej szosie nie znaczy dla napędu tego samego co trzydzieści kilometrów w deszczu po poboczu pełnym piasku. Po mokrej jeździe warto zareagować tego samego dnia. Nie urządzać rowerowi operacji generalnej, lecz usunąć wilgoć i nalot, sprawdzić rolki, a po wyschnięciu przywrócić właściwe smarowanie.",
      ],
    },
    {
      label: "04 — SMAROWANIE",
      heading: "Wosk nie zbawia",
      paragraphs: [
        "Smarowanie łańcucha stało się jedną z tych dyskusji, w których po trzech zdaniach przestajemy rozmawiać o metalu, a zaczynamy bronić własnego charakteru. Zwolennik wosku patrzy na czarną łydkę jak na zaniedbanie moralne. Zwolennik oleju pyta, czy naprawdę trzeba kupować garnek dla części rowerowej. Obaj potrafią mieć rację — i obaj potrafią zajechać napęd, jeśli bardziej lubią stanowisko niż procedurę.",
        "Butelka ze środkiem smarnym ma cienką końcówkę nie bez powodu. Preparat powinien trafić do każdej rolki, najlepiej od wewnętrznej strony dolnego odcinka łańcucha. Korbę obraca się powoli, ogniwo po ogniwie. Później trzeba dać środkowi czas na penetrację lub wyschnięcie zgodnie z instrukcją produktu. Ostatnim etapem jest staranne wytarcie zewnętrznych powierzchni. Łańcuch po smarowaniu może być chroniony w środku i niemal suchy w dotyku na zewnątrz.",
        "Nadmiar nie zwiększa ochrony. Zbiera pył, przenosi go na kasetę i kółka przerzutki, a po kilku przejazdach tworzy czarne obrzeża wokół rolek. To dlatego rowery smarowane najczęściej bywają czasem najbardziej hałaśliwe. Problemem nie jest brak troski, tylko pominięcie połowy procesu: kolejna warstwa została położona na poprzedniej, razem z tym, co przyniosła droga.",
        "Olejowe środki do mokrych warunków potrafią pracować bardzo cicho i długo, lecz wymagają oszczędnej aplikacji oraz regularnego wycierania. Wosk pozostawia czystszy napęd, ale oczekuje znacznie dokładniejszego przygotowania. Nowy łańcuch przeznaczony do woskowania trzeba pozbawić fabrycznego zabezpieczenia zgodnie z procedurą producenta, a po mokrej jeździe nie wolno zostawić go na noc bez uwagi. Wybór ma odpowiadać pogodzie, kilometrażowi i temu, ile czasu naprawdę chcemy przeznaczyć na obsługę.",
        "Najgorszym systemem jest system zmieniany co weekend. Przypadkowe mieszanie wosku, oleju i kolejnych preparatów utrudnia im dotarcie do właściwego miejsca. Lepsza jest konsekwencja: jeden sposób, poprawne przygotowanie i obserwacja napędu. Jeżeli łańcuch po czyszczeniu zaczyna brzmieć sucho albo głośniej, nie należy czekać na arbitralną liczbę kilometrów. Dźwięk jest częścią harmonogramu serwisowego.",
      ],
    },
    {
      label: "05 — ZUŻYCIE",
      heading: "Pół milimetra prawdy",
      paragraphs: [
        "Po czyszczeniu mechanik przykłada do łańcucha prosty przymiar. Metalowe ogniwa nie rozciągają się jak guma. Zużywają się powierzchnie współpracujące przy sworzniach, a suma niewielkich luzów zwiększa odległość na dłuższym odcinku. Łańcuch przestaje idealnie układać się na zębach i zaczyna zmieniać ich profil. Z czasem nowy łańcuch założony na starą kasetę może przeskakiwać właśnie dlatego, że kaseta nauczyła się już kształtu poprzedniego.",
        "Dla wielu nowoczesnych napędów z jedenastoma lub większą liczbą przełożeń popularną granicą kontroli jest zużycie około 0,5 procent; w starszych układach spotyka się 0,75 procent. To wartości orientacyjne — zawsze pierwszeństwo ma dokumentacja producenta konkretnego łańcucha. Najważniejszy jest nie sam numer, lecz regularność pomiaru. Wymiana wykonana we właściwym momencie zwykle kosztuje mniej niż późniejsza wymiana łańcucha, kasety i zębatek.",
        "Przymiar w tym rowerze nie zapada. Źródło dźwięku leży gdzie indziej. Mechanik patrzy na przerzutkę od tyłu, ale wzrok służy tylko do wstępnej oceny. Hak może odchylić się po oparciu roweru napędem o ścianę, wywrotce albo transporcie. Przy gęsto ułożonej kasecie nawet niewielki błąd sprawia, że prowadnica jest poprawnie ustawiona na jednym końcu zakresu i nie trafia w linię zębatek na drugim. Tego nie naprawi się cierpliwym kręceniem baryłką.",
        "Dokładny pomiar potwierdza lekkie skrzywienie. Po ustawieniu haka mechanik wraca do indeksacji. W napędzie mechanicznym drobne ruchy regulatora napięcia linki przesuwają pozycje zmiany biegów względem kasety. W systemie elektronicznym podobną rolę pełni mikroregulacja. Zasada pozostaje ta sama: zmieniać jeden parametr naraz, małym krokiem, za każdym razem przejść przez kilka koronek i zapamiętać punkt wyjścia.",
        "Na końcu pozostaje odległość górnego kółka przerzutki od kasety, regulowana zgodnie z instrukcją konkretnego systemu. Zbyt mała lub zbyt duża potrafi pogorszyć zmianę biegów i wprowadzić chropowaty ton. Nie istnieje jedna uniwersalna wartość dla wszystkich kaset i przerzutek. Dołączony wzornik albo dokumentacja producenta są pewniejszym źródłem niż liczba zapamiętana z poprzedniego roweru.",
      ],
    },
    {
      label: "06 — DROGA",
      heading: "Próba na szosie",
      paragraphs: [
        "Rower schodzi ze stojaka tuż po ósmej. Ulice są jeszcze mokre, ale niebo nad miastem zaczyna się rozjaśniać. Pierwsze zmiany biegów odbywają się bez obciążenia, następne na wiadukcie. Łańcuch przechodzi po całej kasecie, po jednym stopniu, w obu kierunkach. Mechanik słucha nie tylko chwili zmiany, lecz także kilku obrotów korby po niej. Dobrze ustawiony napęd nie zastanawia się pomiędzy zębatkami i nie próbuje wrócić na poprzednią.",
        "Na stromszej części podjazdu pojawia się pełne obciążenie. To moment, którego nie zastąpi żaden stojak. Rama, koło i mechanizm korbowy pracują teraz razem z ciężarem ciała. Hałas nie wraca. Słychać tylko oponę na mokrym asfalcie oraz równy, niski szum łańcucha. Nie jest to cisza laboratoryjna. Jest wystarczająco spokojna, by przestać o niej myśleć.",
        "Kolarz również ma wpływ na brzmienie napędu. Zmiana biegu pod maksymalnym naciskiem zmusza łańcuch do przejścia pomiędzy zębami w chwili największego naprężenia. Nowoczesne systemy robią to imponująco sprawnie, ale krótkie odpuszczenie siły nadal daje szybszą i łagodniejszą zmianę. Skrajnie skośna linia łańcucha też potrafi generować szum. Jeżeli podobne przełożenie można uzyskać na drugiej tarczy i w środkowej części kasety, układ często pracuje ciszej.",
        "Nie każdy dźwięk wymaga interwencji. Niektóre kasety po montażu potrzebują czasu, by ich powierzchnie zaczęły współpracować z nowym łańcuchem. Inaczej brzmi układ świeżo nawoskowany, inaczej olejowy po deszczowym przejeździe. Ważniejsza od absolutnej ciszy jest powtarzalność. Nowy trzask, nagły wzrost szumu albo bieg, który wcześniej działał płynnie, to informacje. Rower zwykle ostrzega wcześniej, niż odmawia dalszej jazdy.",
      ],
    },
    {
      label: "07 — RYTUAŁ",
      heading: "Pięć minut po jeździe",
      paragraphs: [
        "Większość problemów nie wymaga częstego rozbierania roweru. Wymaga krótkiej uwagi udzielonej we właściwym momencie. Po suchej jeździe wystarczy przesunąć czystą szmatkę po łańcuchu i sprawdzić, czy zewnętrzne płytki nie zostawiają grubego, czarnego śladu. Po deszczu trzeba usunąć wilgoć i piasek, dać napędowi wyschnąć, a następnie uzupełnić właściwy środek zgodnie z przyjętym systemem.",
        "Raz na kilka jazd warto obrócić korbą na stojaku lub po uniesieniu tylnego koła. Przejść przez wszystkie biegi, obejrzeć rolki przerzutki, sprawdzić szybkozłączkę i posłuchać, czy rytm jest równy. Co pewien czas należy zmierzyć łańcuch przymiarem, częściej przy dużym kilometrażu, jeździe w pyle i deszczu. Przed ważną trasą lepiej wykonać kontrolę kilka dni wcześniej niż smarować i regulować wszystko w noc poprzedzającą wyjazd.",
        "Pomaga prosta notatka w telefonie: data ostatniego czyszczenia, rodzaj użytego środka, pomiar łańcucha i warunki kilku ostatnich jazd. Nie chodzi o prowadzenie laboratoryjnego dziennika. Po paru miesiącach widać jednak, jak szybko konkretny napęd zbiera brud, kiedy zaczyna brzmieć sucho i czy częstotliwość obsługi pasuje do sposobu jazdy. Własny rytm konserwacji jest bardziej użyteczny niż uniwersalna rada liczona wyłącznie w kilometrach.",
        "Po transporcie albo przewróceniu roweru pierwszym podejrzanym powinno być ustawienie koła i okolica przerzutki. Jeżeli jeden koniec kasety działa dobrze, a drugi nie daje się wyregulować, dalsze kręcenie baryłką może tylko przesuwać problem. To moment na sprawdzenie haka odpowiednim narzędziem. Gdy łańcuch przeskakuje pod obciążeniem, ma uszkodzone ogniwo albo napęd nie utrzymuje bezpiecznych granic pracy, rower powinien trafić do serwisu.",
        "Przed dziewiątą szosówka wraca pod warsztat. Na ostatnich metrach mechanik przestaje już słuchać napędu. Zostają krople odrywające się od opony, oddech i miejski ruch, który zdążył rozpocząć dzień. To najlepszy wynik regulacji: nie efekt, który domaga się podziwu, lecz brak przeszkody pomiędzy człowiekiem a drogą. Cisza napędu nie jest pustką. Jest miejscem odzyskanym dla jazdy.",
      ],
    },
  ],
  serviceBox: {
    title: "Cichy napęd w pięciu krokach",
    items: [
      "Najpierw ustal, kiedy i w jakim rytmie pojawia się hałas.",
      "Oczyść łańcuch, kasetę, zębatki i rolki łagodnym preparatem.",
      "Wysusz napęd przed nałożeniem środka smarnego.",
      "Smaruj rolki oszczędnie i dokładnie wytrzyj nadmiar.",
      "Regularnie mierz łańcuch; po uderzeniu sprawdź ustawienie haka.",
    ],
  },
};
