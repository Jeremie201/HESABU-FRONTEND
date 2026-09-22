import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import gps from "../../assets/blog/gps.png";

function ArticleGPS() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      "GPS professionnel à Kinshasa et en RDC : pourquoi l’installer ?",

    description:
      "Découvrez pourquoi installer un GPS professionnel sur vos véhicules à Kinshasa et en RDC pour améliorer la sécurité, le suivi et la gestion de flotte.",

    image:
      "https://hesabudrc.com/hesabusend.png",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://hesabudrc.com/ressources/gps-professionnel",
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
        title="GPS Professionnel à Kinshasa et en RDC : Guide | HESABU"
        description="Découvrez pourquoi installer un GPS professionnel sur vos véhicules à Kinshasa et en RDC pour améliorer la sécurité, réduire les coûts et optimiser la gestion de flotte."
        keywords="GPS professionnel Kinshasa, GPS véhicule Kinshasa, GPS RDC, géolocalisation véhicule RDC, gestion de flotte Kinshasa, suivi véhicules, tracking GPS entreprise, HESABU"
        image="https://hesabudrc.com/hesabusend.png"
        url="https://hesabudrc.com/ressources/gps-professionnel"
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
          aria-labelledby="article-gps-title"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">

            <span className="uppercase tracking-[4px] text-red-200 font-semibold">
              Guide GPS • HESABU
            </span>

            <h1
              id="article-gps-title"
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                mt-6
                leading-tight
              "
            >
              GPS professionnel
              <br />
              à Kinshasa et en RDC :
              <br />
              pourquoi l’installer ?
            </h1>

            <p className="text-lg md:text-xl text-red-100 mt-8 leading-8 max-w-4xl mx-auto">
              Découvrez comment la géolocalisation GPS permet aux
              entreprises, institutions et gestionnaires de flotte
              de suivre leurs véhicules en temps réel, renforcer
              leur sécurité et mieux contrôler leurs opérations.
            </p>

          </div>
        </section>

        {/* ================================= */}
        {/* IMAGE */}
        {/* ================================= */}

        <section className="py-16 bg-white">

          <div className="max-w-5xl mx-auto px-6">

            <img
              src={gps}
              alt="GPS professionnel pour véhicules et gestion de flotte à Kinshasa en RDC"
              className="rounded-3xl shadow-2xl w-full"
            />

          </div>

        </section>

        {/* ================================= */}
        {/* ARTICLE */}
        {/* ================================= */}

        <article className="py-10 bg-white">

          <div className="max-w-4xl mx-auto px-6">

            {/* INTRODUCTION */}

            <p className="text-xl text-gray-700 leading-9 mb-10">
              Pour une entreprise qui exploite un ou plusieurs véhicules
              à Kinshasa ou ailleurs en République Démocratique du Congo,
              connaître leur position et leur utilisation peut faciliter
              considérablement la gestion quotidienne. Un système GPS
              professionnel ne sert pas uniquement à afficher un véhicule
              sur une carte : il peut également fournir des informations
              utiles sur les trajets, les arrêts, la vitesse et
              l’exploitation de la flotte.
            </p>

            {/* ================================= */}
            {/* SECTION 1 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Suivre vos véhicules GPS en temps réel
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              La géolocalisation GPS permet de connaître la position
              des véhicules équipés depuis une plateforme de suivi.
              Les responsables peuvent ainsi disposer d’une meilleure
              visibilité sur leurs équipes mobiles et leurs opérations,
              notamment lorsque plusieurs véhicules circulent
              simultanément à Kinshasa ou sur d’autres axes en RDC.
            </p>

            {/* ================================= */}
            {/* SECTION 2 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Améliorer la gestion des trajets
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Les données GPS permettent d’analyser les déplacements
              effectués par les véhicules et de mieux comprendre
              leur utilisation.
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Identifier les trajets effectués.
              </li>

              <li>
                Consulter l’historique des déplacements.
              </li>

              <li>
                Repérer certains déplacements inutiles.
              </li>

              <li>
                Analyser les temps d’arrêt.
              </li>

              <li>
                Améliorer l’organisation des équipes mobiles.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 3 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Renforcer la sécurité des véhicules
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Un système GPS peut également contribuer à la surveillance
              et à la sécurité des véhicules. Selon l’équipement installé
              et les fonctionnalités disponibles, plusieurs mécanismes
              peuvent être utilisés.
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Localisation du véhicule.
              </li>

              <li>
                Historique des déplacements.
              </li>

              <li>
                Alertes d’excès de vitesse.
              </li>

              <li>
                Alertes d’entrée ou de sortie de zone.
              </li>

              <li>
                Détection de certains mouvements ou événements.
              </li>

              <li>
                Immobilisation à distance lorsque l’installation
                et les conditions de sécurité le permettent.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 4 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Réduire les coûts de gestion de flotte
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Une meilleure visibilité sur l’utilisation des véhicules
              peut aider une entreprise à identifier certaines sources
              de dépenses : déplacements inutiles, temps d’arrêt prolongés,
              utilisation non autorisée ou organisation inefficace
              des trajets. Ces informations donnent aux gestionnaires
              de flotte une base plus précise pour améliorer leurs
              opérations.
            </p>

            {/* ================================= */}
            {/* SECTION 5 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Exploiter des rapports de flotte
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Une plateforme GPS professionnelle peut centraliser
              différentes données afin de faciliter le suivi des véhicules.
              Selon la solution utilisée, les responsables peuvent notamment
              consulter :
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Les distances parcourues.
              </li>

              <li>
                Les temps de déplacement.
              </li>

              <li>
                Les temps d’arrêt.
              </li>

              <li>
                Les positions et historiques.
              </li>

              <li>
                Les événements et alertes enregistrés.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 6 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              GPS professionnel pour entreprises à Kinshasa
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              À Kinshasa, les besoins de suivi peuvent concerner
              différents secteurs : transport, logistique, distribution,
              construction, location de véhicules, institutions,
              ONG ou entreprises disposant d’équipes mobiles.
              Une solution GPS professionnelle permet de centraliser
              le suivi des véhicules et d’obtenir une meilleure visibilité
              sur les opérations quotidiennes.
            </p>

            {/* ================================= */}
            {/* SECTION 7 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir HESABU pour votre solution GPS ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              HESABU SARLU accompagne les entreprises, institutions,
              transporteurs et particuliers dans la mise en place
              de solutions GPS et de gestion de flotte à Kinshasa
              et en République Démocratique du Congo.
            </p>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Nos solutions peuvent être adaptées au type de véhicule,
              au nombre d’unités à suivre et aux fonctionnalités recherchées,
              telles que la géolocalisation, les alertes, la télématique
              ou le suivi de flotte.
            </p>

            {/* ================================= */}
            {/* LIENS INTERNES */}
            {/* ================================= */}

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mb-12">

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                En savoir plus sur les solutions HESABU
              </h2>

              <div className="flex flex-col gap-4">

                <Link
                  to="/services"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir nos services GPS à Kinshasa et en RDC
                </Link>

                <Link
                  to="/solutions"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir nos solutions de gestion de flotte
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
                Besoin d’un GPS professionnel pour vos véhicules ?
              </h2>

              <p className="text-lg md:text-xl text-red-100 mb-8 leading-8">
                HESABU vous accompagne dans le choix d’une solution GPS
                adaptée à votre activité, à votre flotte et à vos besoins
                à Kinshasa et en RDC.
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
                Demander un devis GPS
              </Link>

            </div>

          </div>

        </article>

      </main>

      <Footer />
    </>
  );
}

export default ArticleGPS;
