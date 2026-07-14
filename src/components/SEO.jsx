import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  image = "https://hesabudrc.com/affiche.png",
  url = "https://hesabudrc.com",
}) {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "HESABU SARLU",

    url: "https://hesabudrc.com",

    logo: "https://hesabudrc.com/favicon.png",

    image: "https://hesabudrc.com/affiche.png",

    description:
      "Entreprise congolaise spécialisée dans les solutions GPS, la gestion intelligente de flotte, la télématique embarquée et les technologies IoT.",

    telephone: "+243839573532",

    email: "iot@hesabudrc.com",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "11A3 Avenue Golf, Anciennes Galeries Présidentielles",
      addressLocality: "Kinshasa-Gombe",
      addressCountry: "CD",
    },

    areaServed: {
      "@type": "Country",
      name: "République Démocratique du Congo",
    },

    foundingLocation: {
      "@type": "Place",
      name: "Kinshasa",
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+243839573532",
      contactType: "customer service",
      areaServed: "CD",
      availableLanguage: ["French", "English"],
    },

    sameAs: [
      "https://www.facebook.com/"
    ]
  };

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
        content="HESABU SARLU - Solutions GPS et Gestion de Flotte"
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

      {/* Schema.org */}

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

    </Helmet>
  );
}