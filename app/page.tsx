"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./i18n/LanguageContext";

const muxStream = (playbackId: string) =>
  `https://stream.mux.com/${playbackId}.m3u8?rendition_order=desc&min_resolution=1080p`;

type FeatureTile = {
  label: string;
  title: string;
  className: string;
  image?: string;
  poster?: string;
  stream?: string;
};

const useCases = [
  {
    number: "01",
    title: "Start your day two steps ahead",
    description:
      "Before the day kicks in, Dia's Morning Brief lays it all out (calendar, inbox, key links) so you know exactly what you're walking into.",
    image: "/dia-assets/morning-brief.png",
  },
  {
    number: "02",
    title: "Synthesis you'll actually use",
    description:
      "Instead of bouncing between tools, just ask Dia. It gathers what's scattered across your tools (Slack, Notion, Calendar, and many more!) and turns it into a report worth sharing.",
    image: "/dia-assets/synthesis.png",
  },
  {
    number: "03",
    title: "Find the answer without hunting it down",
    description:
      "Ask once. Dia digs into your full context, across GSuite, Slack, tabs, and more, and answers like someone who's seen every thread.",
    image: "/dia-assets/answer.png",
  },
];

const featureTiles: FeatureTile[] = [
  {
    label: "Decks",
    title:
      "Ask Dia for a deck and your scattered context becomes real slides -- headers, layout, and flow you can present without a redesign.",
    image: "/dia-assets/decks.png",
    className: "feature-wide",
  },
  {
    label: "Live Work",
    title:
      "Dia pulls together the places where work is actually happening (like GitHub and Notion) in your tab bar. Click once and land directly in the right PR, spec, or draft.",
    poster:
      "https://image.mux.com/I88MBGecyQVKRzo6NFuq02xLgXhqBB00enYJ2O02AGKYKs/thumbnail.webp?width=960&fit_mode=preserve",
    stream: muxStream("I88MBGecyQVKRzo6NFuq02xLgXhqBB00enYJ2O02AGKYKs"),
    className: "feature-tall",
  },
  {
    label: "Better Meetings",
    title:
      "Every call starts with the right meeting page, agenda, notes, and related docs open, with a gentle countdown so you're on time. All you have to do is show up.",
    poster:
      "https://image.mux.com/E5RJTOXaiqwYHPNO8IFYspUiOrViAiq9XCWbkz1D9j4/thumbnail.webp?width=960&fit_mode=preserve",
    stream: muxStream("E5RJTOXaiqwYHPNO8IFYspUiOrViAiq9XCWbkz1D9j4"),
    className: "feature-tall",
  },
  {
    label: "Profiles",
    title:
      "Create clean lines between work, freelance, and personal life, with separate tabs, logins, and AI. Context switch between them in just a swipe.",
    image: "/dia-assets/profiles.png",
    className: "feature-wide",
  },
  {
    label: "Splits",
    title:
      "See a meeting on one side and a doc on the other without juggling windows. Dia remembers your layout, so your favorite setup for recurring 1:1s or focus time is one click away.",
    image: "/dia-assets/splits.png",
    className: "feature-wide",
  },
  {
    label: "Organized Tabs",
    title:
      "Keep your workspace tidy by grouping related tabs with appropriate naming, so you see Design Review or Q2 Planning instead of a long strip of unnamed pages.",
    poster:
      "https://image.mux.com/zqOwkkAS9zCeLJq016siCak1olCG0202BGJXtLq2xxNEHI/thumbnail.webp?width=960&fit_mode=preserve",
    stream: muxStream("zqOwkkAS9zCeLJq016siCak1olCG0202BGJXtLq2xxNEHI"),
    className: "feature-tall feature-tab-organize",
  },
];

const footerGroups = [
  ["PRODUCT", "FOR WORK", "RELEASE NOTES", "WINDOWS", "STUDENTS", "REPORTS"],
  ["RESOURCES", "HELP", "STATUS", "PRIVACY", "TERMS OF USE", "SECURITY", "TRUST CENTER"],
  ["COMPANY", "ABOUT US", "CAREERS", "NEWSLETTER", "EARLY BIRDS PROGRAM"],
  ["CONNECT", "X", "LINKEDIN", "INSTAGRAM"],
];

