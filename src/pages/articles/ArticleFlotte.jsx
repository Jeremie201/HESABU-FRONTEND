import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import flotte from "../../assets/blog/flotte.png";

function ArticleFlotte() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      "Gestion de flotte à Kinshasa et en RDC : comment mieux piloter vos véhicules ?",

    description:
      "Découvrez comment améliorer la gestion d’une flotte automobile à Kinshasa et en RDC grâce au GPS, à la télématique, aux rapports, au suivi des véhicules et à la maintenance.",

    image:
      "https://hesabudrc.com/hesabusend.png",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://hesabudrc.com/ressources/gestion-flotte",
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
        title="Gestion de Flotte à Kinshasa et en RDC | Guide HESABU"
        description="Découvrez comment améliorer la gestion de votre flotte à Kinshasa et en RDC grâce au GPS, à la télématique, au suivi des véhicules, aux rapports et aux outils de pilotage."
        keywords="gestion de flotte Kinshasa, gestion de flotte RDC, suivi flotte GPS, gestion parc automobile Kinshasa, télématique flotte, GPS entreprise RDC, optimisation flotte véhicules, HESABU"
        image="https://hesabudrc.com/hesabusend.png"
        url="https://hesabudrc.com/ressources/gestion-flotte"
      />

      {/* Schema Article */}
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
          aria-labelledby="article-flotte-title"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">

            <span className="uppercase tracking-[4px] text-red-200 font-semibold">
              Guide Gestion de Flotte • HESABU
            </span>

            <h1
              id="article-flotte-title"
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                mt-6
                leading-tight
              "
            >
              Gestion de Flotte
              <br />
              à Kinshasa et en RDC :
              <br />
              mieux piloter vos véhicules
            </h1>

            <p className="text-lg md:text-xl text-red-100 mt-8 leading-8 max-w-4xl mx-auto">
              Découvrez comment le GPS, la télématique et les données
              de suivi peuvent aider les entreprises à mieux organiser
              leurs véhicules, contrôler leurs opérations et améliorer
              la gestion quotidienne de leur flotte.
            </p>

          </div>
        </section>

        {/* ================================= */}
        {/* IMAGE */}
        {/* ================================= */}

        <section className="py-16 bg-white">

          <div className="max-w-5xl mx-auto px-6">

            <img
              src={flotte}
              alt="Gestion de flotte automobile par GPS à Kinshasa et en RDC"
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
              Gérer plusieurs véhicules à Kinshasa ou dans différentes
              régions de la République Démocratique du Congo peut rapidement
              devenir complexe. Les responsables doivent suivre les
              déplacements, organiser les missions, contrôler les coûts,
              surveiller l’état des véhicules et disposer d’informations
              fiables pour prendre de meilleures décisions. Les solutions
              GPS et de télématique permettent de centraliser une grande
              partie de ces données.
            </p>

            {/* ================================= */}
            {/* SECTION 1 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Qu’est-ce que la gestion de flotte automobile ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              La gestion de flotte regroupe les méthodes et outils utilisés
              pour superviser les véhicules d’une entreprise ou d’une
              organisation. Elle peut concerner la géolocalisation,
              les déplacements, l’utilisation des véhicules, la maintenance,
              le carburant, la sécurité et l’analyse des performances.
            </p>

            {/* ================================= */}
            {/* SECTION 2 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Centraliser les informations de votre flotte
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Une plateforme GPS professionnelle peut regrouper différentes
              informations dans une seule interface afin de faciliter
              le travail des responsables de flotte.
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Position des véhicules.
              </li>

              <li>
                Historique des déplacements.
              </li>

              <li>
                Temps de déplacement et temps d’arrêt.
              </li>

              <li>
                Alertes et événements.
              </li>

              <li>
                Distances parcourues.
              </li>

              <li>
                Rapports d’activité.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 3 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Suivre les véhicules en temps réel
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              La géolocalisation permet aux gestionnaires de connaître
              la position des véhicules équipés et de disposer d’une vue
              plus claire sur les opérations en cours. Cette visibilité
              peut être particulièrement utile pour les entreprises
              disposant de plusieurs équipes mobiles ou de véhicules
              circulant sur différents itinéraires.
            </p>

            {/* ================================= */}
            {/* SECTION 4 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Réduire les coûts d’exploitation
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Les données collectées peuvent aider à identifier certains
              comportements ou situations qui augmentent les dépenses
              d’exploitation.
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Déplacements inutiles.
              </li>

              <li>
                Itinéraires inefficaces.
              </li>

              <li>
                Temps d’arrêt prolongés.
              </li>

              <li>
                Utilisation non autorisée d’un véhicule.
              </li>

              <li>
                Consommation excessive de carburant.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 5 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Améliorer la sécurité de la flotte
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Selon la solution installée, une plateforme GPS peut fournir
              différentes alertes permettant au responsable de détecter
              certains événements inhabituels.
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Dépassement d’une vitesse définie.
              </li>

              <li>
                Entrée ou sortie d’une zone géographique.
              </li>

              <li>
                Mouvement à un moment inhabituel.
              </li>

              <li>
                Trajet non prévu.
              </li>

              <li>
                Autres événements configurés selon la solution.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 6 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Faciliter la maintenance des véhicules
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Les kilomètres parcourus et, selon les équipements disponibles,
              certaines données d’utilisation peuvent servir de base pour
              organiser les opérations de maintenance. Les responsables
              peuvent ainsi mieux planifier les entretiens et conserver
              un historique plus structuré de leur parc automobile.
            </p>

            {/* ================================= */}
            {/* SECTION 7 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Utiliser les rapports pour mieux piloter la flotte
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Les rapports permettent de transformer les données GPS
              en informations plus faciles à analyser. Le gestionnaire
              peut comparer les véhicules, observer les tendances et
              identifier certains points à améliorer.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Suivi des déplacements
                </h3>

                <p className="text-gray-700 leading-7">
                  Analysez les trajets effectués et consultez
                  les historiques de vos véhicules.
                </p>

              </article>

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Analyse des arrêts
                </h3>

                <p className="text-gray-700 leading-7">
                  Identifiez les périodes d’arrêt et leur durée afin
                  de mieux comprendre l’utilisation des véhicules.
                </p>

              </article>

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Suivi des distances
                </h3>

                <p className="text-gray-700 leading-7">
                  Consultez les kilomètres parcourus par chaque véhicule
                  sur une période donnée.
                </p>

              </article>

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Analyse des alertes
                </h3>

                <p className="text-gray-700 leading-7">
                  Retrouvez les différents événements enregistrés
                  afin d’identifier les situations nécessitant une attention.
                </p>

              </article>

            </div>

            {/* ================================= */}
            {/* SECTION 8 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Gestion de flotte à Kinshasa
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              À Kinshasa, les besoins de gestion de flotte concernent
              de nombreux secteurs : transport, logistique, distribution,
              BTP, location de véhicules, institutions, ONG et entreprises
              disposant d’équipes mobiles. Une plateforme GPS centralisée
              permet de disposer d’une meilleure visibilité sur des véhicules
              qui circulent quotidiennement dans différentes zones de la ville.
            </p>

            {/* ================================= */}
            {/* SECTION 9 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Gestion de flotte en République Démocratique du Congo
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Pour les entreprises dont les véhicules opèrent sur plusieurs
              sites ou dans différentes régions de la RDC, la centralisation
              des données facilite le suivi de la flotte depuis une même
              plateforme. Les responsables peuvent ainsi conserver une
              meilleure visibilité sur les déplacements et l’utilisation
              de leurs véhicules.
            </p>

            {/* ================================= */}
            {/* SECTION 10 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir HESABU pour la gestion de votre flotte ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              HESABU SARLU accompagne les entreprises, institutions,
              transporteurs et particuliers dans la mise en place de
              solutions GPS, de télématique et de gestion de flotte
              à Kinshasa et en République Démocratique du Congo.
            </p>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              La solution peut être adaptée au nombre de véhicules,
              au type de flotte et aux fonctionnalités recherchées,
              notamment le suivi GPS, les alertes, l’historique
              des déplacements ou le suivi du carburant.
            </p>

            {/* ================================= */}
            {/* MAILLAGE INTERNE */}
            {/* ================================= */}

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mb-12">

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Approfondir la gestion de votre flotte
              </h2>

              <div className="flex flex-col gap-4">

                <Link
                  to="/solutions"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir nos solutions de gestion de flotte
                </Link>

                <Link
                  to="/services"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir nos services GPS à Kinshasa et en RDC
                </Link>

                <Link
                  to="/ressources/gps-professionnel"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Lire notre guide sur le GPS professionnel
                </Link>

                <Link
                  to="/ressources/reduire-couts-gps-sonde-carburant"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir comment mieux contrôler le carburant
                </Link>

                <Link
                  to="/ressources/securite-anti-vol"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir les solutions GPS pour la sécurité des véhicules
                </Link>

              </div>

            </div>

            {/* ================================= */}
            {/* CTA */}
            {/* ================================= */}

            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-10 text-center text-white">

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin d’améliorer la gestion de votre flotte ?
              </h2>

              <p className="text-lg md:text-xl text-red-100 mb-8 leading-8">
                HESABU vous accompagne dans la mise en place d’une solution
                GPS et de gestion de flotte adaptée à vos véhicules,
                à votre activité et à vos besoins à Kinshasa et en RDC.
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
                Demander un devis gestion de flotte
              </Link>

            </div>

          </div>

        </article>

      </main>

      <Footer />
    </>
  );
}

export default ArticleFlotte;
