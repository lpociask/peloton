import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { build } from "../peloton-prototype/node_modules/esbuild/lib/main.js";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const outputPath = path.join(
  repositoryRoot,
  "peloton-prototype/dist/app-content/v2/library.json",
);

const pelotonMediaBase = "https://lpociask.github.io/peloton/assets/";
const rowkiMediaBase = "https://lpociask.github.io/peloton/rowki/assets/";

const generatedAt = process.env.APP_CONTENT_GENERATED_AT ?? new Date().toISOString();
const releaseID = process.env.APP_CONTENT_RELEASE_ID
  ?? process.env.GITHUB_SHA
  ?? `local-${generatedAt.replace(/[^0-9]/g, "").slice(0, 14)}`;

const publicationSources = {
  peloton: {
    source: `
      import * as pl from "./peloton-prototype/src/content/stories.js";
      import * as en from "./peloton-prototype/src/content/en/stories.js";
      import { editorialTeamByLocale as editorial } from "./peloton-prototype/src/content/editorial-team.js";
      import { copyByLocale } from "./peloton-prototype/src/i18n.js";
      export default {
        pl,
        en,
        editorial,
        mediaCredit: {
          pl: copyByLocale.pl.illustrationCredit,
          en: copyByLocale.en.illustrationCredit,
        },
      };
    `,
    basePath: "/peloton/",
  },
  rowki: {
    source: `
      import * as pl from "./vinyl-prototype/src/content/stories.js";
      import * as en from "./vinyl-prototype/src/content/stories.en.js";
      import { editorialTeamByLanguage as editorial } from "./vinyl-prototype/src/content/editorial-team.js";
      import { translations } from "./vinyl-prototype/src/i18n.js";
      export default {
        pl,
        en,
        editorial,
        mediaCredit: {
          pl: translations.pl.illustrationCredit,
          en: translations.en.illustrationCredit,
        },
      };
    `,
    basePath: "/peloton/rowki/",
  },
};

async function bundlePublication({ source, basePath }) {
  const result = await build({
    stdin: {
      contents: source,
      loader: "js",
      resolveDir: repositoryRoot,
      sourcefile: "app-content-entry.js",
    },
    bundle: true,
    define: {
      "import.meta.env.BASE_URL": JSON.stringify(basePath),
    },
    format: "esm",
    platform: "node",
    target: "node22",
    treeShaking: true,
    write: false,
  });

  const bundledSource = result.outputFiles.at(0)?.text;
  if (!bundledSource) throw new Error("esbuild did not return a bundled content module.");

  const moduleURL = `data:text/javascript;base64,${Buffer.from(bundledSource).toString("base64")}`;
  return (await import(moduleURL)).default;
}

function localized(pl, en) {
  return { pl, en };
}

function parseMinutes(value) {
  const minutes = Number.parseInt(String(value), 10);
  if (!Number.isFinite(minutes)) throw new Error(`Invalid reading time: ${value}`);
  return minutes;
}

