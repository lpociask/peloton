export const LANGUAGE_STORAGE_KEY = "rowki-language";

export const supportedLanguages = ["pl", "en"];

export function readStoredLanguage() {
  if (typeof window === "undefined") return "pl";

  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return supportedLanguages.includes(storedLanguage) ? storedLanguage : "pl";
  } catch {
    return "pl";
  }
}

export function storeLanguage(language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // The interface still works when storage is blocked (for example in private mode).
  }
}

export const translations = {
  pl: {
    mastheadLabel: "Rowki — magazyn winylu i hi-fi",
    mastheadTagline: "WINYL · HI-FI · MUZYKA",
    languageLabel: "Język wydania",
    openIssueAria: (title) => `Otwórz numer pierwszy: ${title}`,
    coverAlt: "Monumentalna czarna płyta, czerwony środek, srebrne ramię i kobaltowa fala dźwięku.",
    issueEyebrow: "NUMER 01 · ANALOG / NOWE OTWARCIE",
    issueDek: "Technics, renesans czarnej płyty, progresja od Pink Floyd do TesseracT, finał Riverside i adresy, pod którymi Warszawa wciąż brzmi analogowo.",
    openIssue: "OTWÓRZ NUMER",
    issuePreview: "Zapowiedź numeru",
    nextIssue: "NASTĘPNY NUMER",
    coverPreview: "ZAPOWIEDŹ OKŁADKI",
    newIssueNewArtist: "NOWY NUMER · NOWY ARTYSTA",
    inIssue: "W NUMERZE",
    issueSummary: (count, minutes) => `${count} MATERIAŁY · ${minutes} MIN CZYTANIA`,
    issueSummaryShort: (count, minutes) => `${count} MATERIAŁY · ${minutes} MIN`,
    backToCover: "Wróć do okładki",
    contentsTitle: "W NUMERZE",
    contentsDek: "Pięć historii o tym, dlaczego muzyka znów ma ciężar, format i własne miejsce w pokoju — od precyzji napędu po ostatni rozdział Riverside.",
    readingTime: (time) => `${time} czytania`,
    readFromBeginning: "CZYTAJ OD POCZĄTKU",
    houseAdKicker: "OD WYDAWCY",
    houseAdHeading: "Na następną płytę",
    houseAdDek: "Igła i Rowek — aplikacja od twórcy Rowków do porządkowania kolekcji i pamięci o słuchaniu, bez feedu i presji na kolejny zakup.",
    houseAdEyebrow: "KOLEKCJA · ODSŁUCHY · iOS",
    houseAdName: "Igła i Rowek",
    houseAdBody: "Twoja półka, historia odsłuchów i muzyczne wspomnienia w jednym miejscu.",
    houseAdCta: "APP STORE",
    houseAdFolio: "DLA KOLEKCJONERÓW",
    houseAdAria: "Zobacz aplikację Igła i Rowek na iOS w App Store — otwiera się w nowej karcie",
    editorialWorkshop: "WARSZTAT REDAKCJI",
    sourcesTitle: "Źródła i dalsza lektura",
    backToContents: "Wróć do spisu treści",
    issuePosition: (number, position, count) => `NUMER ${number} · ${position}/${count}`,
    shareStory: "Udostępnij materiał",
    removeSaved: "Usuń z zapisanych",
    saveStory: "Zapisz materiał",
    fallbackSectionHeading: "W rytmie drogi",
    fallbackMediaAlt: "Detal ilustracyjny numeru Rowki.",
    fallbackMediaCaption: (number) => `Detal numeru #${number}. Rytm drogi zapisany w obrazie.`,
    illustrationCredit: "ILUSTRACJA — ROWKI STUDIO",
    heroCredit: "ILUSTRACJA — ROWKI STUDIO / OPENAI",
    readingProgress: "Postęp czytania",
    shared: "Materiał udostępniony.",
    copied: "Link skopiowany.",
    shareReady: "Link jest gotowy do udostępnienia.",
    bylineFallback: "TEKST — REDAKCJA ROWKI",
    notebook: "NOTATNIK ROWKÓW",
    issueNumber: (number) => `ROWKI · NUMER ${number}`,
    endnote: "Materiał powstał dla pierwszego numeru cyfrowego magazynu Rowki.",
    nextStory: "NASTĘPNY MATERIAŁ",
    editorial: "Redaktorzy",
    comingSoon: "Wkrótce",
    documentTitle: (title) => `Rowki — Numer 01: ${title}`,
    documentDescription: "Rowki — niezależny magazyn o winylach, hi-fi i muzyce.",
  },
  en: {
    mastheadLabel: "Rowki — a magazine about vinyl and hi-fi",
    mastheadTagline: "VINYL · HI-FI · MUSIC",
    languageLabel: "Edition language",
    openIssueAria: (title) => `Open issue one: ${title}`,
    coverAlt: "A monumental black record with a red label, a silver tonearm and a cobalt sound wave.",
    issueEyebrow: "ISSUE 01 · ANALOGUE / A FRESH START",
    issueDek: "Technics, the vinyl revival, progressive music from Pink Floyd to TesseracT, Riverside's final chapter and the addresses where Warsaw still sounds analogue.",
    openIssue: "OPEN THE ISSUE",
    issuePreview: "Issue preview",
    nextIssue: "NEXT ISSUE",
    coverPreview: "COVER PREVIEW",
    newIssueNewArtist: "NEW ISSUE · NEW ARTIST",
    inIssue: "IN THIS ISSUE",
    issueSummary: (count, minutes) => `${count} FEATURES · ${minutes} MIN READ`,
    issueSummaryShort: (count, minutes) => `${count} FEATURES · ${minutes} MIN`,
    backToCover: "Back to the cover",
    contentsTitle: "IN THIS ISSUE",
    contentsDek: "Five stories about why music once again has weight, a format and a place of its own in the room — from drive precision to Riverside's final chapter.",
    readingTime: (time) => `${time} read`,
    readFromBeginning: "READ FROM THE START",
    houseAdKicker: "FROM THE PUBLISHER",
    houseAdHeading: "For your next record",
    houseAdDek: "Igła i Rowek — an app from the creator of Rowki for organising your collection and listening memories, without feeds or pressure to buy more.",
    houseAdEyebrow: "COLLECTION · LISTENING · iOS",
    houseAdName: "Igła i Rowek",
    houseAdBody: "Your shelf, listening history and musical memories in one place.",
    houseAdCta: "APP STORE",
    houseAdFolio: "FOR RECORD COLLECTORS",
    houseAdAria: "View the Igła i Rowek app for iOS on the App Store — opens in a new tab",
    editorialWorkshop: "EDITORIAL WORKBENCH",
    sourcesTitle: "Sources and further reading",
    backToContents: "Back to the table of contents",
    issuePosition: (number, position, count) => `ISSUE ${number} · ${position}/${count}`,
    shareStory: "Share this story",
    removeSaved: "Remove from saved stories",
    saveStory: "Save this story",
    fallbackSectionHeading: "In the rhythm of the road",
    fallbackMediaAlt: "An illustration detail from Rowki magazine.",
    fallbackMediaCaption: (number) => `A detail from issue #${number}. The rhythm of the road captured in an image.`,
    illustrationCredit: "ILLUSTRATION — ROWKI STUDIO",
    heroCredit: "ILLUSTRATION — ROWKI STUDIO / OPENAI",
    readingProgress: "Reading progress",
    shared: "Story shared.",
    copied: "Link copied.",
    shareReady: "The link is ready to share.",
    bylineFallback: "WORDS — ROWKI EDITORS",
    notebook: "ROWKI NOTEBOOK",
    issueNumber: (number) => `ROWKI · ISSUE ${number}`,
    endnote: "This story was created for the first digital issue of Rowki magazine.",
    nextStory: "NEXT STORY",
    editorial: "Editors",
    comingSoon: "Coming soon",
    documentTitle: (title) => `Rowki — Issue 01: ${title}`,
    documentDescription: "Rowki — an independent magazine about vinyl, hi-fi and music.",
  },
};
