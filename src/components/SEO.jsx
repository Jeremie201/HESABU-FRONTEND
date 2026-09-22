import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "HESABU SARLU | GPS, Gestion de flotte et IoT en RDC",

  description =
    "HESABU SARLU est une entreprise congolaise spécialisée dans les solutions GPS, la gestion intelligente de flotte, la télématique embarquée et les technologies IoT en République Démocratique du Congo.",

  keywords =
    "GPS RDC, GPS Kinshasa, gestion de flotte Kinshasa, gestion de flotte RDC, télématique embarquée, IoT RDC, géolocalisation, localisation véhicules, gestion à distance, suivi en temps réel, suivi de véhicules, tracking véhicule, HESABU, HESABU SARLU, Kinshasa, République Démocratique du Congo",

  image = "https://hesabudrc.com/hesabusend.png",

  url = "https://hesabudrc.com/",

  noIndex = false,
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    "@id": "https://hesabudrc.com/#business",

    name: "HESABU SARLU",

    url: "https://hesabudrc.com/",

    logo: "https://hesabudrc.com/favicon.png",

    image: "https://hesabudrc.com/hesabusend.png",

    description:
      "Entreprise congolaise spécialisée dans les solutions GPS, la géolocalisation, la gestion intelligente de flotte, la télématique embarquée et les technologies IoT à Kinshasa et en République Démocratique du Congo.",

    telephone: "+243839573532",

    email: "iot@hesaburdc.com",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "11A3 Avenue Golf, Anciennes Galeries Présidentielles, Gombe",

      addressLocality: "Kinshasa",

      addressRegion: "Kinshasa",

      addressCountry: "CD",
    },

    areaServed: {
      "@type": "Country",
      name: "République Démocratique du Congo",
    },

    contactPoint: {
      "@type": "ContactPoint",

      telephone: "+243839573532",

      email: "iot@hesaburdc.com",

      contactType: "customer service",

      areaServed: "CD",

      availableLanguage: [
        "French",
        "English",
      ],
    },
  };

  return (
    <Helmet>

      {/* ================================ */}
      {/* LANGUE */}
      {/* ================================ */}

      <html lang="fr" />

      {/* ================================ */}
      {/* SEO PRINCIPAL */}
      {/* ================================ */}

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
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow"
        }
      />

      <meta
        name="theme-color"
        content="#dc2626"
      />

      {/* ================================ */}
      {/* URL CANONIQUE */}
      {/* ================================ */}

      <link
        rel="canonical"
        href={url}
      />

      {/* ================================ */}
      {/* OPEN GRAPH */}
      {/* Facebook / WhatsApp / LinkedIn */}
      {/* ================================ */}

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
        property="og:image:secure_url"
        content={image}
      />

      <meta
        property="og:image:type"
        content="image/png"
      />

      <meta
        property="og:image:alt"
        content="HESABU SARLU - Solutions GPS et gestion de flotte à Kinshasa et en RDC"
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

      {/* ================================ */}
      {/* TWITTER / X */}
      {/* ================================ */}

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
        content="HESABU SARLU - Solutions GPS et gestion de flotte à Kinshasa et en RDC"
      />

      {/* ================================ */}
      {/* SCHEMA.ORG LOCAL BUSINESS */}
      {/* ================================ */}

      {!noIndex && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}

    </Helmet>
  );
}
