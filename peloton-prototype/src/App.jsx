import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookmarkSimple,
  Clock,
  Export,
  List,
  X,
} from "@phosphor-icons/react";
import { assetPath } from "./assetPath";
import { cyclingAppsByLocale } from "./content/cycling-apps.js";
import {
  issue as polishIssue,
  upcomingIssue as polishUpcomingIssue,
  stories as polishStories,
  totalReadingMinutes as polishReadingMinutes,
} from "./content/stories";
import {
  issue as englishIssue,
  upcomingIssue as englishUpcomingIssue,
  stories as englishStories,
  totalReadingMinutes as englishReadingMinutes,
} from "./content/en/stories";
import { copyByLocale, getInitialLocale } from "./i18n";

const pageMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -7 },
};

const editions = {
  pl: {
    issue: polishIssue,
    upcomingIssue: polishUpcomingIssue,
    stories: polishStories,
    totalReadingMinutes: polishReadingMinutes,
  },
  en: {
    issue: englishIssue,
    upcomingIssue: englishUpcomingIssue,
    stories: englishStories,
    totalReadingMinutes: englishReadingMinutes,
  },
};

function IconButton({ label, children, onClick, pressed, className = "", buttonRef }) {
  return (
    <button
      ref={buttonRef}
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

function LanguageSwitch({ locale, onChange, copy, className = "" }) {
  return (
    <div className={`language-switch ${className}`} role="group" aria-label={copy.languageLabel}>
      {["pl", "en"].map((language) => (
        <button
          key={language}
          type="button"
          aria-pressed={locale === language}
          onClick={() => onChange(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Masthead({ onMenu, menuButtonRef, locale, onLocaleChange, copy }) {
  return (
    <header className="masthead">
      <div className="masthead__wordmark" aria-label="Peloton">
        PELOTON
      </div>
      <div className="masthead__actions">
        <LanguageSwitch locale={locale} onChange={onLocaleChange} copy={copy} />
        <IconButton
          label={copy.openMenu}
          onClick={onMenu}
          className="masthead__menu"
          buttonRef={menuButtonRef}
        >
          <List size={31} weight="regular" aria-hidden="true" />
        </IconButton>
      </div>
    </header>
  );
}

function UpcomingIssueTeaser({ issue, copy, reduceMotion }) {
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
      <span className="upcoming-issue__ghost" aria-hidden="true">02</span>
      <div className="upcoming-issue__copy">
        <div className="upcoming-issue__topline">
          <span>{copy.nextIssue}</span>
          <span>{copy.comingSoon}</span>
        </div>
        <p className="upcoming-issue__folio">
          <span>{copy.issueLabel} {issue.number}</span>
          <time dateTime={issue.dateTime}>{issue.date}</time>
        </p>
        <h2 id={headingId}>{issue.title}</h2>
        <span className="upcoming-issue__rule" aria-hidden="true" />
        <p className="upcoming-issue__dek">{issue.teaser}</p>
        <p className="upcoming-issue__artist">{copy.newIssueNewArtist}</p>
      </div>

      <figure className="upcoming-issue__figure">
        <div className="upcoming-issue__cover">
          <img
            src={assetPath(issue.cover)}
            alt={issue.coverAlt}
            width="1086"
            height="1448"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption>
          <span>{copy.coverPreview}</span>
          <span>PELOTON · #{issue.number}</span>
        </figcaption>
      </figure>
    </motion.section>
  );
}

function CyclingAppsColophon({ apps, copy }) {
  const headingId = "cycling-apps-title";

  return (
    <aside className="publisher-apps" aria-labelledby={headingId}>
      <header className="publisher-apps__header">
        <div>
          <p className="publisher-apps__kicker">{copy.appsKicker}</p>
          <h2 id={headingId}>{copy.appsHeading}</h2>
        </div>
        <p className="publisher-apps__dek">{copy.appsDek}</p>
      </header>

      <ol className="publisher-apps__list">
        {apps.map((app, index) => (
          <li className="publisher-apps__item" key={app.id}>
            <a
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${app.name} — ${copy.openInAppStore}; ${copy.opensNewTab}`}
            >
              <span className="publisher-apps__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <img
                src={assetPath(app.icon)}
                alt=""
                width="256"
                height="256"
                loading="lazy"
                decoding="async"
              />
              <span className="publisher-apps__copy">
                <small>{app.category}</small>
                <strong>{app.name}</strong>
                <span>{app.description}</span>
              </span>
              <span className="publisher-apps__store" aria-hidden="true">
                {copy.appStore}
                <ArrowUpRight size={15} weight="bold" />
              </span>
            </a>
          </li>
        ))}
      </ol>

      <footer className="publisher-apps__folio">
        <span>PELOTON · PAPER</span>
        <span>{copy.appsFolio}</span>
      </footer>
    </aside>
  );
}

function CoverScreen({
  onOpen,
  onMenu,
  reduceMotion,
  menuButtonRef,
  locale,
  onLocaleChange,
  copy,
  issue,
  upcomingIssue,
  cyclingApps,
  stories,
  totalReadingMinutes,
}) {
  const leadStory = stories[0];

  return (
    <motion.section
      className="cover-screen"
      {...pageMotion}
      transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="cover-screen__current">
        <Masthead
          onMenu={onMenu}
          menuButtonRef={menuButtonRef}
          locale={locale}
          onLocaleChange={onLocaleChange}
          copy={copy}
        />

        <motion.button
          className="issue-cover"
          type="button"
          aria-label={copy.openIssueAria}
          onClick={onOpen}
          style={{ transformPerspective: 1200 }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduceMotion ? undefined : { y: -4, rotateX: 0.45, rotateY: -0.45, scale: 1.003 }}
          whileTap={reduceMotion ? undefined : { y: 0, rotateX: 0, rotateY: 0, scale: 0.992 }}
        >
          <picture>
            <source srcSet={assetPath("peloton-cover-art.webp")} type="image/webp" />
            <img
              className="issue-cover__art"
              src={assetPath("peloton-cover-art.png")}
              alt={copy.coverAlt}
            />
          </picture>
          <span className="issue-cover__title" aria-hidden="true">PELOTON</span>
          <span className="issue-cover__number">#{issue.number}</span>
          <span className="issue-cover__date">{issue.date}</span>
        </motion.button>

        <div className="issue-heading">
          <p className="issue-heading__eyebrow">
            {copy.issueLabel} {issue.number} · {leadStory.type}
          </p>
          <h1>{leadStory.title}</h1>
          <span className="issue-heading__rule" aria-hidden="true" />
          <p className="issue-heading__dek">{copy.coverDek}</p>
        </div>

        <button className="primary-action" type="button" onClick={onOpen}>
          <span>{copy.openIssue}</span>
          <ArrowRight size={27} weight="regular" aria-hidden="true" />
        </button>

        <aside className="cover-notes" aria-label={copy.coverNotesLabel}>
          <div className="cover-notes__meta">
            <span>PELOTON · #{issue.number}</span>
            <time dateTime="2026-07">{issue.date}</time>
          </div>
          <p className="cover-notes__label">{copy.inThisIssue}</p>
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
            {stories.length} {copy.stories} · {totalReadingMinutes} {copy.minutesReading}
          </p>
        </aside>
      </div>

      <UpcomingIssueTeaser issue={upcomingIssue} copy={copy} reduceMotion={reduceMotion} />
      <CyclingAppsColophon apps={cyclingApps} copy={copy} />
    </motion.section>
  );
}

function ReaderBar({ onBack, locale, onLocaleChange, copy, issue }) {
  return (
    <header className="reader-bar">
      <IconButton label={copy.backToCover} onClick={onBack}>
        <ArrowLeft size={25} aria-hidden="true" />
      </IconButton>
      <span className="reader-bar__brand">PELOTON</span>
      <div className="reader-bar__tools">
        <span className="reader-bar__issue">#{issue.number}</span>
        <LanguageSwitch
          locale={locale}
          onChange={onLocaleChange}
          copy={copy}
          className="language-switch--compact"
        />
      </div>
    </header>
  );
}

function ContentsScreen({
  onBack,
  onRead,
  reduceMotion,
  locale,
  onLocaleChange,
  copy,
  issue,
  stories,
  totalReadingMinutes,
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
        onBack={onBack}
        locale={locale}
        onLocaleChange={onLocaleChange}
        copy={copy}
        issue={issue}
      />

      <section className="contents-sheet" aria-labelledby="contents-title">
        <div className="contents-heading-block">
          <div className="contents-meta">
            <span>#{issue.number}</span>
            <time dateTime="2026-07">{issue.date}</time>
          </div>
          <h1 id="contents-title" ref={headingRef} tabIndex="-1">
            {copy.inThisIssue}
          </h1>
          <span className="contents-accent" aria-hidden="true" />
          <p className="contents-heading-block__dek">{copy.contentsDek}</p>
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
                    {story.time} {copy.reading}
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
                      src={assetPath(story.thumb ?? story.hero ?? "peloton-cover-art.png")}
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
          <span>{stories.length} {copy.stories} · {totalReadingMinutes} MIN</span>
          <span>02</span>
        </footer>
      </section>

      <button className="primary-action contents-action" type="button" onClick={() => onRead(stories[0])}>
        <span>{copy.readFromStart}</span>
        <ArrowRight size={25} aria-hidden="true" />
      </button>
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
          style={{ objectPosition: item.objectPosition }}
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

function SourceNotes({ sources, copy }) {
  if (!sources?.length) return null;

  return (
    <aside className="source-notes" aria-labelledby="source-notes-title">
      <p>{copy.sourceKicker}</p>
      <h2 id="source-notes-title">{copy.sourceTitle}</h2>
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

function EditorialDebate({ debate, copy }) {
  if (!debate) return null;

  return (
    <aside className="editorial-debate" aria-label={`${debate.kicker}: ${debate.question}`}>
      <div className="editorial-debate__masthead">
        <span>{debate.kicker}</span>
        <span>{copy.debateLabel}</span>
      </div>
      <h2>{debate.question}</h2>
      <div className="editorial-debate__positions">
        {debate.positions.map((position) => (
          <section key={position.label}>
            <p>{position.label}</p>
            <strong>{position.title}</strong>
            <span>{position.text}</span>
          </section>
        ))}
      </div>
      <div className="editorial-debate__verdict">
        <span>{copy.verdictLabel}</span>
        <p>{debate.verdict}</p>
      </div>
    </aside>
  );
}

function StoryToolbar({
  story,
  onBack,
  onShare,
  saved,
  onToggleSaved,
  locale,
  onLocaleChange,
  copy,
  issue,
  stories,
}) {
  return (
    <header className="story-toolbar">
      <IconButton label={copy.backToContents} onClick={onBack}>
        <ArrowLeft size={25} aria-hidden="true" />
      </IconButton>
      <div className="story-toolbar__identity">
        <span>PELOTON</span>
        <small>{copy.issueShort} {issue.number} · {Number(story.number)}/{stories.length}</small>
      </div>
      <div className="story-toolbar__actions">
        <LanguageSwitch
          locale={locale}
          onChange={onLocaleChange}
          copy={copy}
          className="language-switch--compact"
        />
        <IconButton label={copy.share} onClick={onShare}>
          <Export size={23} aria-hidden="true" />
        </IconButton>
        <IconButton
          label={saved ? copy.unsave : copy.save}
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
  onBack,
  onNext,
  saved,
  onToggleSaved,
  reduceMotion,
  locale,
  onLocaleChange,
  copy,
  issue,
  stories,
}) {
  const [shareMessage, setShareMessage] = useState("");
  const [progress, setProgress] = useState(4);
  const scrollerRef = useRef(null);
  const headingRef = useRef(null);
  const articleSections = story.sections ?? [
    {
      label: story.type,
      heading: copy.defaultSection,
      paragraphs: story.paragraphs,
    },
  ];
  const storyMedia = story.media ?? [];

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
  }, [story.id]);

  useEffect(() => {
    if (!shareMessage) return undefined;
    const timeout = window.setTimeout(() => setShareMessage(""), 2200);
    return () => window.clearTimeout(timeout);
  }, [shareMessage]);

  const shareStory = async () => {
    const shareData = {
      title: `${story.title} — Peloton`,
      text: story.lead,
      url: window.location.href,
    };

    try {
      const isStandalone = window.matchMedia?.("(display-mode: standalone)").matches;
      if (isStandalone && navigator.share && (!navigator.canShare || navigator.canShare(shareData))) {
        await navigator.share(shareData);
        setShareMessage(copy.shared);
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        setShareMessage(copy.copied);
      } else {
        setShareMessage(copy.shareReady);
      }
    } catch (error) {
      if (error?.name !== "AbortError") setShareMessage(copy.shareReady);
    }
  };

  return (
    <motion.article
      ref={scrollerRef}
      className={`story-screen story-screen--${locale}`}
      {...pageMotion}
      transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <StoryToolbar
        story={story}
        onBack={onBack}
        onShare={shareStory}
        saved={saved}
        onToggleSaved={onToggleSaved}
        locale={locale}
        onLocaleChange={onLocaleChange}
        copy={copy}
        issue={issue}
        stories={stories}
      />

      <div
        className="story-progress"
        role="progressbar"
        aria-label={copy.readingProgress}
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
          <span>{story.time} {copy.reading}</span>
        </div>
        <h1 ref={headingRef} tabIndex="-1">
          {story.title.split(" ").map((word) => (
            <span key={word}>{word}</span>
          ))}
        </h1>
        <span className="article-opening__rule" aria-hidden="true" />
        <p className="article-opening__lead">{story.lead}</p>
        <p className="article-opening__byline">{story.byline ?? copy.defaultByline}</p>
      </header>

      <figure className="article-hero">
        <picture>
          {story.heroWebp ? <source srcSet={assetPath(story.heroWebp)} type="image/webp" /> : null}
          <img
            src={assetPath(story.hero)}
            alt={story.alt}
            decoding="async"
            fetchPriority="high"
            style={{ objectPosition: story.heroPosition }}
          />
        </picture>
        <figcaption>
          <span>{story.caption}</span>
          <small>{copy.illustrationCredit}</small>
        </figcaption>
      </figure>

      <div className="story-body">
        {articleSections.map((section, sectionIndex) => (
          <div className="story-section-group" key={section.heading}>
            <section
              className={`story-section${section.variant ? ` story-section--${section.variant}` : ""}`}
              aria-labelledby={`${story.id}-section-${sectionIndex}`}
            >
              <p className="story-section__label">{section.label ?? `${story.number}.${sectionIndex + 1}`}</p>
              <h2 id={`${story.id}-section-${sectionIndex}`}>{section.heading}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  className={sectionIndex === 0 && paragraphIndex === 0 ? "story-body__dropcap" : undefined}
                  key={`${section.heading}-${paragraphIndex}`}
                >
                  {paragraph}
                </p>
              ))}
            </section>

            {sectionIndex === (story.quoteAfter ?? 1) ? (
              <aside className="story-thesis" aria-label={copy.thesisAria}>
                <span>{copy.thesisLabel}</span>
                <p>{story.quote}</p>
              </aside>
            ) : null}

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

            {sectionIndex === story.editorialDebate?.afterSection ? (
              <EditorialDebate debate={story.editorialDebate} copy={copy} />
            ) : null}
          </div>
        ))}

        {story.serviceBox ? (
          <aside className="service-box" aria-label={story.serviceBox.title}>
            <p>{copy.notebookLabel}</p>
            <h2>{story.serviceBox.title}</h2>
            <ol>
              {story.serviceBox.items.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </aside>
        ) : null}

        <SourceNotes sources={story.sources} copy={copy} />

        <footer className="article-endnote">
          <span>PELOTON · {copy.issueShort} {issue.number}</span>
          <span>{story.time} {copy.reading.toUpperCase()}</span>
          <p>{copy.endnote}</p>
        </footer>

        <button className="next-story" type="button" onClick={onNext}>
          <span>
            <small>{copy.nextStory}</small>
            <strong>{stories[(stories.findIndex((item) => item.id === story.id) + 1) % stories.length].title}</strong>
          </span>
          <ArrowRight size={27} aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
}

function MenuSheet({ open, onClose, onOpenIssue, reduceMotion, copy }) {
  const sheetRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const controls = [...sheetRef.current.querySelectorAll("button:not([disabled])")];
      if (!controls.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            className="menu-backdrop"
            type="button"
            aria-label={copy.closeMenu}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            ref={sheetRef}
            className="menu-sheet"
            role="dialog"
            aria-modal="true"
            aria-label={copy.menuLabel}
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="menu-sheet__top">
              <span>PELOTON</span>
              <IconButton label={copy.closeMenu} onClick={onClose} buttonRef={closeRef}>
                <X size={28} aria-hidden="true" />
              </IconButton>
            </div>
            <nav aria-label={copy.mainNavigation}>
              <button type="button" onClick={onOpenIssue}>{copy.currentIssue}</button>
              <button type="button" disabled>{copy.archive} <small>{copy.soon}</small></button>
              <button type="button" disabled>{copy.about} <small>{copy.soon}</small></button>
            </nav>
            <p>{copy.publisher}</p>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export function App() {
  const reduceMotion = useReducedMotion();
  const [locale, setLocale] = useState(getInitialLocale);
  const [screen, setScreen] = useState("cover");
  const [storyId, setStoryId] = useState(polishStories[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const [savedStories, setSavedStories] = useState(() => new Set());
  const menuButtonRef = useRef(null);
  const copy = copyByLocale[locale];
  const { issue, upcomingIssue, stories, totalReadingMinutes } = editions[locale];
  const cyclingApps = cyclingAppsByLocale[locale];
  const story = stories.find((item) => item.id === storyId) ?? stories[0];

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang;
    document.title = `Peloton — ${copy.issueLabel} ${issue.number}`;
    try {
      window.localStorage.setItem("peloton-locale", locale);
    } catch {
      // The edition still works when storage is unavailable (for example in private browsing).
    }
  }, [copy.htmlLang, copy.issueLabel, issue.number, locale]);

  const openIssue = () => {
    setMenuOpen(false);
    setScreen("contents");
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

  const closeMenu = () => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  return (
    <main className="prototype-stage">
      <div className="mobile-prototype publication-shell">
        <AnimatePresence mode="wait" initial={false}>
          {screen === "cover" ? (
            <CoverScreen
              key="cover"
              onOpen={openIssue}
              onMenu={() => setMenuOpen(true)}
              reduceMotion={reduceMotion}
              menuButtonRef={menuButtonRef}
              locale={locale}
              onLocaleChange={setLocale}
              copy={copy}
              issue={issue}
              upcomingIssue={upcomingIssue}
              cyclingApps={cyclingApps}
              stories={stories}
              totalReadingMinutes={totalReadingMinutes}
            />
          ) : null}
          {screen === "contents" ? (
            <ContentsScreen
              key="contents"
              onBack={() => setScreen("cover")}
              onRead={openStory}
              reduceMotion={reduceMotion}
              locale={locale}
              onLocaleChange={setLocale}
              copy={copy}
              issue={issue}
              stories={stories}
              totalReadingMinutes={totalReadingMinutes}
            />
          ) : null}
          {screen === "story" ? (
            <StoryScreen
              key={`story-${story.id}`}
              story={story}
              onBack={() => setScreen("contents")}
              onNext={openNextStory}
              saved={savedStories.has(story.id)}
              onToggleSaved={toggleSaved}
              reduceMotion={reduceMotion}
              locale={locale}
              onLocaleChange={setLocale}
              copy={copy}
              issue={issue}
              stories={stories}
            />
          ) : null}
        </AnimatePresence>

        <MenuSheet
          open={menuOpen}
          onClose={closeMenu}
          onOpenIssue={openIssue}
          reduceMotion={reduceMotion}
          copy={copy}
        />
      </div>
    </main>
  );
}
