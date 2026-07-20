import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookmarkSimple,
  Clock,
  Export,
  List,
  X,
} from "@phosphor-icons/react";
import { assetPath } from "./assetPath";
import { issue, stories, totalReadingMinutes } from "./content/stories";

const pageMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -7 },
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

function Masthead({ onMenu, menuButtonRef }) {
  return (
    <header className="masthead">
      <div className="masthead__wordmark" aria-label="Rowki — magazyn winylu i hi-fi">
        ROWKI
        <small>WINYL · HI-FI · MUZYKA</small>
      </div>
      <IconButton
        label="Otwórz menu"
        onClick={onMenu}
        className="masthead__menu"
        buttonRef={menuButtonRef}
      >
        <List size={31} weight="regular" aria-hidden="true" />
      </IconButton>
    </header>
  );
}

function CoverScreen({ onOpen, onMenu, reduceMotion, menuButtonRef }) {
  return (
    <motion.section
      className="cover-screen"
      {...pageMotion}
      transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <Masthead onMenu={onMenu} menuButtonRef={menuButtonRef} />

      <motion.button
        className="issue-cover"
        type="button"
        aria-label="Otwórz numer pierwszy: Igła wraca"
        onClick={onOpen}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        whileTap={reduceMotion ? undefined : { scale: 0.992 }}
      >
        <picture>
          <img
            src={assetPath("rowki-cover.png")}
            alt="Monumentalna czarna płyta, czerwony środek, srebrne ramię i kobaltowa fala dźwięku."
          />
        </picture>
        <span className="issue-cover__number">#01</span>
        <span className="issue-cover__date">LIPIEC 2026</span>
      </motion.button>

      <div className="issue-heading">
        <p className="issue-heading__eyebrow">NUMER 01 · ANALOG / NOWE OTWARCIE</p>
        <h1>IGŁA WRACA</h1>
        <span className="issue-heading__rule" aria-hidden="true" />
        <p className="issue-heading__dek">
          Technics, renesans czarnej płyty, progresja od Pink Floyd do TesseracT,
          finał Riverside i adresy, pod którymi Warszawa wciąż brzmi analogowo.
        </p>
      </div>

      <button className="primary-action" type="button" onClick={onOpen}>
        <span>OTWÓRZ NUMER</span>
        <ArrowRight size={27} weight="regular" aria-hidden="true" />
      </button>

      <aside className="cover-notes" aria-label="Zapowiedź numeru">
        <div className="cover-notes__meta">
          <span>ROWKI · #{issue.number}</span>
          <time dateTime="2026-07">{issue.date}</time>
        </div>
        <p className="cover-notes__label">W NUMERZE</p>
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
          {stories.length} MATERIAŁY · {totalReadingMinutes} MIN CZYTANIA
        </p>
      </aside>
    </motion.section>
  );
}

function ReaderBar({ onBack }) {
  return (
    <header className="reader-bar">
      <IconButton label="Wróć do okładki" onClick={onBack}>
        <ArrowLeft size={25} aria-hidden="true" />
      </IconButton>
      <span className="reader-bar__brand">ROWKI</span>
      <span className="reader-bar__issue">#01</span>
    </header>
  );
}

