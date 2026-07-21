import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookmarkSimple,
  Clock,
  Export,
} from "@phosphor-icons/react";
import { assetPath } from "./assetPath";
import { editorialTeamByLanguage } from "./content/editorial-team.js";
import {
  issue as polishIssue,
  upcomingIssue as polishUpcomingIssue,
  stories as polishStories,
} from "./content/stories";
import {
  issue as englishIssue,
  upcomingIssue as englishUpcomingIssue,
  stories as englishStories,
} from "./content/stories.en";
import { readStoredLanguage, storeLanguage, supportedLanguages, translations } from "./i18n";

const publications = {
  pl: { issue: polishIssue, upcomingIssue: polishUpcomingIssue, stories: polishStories },
  en: { issue: englishIssue, upcomingIssue: englishUpcomingIssue, stories: englishStories },
};

const pageMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -7 },
};

const IGLA_I_ROWEK_APP_STORE_URL =
  "https://apps.apple.com/pl/app/ig%C5%82a-i-rowek/id6782431440?uo=4";

function IconButton({ label, children, onClick, pressed, className = "" }) {
  return (
    <button
      className={`icon-button ${className}`}
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function LanguageSwitch({ language, onLanguageChange, text, className = "" }) {
  return (
    <div className={`language-switch ${className}`} role="group" aria-label={text.languageLabel}>
      {supportedLanguages.map((nextLanguage) => (
        <button
          key={nextLanguage}
          type="button"
          aria-pressed={language === nextLanguage}
          onClick={() => onLanguageChange(nextLanguage)}
        >
          {nextLanguage.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Masthead({ onEditorial, language, onLanguageChange, text }) {
  return (
    <header className="masthead">
      <div className="masthead__wordmark" aria-label={text.mastheadLabel}>
        <span aria-hidden="true">ROWKI</span>
        <small>{text.mastheadTagline}</small>
      </div>
      <div className="masthead__actions">
        <button className="masthead__editors" type="button" onClick={onEditorial}>
          {text.editorial}
        </button>
        <LanguageSwitch
          language={language}
          onLanguageChange={onLanguageChange}
          text={text}
        />
      </div>
    </header>
  );
}

function UpcomingIssueTeaser({ issue, text, reduceMotion }) {
  const headingId = `upcoming-issue-${issue.number}`;

  return (
    <motion.section
      className="upcoming-issue"
      aria-labelledby={headingId}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.52, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="upcoming-issue__ghost" aria-hidden="true">
        {issue.number}
      </span>

      <div className="upcoming-issue__copy">
        <div className="upcoming-issue__topline">
          <span>{text.nextIssue}</span>
          <span>{text.comingSoon}</span>
        </div>
        <p className="upcoming-issue__folio">
          <span>{text.issueNumber(issue.number)}</span>
          <time dateTime={issue.dateTime}>{issue.date}</time>
        </p>
        <h2 id={headingId}>{issue.title}</h2>
        <span className="upcoming-issue__rule" aria-hidden="true" />
        <p className="upcoming-issue__dek">{issue.teaser}</p>
        <p className="upcoming-issue__artist">{text.newIssueNewArtist}</p>
      </div>

      <figure className="upcoming-issue__figure">
        <div className="upcoming-issue__cover">
          <picture>
            <img
              src={assetPath(issue.cover)}
              alt={issue.coverAlt}
              width={issue.coverWidth}
              height={issue.coverHeight}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
        <figcaption>
          <span>{text.coverPreview}</span>
          <span>ROWKI · #{issue.number}</span>
        </figcaption>
      </figure>
    </motion.section>
  );
}

function CoverScreen({
  issue,
  upcomingIssue,
  stories,
  totalReadingMinutes,
  language,
  onLanguageChange,
  text,
  onOpen,
  onEditorial,
  reduceMotion,
}) {
  return (
    <motion.section
      className="cover-screen"
      {...pageMotion}
      transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="cover-screen__current">
        <Masthead
          onEditorial={onEditorial}
          language={language}
          onLanguageChange={onLanguageChange}
          text={text}
        />

        <motion.button
          className="issue-cover"
          type="button"
          aria-label={text.openIssueAria(issue.title)}
          onClick={onOpen}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          whileTap={reduceMotion ? undefined : { scale: 0.992 }}
        >
          <picture>
            <img
              src={assetPath("rowki-cover.png")}
              alt={text.coverAlt}
            />
          </picture>
          <span className="issue-cover__number">#01</span>
          <span className="issue-cover__date">{issue.date}</span>
        </motion.button>

        <div className="issue-heading">
          <p className="issue-heading__eyebrow">{text.issueEyebrow}</p>
          <h1>{issue.title.toLocaleUpperCase(language)}</h1>
          <span className="issue-heading__rule" aria-hidden="true" />
          <p className="issue-heading__dek">
            {text.issueDek}
          </p>
        </div>

        <button className="primary-action" type="button" onClick={onOpen}>
          <span>{text.openIssue}</span>
          <ArrowRight size={27} weight="regular" aria-hidden="true" />
        </button>

        <aside className="cover-notes" aria-label={text.issuePreview}>
          <div className="cover-notes__meta">
            <span>ROWKI · #{issue.number}</span>
            <time dateTime="2026-07">{issue.date}</time>
          </div>
          <p className="cover-notes__label">{text.inIssue}</p>
          <ol>
            {stories.map((story) => (
              <li key={story.id}>
                <span>{story.number}</span>
                <span>
                  <small>{story.type}</small>
                  <strong>{story.title}</strong>
                </span>
                <span>{story.time}</span>
              </li>
            ))}
          </ol>
          <p className="cover-notes__footer">
            {text.issueSummary(stories.length, totalReadingMinutes)}
          </p>
        </aside>
      </div>

      <UpcomingIssueTeaser issue={upcomingIssue} text={text} reduceMotion={reduceMotion} />
      <MagazineHouseAd text={text} />
    </motion.section>
  );
}

function ReaderBar({ issue, onBack, language, onLanguageChange, text }) {
  return (
    <header className="reader-bar">
      <IconButton label={text.backToCover} onClick={onBack}>
        <ArrowLeft size={25} aria-hidden="true" />
      </IconButton>
      <span className="reader-bar__brand">
        ROWKI <small className="reader-bar__issue">#{issue.number}</small>
      </span>
      <LanguageSwitch
        language={language}
        onLanguageChange={onLanguageChange}
        text={text}
        className="language-switch--compact"
      />
    </header>
  );
}

function EditorialScreen({ team, language, onLanguageChange, onBack, text, reduceMotion }) {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <motion.section
      className={`editorial-screen editorial-screen--${language}`}
      {...pageMotion}
      transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="editorial-bar">
        <IconButton label={team.backToCover} onClick={onBack}>
          <ArrowLeft size={25} aria-hidden="true" />
        </IconButton>
        <span className="editorial-bar__brand">
          ROWKI <small>{text.editorial}</small>
        </span>
        <LanguageSwitch
          language={language}
          onLanguageChange={onLanguageChange}
          text={text}
          className="language-switch--compact"
        />
      </header>

      <div className="editorial-scroll">
        <section className="editorial-intro" aria-labelledby="editorial-title">
          <p>{team.kicker}</p>
          <h1 id="editorial-title" ref={headingRef} tabIndex="-1">{team.title}</h1>
          <div aria-hidden="true" />
          <p className="editorial-intro__dek">{team.intro}</p>
        </section>

        <aside className="editorial-chief" aria-labelledby="editorial-chief-title">
          <p>{team.chief.kicker}</p>
          <h2 id="editorial-chief-title">{team.chief.title}</h2>
          <figure className="editorial-chief__portrait">
            <img
              src={assetPath(team.chief.portrait)}
              alt={team.chief.portraitAlt}
              width="720"
              height="1125"
              loading="eager"
              decoding="async"
            />
          </figure>
          <p>{team.chief.description}</p>
        </aside>

        <ol className="editorial-team">
          {team.people.map((person) => (
            <li className="editorial-card" key={person.id}>
              <figure>
                <img
                  src={assetPath(person.portrait)}
                  alt={person.portraitAlt}
                  width="720"
                  height="1125"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="editorial-card__copy">
                <p className="editorial-card__affiliation">
                  <span>{team.affiliationLabel}</span>
                  <strong>{team.magazine}</strong>
                </p>
                <p className="editorial-card__meta">
                  <span>{person.number}</span>
                  <span>{person.role}</span>
                </p>
                <h2>{person.name}</h2>
                <p className="editorial-card__character">{person.character}</p>
                <div className="editorial-card__notes">
                  <p><span>{team.voiceLabel}</span>{person.voice}</p>
                  <p><span>{team.sourcesLabel}</span>{person.sources}</p>
                </div>
                <p className="editorial-card__assignment">
                  <span>{team.assignmentLabel}</span>
                  <strong>{person.assignment}</strong>
                </p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="editorial-disclosure">
          <span aria-hidden="true">AI</span>
          <p>{team.disclosure}</p>
        </aside>

        <footer className="editorial-folio">
          <span>ROWKI · PAPER</span>
          <span>{team.footer}</span>
        </footer>
      </div>
    </motion.section>
  );
}

function MagazineHouseAd({ text }) {
  const headingId = "publisher-app-title";

  return (
    <aside className="publisher-apps publisher-apps--single" aria-labelledby={headingId}>
      <header className="publisher-apps__header">
        <div>
          <p className="publisher-apps__kicker">{text.houseAdKicker}</p>
          <h2 id={headingId}>{text.houseAdHeading}</h2>
        </div>
        <p className="publisher-apps__dek">{text.houseAdDek}</p>
      </header>

      <ol className="publisher-apps__list">
        <li className="publisher-apps__item">
          <a
            href={IGLA_I_ROWEK_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={text.houseAdAria}
          >
            <span className="publisher-apps__number" aria-hidden="true">01</span>
            <img
              src={assetPath("igla-i-rowek-app-icon.png")}
              alt=""
              width="256"
              height="256"
              loading="lazy"
              decoding="async"
            />
            <span className="publisher-apps__copy">
              <small>{text.houseAdEyebrow}</small>
              <strong>{text.houseAdName}</strong>
              <span>{text.houseAdBody}</span>
            </span>
            <span className="publisher-apps__store" aria-hidden="true">
              {text.houseAdCta}
              <ArrowUpRight size={15} weight="bold" />
            </span>
          </a>
        </li>
      </ol>

      <footer className="publisher-apps__folio">
        <span>ROWKI · PAPER</span>
        <span>{text.houseAdFolio}</span>
      </footer>
    </aside>
  );
}

function ContentsScreen({
  issue,
  stories,
  totalReadingMinutes,
  language,
  onLanguageChange,
  text,
  onBack,
  onRead,
  reduceMotion,
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <motion.section
      className="contents-screen"
      {...pageMotion}
      transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <ReaderBar
        issue={issue}
        onBack={onBack}
        language={language}
        onLanguageChange={onLanguageChange}
        text={text}
      />

      <section className="contents-sheet" aria-labelledby="contents-title">
        <div className="contents-heading-block">
          <div className="contents-meta">
            <span>#{issue.number}</span>
            <time dateTime="2026-07">{issue.date}</time>
          </div>
          <h1 id="contents-title" ref={headingRef} tabIndex="-1">
            {text.contentsTitle}
          </h1>
          <span className="contents-accent" aria-hidden="true" />
          <p className="contents-heading-block__dek">
            {text.contentsDek}
          </p>
        </div>

        <ol className="story-list" style={{ "--story-count": stories.length }}>
          {stories.map((story, index) => (
            <motion.li
              key={story.id}
              initial={reduceMotion ? false : { opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.28, delay: reduceMotion ? 0 : 0.08 + index * 0.04 }}
            >
              <button type="button" onClick={() => onRead(story)}>
                <span className="story-list__number">{story.number}</span>
                <span className="story-list__copy">
                  <small>{story.type}</small>
                  <strong>{story.title}</strong>
                  <span className="story-list__description">{story.description}</span>
                  <span className="story-list__time">
                    <Clock size={13} weight="regular" aria-hidden="true" />
                    {text.readingTime(story.time)}
                  </span>
                </span>
                <span
                  className={`story-list__thumb story-list__thumb--${story.thumbMode ?? "triptych"}`}
                  aria-hidden="true"
                >
                  <picture>
                    {story.thumbWebp ? (
                      <source srcSet={assetPath(story.thumbWebp)} type="image/webp" />
                    ) : null}
                    <img
                      src={assetPath(story.thumb ?? "rowki-cover.png")}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: story.thumbPosition }}
                    />
                  </picture>
                </span>
                <ArrowRight className="story-list__arrow" size={18} aria-hidden="true" />
              </button>
            </motion.li>
          ))}
        </ol>

        <footer className="contents-folio">
          <span>{text.issueSummaryShort(stories.length, totalReadingMinutes)}</span>
          <span>02</span>
        </footer>
      </section>

      <div className="contents-footer">
        <button className="primary-action contents-action" type="button" onClick={() => onRead(stories[0])}>
          <span>{text.readFromBeginning}</span>
          <ArrowRight size={25} aria-hidden="true" />
        </button>
      </div>
    </motion.section>
  );
}

function ArticleMedia({ item, storyId, mediaIndex }) {
  const layout = item.layout ?? "standard";

  return (
    <figure className={`story-media story-media--${layout}`}>
      <picture>
        {item.avif ? <source srcSet={assetPath(item.avif)} type="image/avif" /> : null}
        {item.webp ? <source srcSet={assetPath(item.webp)} type="image/webp" /> : null}
        <img
          src={assetPath(item.src)}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          width={item.width}
          height={item.height}
          style={{
            objectPosition: item.objectPosition,
            "--media-aspect": item.width && item.height ? `${item.width} / ${item.height}` : undefined,
          }}
        />
      </picture>
      <figcaption>
        <span>{item.caption}</span>
        {item.credit ? <small>{item.credit}</small> : null}
      </figcaption>
      <span className="story-media__folio" aria-hidden="true">
        {storyId.toUpperCase().slice(0, 2)} · {String(mediaIndex + 1).padStart(2, "0")}
      </span>
    </figure>
  );
}

function SourceNotes({ sources, text }) {
  if (!sources?.length) return null;

  return (
    <aside className="source-notes" aria-labelledby="source-notes-title">
      <p>{text.editorialWorkshop}</p>
      <h2 id="source-notes-title">{text.sourcesTitle}</h2>
      <ol>
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer">
              {source.label}
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function StoryToolbar({
  story,
  issue,
  stories,
  language,
  onLanguageChange,
  text,
  onBack,
  onShare,
  saved,
  onToggleSaved,
}) {
  return (
    <header className="story-toolbar">
      <IconButton label={text.backToContents} onClick={onBack}>
        <ArrowLeft size={25} aria-hidden="true" />
      </IconButton>
      <div className="story-toolbar__identity">
        <span>ROWKI</span>
        <small>{text.issuePosition(issue.number, Number(story.number), stories.length)}</small>
      </div>
      <div className="story-toolbar__actions">
        <LanguageSwitch
          language={language}
          onLanguageChange={onLanguageChange}
          text={text}
          className="language-switch--compact"
        />
        <IconButton label={text.shareStory} onClick={onShare}>
          <Export size={23} aria-hidden="true" />
        </IconButton>
        <IconButton
          label={saved ? text.removeSaved : text.saveStory}
          pressed={saved}
          onClick={onToggleSaved}
        >
          <BookmarkSimple size={23} weight={saved ? "fill" : "regular"} aria-hidden="true" />
        </IconButton>
      </div>
    </header>
  );
}

function StoryScreen({
  story,
  issue,
  stories,
  language,
  onLanguageChange,
  text,
  onBack,
  onNext,
  saved,
  onToggleSaved,
  reduceMotion,
}) {
  const [shareMessage, setShareMessage] = useState("");
  const [progress, setProgress] = useState(4);
  const scrollerRef = useRef(null);
  const headingRef = useRef(null);
  const articleSections = story.sections ?? [
    {
      label: story.type,
      heading: text.fallbackSectionHeading,
      paragraphs: story.paragraphs,
    },
  ];
  const storyMedia = story.media ?? (story.detailImage
    ? [
        {
          afterSection: story.detailAfter ?? 3,
          src: story.detailImage,
          avif: story.detailAvif,
          width: story.detailWidth,
          height: story.detailHeight,
          alt: story.detailAlt ?? text.fallbackMediaAlt,
          caption: story.detailCaption ?? text.fallbackMediaCaption(issue.number),
          credit: text.illustrationCredit,
          layout: story.detailLayout ?? "standard",
        },
      ]
    : []);

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, [story.id]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return undefined;

    const updateProgress = () => {
      const available = scroller.scrollHeight - scroller.clientHeight;
      const value = available > 0 ? 4 + (scroller.scrollTop / available) * 96 : 4;
      setProgress(Math.min(100, Math.max(4, value)));
    };

    updateProgress();
    scroller.addEventListener("scroll", updateProgress, { passive: true });
    return () => scroller.removeEventListener("scroll", updateProgress);
  }, [story.id, language]);

  useEffect(() => {
    if (!shareMessage) return undefined;
    const timeout = window.setTimeout(() => setShareMessage(""), 2200);
    return () => window.clearTimeout(timeout);
  }, [shareMessage]);

  useEffect(() => {
    setShareMessage("");
  }, [language]);

  const shareStory = async () => {
    const shareData = {
      title: `${story.title} — Rowki`,
      text: story.lead,
      url: window.location.href,
    };

    try {
      const isStandalone = window.matchMedia?.("(display-mode: standalone)").matches;
      if (isStandalone && navigator.share && (!navigator.canShare || navigator.canShare(shareData))) {
        await navigator.share(shareData);
        setShareMessage(text.shared);
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        setShareMessage(text.copied);
      } else {
        setShareMessage(text.shareReady);
      }
    } catch (error) {
      if (error?.name !== "AbortError") setShareMessage(text.shareReady);
    }
  };

  return (
    <motion.article
      ref={scrollerRef}
      className="story-screen"
      {...pageMotion}
      transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <StoryToolbar
        story={story}
        issue={issue}
        stories={stories}
        language={language}
        onLanguageChange={onLanguageChange}
        text={text}
        onBack={onBack}
        onShare={shareStory}
        saved={saved}
        onToggleSaved={onToggleSaved}
      />

      <div
        className="story-progress"
        role="progressbar"
        aria-label={text.readingProgress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={Math.round(progress)}
      >
        <span style={{ width: `${progress}%` }} />
      </div>

      <AnimatePresence>
        {shareMessage ? (
          <div className="share-notice-wrap">
            <motion.p
              className="share-notice"
              role="status"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              {shareMessage}
            </motion.p>
          </div>
        ) : null}
      </AnimatePresence>

      <header className={`article-opening article-opening--${story.id}`}>
        <div className="article-opening__meta">
          <span>{story.type}</span>
          <span>{text.readingTime(story.time)}</span>
        </div>
        <h1 ref={headingRef} tabIndex="-1">
          {story.title.split(" ").map((word, wordIndex) => (
            <span key={`${word}-${wordIndex}`}>{word}</span>
          ))}
        </h1>
        <span className="article-opening__rule" aria-hidden="true" />
        <p className="article-opening__lead">{story.lead}</p>
        <p className="article-opening__byline">{story.byline ?? text.bylineFallback}</p>
      </header>

      <figure className="article-hero">
        <picture>
          {story.heroWebp ? <source srcSet={assetPath(story.heroWebp)} type="image/webp" /> : null}
          <img
            src={assetPath(story.hero)}
            alt={story.alt}
            decoding="async"
            fetchPriority="high"
            width={story.heroWidth ?? 1586}
            height={story.heroHeight ?? 992}
            style={{ objectPosition: story.heroPosition }}
          />
        </picture>
        <figcaption>
          <span>{story.caption}</span>
          <small>{text.heroCredit}</small>
        </figcaption>
      </figure>

      <div className="story-body">
        {articleSections.map((section, sectionIndex) => (
          <div className="story-section-group" key={`${story.id}-section-${sectionIndex}`}>
            <section
              className={`story-section${section.variant ? ` story-section--${section.variant}` : ""}`}
              aria-labelledby={`${story.id}-section-${sectionIndex}`}
            >
              <p className="story-section__label">{section.label ?? `${story.number}.${sectionIndex + 1}`}</p>
              <h2 id={`${story.id}-section-${sectionIndex}`}>{section.heading}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  className={sectionIndex === 0 && paragraphIndex === 0 ? "story-body__dropcap" : undefined}
                  key={`${story.id}-section-${sectionIndex}-paragraph-${paragraphIndex}`}
                >
                  {paragraph}
                </p>
              ))}
            </section>

            {sectionIndex === (story.quoteAfter ?? 1) ? <blockquote>{story.quote}</blockquote> : null}

            {storyMedia
              .filter((item) => item.afterSection === sectionIndex)
              .map((item, mediaIndex) => (
                <ArticleMedia
                  item={item}
                  storyId={story.id}
                  mediaIndex={storyMedia.indexOf(item) ?? mediaIndex}
                  key={`${item.src}-${mediaIndex}`}
                />
              ))}
          </div>
        ))}

        {story.serviceBox ? (
          <aside className="service-box" aria-label={story.serviceBox.title}>
            <p>{text.notebook}</p>
            <h2>{story.serviceBox.title}</h2>
            <ol>
              {story.serviceBox.items.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </aside>
        ) : null}

        <SourceNotes sources={story.sources} text={text} />

        <footer className="article-endnote">
          <span>{text.issueNumber(issue.number)}</span>
          <span>{text.readingTime(story.time).toLocaleUpperCase(language)}</span>
          <p>{text.endnote}</p>
        </footer>

        <button className="next-story" type="button" onClick={onNext}>
          <span>
            <small>{text.nextStory}</small>
            <strong>{stories[(stories.findIndex((item) => item.id === story.id) + 1) % stories.length].title}</strong>
          </span>
          <ArrowRight size={27} aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
}

export function App() {
  const reduceMotion = useReducedMotion();
  const [language, setLanguage] = useState(readStoredLanguage);
  const [screen, setScreen] = useState("cover");
  const [storyId, setStoryId] = useState(polishStories[0].id);
  const [savedStories, setSavedStories] = useState(() => new Set());
  const { issue, upcomingIssue, stories } = publications[language];
  const text = translations[language];
  const editorialTeam = editorialTeamByLanguage[language];
  const totalReadingMinutes = stories.reduce(
    (total, item) => total + Number.parseInt(item.time, 10),
    0,
  );
  const story = stories.find((item) => item.id === storyId) ?? stories[0];

  useEffect(() => {
    storeLanguage(language);
    document.documentElement.lang = language;
    document.title = text.documentTitle(issue.title);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", text.documentDescription);
  }, [issue.title, language, text]);

  const openIssue = () => {
    setScreen("contents");
  };

  const openEditorial = () => {
    setScreen("editorial");
  };

  const openStory = (nextStory) => {
    setStoryId(nextStory.id);
    setScreen("story");
  };

  const openNextStory = () => {
    const currentIndex = stories.findIndex((item) => item.id === story.id);
    setStoryId(stories[(currentIndex + 1) % stories.length].id);
  };

  const toggleSaved = () => {
    setSavedStories((current) => {
      const next = new Set(current);
      if (next.has(story.id)) next.delete(story.id);
      else next.add(story.id);
      return next;
    });
  };

  return (
    <main className="prototype-stage" lang={language}>
      <div className="mobile-prototype publication-shell">
        <AnimatePresence mode="wait" initial={false}>
          {screen === "cover" ? (
            <CoverScreen
              key="cover"
              issue={issue}
              upcomingIssue={upcomingIssue}
              stories={stories}
              totalReadingMinutes={totalReadingMinutes}
              language={language}
              onLanguageChange={setLanguage}
              text={text}
              onOpen={openIssue}
              onEditorial={openEditorial}
              reduceMotion={reduceMotion}
            />
          ) : null}
          {screen === "contents" ? (
            <ContentsScreen
              key="contents"
              issue={issue}
              stories={stories}
              totalReadingMinutes={totalReadingMinutes}
              language={language}
              onLanguageChange={setLanguage}
              text={text}
              onBack={() => setScreen("cover")}
              onRead={openStory}
              reduceMotion={reduceMotion}
            />
          ) : null}
          {screen === "story" ? (
            <StoryScreen
              key={`story-${story.id}`}
              story={story}
              issue={issue}
              stories={stories}
              language={language}
              onLanguageChange={setLanguage}
              text={text}
              onBack={() => setScreen("contents")}
              onNext={openNextStory}
              saved={savedStories.has(story.id)}
              onToggleSaved={toggleSaved}
              reduceMotion={reduceMotion}
            />
          ) : null}
          {screen === "editorial" ? (
            <EditorialScreen
              key="editorial"
              team={editorialTeam}
              language={language}
              onLanguageChange={setLanguage}
              onBack={() => setScreen("cover")}
              text={text}
              reduceMotion={reduceMotion}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </main>
  );
}
