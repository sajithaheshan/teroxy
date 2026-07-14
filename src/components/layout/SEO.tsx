import { Helmet } from "react-helmet-async";
import { SITE } from "@/data/content";

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}

export default function SEO({ title, description, path = "/", noindex = false }: SEOProps) {
  const fullTitle = title === SITE.name ? `${SITE.name} — ${SITE.tagline}` : `${title} · ${SITE.name}`;
  const desc = description ?? SITE.description;
  const url = `${SITE.domain}${path}`;
  const ogImage = `${SITE.domain}/images/og-cover.jpg`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE.name,
          url: SITE.domain,
          description: SITE.description,
        })}
      </script>
    </Helmet>
  );
}
