import { przedSwitem } from "./przed-switem.js";
import { ciszaNapedu } from "./cisza-napedu.js";
import { kiedyZnikaAsfalt } from "./kiedy-znika-asfalt.js";
import { michalKwiatkowski } from "./michal-kwiatkowski.js";

export const issue = {
  number: "01",
  date: "LIPIEC 2026",
  title: "Przed świtem",
  portraitStoryId: "michal-kwiatkowski",
};

export const stories = [przedSwitem, ciszaNapedu, kiedyZnikaAsfalt, michalKwiatkowski];

export const totalReadingMinutes = stories.reduce(
  (total, story) => total + Number.parseInt(story.time, 10),
  0,
);
