import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import securite from "../../assets/blog/securite.png";

function ArticleVol() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      "GPS anti-vol à Kinshasa et en RDC : comment mieux sécuriser vos véhicules ?",

    description:
      "Découvrez comment les solutions GPS peuvent aider à renforcer la sécurité des véhicules à Kinshasa et en RDC grâce à la géolocalisation, aux alertes et au suivi à distance.",

    image:
      "https://hesabudrc.com/hesabusend.png",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://hesabudrc.com/ressources/securite-anti-vol",
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
        title="GPS Anti-Vol à Kinshasa et en RDC | Sécurité Véhicule HESABU"
        description="Découvrez comment sécuriser vos véhicules à Kinshasa et en RDC grâce au GPS : géolocalisation, alertes, historique des trajets et solutions de protection pour particuliers et flottes."
        keywords="GPS anti-vol Kinshasa, sécurité véhicule Kinshasa, GPS anti-vol RDC, géolocalisation véhicule volé, protection véhicule RDC, sécurité flotte automobile, tracking GPS Kinshasa, HESABU"
        image="https://hesabudrc.com/hesabusend.png"
        url="https://hesabudrc.com/ressources/securite-anti-vol"
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
          aria-labelledby="article-securite-title"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">

            <span className="uppercase tracking-[4px] text-red-200 font-semibold">
              Guide Sécurité Automobile • HESABU
            </span>

            <h1
              id="article-securite-title"
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                mt-6
                leading-tight
              "
            >
              GPS Anti-Vol
              <br />
              à Kinshasa et en RDC :
              <br />
              sécuriser vos véhicules
            </h1>

            <p className="text-lg md:text-xl text-red-100 mt-8 leading-8 max-w-4xl mx-auto">
              Découvrez comment la géolocalisation GPS, les alertes
              et l’historique des déplacements peuvent contribuer
              à renforcer la surveillance des véhicules particuliers,
              professionnels et des flottes automobiles.
            </p>

          </div>
        </section>

        {/* ================================= */}
        {/* IMAGE */}
        {/* ================================= */}

        <section className="py-16 bg-white">

          <div className="max-w-5xl mx-auto px-6">

            <img
              src={securite}
              alt="Solution GPS anti-vol pour sécuriser les véhicules à Kinshasa et en RDC"
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
              La sécurité d’un véhicule ne dépend pas uniquement des
              dispositifs mécaniques ou des habitudes du conducteur.
              À Kinshasa comme ailleurs en République Démocratique du Congo,
              une solution GPS peut apporter une visibilité supplémentaire
              en permettant de suivre la position d’un véhicule, consulter
              ses déplacements et recevoir certaines alertes selon
              les fonctionnalités installées.
            </p>

            {/* ================================= */}
            {/* SECTION 1 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comment un GPS peut-il renforcer la sécurité d’un véhicule ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Un dispositif GPS installé sur un véhicule transmet des
              informations de position vers une plateforme de suivi.
              Le propriétaire ou le gestionnaire de flotte peut ainsi
              connaître la localisation du véhicule et consulter différents
              événements enregistrés par le système.
            </p>

            {/* ================================= */}
            {/* SECTION 2 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Localiser un véhicule à distance
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              La géolocalisation permet de visualiser la position transmise
              par le dispositif GPS depuis une plateforme web ou mobile.
              En cas de déplacement inhabituel ou de disparition du véhicule,
              ces informations peuvent aider le propriétaire à mieux
              comprendre sa dernière position connue et son itinéraire.
            </p>

            {/* ================================= */}
            {/* SECTION 3 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recevoir des alertes de sécurité
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Selon le matériel installé et la configuration choisie,
              une plateforme GPS peut générer différentes alertes lorsque
              certaines conditions sont détectées.
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Sortie d’une zone géographique définie.
              </li>

              <li>
                Déplacement pendant une période inhabituelle.
              </li>

              <li>
                Dépassement d’une vitesse configurée.
              </li>

              <li>
                Entrée dans une zone définie.
              </li>

              <li>
                Certains événements liés au dispositif GPS.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 4 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Consulter l’historique des déplacements
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              L’historique GPS permet de consulter les trajets enregistrés
              sur une période donnée. Cette fonctionnalité peut être utile
              pour vérifier les déplacements d’un véhicule, identifier
              certaines étapes du trajet ou analyser une utilisation
              inhabituelle.
            </p>

            {/* ================================= */}
            {/* SECTION 5 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Immobilisation à distance selon l’équipement installé
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Certaines installations GPS peuvent être associées à un relais
              permettant une commande d’immobilisation du véhicule.
              Cette fonctionnalité dépend du véhicule, du matériel installé
              et des conditions de sécurité. Elle doit être utilisée
              conformément aux procédures prévues pour éviter toute situation
              dangereuse pendant la circulation.
            </p>

            {/* ================================= */}
            {/* SECTION 6 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sécuriser plusieurs véhicules depuis une seule plateforme
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Pour une entreprise disposant de plusieurs véhicules,
              la plateforme GPS permet de centraliser leur suivi dans
              une même interface. Le responsable peut ainsi consulter
              la position, l’historique et les alertes de chaque unité.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Géolocalisation GPS
                </h3>

                <p className="text-gray-700 leading-7">
                  Consultez la position des véhicules équipés depuis
                  une plateforme centralisée.
                </p>

              </article>

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Alertes configurables
                </h3>

                <p className="text-gray-700 leading-7">
                  Recevez des notifications lorsque certains événements
                  ou conditions configurées sont détectés.
                </p>

              </article>

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Historique des trajets
                </h3>

                <p className="text-gray-700 leading-7">
                  Consultez les déplacements enregistrés pour mieux
                  comprendre l’utilisation de chaque véhicule.
                </p>

              </article>

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Gestion centralisée
                </h3>

                <p className="text-gray-700 leading-7">
                  Suivez plusieurs véhicules depuis une même interface
                  lorsque vous gérez une flotte automobile.
                </p>

              </article>

            </div>

            {/* ================================= */}
            {/* SECTION 7 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              GPS anti-vol pour véhicules à Kinshasa
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              À Kinshasa, une solution GPS peut être utilisée pour
              des voitures particulières, véhicules professionnels,
              motos, pickups, camionnettes, camions ou autres véhicules
              compatibles. Elle offre au propriétaire ou à l’entreprise
              un moyen supplémentaire de surveiller les déplacements
              depuis une plateforme accessible à distance.
            </p>

            {/* ================================= */}
            {/* SECTION 8 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sécurité GPS pour les flottes en RDC
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Pour une flotte qui circule dans différentes zones de la
              République Démocratique du Congo, la centralisation des
              informations GPS permet aux responsables de conserver une
              meilleure visibilité sur leurs véhicules et les déplacements
              enregistrés.
            </p>

            {/* ================================= */}
            {/* SECTION 9 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir HESABU pour sécuriser vos véhicules ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              HESABU SARLU accompagne les particuliers, entreprises,
              institutions et gestionnaires de flotte dans la mise en place
              de solutions GPS à Kinshasa et en République Démocratique
              du Congo.
            </p>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Selon la solution et le matériel choisis, les fonctionnalités
              peuvent inclure la géolocalisation, les historiques,
              différentes alertes et certaines options complémentaires
              destinées au suivi et à la sécurité du véhicule.
            </p>

            {/* ================================= */}
            {/* MAILLAGE INTERNE */}
            {/* ================================= */}

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mb-12">

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                En savoir plus sur les solutions GPS HESABU
              </h2>

              <div className="flex flex-col gap-4">

                <Link
                  to="/services"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir nos services GPS et de sécurité automobile
                </Link>

                <Link
                  to="/solutions"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir nos solutions GPS pour véhicules et flottes
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

                <Link
                  to="/ressources/reduire-couts-gps-sonde-carburant"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir le suivi GPS et le contrôle du carburant
                </Link>

              </div>

            </div>

            {/* ================================= */}
            {/* CTA */}
            {/* ================================= */}

            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-10 text-center text-white">

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin de mieux sécuriser vos véhicules ?
              </h2>

              <p className="text-lg md:text-xl text-red-100 mb-8 leading-8">
                HESABU vous accompagne dans le choix d’une solution GPS
                adaptée à votre véhicule ou à votre flotte à Kinshasa
                et en RDC.
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

export default ArticleVol;