const privacyDefaults = [
  ["Block trackers", true],
  ["Personalize new chats", false],
  ["Memory", true],
  ["Block ads", true],
  ["Share content data", false],
] as const;

function DiaMark() {
  return (
    <svg
      className="dia-mark"
      viewBox="0 0 96 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M84.5589 8.27148C87.6172 8.27155 90.5536 10.1824 90.5159 14.3418C90.4783 18.0023 90.4783 20.8257 90.5159 24.3545C90.5161 25.8787 91.6166 26.3771 92.8587 25.502C93.6115 25.0692 94.6562 25.634 94.0354 26.876C93.4802 27.977 92.1437 29.2753 90.1487 29.2754C88.6807 29.2754 87.6834 28.5698 86.9212 27.4688C86.4977 26.8947 85.9981 26.8197 85.2923 27.3467C83.7962 28.4852 82.526 29.2753 80.1644 29.2754C77.106 29.2754 75.2513 27.789 75.2513 25.0977C75.2513 22.538 76.9647 21.2868 80.4466 19.9316C82.7145 19.0565 83.7965 18.6133 85.2269 18.0957C86.2712 17.7193 86.5442 17.1082 86.5442 16.1016V14.3604C86.5442 12.3371 85.6786 10.7375 82.9026 10.7656C81.3029 10.8033 79.9284 11.3582 79.9095 12.7227C79.9095 13.1273 79.9476 13.5132 79.9759 14.0684C80.0606 17.6255 75.5618 17.6914 75.5618 14.8965C75.5619 12.0263 80.3995 8.27148 84.5589 8.27148ZM45.9729 1.10059C56.2961 0.884147 63.42 6.02251 63.4202 15.0752C63.4202 23.7705 56.8325 28.9933 46.7444 28.7393C42.1616 28.6546 38.9241 28.7021 36.4397 28.7773C35.1132 28.7958 34.6524 27.0456 35.9886 26.5469C38.2752 25.8035 38.4542 25.455 38.5013 21.7285C38.5389 17.428 38.5766 13.0896 38.5296 8.09277C38.4919 4.38522 38.4065 4.29073 35.9222 3.27441C34.6712 2.70024 34.9816 1.0445 36.5149 1.10059C38.8582 1.18528 42.1335 1.18528 45.9729 1.10059ZM17.2728 1.15723C17.669 1.15718 18.0688 1.17058 18.471 1.19824C26.8688 1.77643 33.6467 8.61829 34.1614 17.0225C34.399 20.9361 33.2397 24.5856 31.1116 27.749C30.4573 28.7217 29.1618 28.9441 28.0872 28.4756C24.7595 27.0247 21.0161 25.8716 17.2728 25.9209C13.5294 25.8716 9.78597 27.0248 6.4583 28.4756C5.38368 28.9441 4.08825 28.7217 3.43388 27.749C1.30579 24.5856 0.146547 20.9361 0.38408 17.0225C0.898834 8.61824 7.6766 1.77635 16.0745 1.19824C16.4767 1.17058 16.8764 1.15718 17.2728 1.15723ZM69.389 8.48828C70.8194 7.81073 71.5071 8.4415 71.5071 9.71191C71.4695 14.3135 71.4695 18.1059 71.5071 22.0488C71.5918 25.728 71.629 25.9918 73.7366 26.5752C75.0728 26.9892 74.7063 28.683 73.3421 28.7021C70.8201 28.6927 68.2503 28.6927 65.6624 28.7021C64.3453 28.683 64.0162 26.9992 65.2767 26.585C67.2811 26.0297 67.4793 25.7564 67.5452 22.0488C67.5829 20.1667 67.5829 18.1618 67.5452 16.1104C67.517 13.6356 67.0926 13.2594 65.427 12.4219C64.411 11.8666 64.4962 10.8497 65.4466 10.3887C66.7732 9.7583 67.8366 9.25037 69.389 8.48828ZM86.5345 21.2578C86.5344 19.9971 85.9983 19.743 84.8597 20.1006C80.4275 21.5216 79.806 23.0086 79.806 24.1943C79.806 25.6529 80.6538 26.4531 82.2347 26.4531C84.954 26.4529 86.5343 24.1473 86.5345 22.3594V21.2578ZM45.9261 3.30273C42.9337 3.28391 42.7259 3.53824 42.7259 5.34473C42.6882 11.6309 42.7263 16.2049 42.764 21.7383C42.8016 25.4083 43.5829 26.4524 47.8929 26.4336C54.0472 26.4147 58.4136 22.2647 58.4983 14.9434C58.5734 6.79424 53.4448 3.33101 45.9261 3.30273ZM69.1731 0C70.8009 0.000140931 72.1182 1.22309 72.1185 2.72852C72.1185 4.35644 70.8104 5.69321 69.1731 5.69336C67.5639 5.69336 66.2464 4.4414 66.2464 2.88867C66.2465 1.29839 67.564 0 69.1731 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DownloadIcon() {
  return <span className="download-icon" aria-hidden="true" />;
}

type MuxVideoProps = {
  source: string;
  poster: string;
  className: string;
  label: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
};

function MuxVideo({
  source,
  poster,
  className,
  label,
  autoPlay = false,
  controls = false,
  loop = false,
  muted = false,
}: MuxVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let active = true;
    let player: { destroy: () => void } | undefined;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
      if (autoPlay) {
        void video.play().catch(() => undefined);
      }
      return () => {
        video.removeAttribute("src");
        video.load();
      };
    }

    void import("hls.js").then(({ default: Hls }) => {
      if (!active || !Hls.isSupported()) return;

      const hls = new Hls({ enableWorker: true });
      player = hls;
      hls.loadSource(source);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) void video.play().catch(() => undefined);
      });
    });

    return () => {
      active = false;
      player?.destroy();
    };
  }, [autoPlay, source]);

  return (
    <video
      ref={videoRef}
      className={className}
      aria-label={label}
      autoPlay={autoPlay}
      controls={controls}
      loop={loop}
      muted={muted}
      playsInline
      poster={poster}
      preload="metadata"
    />
  );
}

