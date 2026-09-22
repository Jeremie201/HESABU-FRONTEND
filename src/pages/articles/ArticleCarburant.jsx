import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import carburant from "../../assets/blog/carburant.png";

function ArticleCarburant() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      "Contrôle du carburant à Kinshasa et en RDC : réduire les coûts avec le GPS et les sondes",

    description:
      "Découvrez comment le GPS et le suivi du niveau de carburant peuvent aider les entreprises à mieux contrôler la consommation, détecter les anomalies et optimiser la gestion de leur flotte.",

    image:
      "https://hesabudrc.com/hesabusend.png",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://hesabudrc.com/ressources/reduire-couts-gps-sonde-carburant",
    },

    author: {
      "@type": "Organization",
      name: "HESABU SARLU",
      url: "https://hesabudrc.com/",
    },

    publisher: {
      "@type": "Organization",
      name: "HESABU SARLU",

      logo: {
        "@type": "ImageObject",
        url: "https://hesabudrc.com/favicon.png",
      },
    },
  };

  return (
    <>
      <SEO
        title="Contrôle du Carburant à Kinshasa et en RDC | HESABU"
        description="Découvrez comment contrôler la consommation de carburant, détecter les anomalies et réduire les pertes grâce au GPS et aux solutions de suivi carburant pour véhicules et flottes à Kinshasa et en RDC."
        keywords="sonde carburant Kinshasa, contrôle carburant RDC, suivi carburant flotte, GPS sonde carburant, consommation carburant flotte, gestion flotte Kinshasa, télématique RDC, HESABU"
        image="https://hesabudrc.com/hesabusend.png"
        url="https://hesabudrc.com/ressources/reduire-couts-gps-sonde-carburant"
      />

      {/* Schema spécifique à l'article */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <Navbar />

      <main>

        {/* ================================= */}
        {/* HERO */}
        {/* ================================= */}

        <section
          className="
            bg-gradient-to-br
            from-red-700
            via-red-600
            to-black
            text-white
            py-20
            md:py-24
          "
          aria-labelledby="article-carburant-title"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">

            <span className="uppercase tracking-[4px] text-red-200 font-semibold">
              Guide Carburant • HESABU
            </span>

            <h1
              id="article-carburant-title"
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                mt-6
                leading-tight
              "
            >
              Contrôle du Carburant
              <br />
              à Kinshasa et en RDC :
              <br />
              GPS et Sonde Carburant
            </h1>

            <p className="text-lg md:text-xl text-red-100 mt-8 leading-8 max-w-4xl mx-auto">
              Découvrez comment les solutions GPS et de suivi du carburant
              peuvent aider les entreprises à mieux comprendre leur
              consommation, détecter certaines anomalies et améliorer
              la gestion de leur flotte.
            </p>

          </div>
        </section>

        {/* ================================= */}
        {/* IMAGE */}
        {/* ================================= */}

        <section className="py-16 bg-white">

          <div className="max-w-5xl mx-auto px-6">

            <img
              src={carburant}
              alt="Suivi GPS et contrôle du carburant pour flotte à Kinshasa et en RDC"
              className="rounded-3xl shadow-2xl w-full"
            />

          </div>

        </section>

        {/* ================================= */}
        {/* CONTENU */}
        {/* ================================= */}

        <article className="py-10 bg-white">

          <div className="max-w-4xl mx-auto px-6">

            {/* INTRO */}

            <p className="text-xl text-gray-700 leading-9 mb-10">
              Pour de nombreuses entreprises disposant d’une flotte de
              véhicules à Kinshasa ou ailleurs en République Démocratique
              du Congo, le carburant représente une part importante des
              dépenses d’exploitation. Une mauvaise visibilité sur les
              trajets, les arrêts ou les variations de niveau peut rendre
              le contrôle de ces coûts plus difficile. Les solutions GPS
              associées à des systèmes de suivi du carburant peuvent aider
              les gestionnaires à mieux analyser ces données.
            </p>

            {/* ================================= */}
            {/* SECTION 1 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi les dépenses de carburant augmentent-elles ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Plusieurs facteurs peuvent entraîner une hausse des dépenses
              liées au carburant. Sans données précises, certaines anomalies
              peuvent rester difficiles à identifier.
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Déplacements inutiles ou non autorisés.
              </li>

              <li>
                Ralenti moteur prolongé.
              </li>

              <li>
                Itinéraires inefficaces.
              </li>

              <li>
                Consommation supérieure aux habitudes observées.
              </li>

              <li>
                Variations inhabituelles du niveau de carburant.
              </li>

              <li>
                Mauvaise planification des déplacements.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 2 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comment le GPS aide à mieux contrôler les coûts
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Une solution GPS professionnelle permet d’obtenir une meilleure
              visibilité sur l’utilisation des véhicules. Le responsable
              de flotte peut analyser les trajets, les arrêts, les horaires
              et différents événements enregistrés par le système.
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Suivi des déplacements en temps réel.
              </li>

              <li>
                Analyse des itinéraires.
              </li>

              <li>
                Consultation des temps d’arrêt.
              </li>

              <li>
                Historique des déplacements.
              </li>

              <li>
                Rapports d’activité.
              </li>

              <li>
                Alertes configurées selon les besoins.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 3 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Qu’est-ce qu’une sonde de carburant ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Une sonde ou un dispositif de mesure du carburant peut être
              associé à une solution télématique afin de suivre l’évolution
              du niveau dans le réservoir. Le fonctionnement exact dépend
              du type de capteur, du véhicule et de l’installation réalisée.
            </p>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Les données collectées peuvent ensuite être transmises vers
              une plateforme de suivi afin d’aider le gestionnaire à
              visualiser les variations du niveau, les ravitaillements
              et certains événements inhabituels.
            </p>

            {/* ================================= */}
            {/* SECTION 4 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Détecter les anomalies de carburant
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              En comparant les données de déplacement et les variations
              du niveau de carburant, le gestionnaire peut repérer certains
              événements qui nécessitent une vérification.
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Baisse inhabituelle du niveau.
              </li>

              <li>
                Ravitaillement enregistré.
              </li>

              <li>
                Variation pendant une période d’arrêt.
              </li>

              <li>
                Consommation inhabituelle sur un trajet.
              </li>

              <li>
                Écart entre différents véhicules similaires.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 5 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Les avantages pour la gestion de flotte
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Meilleure visibilité des dépenses
                </h3>

                <p className="text-gray-700 leading-7">
                  Les données permettent aux responsables de mieux comprendre
                  l’utilisation du carburant et les comportements de la flotte.
                </p>

              </article>

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Détection des anomalies
                </h3>

                <p className="text-gray-700 leading-7">
                  Certaines variations inhabituelles peuvent être identifiées
                  plus rapidement afin de permettre une vérification.
                </p>

              </article>

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Optimisation des trajets
                </h3>

                <p className="text-gray-700 leading-7">
                  Les données GPS peuvent aider à repérer les déplacements
                  inutiles et à améliorer l’organisation des itinéraires.
                </p>

              </article>

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Rapports de suivi
                </h3>

                <p className="text-gray-700 leading-7">
                  Les responsables disposent d’informations historiques
                  permettant d’analyser l’utilisation des véhicules
                  sur différentes périodes.
                </p>

              </article>

            </div>

            {/* ================================= */}
            {/* SECTION 6 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Suivi carburant pour entreprises à Kinshasa
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              À Kinshasa, le suivi du carburant peut concerner de nombreux
              secteurs : transport, logistique, distribution, construction,
              location de véhicules, agriculture, institutions ou entreprises
              disposant d’une flotte importante. Une solution associant GPS,
              télématique et suivi carburant permet de centraliser plusieurs
              informations utiles sur les véhicules.
            </p>

            {/* ================================= */}
            {/* SECTION 7 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              GPS et suivi carburant en RDC
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Pour les flottes opérant sur plusieurs sites ou dans différentes
              zones de la République Démocratique du Congo, disposer d’une
              plateforme centralisée peut faciliter le suivi des véhicules,
              des déplacements et des informations liées au carburant.
            </p>

            {/* ================================= */}
            {/* SECTION 8 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir HESABU ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              HESABU SARLU accompagne les entreprises, institutions,
              transporteurs et particuliers dans le déploiement de solutions
              GPS, de télématique et de gestion de flotte à Kinshasa
              et en République Démocratique du Congo.
            </p>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Selon les besoins du client et les équipements compatibles,
              une solution peut intégrer des fonctionnalités de suivi
              de véhicules, d’analyse des trajets, d’alertes et de
              contrôle du carburant.
            </p>

            {/* ================================= */}
            {/* MAILLAGE INTERNE */}
            {/* ================================= */}

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mb-12">

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Découvrez aussi les solutions HESABU
              </h2>

              <div className="flex flex-col gap-4">

                <Link
                  to="/services"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir nos services GPS et télématiques
                </Link>

                <Link
                  to="/solutions"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir nos solutions de gestion de flotte
                </Link>

                <Link
                  to="/ressources/gps-professionnel"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Lire notre guide sur le GPS professionnel
                </Link>

                <Link
                  to="/ressources/gestion-flotte"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Lire notre guide sur la gestion de flotte
                </Link>

              </div>

            </div>

            {/* ================================= */}
            {/* CTA */}
            {/* ================================= */}

            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-10 text-center text-white">

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin de mieux contrôler le carburant de votre flotte ?
              </h2>

              <p className="text-lg md:text-xl text-red-100 mb-8 leading-8">
                HESABU vous accompagne dans le choix d’une solution GPS
                et de suivi carburant adaptée à vos véhicules, à votre
                activité et à vos besoins à Kinshasa et en RDC.
              </p>

              <Link
                to="/devis"
                className="
                  inline-block
                  bg-white
                  text-red-700
                  px-8
                  py-4
                  rounded-xl
                  font-bold
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                Demander un devis
              </Link>

            </div>

          </div>

        </article>

      </main>

      <Footer />
    </>
  );
}

export default ArticleCarburant;
