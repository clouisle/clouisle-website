import type { ReactNode } from "react";
import Image from "next/image";
import ReactMarkdown, { type Components } from "react-markdown";
import { headingId } from "../../i18n/release/articles";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) return textOf((node.props as { children?: ReactNode }).children);
  return "";
}

const components: Components = {
  h2: ({ children }) => <h2 id={headingId(textOf(children))}>{children}</h2>,
  // A paragraph that only holds an image becomes a <figure>, which cannot live inside <p>.
  p: ({ node, children }) => {
    const only = node?.children.length === 1 ? node.children[0] : undefined;
    if (only?.type === "element" && only.tagName === "img") return <>{children}</>;
    return <p>{children}</p>;
  },
  img: ({ src, alt }) => {
    if (typeof src !== "string") return null;
    return (
      <figure className="rn-figure">
        <Image src={src} alt={alt ?? ""} width={1217} height={808} unoptimized loading="lazy" sizes="(min-width: 1040px) 620px, 100vw" />
        {alt ? <figcaption>{alt}</figcaption> : null}
      </figure>
    );
  },
  a: ({ href, children }) => {
    const external = typeof href === "string" && /^https?:/.test(href);
    return (
      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  },
};

/** Renders a release note's Markdown body on the server (at build time for static pages). */
export default function ReleaseMarkdown({ children }: { children: string }) {
  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
}