export default function Home() {
  const { t, locale, setLocale } = useLanguage();
  const [activeCase, setActiveCase] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filmOpen, setFilmOpen] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);
  const caseProjectRefs = useRef<Array<HTMLElement | null>>([]);
  const pendingCaseRef = useRef<number | null>(null);
  const caseNavigationTimerRef = useRef<number | undefined>(undefined);
  const [privacyStates, setPrivacyStates] = useState(
    privacyDefaults.map(([, enabled]) => enabled),
  );

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setFilmOpen(false);
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    if (!filmOpen && !menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [filmOpen, menuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 851px)");
    let observer: IntersectionObserver | undefined;

    function observeProjects() {
      observer?.disconnect();
      if (!desktopQuery.matches) return;

      observer = new IntersectionObserver(
        (entries) => {
          const pendingCase = pendingCaseRef.current;

          if (pendingCase !== null) {
            const targetReached = entries.some(
              (entry) =>
                Number((entry.target as HTMLElement).dataset.caseIndex) === pendingCase &&
                entry.intersectionRatio >= 0.8,
            );

            if (!targetReached) return;

            pendingCaseRef.current = null;
            window.clearTimeout(caseNavigationTimerRef.current);
          }

          const foremostProject = entries
            .filter((entry) => entry.intersectionRatio >= 0.8)
            .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

          if (foremostProject) {
            setActiveCase(Number((foremostProject.target as HTMLElement).dataset.caseIndex));
          }
        },
        { threshold: 0.8 },
      );

      caseProjectRefs.current.forEach((project) => {
        if (project) observer?.observe(project);
      });
    }

    observeProjects();
    desktopQuery.addEventListener("change", observeProjects);

    return () => {
      observer?.disconnect();
      window.clearTimeout(caseNavigationTimerRef.current);
      desktopQuery.removeEventListener("change", observeProjects);
    };
  }, []);

  function showDownloadNotice() {
    setDownloadNotice(true);
    setMenuOpen(false);
  }

  function chooseCase(index: number) {
    pendingCaseRef.current = index;
    window.clearTimeout(caseNavigationTimerRef.current);
    setActiveCase(index);
    caseProjectRefs.current[index]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });

    caseNavigationTimerRef.current = window.setTimeout(() => {
      pendingCaseRef.current = null;
    }, 1500);
  }

  function toggleLanguage() {
    setLocale(locale === "en" ? "zh" : "en");
  }

  return (
    <main>
      <header className="site-header">
        <div className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          <a className="wordmark" href="#top" aria-label="Dia">
            <DiaMark />
          </a>

          <nav className="desktop-links" aria-label="Main navigation">
            <a href="#features">{t.nav.features}</a>
            <a href="#privacy">{t.nav.security}</a>
            <a href="#reports">{t.nav.reports}</a>
          </nav>

          <button
            className="lang-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label="Switch language"
          >
            {t.language.switchTo}
          </button>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <nav id="mobile-navigation-menu" className="mobile-menu" aria-label="Main navigation">
          <div className="mobile-menu-links">
            <a href="#features" onClick={() => setMenuOpen(false)}>{t.nav.features}</a>
            <a href="#privacy" onClick={() => setMenuOpen(false)}>{t.nav.security}</a>
            <a href="#reports" onClick={() => setMenuOpen(false)}>{t.nav.reports}</a>
          </div>
          <div className="mobile-menu-actions">
            <button className="button button-dark" type="button" onClick={showDownloadNotice}>{t.mobile.download}</button>
            <button className="button button-soft with-play" type="button" onClick={() => { setFilmOpen(true); setMenuOpen(false); }}>
              <span className="play-icon" aria-hidden="true" />
              {t.mobile.watchTrailer}
            </button>
          </div>
        </nav>
      </header>

      <section className="hero" id="top">
        <img className="hero-scream" src="/dia-assets/alex-scream.webp" alt="" aria-hidden="true" />
        <div className="hero-content">
          <h1 aria-label="Dia">
            <span className="hero-word" aria-hidden="true">
              <span className="hero-glyph hero-glyph-d">D</span>
              <span className="hero-glyph hero-glyph-i">i</span>
              <span className="hero-glyph hero-glyph-a">a</span>
            </span>
          </h1>
          <p className="hero-tagline">{t.hero.tagline}</p>
          <button className="hero-download" type="button" onClick={showDownloadNotice}>
            {t.hero.download} <DownloadIcon />
          </button>
          <p className="trial-note">{t.hero.trialNote}</p>
        </div>
        <button className="watch-button" type="button" onClick={() => setFilmOpen(true)}>
          <span className="watch-play" aria-hidden="true"><span className="play-icon" /></span>
          {t.hero.watchScream}
        </button>
      </section>

      <section className="reads-section" id="reports">
        <div className="section-intro">
          <h2>{t.reads.title}</h2>
        </div>
        <div className="read-tabs-shell">
          <div className="case-picker">
            <nav className="case-picker-sticky" aria-label="Dia use cases">
              {useCases.map((item, index) => (
                <button
                  className={`case-picker-button ${activeCase === index ? "is-active" : ""}`}
                  key={item.number}
                  type="button"
                  onClick={() => chooseCase(index)}
                  aria-pressed={activeCase === index}
                >
                  <span className="case-number">{item.number}</span>
                  <span className="case-title">{item.title}</span>
                  <span className={`case-disclosure ${activeCase === index ? "is-expanded" : ""}`}>
                    <span className="case-disclosure-inner">
                      <span className="case-description">{item.description}</span>
                    </span>
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="case-project-list">
            {useCases.map((item, index) => (
              <article
                className="case-project"
                data-case-index={index}
                key={item.number}
                ref={(element) => {
                  caseProjectRefs.current[index] = element;
                }}
              >
                <div className="case-project-frame">
                  <img src={item.image} alt="Dia Browser interface" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mobile-case-list">
          {useCases.map((item) => (
            <article className="mobile-case" key={item.number}>
              <img src={item.image} alt="Dia Browser interface" />
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="features">
        <div className="section-intro work-intro">
          <h2>{t.work.title}</h2>
        </div>

        <div className="feature-grid">
          {featureTiles.map((feature) => (
            <article className={`work-tile ${feature.className}`} key={feature.label}>
              <div className="tile-copy">
                <span className="feature-label">{feature.label}</span>
                <h3>{feature.title}</h3>
              </div>
              <div className="tile-media">
                {feature.stream && feature.poster ? (
                  <MuxVideo
                    source={feature.stream}
                    poster={feature.poster}
                    className="feature-video"
                    label={`${feature.label} in Dia`}
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img src={feature.image} alt={`${feature.label} in Dia`} />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-section" id="privacy">
        <div className="privacy-panel">
          <svg
            className="privacy-border"
            aria-hidden="true"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="calc(100% - 1px)"
              height="calc(100% - 1px)"
              rx="12"
              ry="12"
              stroke="rgba(0, 0, 0, 0.6)"
              strokeWidth="1"
              strokeDasharray="1 6"
              strokeDashoffset="3.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <svg
            className="privacy-lock-mark"
            aria-hidden="true"
            width="78"
            height="45"
            viewBox="0 0 78 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="78" height="44" transform="translate(0 0.903809)" fill="#F8F8F8" />
            <path
              d="M29.5273 40.8491C28.4596 40.8491 27.5807 40.4845 26.8906 39.7554C26.2135 39.0392 25.875 38.1147 25.875 36.9819V22.0601C25.875 20.9272 26.2135 20.0028 26.8906 19.2866C27.5807 18.5705 28.4596 18.2124 29.5273 18.2124H48.4531C49.5078 18.2124 50.3802 18.5705 51.0703 19.2866C51.7604 20.0028 52.1055 20.9272 52.1055 22.0601V36.9819C52.1055 38.1147 51.7604 39.0392 51.0703 39.7554C50.3802 40.4845 49.5078 40.8491 48.4531 40.8491H29.5273ZM29.4297 39.853H48.5508C49.2799 39.853 49.8789 39.5861 50.3477 39.0522C50.8294 38.5314 51.0703 37.8608 51.0703 37.0405V22.021C51.0703 21.1877 50.8294 20.5041 50.3477 19.9702C49.8789 19.4364 49.2799 19.1694 48.5508 19.1694H29.4297C28.6875 19.1694 28.0755 19.4364 27.5938 19.9702C27.125 20.5041 26.8906 21.1877 26.8906 22.021V37.0405C26.8906 37.8608 27.125 38.5314 27.5938 39.0522C28.0755 39.5861 28.6875 39.853 29.4297 39.853ZM29.5078 18.6421V13.8765C29.5078 11.8973 29.9049 10.1525 30.6992 8.64209C31.4935 7.11865 32.6003 5.92725 34.0195 5.06787C35.4388 4.19548 37.0924 3.75928 38.9805 3.75928C40.8815 3.75928 42.5417 4.19548 43.9609 5.06787C45.3802 5.92725 46.4805 7.11865 47.2617 8.64209C48.056 10.1525 48.4531 11.8973 48.4531 13.8765V18.6421H47.4375V13.9546C47.4375 12.1447 47.0794 10.5496 46.3633 9.16943C45.6602 7.7762 44.6771 6.68896 43.4141 5.90771C42.151 5.12646 40.6732 4.73584 38.9805 4.73584C37.2878 4.73584 35.8099 5.12646 34.5469 5.90771C33.2839 6.68896 32.3008 7.7762 31.5977 9.16943C30.8945 10.5496 30.543 12.1447 30.543 13.9546V18.6421H29.5078Z"
              fill="black"
            />
          </svg>
          <h2>{t.privacy.title}</h2>
          <div className="privacy-marquee" aria-label="Privacy controls preview">
            <div className="privacy-track">
              {[...privacyDefaults, ...privacyDefaults].map(([name], index) => {
                const stateIndex = index % privacyDefaults.length;
                const enabled = privacyStates[stateIndex];
                return (
                  <button
                    className="privacy-chip"
                    data-on={enabled}
                    key={`${name}-${index}`}
                    type="button"
                    aria-pressed={enabled}
                    aria-label={`${name} demo toggle - currently ${enabled ? "on" : "off"}`}
                    onClick={() => setPrivacyStates((states) => states.map((state, position) => position === stateIndex ? !state : state))}
                  >
                    <span className="chip-dot" aria-hidden="true" />
                    {name}
                    <b>{enabled ? "On" : "Off"}</b>
                  </button>
                );
              })}
            </div>
          </div>
          <p>{t.privacy.description1}</p>
          <p>{t.privacy.description2}</p>
          <a className="privacy-link" href="#top">{t.privacy.learnMore} <span aria-hidden="true">&rarr;</span></a>
          <svg
            className="privacy-footer-mark"
            aria-hidden="true"
            width="76"
            height="29"
            viewBox="0 0 76 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="74.3867" height="28" transform="translate(0.806641 0.903809)" fill="#F8F8F8" />
            <path
              d="M38 1.40381C38.3911 1.40376 38.7855 1.41655 39.1826 1.44385V1.44482C47.4655 2.01498 54.1553 8.76601 54.6631 17.0562C54.897 20.9106 53.7566 24.5118 51.6475 27.647C51.1487 28.3883 50.1161 28.6096 49.1895 28.2056C45.7816 26.7198 41.907 25.5191 38.0059 25.5679H37.9932C34.0924 25.5193 30.2181 26.7199 26.8105 28.2056C25.8839 28.6096 24.8513 28.3883 24.3525 27.647C22.2434 24.5118 21.103 20.9106 21.3369 17.0562C21.8447 8.76617 28.5338 2.0152 36.8164 1.44482C37.0149 1.43117 37.2131 1.42034 37.4102 1.41357L38 1.40381Z"
              stroke="black"
            />
          </svg>
        </div>
      </section>

      <section className="final-cta">
        <h2>{t.finalCta.title}</h2>
        <button className="cta-download" type="button" onClick={showDownloadNotice}>{t.finalCta.download}</button>
        <p>{t.finalCta.availability}</p>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <a className="wordmark" href="#top" aria-label="Dia"><DiaMark /></a>
          <p>{t.footer.copyright}</p>
        </div>
        <div className="footer-groups">
          {footerGroups.map(([title, ...links]) => (
            <section key={title}>
              <h3>{title}</h3>
              {links.map((link) => <a href="#top" key={link}>{link}</a>)}
            </section>
          ))}
        </div>
      </footer>

      {filmOpen && (
        <div className="film-overlay" role="presentation" onMouseDown={() => setFilmOpen(false)}>
          <section className="film-modal" role="dialog" aria-modal="true" aria-label={t.film.label} onMouseDown={(event) => event.stopPropagation()}>
            <button className="film-close" type="button" aria-label={t.film.close} onClick={() => setFilmOpen(false)}>x</button>
            <div className="film-frame">
              <MuxVideo
                source={muxStream("lP00d01uh6GP49vSdkJdDF8RftDkzEvG4kKhwdTgohkXA")}
                poster="https://image.mux.com/lP00d01uh6GP49vSdkJdDF8RftDkzEvG4kKhwdTgohkXA/thumbnail.webp?width=1920&fit_mode=preserve&time=0"
                className="film-video"
                label={t.film.screamLabel}
                controls
              />
            </div>
          </section>
        </div>
      )}

      {downloadNotice && (
        <div className="download-notice" role="status">
          <span>{t.downloadNotice.text}</span>
          <button type="button" aria-label={t.downloadNotice.dismiss} onClick={() => setDownloadNotice(false)}>x</button>
        </div>
      )}
    </main>
  );
}
