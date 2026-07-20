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
