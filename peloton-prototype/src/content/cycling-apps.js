const appLinks = {
  lanc: "https://apps.apple.com/pl/app/lanc/id6774547243?uo=4",
  spinOrStay: "https://apps.apple.com/pl/app/spin-or-stay/id6789113229?uo=4",
  roadToWorldTour: "https://apps.apple.com/pl/app/road-to-world-tour/id6787514298?uo=4",
};

const appIcons = {
  lanc: "peloton-app-lanc.png",
  spinOrStay: "peloton-app-spin-or-stay.png",
  roadToWorldTour: "peloton-app-road-to-world-tour.png",
};

export const cyclingAppsByLocale = {
  pl: [
    {
      id: "lanc",
      name: "LANC",
      category: "GARAŻ · SERWIS · TRASY",
      description: "Rowerowy warsztat, historia serwisu i planowanie tras w jednym miejscu.",
      icon: appIcons.lanc,
      href: appLinks.lanc,
    },
    {
      id: "spin-or-stay",
      name: "Spin or Stay",
      category: "POGODA DLA KOLARZA",
      description: "Pogoda wzdłuż całej trasy, zanim zdecydujesz: jechać czy zostać.",
      icon: appIcons.spinOrStay,
      href: appLinks.spinOrStay,
    },
    {
      id: "road-to-world-tour",
      name: "Droga do World Tour",
      category: "KOLARSKA GRA STRATEGICZNA",
      description: "Kapslowa kariera kolarska — od pierwszego startu aż do World Touru.",
      icon: appIcons.roadToWorldTour,
      href: appLinks.roadToWorldTour,
    },
  ],
  en: [
    {
      id: "lanc",
      name: "LANC",
      category: "GARAGE · SERVICE · ROUTES",
      description: "A cycling garage, service history and route planning in one place.",
      icon: appIcons.lanc,
      href: appLinks.lanc,
    },
    {
      id: "spin-or-stay",
      name: "Spin or Stay",
      category: "WEATHER FOR CYCLISTS",
      description: "Weather along your entire route before you decide whether to ride or stay.",
      icon: appIcons.spinOrStay,
      href: appLinks.spinOrStay,
    },
    {
      id: "road-to-world-tour",
      name: "Droga do World Tour",
      category: "CYCLING STRATEGY GAME",
      description: "A bottle-cap cycling career — from your first start to the World Tour.",
      icon: appIcons.roadToWorldTour,
      href: appLinks.roadToWorldTour,
    },
  ],
};
