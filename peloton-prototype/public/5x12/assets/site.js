(() => {
  const supportedLanguages = new Set(["pl", "en"]);
  const languageSections = [...document.querySelectorAll("[data-lang]")];
  const languageButtons = [...document.querySelectorAll("[data-lang-switch]")];
  const languageLinks = [...document.querySelectorAll("[data-language-link]")];
  const description = document.querySelector('meta[name="description"]');
  const openGraphTitle = document.querySelector('meta[property="og:title"]');
  const openGraphDescription = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');

  if (!languageSections.length || !languageButtons.length) {
    return;
  }

  const pageCopy = {
    pl: {
      title: document.body.dataset.titlePl,
      description: document.body.dataset.descriptionPl,
    },
    en: {
      title: document.body.dataset.titleEn,
      description: document.body.dataset.descriptionEn,
    },
  };

  function updateLinks(language) {
    languageLinks.forEach((link) => {
      const url = new URL(link.getAttribute("href"), window.location.href);
      if (language === "en") {
        url.searchParams.set("lang", "en");
      } else {
        url.searchParams.delete("lang");
      }
      link.href = `${url.pathname}${url.search}${url.hash}`;
    });
  }

  function updateAddress(language) {
    const url = new URL(window.location.href);
    if (language === "en") {
      url.searchParams.set("lang", "en");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function setLanguage(language, updateURL = false) {
    const nextLanguage = supportedLanguages.has(language) ? language : "pl";
    document.documentElement.lang = nextLanguage;

    languageSections.forEach((section) => {
      section.hidden = section.dataset.lang !== nextLanguage;
    });

    languageButtons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.langSwitch === nextLanguage),
      );
    });

    const localizedCopy = pageCopy[nextLanguage];
    if (localizedCopy.title) {
      document.title = localizedCopy.title;
      openGraphTitle?.setAttribute("content", localizedCopy.title);
      twitterTitle?.setAttribute("content", localizedCopy.title);
    }
    if (localizedCopy.description) {
      description?.setAttribute("content", localizedCopy.description);
      openGraphDescription?.setAttribute("content", localizedCopy.description);
      twitterDescription?.setAttribute("content", localizedCopy.description);
    }

    updateLinks(nextLanguage);
    if (updateURL) {
      updateAddress(nextLanguage);
    }
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.langSwitch, true);
    });
  });

  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  const browserLanguage = navigator.language.toLowerCase().startsWith("pl") ? "pl" : "en";
  setLanguage(supportedLanguages.has(queryLanguage) ? queryLanguage : browserLanguage);
})();