function mediaURL(value, mediaBase) {
  if (!value) return null;
  const url = /^https:\/\//i.test(value)
    ? new URL(value)
    : new URL(
        String(value)
          .replace(/^.*?\/assets\//, "")
          .replace(/^\/+/, ""),
        mediaBase,
      );

  // A new feed release must also invalidate images whose public filename stays
  // unchanged (for example the current cover). The iOS disk cache keys by URL.
  url.searchParams.set("v", releaseID);
  return url.href;
}

function normalizeCredit(value) {
  if (!value) return null;
  const credit = String(value).replace("PAPER STUDIO", "5×12 STUDIO / OPENAI");
  return credit.includes("ROWKI STUDIO / OPENAI")
    ? credit
    : credit.replace("ROWKI STUDIO", "ROWKI STUDIO / OPENAI");
}

function normalizeEditorial(editorial, mediaBase) {
  return {
    ...editorial,
    chief: {
      ...editorial.chief,
      portrait: mediaURL(editorial.chief.portrait, mediaBase),
    },
    people: editorial.people.map((person) => ({
      ...person,
      portrait: mediaURL(person.portrait, mediaBase),
    })),
  };
}

function storyMedia(story, mediaCredit) {
  if (story.media?.length) return story.media;
  if (!story.detailImage) return [];

  return [{
    afterSection: story.detailAfter ?? 3,
    src: story.detailImage,
    alt: story.detailAlt ?? "",
    caption: story.detailCaption ?? null,
    credit: mediaCredit,
    layout: story.detailLayout ?? "standard",
  }];
}

function contentBlocks(story, mediaBase, mediaCredit) {
  const blocks = [];
  const sections = story.sections ?? [];
  const media = storyMedia(story, mediaCredit);

  sections.forEach((section, sectionIndex) => {
    blocks.push({
      id: `section-${sectionIndex}`,
      type: "section",
      section: {
        label: section.label ?? `${story.number}.${sectionIndex + 1}`,
        heading: section.heading,
        paragraphs: section.paragraphs,
      },
    });

    if (story.quote && sectionIndex === (story.quoteAfter ?? 1)) {
      blocks.push({
        id: `quote-${sectionIndex}`,
        type: "quote",
        text: story.quote,
      });
    }

    media.forEach((item, mediaIndex) => {
      if (item.afterSection !== sectionIndex) return;
      blocks.push({
        id: `media-${mediaIndex}`,
        type: "media",
        media: {
          source: mediaURL(item.webp ?? item.src, mediaBase),
          alt: item.alt ?? "",
          caption: item.caption ?? null,
          credit: normalizeCredit(item.credit ?? mediaCredit),
          layout: item.layout ?? "standard",
        },
      });
    });

    if (story.editorialDebate && story.editorialDebate.afterSection === sectionIndex) {
      const { afterSection: _, ...debate } = story.editorialDebate;
      blocks.push({
        id: `debate-${sectionIndex}`,
        type: "debate",
        debate,
      });
    }
  });

  if (story.serviceBox) {
    blocks.push({
      id: "service-box",
      type: "serviceBox",
      serviceBox: {
        title: story.serviceBox.title,
        items: story.serviceBox.items,
      },
    });
  }

  return blocks;
}

function localizedArticleContent(story, mediaBase, mediaCredit) {
  return {
    category: story.type,
    title: story.title,
    summary: story.description,
    lead: story.lead,
    byline: story.byline,
    heroAlt: story.alt ?? "",
    caption: story.caption ?? null,
    blocks: contentBlocks(story, mediaBase, mediaCredit),
    sources: (story.sources ?? []).map(({ label, url }) => ({ label, url })),
  };
}

function pairArticles({ plStories, enStories, mediaBase, mediaCredit }) {
  return plStories.map((plStory, index) => {
    const enStory = enStories.find((candidate) => candidate.id === plStory.id) ?? enStories[index];
    if (!enStory) throw new Error(`Missing English story for ${plStory.id}.`);
    if (plStory.id !== enStory.id) {
      throw new Error(`Story ID mismatch: ${plStory.id} / ${enStory.id}.`);
    }

    return {
      id: plStory.id,
      number: plStory.number,
      minutes: localized(parseMinutes(plStory.time), parseMinutes(enStory.time)),
      thumbnailImage: mediaURL(
        plStory.thumbWebp ?? plStory.thumb ?? plStory.heroWebp ?? plStory.hero,
        mediaBase,
      ),
      heroImage: mediaURL(plStory.heroWebp ?? plStory.hero, mediaBase),
      content: {
        pl: localizedArticleContent(plStory, mediaBase, mediaCredit.pl),
        en: localizedArticleContent(enStory, mediaBase, mediaCredit.en),
      },
    };
  });
}

function publication({
  id,
  name,
  tagline,
  accent,
  secondaryAccent,
  coverImage,
  mediaBase,
  source,
}) {
  const articles = pairArticles({
    plStories: source.pl.stories,
    enStories: source.en.stories,
    mediaBase,
    mediaCredit: source.mediaCredit,
  });
  const issueID = `${id}-${source.pl.issue.number}`;

  if (source.pl.issue.number !== source.en.issue.number) {
    throw new Error(`Issue number mismatch for ${id}.`);
  }

  return {
    id,
    name,
    tagline,
    accent,
    secondaryAccent,
    currentIssueID: issueID,
    editorial: {
      pl: normalizeEditorial(source.editorial.pl, mediaBase),
      en: normalizeEditorial(source.editorial.en, mediaBase),
    },
    issues: [{
      id: issueID,
      number: source.pl.issue.number,
      coverImage: mediaURL(coverImage, mediaBase),
      totalMinutes: localized(
        articles.reduce((total, article) => total + article.minutes.pl, 0),
        articles.reduce((total, article) => total + article.minutes.en, 0),
      ),
      title: localized(source.pl.issue.title, source.en.issue.title),
      date: localized(source.pl.issue.date, source.en.issue.date),
      articles,
    }],
  };
}

function validateFeed(feed) {
  if (feed.schemaVersion !== 2) throw new Error("Unexpected app-content schema version.");
  if (feed.publications.length !== 2) throw new Error("The feed must contain two publications.");

  for (const item of feed.publications) {
    const currentIssue = item.issues.find((issue) => issue.id === item.currentIssueID);
    if (!currentIssue) throw new Error(`Missing current issue for ${item.id}.`);
    if (currentIssue.articles.length !== 5) {
      throw new Error(`${currentIssue.id} must contain exactly five articles.`);
    }

    for (const article of currentIssue.articles) {
      if (!article.thumbnailImage || !article.heroImage) {
        throw new Error(`Missing primary media for ${currentIssue.id}/${article.id}.`);
      }
      for (const language of ["pl", "en"]) {
        const blocks = article.content[language].blocks;
        const blockIDs = blocks.map((block) => block.id);
        if (new Set(blockIDs).size !== blockIDs.length) {
          throw new Error(`Duplicate block ID in ${currentIssue.id}/${article.id}/${language}.`);
        }
        if (!blocks.some((block) => block.type === "media")) {
          throw new Error(`Missing inline media in ${currentIssue.id}/${article.id}/${language}.`);
        }
      }
    }
  }
}

function feedMediaURLs(feed) {
  return feed.publications.flatMap((item) => [
    item.editorial.pl.chief.portrait,
    item.editorial.en.chief.portrait,
    ...item.editorial.pl.people.map((person) => person.portrait),
    ...item.editorial.en.people.map((person) => person.portrait),
    ...item.issues.flatMap((issue) => [
      issue.coverImage,
      ...issue.articles.flatMap((article) => [
        article.thumbnailImage,
        article.heroImage,
        ...article.content.pl.blocks
          .filter((block) => block.type === "media")
          .map((block) => block.media.source),
        ...article.content.en.blocks
          .filter((block) => block.type === "media")
          .map((block) => block.media.source),
      ]),
    ]),
  ]);
}

async function validateMediaFiles(feed) {
  const mediaURLs = [...new Set(feedMediaURLs(feed))];
  await Promise.all(mediaURLs.map(async (value) => {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname !== "lpociask.github.io") {
      throw new Error(`Media URL is outside the approved Pages origin: ${value}`);
    }
    if (url.searchParams.get("v") !== releaseID) {
      throw new Error(`Media URL is not scoped to release ${releaseID}: ${value}`);
    }

    let localPath;
    if (url.pathname.startsWith("/peloton/rowki/assets/")) {
      localPath = path.join(
        repositoryRoot,
        "vinyl-prototype/dist/assets",
        url.pathname.slice("/peloton/rowki/assets/".length),
      );
    } else if (url.pathname.startsWith("/peloton/assets/")) {
      localPath = path.join(
        repositoryRoot,
        "peloton-prototype/dist/assets",
        url.pathname.slice("/peloton/assets/".length),
      );
    } else {
      throw new Error(`Unexpected media path: ${value}`);
    }

    try {
      await fs.access(localPath);
    } catch {
      throw new Error(`Feed media does not exist in the production build: ${localPath}`);
    }
  }));
}

