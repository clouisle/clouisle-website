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
  workflowLoop: {
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      step: string;
      title: string;
      subtitle: string;
      description: string;
      tag: string;
    }[];
    closing: string;
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
  title: string;
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
