import { przedSwitem } from "./przed-switem.js";
import { ciszaNapedu } from "./cisza-napedu.js";
import { kiedyZnikaAsfalt } from "./kiedy-znika-asfalt.js";
import { michalKwiatkowski } from "./michal-kwiatkowski.js";
import { drugiWyscig } from "./drugi-wyscig.js";

export const issue = {
  number: "01",
  date: "LIPIEC 2026",
  title: "Przed świtem",
  portraitStoryId: "michal-kwiatkowski",
};

export const upcomingIssue = {
  number: "02",
  date: "SIERPIEŃ 2026",
  dateTime: "2026-08",
  title: "Po Tourze",
  cover: "peloton-cover-02-po-tourze-option-3.jpg",
  coverAlt:
    "Surrealistyczna okładka Peloton: monumentalny biały kask, droga i trzech kolarzy odjeżdżających po Tour de France.",
  teaser:
    "Gdy żółty pył opada, peleton rusza dalej. Sierpniowy numer spojrzy na ludzi, zespoły i drogi, które zostają po największym wyścigu sezonu.",
};

export const stories = [przedSwitem, ciszaNapedu, kiedyZnikaAsfalt, michalKwiatkowski, drugiWyscig];

export const totalReadingMinutes = stories.reduce(
  (total, story) => total + Number.parseInt(story.time, 10),
  0,
);
