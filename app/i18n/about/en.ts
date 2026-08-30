import type { AboutPageTranslations } from "../types";

export const en: AboutPageTranslations = {
  loader: {
    stages: ["Gathering context", "Connecting the pieces", "Making room for good work"],
    skip: "Skip intro",
    loadingLabel: "Loading Clouisle",
  },
  eyebrow: "ABOUT CLOUISLE / 2026",
  title: "We're building better ways to work with knowledge, tools, and AI.",
  intro:
    "Clouisle is an open-source AI workspace for turning knowledge, decisions, and repeatable work into progress.",
  location: "Built in the open",
  founded: "Since 2024",
  scrollLabel: "Scroll to explore",
  artIndex: "01 / 04",
  artCaption: "CLOUISLE / OPEN SOURCE AI WORKSPACE",
  stamp: "CL / 01",
  corporate: {
    values: "Company values",
    valuesContent: ["Use technology to make life simpler", "Make the world better"],
    close: "Close",
    newsletter: "Newsletter",
    social: "@clouisle",
    heading: {
      before: "We're building better ways to work with ",
      linkOne: "Clouisle",
      linkOneHref: "https://github.com/clouisle/Clouisle",
      between: " and ",
      linkTwo: "Cue",
      linkTwoHref: "https://github.com/clouisle/Cue",
      after: ".",
    },
    actions: [
      { label: "Clouisle", href: "https://github.com/clouisle/Clouisle" },
      { label: "Cue", href: "https://github.com/clouisle/Cue" },
      { label: "Clouisle Sandbox", href: "https://github.com/clouisle/clouisle-sandbox" },
    ],
    copyright: "Copyright 2026 Clouisle",
    logoLabel: "Clouisle company mark",
    ambient: {
      monogramTop: "CL",
      monogramBottom: "AI",
      captionTop: "CL / OPEN",
      captionBottom: "WORK / 2026",
    },
  },
  manifesto: {
    eyebrow: "A QUIETLY AMBITIOUS IDEA",
    title: "Software should make the next step feel obvious.",
    body:
      "The best tools do more than answer a question. They hold the context, take care of the handoffs, and leave people with more attention for the part only they can do. We are building Clouisle for that feeling: less searching, less switching, more meaningful momentum.",
  },
  principles: {
    eyebrow: "HOW WE WORK",
    title: "Small principles. Real consequences.",
    items: [
      {
        number: "01",
        title: "Context belongs together",
        description:
          "Knowledge, tools, and decisions are more useful when they live close to the work they explain.",
      },
      {
        number: "02",
        title: "Automation should be legible",
        description:
          "A workflow can move quickly and still show who changed what, why it happened, and what comes next.",
      },
      {
        number: "03",
        title: "Control is a feature",
        description:
          "Self-hosting, open code, and clear permissions give teams a say in how their work is handled.",
      },
      {
        number: "04",
        title: "Make the calm version",
        description:
          "We choose focused interfaces and thoughtful defaults so powerful software can still feel human.",
      },
    ],
  },
  journey: {
    eyebrow: "A SHORT HISTORY",
    title: "From a useful question to a shared workspace.",
    events: [
      {
        year: "2024",
        title: "The first sketch",
        description: "We started with a simple question: what if an AI could remember how a team really works?",
      },
      {
        year: "2025",
        title: "Clouisle takes shape",
        description: "Agents, knowledge bases, and visual workflows became one place to think and act.",
      },
      {
        year: "2026",
        title: "Built with the community",
        description: "Clouisle is open source and growing with the people who use it every day.",
      },
    ],
  },
  openSource: {
    eyebrow: "OPEN BY DEFAULT",
    title: "Bring your own context.",
    body:
      "Run Clouisle where your work already lives, connect the tools you trust, and help shape what comes next.",
    action: "Explore the project",
  },
  footerNote: "Clouisle is made for teams who want their tools to work with them.",
};
