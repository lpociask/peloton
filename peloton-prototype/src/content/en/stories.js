import { przedSwitemEn } from "./przed-switem.js";
import { ciszaNapeduEn } from "./cisza-napedu.js";
import { kiedyZnikaAsfaltEn } from "./kiedy-znika-asfalt.js";
import { michalKwiatkowskiEn } from "./michal-kwiatkowski.js";
import { drugiWyscigEn } from "./drugi-wyscig.js";

export const issue = {
  number: "01",
  date: "JULY 2026",
  title: "Before dawn",
  portraitStoryId: "michal-kwiatkowski",
};

export const upcomingIssue = {
  number: "02",
  date: "AUGUST 2026",
  dateTime: "2026-08",
  title: "After the Tour",
  cover: "peloton-cover-02-po-tourze-option-3.jpg",
  coverAlt:
    "A surreal Peloton cover with a monumental white helmet, a road and three cyclists riding away after the Tour de France.",
  teaser:
    "When the yellow dust settles, the peloton keeps moving. The August issue looks at the people, teams and roads left behind by the season’s greatest race.",
};

export const stories = [
  przedSwitemEn,
  ciszaNapeduEn,
  kiedyZnikaAsfaltEn,
  michalKwiatkowskiEn,
  drugiWyscigEn,
];

export const totalReadingMinutes = stories.reduce(
  (total, story) => total + Number.parseInt(story.time, 10),
  0,
);
