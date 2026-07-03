import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  image = "https://hesabudrc.com/affiche.png",
  url = "https://hesabudrc.com",
}) {
  return (
    <Helmet>
      {/* SEO principal */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="author"
        content="HESABU SARLU"
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="language"
        content="fr"
      />

      <meta
        name="theme-color"
        content="#dc2626"
      />

      <link
        rel="canonical"
        href={url}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:image:alt"
        content="HESABU SARLU - Solutions GPS et Gestion de flotte"
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:site_name"
        content="HESABU SARLU"
      />

      <meta
        property="og:locale"
        content="fr_CD"
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

      <meta
        name="twitter:image:alt"
        content="HESABU SARLU"
      />
    </Helmet>
  );
}