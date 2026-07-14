import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import flotte from "../../assets/blog/flotte.png";

function ArticleFlotte() {
  return (
    <>
      <SEO
        title="Comment optimiser la gestion de votre flotte automobile ? | HESABU SARLU"
        description="Découvrez les meilleures pratiques pour optimiser la gestion de votre flotte automobile grâce aux solutions GPS, à la télématique embarquée et aux rapports intelligents."
        keywords="gestion flotte, flotte automobile, GPS flotte, télématique, optimisation flotte, HESABU RDC"
        url="https://hesabudrc.com/ressources/optimiser-gestion-flotte-automobile"
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
            Comment optimiser la gestion de votre flotte automobile ?
          </h1>

          <p className="text-xl text-red-100 mt-8 leading-8">
            Une flotte bien gérée permet de réduire les coûts,
            d'améliorer la productivité et d'offrir un meilleur
            service à vos clients.
          </p>

        </div>
      </section>

      {/* IMAGE */}

      <section className="py-16 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <img
            src={flotte}
            alt="Gestion intelligente de flotte"
            className="rounded-3xl shadow-2xl w-full"
          />

        </div>

      </section>

      {/* CONTENU */}

      <section className="py-10 bg-white">

        <div className="max-w-4xl mx-auto px-6">

          <p className="text-xl text-gray-700 leading-9 mb-10">
            La gestion d'une flotte automobile ne consiste plus seulement
            à suivre des véhicules. Aujourd'hui, les entreprises ont besoin
            d'informations précises pour optimiser leurs opérations,
            maîtriser leurs dépenses et améliorer la sécurité de leurs équipes.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Centraliser toutes les informations
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Une plateforme GPS moderne regroupe les positions des véhicules,
            les historiques de trajets, les temps d'arrêt, les alertes,
            les consommations et les rapports dans une seule interface.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Réduire les dépenses opérationnelles
          </h2>

          <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
            <li>Réduction de la consommation de carburant.</li>
            <li>Moins de kilomètres inutiles.</li>
            <li>Diminution des temps d'arrêt.</li>
            <li>Optimisation des interventions.</li>
            <li>Meilleure planification des missions.</li>
          </ul>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Améliorer la sécurité
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Les alertes automatiques permettent de détecter les excès
            de vitesse, les sorties de zone ou les mouvements inhabituels.
            Les gestionnaires peuvent ainsi intervenir rapidement et protéger
            leurs véhicules.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Simplifier la maintenance
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Grâce aux kilomètres parcourus et aux heures de fonctionnement,
            il devient facile de programmer les entretiens préventifs et
            d'éviter les pannes coûteuses.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Des décisions basées sur les données
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Les tableaux de bord et les rapports offrent une vision claire
            des performances de chaque véhicule. Les responsables disposent
            ainsi d'indicateurs fiables pour améliorer continuellement
            l'efficacité de leur flotte.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pourquoi choisir HESABU ?
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            HESABU SARLU propose des solutions complètes de gestion de flotte
            adaptées aux entreprises de toutes tailles. Nos technologies GPS,
            nos outils de télématique et notre accompagnement permettent
            d'optimiser durablement les performances de vos véhicules.
          </p>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-10 text-center text-white">

            <h2 className="text-4xl font-bold mb-6">
              Optimisez votre flotte dès aujourd'hui
            </h2>

            <p className="text-xl text-red-100 mb-8">
              Contactez HESABU pour mettre en place une solution adaptée
              à votre activité.
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

export default ArticleFlotte;