const [pelotonSource, rowkiSource] = await Promise.all([
  bundlePublication(publicationSources.peloton),
  bundlePublication(publicationSources.rowki),
]);

const library = {
  schemaVersion: 2,
  releaseID,
  generatedAt,
  publications: [
    publication({
      id: "peloton",
      name: "PELOTON",
      tagline: localized(
        "Kolarstwo jako kultura, droga i rzemiosło.",
        "Cycling as culture, road and craft.",
      ),
      accent: "#DD6B24",
      secondaryAccent: "#5E6044",
      coverImage: "peloton-cover-art.webp",
      mediaBase: pelotonMediaBase,
      source: pelotonSource,
    }),
    publication({
      id: "rowki",
      name: "ROWKI",
      tagline: localized(
        "Winyl, hi-fi i kultura słuchania.",
        "Vinyl, hi-fi and listening culture.",
      ),
      accent: "#E23B20",
      secondaryAccent: "#1649C8",
      coverImage: "rowki-cover.png",
      mediaBase: rowkiMediaBase,
      source: rowkiSource,
    }),
  ],
};

validateFeed(library);
await validateMediaFiles(library);
await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, `${JSON.stringify(library, null, 2)}\n`);

const issueCount = library.publications.reduce((total, item) => total + item.issues.length, 0);
const articleCount = library.publications.reduce(
  (total, item) => total + item.issues.reduce((sum, issue) => sum + issue.articles.length, 0),
  0,
);
console.log(`Generated app-content v2: ${issueCount} issues, ${articleCount} articles -> ${outputPath}`);