function ContentsScreen({ onBack, onRead, reduceMotion }) {
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
      <ReaderBar onBack={onBack} />

      <section className="contents-sheet" aria-labelledby="contents-title">
        <div className="contents-heading-block">
          <div className="contents-meta">
            <span>#{issue.number}</span>
            <time dateTime="2026-07">{issue.date}</time>
          </div>
          <h1 id="contents-title" ref={headingRef} tabIndex="-1">
            W NUMERZE
          </h1>
          <span className="contents-accent" aria-hidden="true" />
          <p className="contents-heading-block__dek">
            Pięć historii o tym, dlaczego muzyka znów ma ciężar, format i własne miejsce
            w pokoju — od precyzji napędu po ostatni rozdział Riverside.
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
                    {story.time} czytania
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
          <span>{stories.length} MATERIAŁY · {totalReadingMinutes} MIN</span>
          <span>02</span>
        </footer>
      </section>

      <button className="primary-action contents-action" type="button" onClick={() => onRead(stories[0])}>
        <span>CZYTAJ OD POCZĄTKU</span>
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

function SourceNotes({ sources }) {
  if (!sources?.length) return null;

  return (
    <aside className="source-notes" aria-labelledby="source-notes-title">
      <p>WARSZTAT REDAKCJI</p>
      <h2 id="source-notes-title">Źródła i dalsza lektura</h2>
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

function StoryToolbar({ story, onBack, onShare, saved, onToggleSaved }) {
  return (
    <header className="story-toolbar">
      <IconButton label="Wróć do spisu treści" onClick={onBack}>
        <ArrowLeft size={25} aria-hidden="true" />
      </IconButton>
      <div className="story-toolbar__identity">
        <span>ROWKI</span>
        <small>NUMER 01 · {Number(story.number)}/{stories.length}</small>
      </div>
      <div className="story-toolbar__actions">
        <IconButton label="Udostępnij materiał" onClick={onShare}>
          <Export size={23} aria-hidden="true" />
        </IconButton>
        <IconButton
          label={saved ? "Usuń z zapisanych" : "Zapisz materiał"}
          pressed={saved}
          onClick={onToggleSaved}
        >
          <BookmarkSimple size={23} weight={saved ? "fill" : "regular"} aria-hidden="true" />
        </IconButton>
      </div>
    </header>
  );
}

function StoryScreen({ story, onBack, onNext, saved, onToggleSaved, reduceMotion }) {
  const [shareMessage, setShareMessage] = useState("");
  const [progress, setProgress] = useState(4);
  const scrollerRef = useRef(null);
  const headingRef = useRef(null);
  const articleSections = story.sections ?? [
    {
      label: story.type,
      heading: "W rytmie drogi",
      paragraphs: story.paragraphs,
    },
  ];
  const storyMedia = story.media ?? [
    {
      afterSection: story.detailAfter ?? 3,
      src: story.detailImage ?? "rowki-cover.png",
      width: 1086,
      height: 1448,
      alt: story.detailAlt ?? "Detal ilustracyjny numeru Rowki.",
      caption: story.detailCaption ?? `Detal numeru #${issue.number}. Rytm drogi zapisany w obrazie.`,
      credit: "ILUSTRACJA — ROWKI STUDIO",
      layout: "standard",
    },
  ];

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
      title: `${story.title} — Rowki`,
      text: story.lead,
      url: window.location.href,
    };

    try {
      const isStandalone = window.matchMedia?.("(display-mode: standalone)").matches;
      if (isStandalone && navigator.share && (!navigator.canShare || navigator.canShare(shareData))) {
        await navigator.share(shareData);
        setShareMessage("Materiał udostępniony.");
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        setShareMessage("Link skopiowany.");
      } else {
        setShareMessage("Link jest gotowy do udostępnienia.");
      }
    } catch (error) {
      if (error?.name !== "AbortError") setShareMessage("Link jest gotowy do udostępnienia.");
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
        onBack={onBack}
        onShare={shareStory}
        saved={saved}
        onToggleSaved={onToggleSaved}
      />

      <div
        className="story-progress"
        role="progressbar"
        aria-label="Postęp czytania"
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
          <span>{story.time} czytania</span>
        </div>
        <h1 ref={headingRef} tabIndex="-1">
          {story.title.split(" ").map((word) => (
            <span key={word}>{word}</span>
          ))}
        </h1>
        <span className="article-opening__rule" aria-hidden="true" />
        <p className="article-opening__lead">{story.lead}</p>
        <p className="article-opening__byline">{story.byline ?? "TEKST — REDAKCJA ROWKI"}</p>
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
          <small>ILUSTRACJA — ROWKI STUDIO / OPENAI</small>
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
            <p>NOTATNIK ROWKÓW</p>
            <h2>{story.serviceBox.title}</h2>
            <ol>
              {story.serviceBox.items.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </aside>
        ) : null}

        <SourceNotes sources={story.sources} />

        <footer className="article-endnote">
          <span>ROWKI · NUMER {issue.number}</span>
          <span>{story.time} CZYTANIA</span>
          <p>Materiał powstał dla pierwszego numeru cyfrowego magazynu Rowki.</p>
        </footer>

        <button className="next-story" type="button" onClick={onNext}>
          <span>
            <small>NASTĘPNY MATERIAŁ</small>
            <strong>{stories[(stories.findIndex((item) => item.id === story.id) + 1) % stories.length].title}</strong>
          </span>
          <ArrowRight size={27} aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
}

function MenuSheet({ open, onClose, onOpenIssue, reduceMotion }) {
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
            aria-label="Zamknij menu"
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
            aria-label="Menu Rowki"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="menu-sheet__top">
              <span>ROWKI</span>
              <IconButton label="Zamknij menu" onClick={onClose} buttonRef={closeRef}>
                <X size={28} aria-hidden="true" />
              </IconButton>
            </div>
            <nav aria-label="Główna nawigacja">
              <button type="button" onClick={onOpenIssue}>Aktualny numer</button>
              <button type="button" disabled>Archiwum <small>Wkrótce</small></button>
              <button type="button" disabled>O Rowkach <small>Wkrótce</small></button>
            </nav>
            <p>PAPER — cyfrowe wydawnictwo</p>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export function App() {
  const reduceMotion = useReducedMotion();
  const [screen, setScreen] = useState("cover");
  const [story, setStory] = useState(stories[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [savedStories, setSavedStories] = useState(() => new Set());
  const menuButtonRef = useRef(null);

  const openIssue = () => {
    setMenuOpen(false);
    setScreen("contents");
  };

  const openStory = (nextStory) => {
    setStory(nextStory);
    setScreen("story");
  };

  const openNextStory = () => {
    const currentIndex = stories.findIndex((item) => item.id === story.id);
    setStory(stories[(currentIndex + 1) % stories.length]);
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
            />
          ) : null}
          {screen === "contents" ? (
            <ContentsScreen
              key="contents"
              onBack={() => setScreen("cover")}
              onRead={openStory}
              reduceMotion={reduceMotion}
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
            />
          ) : null}
        </AnimatePresence>

        <MenuSheet
          open={menuOpen}
          onClose={closeMenu}
          onOpenIssue={openIssue}
          reduceMotion={reduceMotion}
        />
      </div>
    </main>
  );
}
