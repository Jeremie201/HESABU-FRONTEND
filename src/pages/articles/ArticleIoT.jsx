import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import iot from "../../assets/blog/iot.png";

function ArticleIoT() {
  return (
    <>
      <SEO
        title="L'IoT au service de la gestion intelligente de flotte | HESABU SARLU"
        description="Découvrez comment l'Internet des Objets (IoT) transforme la gestion des véhicules grâce aux capteurs intelligents, au GPS et à la télématique embarquée."
        keywords="IoT, Internet des Objets, télématique, GPS, véhicules connectés, gestion de flotte, HESABU RDC"
        url="https://hesabudrc.com/ressources/iot-gestion-flotte"
      />

      <Navbar />

      {/* HERO */}

      <section
        className="
          bg-gradient-to-br
          from-red-700
          via-red-600
          to-black
          text-white
          py-24
        "
      >
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[4px] text-red-200 font-semibold">
            Centre de Ressources
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            L'IoT au service de la gestion intelligente de flotte
          </h1>

          <p className="text-xl text-red-100 mt-8 leading-8">
            Découvrez comment les objets connectés révolutionnent
            la gestion des véhicules et permettent aux entreprises
            de gagner en efficacité.
          </p>

        </div>
      </section>

      {/* IMAGE */}

      <section className="py-16 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <img
            src={iot}
            alt="IoT et véhicules connectés"
            className="rounded-3xl shadow-2xl w-full"
          />

        </div>

      </section>

      {/* CONTENU */}

      <section className="py-10 bg-white">

        <div className="max-w-4xl mx-auto px-6">

          <p className="text-xl text-gray-700 leading-9 mb-10">
            L'Internet des Objets (IoT) transforme progressivement
            le secteur du transport et de la gestion de flotte.
            Grâce aux capteurs intelligents connectés aux véhicules,
            les entreprises disposent désormais d'informations
            précises en temps réel pour optimiser leurs opérations.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Qu'est-ce que l'IoT ?
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            L'Internet des Objets désigne l'ensemble des équipements
            capables de collecter et transmettre automatiquement
            des données via Internet. Dans une flotte automobile,
            ces objets communiquent avec la plateforme GPS afin
            d'améliorer le suivi des véhicules.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Des véhicules plus intelligents
          </h2>

          <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
            <li>Suivi GPS en temps réel.</li>
            <li>Surveillance du carburant.</li>
            <li>Détection des comportements de conduite.</li>
            <li>Alertes automatiques.</li>
            <li>Maintenance préventive.</li>
          </ul>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Une meilleure prise de décision
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Les données collectées permettent aux gestionnaires
            d'identifier rapidement les anomalies, d'optimiser les
            déplacements et de réduire les coûts liés au carburant,
            à la maintenance et aux immobilisations.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Une technologie adaptée à tous les secteurs
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Les solutions IoT sont utilisées dans le transport,
            la logistique, les mines, le BTP, les administrations,
            les ONG et toutes les entreprises possédant des
            véhicules ou des équipements mobiles.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pourquoi choisir HESABU ?
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            HESABU SARLU accompagne les entreprises dans leur
            transformation numérique grâce à des solutions GPS,
            IoT et de télématique embarquée adaptées aux réalités
            africaines. Nos équipes assurent l'installation,
            la configuration et le suivi de vos équipements afin
            d'améliorer durablement vos performances.
          </p>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-10 text-center text-white">

            <h2 className="text-4xl font-bold mb-6">
              Passez à la flotte connectée
            </h2>

            <p className="text-xl text-red-100 mb-8">
              Découvrez comment les solutions IoT de HESABU
              peuvent améliorer la performance de votre activité.
            </p>

            <a
              href="/devis"
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
              "
            >
              Demander un devis
            </a>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ArticleIoT;