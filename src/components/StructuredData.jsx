import { Helmet } from "react-helmet-async";

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    "@id": "https://hesabudrc.com/#organization",

    name: "HESABU SARLU",

    url: "https://hesabudrc.com",

    logo: "https://hesabudrc.com/favicon.png",

    image: "https://hesabudrc.com/favicon.png",

    description:
      "HESABU SARLU est une entreprise congolaise spécialisée dans les solutions GPS, la gestion intelligente de flotte, la télématique embarquée, les technologies IoT et la sécurisation des véhicules en République Démocratique du Congo.",

    telephone: "+243839573532",

    email: "iot@hesabudrc.com",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "11A3, Avenue Golf, Anciennes Galeries Présidentielles",
      addressLocality: "Gombe",
      addressRegion: "Kinshasa",
      postalCode: "1003101",
      addressCountry: "CD",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "",
      longitude: "",
    },

    areaServed: {
      "@type": "Country",
      name: "République Démocratique du Congo",
    },

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+243839573532",
        contactType: "customer service",
        areaServed: "CD",
        availableLanguage: [
          "French",
          "English",
        ],
      },
    ],

    sameAs: [],

    knowsAbout: [
      "GPS Tracking",
      "Gestion de flotte",
      "IoT",
      "Télématique",
      "Suivi de véhicules",
      "Sécurité automobile",
      "Tracking GPS",
      "Fleet Management",
      "Fuel Monitoring",
      "Vehicle Tracking",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}

export default StructuredData;