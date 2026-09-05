"use client";

import { useEffect, useMemo, useState } from "react";

type TocItem = {
  id: string;
  title: string;
};

export default function SecurityToc({
  sections,
  label,
  faqTitle,
}: {
  sections: TocItem[];
  label: string;
  faqTitle?: string;
}) {
  const items = useMemo(
    () => faqTitle ? [...sections, { id: "security-faq", title: faqTitle }] : sections,
    [sections, faqTitle],
  );
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((target): target is HTMLElement => target !== null);

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.boundingClientRect.top - window.innerHeight / 2) -
              Math.abs(second.boundingClientRect.top - window.innerHeight / 2),
          )[0];

        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
  }, [items]);

  return (
    <nav className="security-toc" aria-label={label}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              className={item.id === activeId ? "is-active" : undefined}
              href={`#${item.id}`}
              aria-current={item.id === activeId ? "location" : undefined}
              onClick={() => setActiveId(item.id)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
