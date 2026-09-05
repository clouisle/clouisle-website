import type { Translations } from "../../i18n/translations";
import Image from "next/image";
import { assetUrl } from "../../seo";

type ProductFeatureMedia = {
  className: string;
  image: string;
};

const productFeatureMedia: ProductFeatureMedia[] = [
  { className: "feature-wide", image: assetUrl("feature-agents.png") },
  { className: "feature-tall", image: assetUrl("feature-knowledge-base.png") },
  { className: "feature-tall", image: assetUrl("feature-models.png") },
  { className: "feature-wide", image: assetUrl("feature-tool-connections.png") },
  { className: "feature-wide", image: assetUrl("feature-workflows.png") },
  {
    className: "feature-tall feature-tab-organize",
    image: assetUrl("feature-team-collaboration.png"),
  },
];

export default function FeaturesSection({ t }: { t: Translations }) {
  return (
    <section className="features-section" id="features">
      <div className="section-intro features-intro">
        <h2>{t.features.title}</h2>
      </div>

      <div className="feature-grid">
        {t.features.items.map((feature, index) => (
          <article className={`feature-card ${productFeatureMedia[index].className}`} key={feature.label}>
            <div className="tile-copy">
              <span className="feature-label">{feature.label}</span>
              <h3>{feature.title}</h3>
            </div>
            <div className="tile-media">
              <Image
                src={productFeatureMedia[index].image}
                alt={`${feature.label} ${t.features.inClouisle}`}
                width={productFeatureMedia[index].className.includes("feature-tall") ? 1728 : 1217}
                height={productFeatureMedia[index].className.includes("feature-tall") ? 1920 : 808}
                unoptimized
                sizes="(min-width: 1000px) 33vw, 100vw"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
