import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import iot from "../../assets/blog/iot.png";

function ArticleIoT() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      "IoT et gestion de flotte à Kinshasa et en RDC : vers des véhicules connectés",

    description:
      "Découvrez comment l’IoT, le GPS et la télématique permettent de connecter les véhicules, centraliser les données et améliorer la gestion de flotte à Kinshasa et en RDC.",

    image:
      "https://hesabudrc.com/hesabusend.png",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://hesabudrc.com/ressources/iot-gestion-flotte",
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
        title="IoT et Gestion de Flotte à Kinshasa et en RDC | HESABU"
        description="Découvrez comment l’IoT, le GPS et la télématique permettent de connecter les véhicules, centraliser les données et améliorer la gestion de flotte à Kinshasa et en RDC."
        keywords="IoT Kinshasa, IoT RDC, gestion de flotte IoT, télématique Kinshasa, télématique RDC, véhicules connectés RDC, GPS IoT, flotte connectée, HESABU"
        image="https://hesabudrc.com/hesabusend.png"
        url="https://hesabudrc.com/ressources/iot-gestion-flotte"
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
          aria-labelledby="article-iot-title"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">

            <span className="uppercase tracking-[4px] text-red-200 font-semibold">
              Guide IoT & Télématique • HESABU
            </span>

            <h1
              id="article-iot-title"
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                mt-6
                leading-tight
              "
            >
              IoT et Gestion de Flotte
              <br />
              à Kinshasa et en RDC :
              <br />
              des véhicules connectés
            </h1>

            <p className="text-lg md:text-xl text-red-100 mt-8 leading-8 max-w-4xl mx-auto">
              Découvrez comment l’Internet des Objets, le GPS et la
              télématique peuvent aider les entreprises à connecter
              leurs véhicules, centraliser leurs données et mieux
              piloter leurs opérations.
            </p>

          </div>
        </section>

        {/* ================================= */}
        {/* IMAGE */}
        {/* ================================= */}

        <section className="py-16 bg-white">

          <div className="max-w-5xl mx-auto px-6">

            <img
              src={iot}
              alt="IoT télématique et véhicules connectés pour la gestion de flotte à Kinshasa et en RDC"
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
              La gestion de flotte évolue avec l’arrivée des véhicules
              connectés et des technologies IoT. À Kinshasa comme dans
              le reste de la République Démocratique du Congo, les
              entreprises peuvent utiliser des dispositifs GPS, des
              capteurs et des équipements télématiques pour collecter
              des informations utiles sur leurs véhicules et leurs
              opérations.
            </p>

            {/* ================================= */}
            {/* SECTION 1 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Qu’est-ce que l’IoT ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              L’Internet des Objets, ou IoT, désigne des équipements
              capables de collecter, transmettre ou recevoir des données
              grâce à une connexion réseau. Dans le domaine automobile
              et de la gestion de flotte, ces équipements peuvent être
              associés à des véhicules afin de transmettre différentes
              informations vers une plateforme de suivi.
            </p>

            {/* ================================= */}
            {/* SECTION 2 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comment l’IoT s’intègre à une flotte de véhicules ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Selon les équipements installés, un véhicule peut transmettre
              plusieurs types de données permettant au gestionnaire
              d’obtenir une meilleure visibilité sur son fonctionnement
              et son utilisation.
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Position GPS du véhicule.
              </li>

              <li>
                Historique des déplacements.
              </li>

              <li>
                Temps de déplacement et d’arrêt.
              </li>

              <li>
                Alertes configurées sur la plateforme.
              </li>

              <li>
                Informations liées au carburant selon les équipements.
              </li>

              <li>
                Certaines données techniques selon les dispositifs installés.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 3 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              IoT, GPS et télématique : quelle différence ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Ces technologies sont liées, mais elles ne désignent pas
              exactement la même chose.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-xl font-bold text-red-700 mb-3">
                  GPS
                </h3>

                <p className="text-gray-700 leading-7">
                  Le GPS permet notamment de déterminer la position
                  géographique d’un véhicule équipé.
                </p>

              </article>

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-xl font-bold text-red-700 mb-3">
                  Télématique
                </h3>

                <p className="text-gray-700 leading-7">
                  La télématique combine télécommunications et données
                  provenant du véhicule ou d’équipements connectés.
                </p>

              </article>

              <article className="bg-red-50 rounded-2xl p-6">

                <h3 className="text-xl font-bold text-red-700 mb-3">
                  IoT
                </h3>

                <p className="text-gray-700 leading-7">
                  L’IoT permet à différents équipements connectés
                  de collecter et d’échanger des données.
                </p>

              </article>

            </div>

            {/* ================================= */}
            {/* SECTION 4 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Centraliser les données d’une flotte connectée
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              L’un des principaux intérêts d’une solution télématique
              est de rassembler différentes informations dans une seule
              plateforme. Le responsable de flotte peut ainsi consulter
              les véhicules, leurs déplacements, certains événements
              et les rapports disponibles sans multiplier les outils.
            </p>

            {/* ================================= */}
            {/* SECTION 5 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Améliorer le suivi des opérations
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Les données collectées par les équipements connectés
              peuvent aider les responsables à mieux comprendre le
              fonctionnement quotidien de leur flotte.
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Suivre les trajets effectués.
              </li>

              <li>
                Identifier certains temps d’arrêt.
              </li>

              <li>
                Vérifier l’utilisation des véhicules.
              </li>

              <li>
                Consulter différents événements enregistrés.
              </li>

              <li>
                Comparer les données sur plusieurs périodes.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 6 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              IoT et maintenance de flotte
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Selon le véhicule et les équipements connectés disponibles,
              certaines données peuvent également contribuer au suivi
              de la maintenance. Les kilomètres parcourus, les heures
              d’utilisation ou d’autres informations techniques peuvent
              aider les responsables à planifier plus efficacement
              certaines interventions.
            </p>

            {/* ================================= */}
            {/* SECTION 7 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              IoT et suivi du carburant
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Des capteurs ou systèmes compatibles peuvent être associés
              à une solution télématique pour transmettre des informations
              liées au carburant. Ces données peuvent ensuite être
              consultées avec les informations GPS afin de mieux analyser
              l’utilisation des véhicules.
            </p>

            {/* ================================= */}
            {/* SECTION 8 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quels secteurs peuvent utiliser l’IoT pour leurs véhicules ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Les technologies connectées peuvent être utiles dans
              différents secteurs utilisant des véhicules, des engins
              ou des équipements mobiles.
            </p>

            <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
              <li>
                Transport et logistique.
              </li>

              <li>
                Distribution.
              </li>

              <li>
                BTP et construction.
              </li>

              <li>
                Agriculture.
              </li>

              <li>
                Institutions et administrations.
              </li>

              <li>
                ONG et organisations disposant de véhicules.
              </li>

              <li>
                Entreprises possédant une flotte automobile.
              </li>
            </ul>

            {/* ================================= */}
            {/* SECTION 9 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              IoT et télématique pour les entreprises à Kinshasa
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              À Kinshasa, les entreprises disposant de véhicules peuvent
              utiliser les technologies GPS et IoT pour centraliser
              davantage d’informations sur leurs opérations. Cette
              approche peut être particulièrement utile lorsqu’une flotte
              comprend plusieurs véhicules ou équipes mobiles réparties
              dans différentes zones de la ville.
            </p>

            {/* ================================= */}
            {/* SECTION 10 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Des flottes connectées en République Démocratique du Congo
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Pour les entreprises opérant sur plusieurs sites ou dans
              différentes régions de la RDC, une plateforme télématique
              permet de regrouper les informations provenant de véhicules
              équipés dans une même interface. La disponibilité des données
              dépend naturellement des équipements, de leur configuration
              et des conditions de communication.
            </p>

            {/* ================================= */}
            {/* SECTION 11 */}
            {/* ================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir HESABU pour vos solutions IoT et télématiques ?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              HESABU SARLU accompagne les entreprises, institutions,
              transporteurs et gestionnaires de flotte dans la mise
              en place de solutions GPS, IoT et télématiques à Kinshasa
              et en République Démocratique du Congo.
            </p>

            <p className="text-lg text-gray-700 leading-8 mb-10">
              Les solutions peuvent être adaptées au type de véhicules,
              au nombre d’unités et aux fonctionnalités recherchées,
              notamment la géolocalisation, les alertes, les rapports,
              le suivi du carburant ou d’autres équipements compatibles.
            </p>

            {/* ================================= */}
            {/* MAILLAGE INTERNE */}
            {/* ================================= */}

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mb-12">

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Approfondir la gestion de flotte connectée
              </h2>

              <div className="flex flex-col gap-4">

                <Link
                  to="/solutions"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir nos solutions GPS, IoT et de gestion de flotte
                </Link>

                <Link
                  to="/services"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir les services HESABU à Kinshasa et en RDC
                </Link>

                <Link
                  to="/ressources/gps-professionnel"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Comprendre le GPS professionnel
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
                  → Découvrir le GPS et le suivi du carburant
                </Link>

                <Link
                  to="/ressources/securite-anti-vol"
                  className="text-red-600 font-semibold hover:underline"
                >
                  → Découvrir le GPS pour la sécurité des véhicules
                </Link>

              </div>

            </div>

            {/* ================================= */}
            {/* CTA */}
            {/* ================================= */}

            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-10 text-center text-white">

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Passez à une flotte plus connectée
              </h2>

              <p className="text-lg md:text-xl text-red-100 mb-8 leading-8">
                HESABU vous accompagne dans le choix d’une solution GPS,
                IoT et télématique adaptée à vos véhicules et à vos
                opérations à Kinshasa et en RDC.
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
                Demander un devis IoT et GPS
              </Link>

            </div>

          </div>

        </article>

      </main>

      <Footer />
    </>
  );
}

export default ArticleIoT;
