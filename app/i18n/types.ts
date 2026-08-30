export type Locale = "en" | "zh";

export type HomeTranslations = {
  nav: {
    features: string;
    security: string;
    docs: string;
  };
  mobile: {
    download: string;
    watchTrailer: string;
  };
  hero: {
    tagline: string;
    download: string;
    trialNote: string;
    watchScream: string;
  };
  reads: {
    title: string;
    cases: {
      title: string;
      description: string;
    }[];
  };
  work: {
    title: string;
    features: {
      label: string;
      title: string;
    }[];
    inDia: string;
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
  finalCta: {
    title: string;
    featuresTitle: string;
    plans: {
      name: string;
      description: string;
      action: string;
      href?: string;
      features: string[];
    }[];
  };
  footer: {
    groups: {
      title: string;
      links: string[];
    }[];
  };
  film: {
    close: string;
    label: string;
    screamLabel: string;
  };
  downloadNotice: {
    text: string;
    dismiss: string;
  };
  notice: {
    message: string;
    action: string;
    close: string;
  };
  alt: {
    diaInterface: string;
    featureInDia: string;
  };
  language: {
    switchTo: string;
  };
};

export type SecurityPageTranslations = {
  title: string;
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

export type ReleaseIssue = {
  slug: string;
  date: string;
  issueNumber: string;
  version: string;
  title: string;
  description: string;
  image: string;
  greeting?: string;
  message?: string[];
  signature?: string;
  heroImage?: string;
  polaroidImage?: string;
  gradient?: number;
};

export type ReleaseNotesTranslations = {
  eyebrow: string;
  wordmark: string;
  tagline: string;
  title: string;
  category: string;
  cadence: string;
  date: string;
  location: string;
  issueLabel: string;
  issueNumber: string;
  versionLabel: string;
  version: string;
  flipLabel: string;
  flippedLabel: string;
  greeting: string;
  message: string[];
  signature: string;
  heroImage: string;
  polaroidImage: string;
  gradient?: number;
  experimentalMode?: "classic" | "transition" | "experimental";
  transitionStart?: number;
  pastIssues: string;
  viewAll: string;
  loadingAll: string;
  archiveIssueCount: number;
  issues: ReleaseIssue[];
};

export type HelpPageTranslations = {
  description: string;
  chatPlaceholder: string;
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

export type Translations = HomeTranslations & {
  securityPage: SecurityPageTranslations;
  privacyPage: PrivacyPageTranslations;
  termsPage: TermsPageTranslations;
  releaseNotes: ReleaseNotesTranslations;
  helpPage: HelpPageTranslations;
  aboutPage: AboutPageTranslations;
};
