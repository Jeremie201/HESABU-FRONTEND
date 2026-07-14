import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import gps from "../../assets/blog/gps.png";

function ArticleGPS() {
  return (
    <>
      <SEO
        title="Pourquoi installer un GPS sur vos véhicules professionnels ? | HESABU SARLU"
        description="Découvrez pourquoi la géolocalisation GPS est devenue indispensable pour les entreprises souhaitant améliorer la sécurité, réduire les coûts et optimiser la gestion de leur flotte."
        keywords="GPS, géolocalisation, flotte automobile, suivi véhicules, GPS entreprise, HESABU, RDC"
        url="https://hesabudrc.com/ressources/pourquoi-installer-gps-vehicules"
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
            Pourquoi installer un GPS sur vos véhicules professionnels ?
          </h1>

          <p className="text-xl text-red-100 mt-8 leading-8">
            Découvrez comment la géolocalisation GPS permet aux entreprises
            de sécuriser leurs véhicules, d'améliorer leur productivité
            et de réduire leurs coûts d'exploitation.
          </p>

        </div>
      </section>

      {/* IMAGE */}

      <section className="py-16 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <img
            src={gps}
            alt="GPS professionnel"
            className="rounded-3xl shadow-2xl w-full"
          />

        </div>

      </section>

      {/* CONTENU */}

      <section className="py-10 bg-white">

        <div className="max-w-4xl mx-auto px-6">

          <p className="text-xl text-gray-700 leading-9 mb-10">
            Aujourd'hui, la géolocalisation GPS est devenue un outil
            indispensable pour les entreprises disposant d'un ou de
            plusieurs véhicules. Au-delà du simple suivi en temps réel,
            cette technologie améliore la sécurité, optimise les trajets
            et fournit des données essentielles pour une meilleure prise
            de décision.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Une visibilité en temps réel
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Grâce au GPS, chaque véhicule peut être localisé à tout
            moment. Les responsables de flotte savent où se trouvent
            leurs équipes et peuvent intervenir rapidement en cas
            d'urgence ou de changement de planning.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Une meilleure gestion des trajets
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Les itinéraires sont optimisés afin de réduire les distances
            parcourues, les temps de déplacement et la consommation de
            carburant. Cette optimisation améliore la qualité du service
            rendu aux clients tout en réduisant les coûts.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Plus de sécurité pour vos véhicules
          </h2>

          <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
            <li>Localisation immédiate en cas de vol.</li>
            <li>Historique complet des déplacements.</li>
            <li>Alertes de vitesse.</li>
            <li>Alertes de sortie de zone.</li>
            <li>Immobilisation à distance selon les équipements.</li>
          </ul>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Des rapports détaillés
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Les plateformes GPS génèrent automatiquement des rapports
            sur les kilomètres parcourus, les temps d'arrêt, les heures
            de fonctionnement et les performances de chaque véhicule.
            Ces informations facilitent la gestion quotidienne de la
            flotte.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pourquoi choisir HESABU ?
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            HESABU SARLU accompagne les entreprises, les particuliers
            et les administrations dans le déploiement de solutions GPS
            performantes adaptées aux réalités de la RDC. Nos solutions
            permettent un suivi fiable, sécurisé et accessible depuis
            un ordinateur ou un smartphone.
          </p>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-10 text-center text-white">

            <h2 className="text-4xl font-bold mb-6">
              Passez à la géolocalisation intelligente
            </h2>

            <p className="text-xl text-red-100 mb-8">
              Nos experts vous accompagnent dans le choix de la solution
              GPS la mieux adaptée à votre activité.
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

export default ArticleGPS;