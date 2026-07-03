import { Helmet } from "react-helmet-async";

function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hesabudrc.com/#organization",

    name: "HESABU SARLU",

    url: "https://hesabudrc.com",

    logo: "https://hesabudrc.com/favicon.png",

    email: "iot@hesabudrc.com",

    telephone: "+243839573532",

    description:
      "HESABU SARLU est une entreprise congolaise spécialisée dans les solutions GPS, la gestion intelligente de flotte, la télématique embarquée et les technologies IoT.",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "11A3, Avenue Golf, Anciennes Galeries Présidentielles",
      addressLocality: "Gombe",
      addressRegion: "Kinshasa",
      addressCountry: "CD",
    },

    areaServed: {
      "@type": "Country",
      name: "République Démocratique du Congo",
    },

    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": "https://hesabudrc.com/#website",

    url: "https://hesabudrc.com",

    name: "HESABU SARLU",

    publisher: {
      "@id": "https://hesabudrc.com/#organization",
    },

    inLanguage: "fr",
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "Service",

    serviceType: "Solutions GPS",

    provider: {
      "@id": "https://hesabudrc.com/#organization",
    },

    areaServed: "République Démocratique du Congo",

    hasOfferCatalog: {
      "@type": "OfferCatalog",

      name: "Services HESABU",

      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Géolocalisation GPS",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gestion de flotte",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Télématique embarquée",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technologies IoT",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organization)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(website)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(services)}
      </script>
    </Helmet>
  );
}

export default StructuredData;