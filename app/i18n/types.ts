export type Locale = "en" | "zh";

export type HomeTranslations = {
  nav: {
    features: string;
    security: string;
    docs: string;
  };
  mobile: {
    download: string;
  };
  hero: {
    tagline: string;
    download: string;
    trialNote: string;
    watchVideo: string;
  };
  useCases: {
    title: string;
    cases: {
      title: string;
      description: string;
    }[];
  };
  features: {
    title: string;
    items: {
      label: string;
      title: string;
    }[];
    inClouisle: string;
  };
  privacy: {
    title: string;
    description1: string;
    description2: string;
    learnMore: string;
    toggles: string[];
    on: string;
    off: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  plans: {
    title: string;
    featuresTitle: string;
    items: {
      name: string;
      description: string;
      action: string;
      href?: string;
      secondaryAction?: string;
      secondaryHref?: string;
      features: string[];
    }[];
  };
  footer: {
    groups: {
      title: string;
      links: string[];
    }[];
  };
  productVideo: {
    close: string;
    label: string;
    videoLabel: string;
  };
  notice: {
    message: string;
    action: string;
    close: string;
  };
  alt: {
    clouisleInterface: string;
  };
  language: {
    switchTo: string;
  };
};

export type SecurityPageTranslations = {
  title: string;
  description: string;
  sections: {
    id: string;
    title: string;
    content: string;
  }[];
  faqTitle: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export type PrivacyPageTranslations = {
  title: string;
  overviewTitle: string;
  summary: string;
  sections: {
    id: string;
    title: string;
    content: string;
  }[];
};

export type TermsPageTranslations = PrivacyPageTranslations;

export type ReleaseHeading = { id: string; title: string };

/** One release, loaded from `content/release-notes/<lang>/<slug>.md`. */
export type ReleaseArticle = {
  /** File name without extension. */
  slug: string;
  /** ISO date (YYYY-MM-DD); formatted per locale at render time. */
  isoDate: string;
  issueNumber: string;
  /** Semantic version without the leading "v", e.g. "0.2.9". */
  version: string;
  tag: string;
  title: string;
  summary: string;
  cover: string;
  gradient: number;
  /** Markdown body (frontmatter removed). */
  body: string;
  /** `##` headings of the body, used for the article outline. */
  headings: ReleaseHeading[];
};

/** UI labels for the release notes pages; articles are loaded separately on the server. */
export type ReleaseNotesTranslations = {
  title: string;
  intro: string;
  seoDescription: string;
  timelineLabel: string;
  latestBadge: string;
  readMore: string;
  backToList: string;
  outlineTitle: string;
  /** Contains an `{n}` placeholder for the issue number. */
  issueLabel: string;
  newer: string;
  older: string;
  byline: string;
  signature: string;
  endNote: string;
  gradient: number;
};

export type HelpLink = {
  label: string;
  href: string;
};

export type HelpPageTranslations = {
  title: string;
  description: string;
  jump: { label: string; start: string; faq: string; support: string };
  start: {
    eyebrow: string;
    title: string;
    linkLabel: string;
    items: { title: string; description: string; href: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    groups: {
      id: string;
      title: string;
      items: { question: string; answer: string; links?: HelpLink[] }[];
    }[];
  };
  support: {
    eyebrow: string;
    title: string;
    description: string;
    routes: {
      tag: string;
      title: string;
      description: string;
      action: string;
      href: string;
      primary?: boolean;
    }[];
    checklistTitle: string;
    checklist: string[];
    checklistNote: string;
  };
};

export type AboutPageTranslations = {
  loader: {
    stages: string[];
    skip: string;
    loadingLabel: string;
  };
  eyebrow: string;
  title: string;
  intro: string;
  location: string;
  founded: string;
  scrollLabel: string;
  artIndex: string;
  artCaption: string;
  stamp: string;
  corporate: {
    values: string;
    valuesContent: string[];
    close: string;
    newsletter: string;
    social: string;
    heading: {
      before: string;
      linkOne: string;
      linkOneHref: string;
      between: string;
      linkTwo: string;
      linkTwoHref: string;
      after: string;
    };
    actions: {
      label: string;
      href: string;
    }[];
    copyright: string;
    logoLabel: string;
    ambient: {
      monogramTop: string;
      monogramBottom: string;
      captionTop: string;
      captionBottom: string;
    };
  };
  manifesto: {
    eyebrow: string;
    title: string;
    body: string;
  };
  principles: {
    eyebrow: string;
    title: string;
    items: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  journey: {
    eyebrow: string;
    title: string;
    events: {
      year: string;
      title: string;
      description: string;
    }[];
  };
  openSource: {
    eyebrow: string;
    title: string;
    body: string;
    action: string;
  };
  footerNote: string;
};

export type NotFoundPageTranslations = {
  eyebrow: string;
  title: string;
  description: string;
  backHome: string;
  help: string;
};

export type Translations = HomeTranslations & {
  securityPage: SecurityPageTranslations;
  privacyPage: PrivacyPageTranslations;
  termsPage: TermsPageTranslations;
  releaseNotes: ReleaseNotesTranslations;
  helpPage: HelpPageTranslations;
  aboutPage: AboutPageTranslations;
  notFoundPage: NotFoundPageTranslations;
};
