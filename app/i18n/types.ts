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
    blocks: (
      | { type: "p"; text: string }
      | { type: "lead"; text: string }
      | { type: "strong"; text: string; body?: string }
      | { type: "list"; items: string[] }
    )[];
  }[];
  faqTitle: string;
  faqs: {
    question: string;
    answer: string[];
  }[];
};

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

export type Translations = HomeTranslations & {
  securityPage: SecurityPageTranslations;
  releaseNotes: ReleaseNotesTranslations;
};
