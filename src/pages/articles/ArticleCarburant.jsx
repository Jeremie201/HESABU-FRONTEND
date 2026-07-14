import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import carburant from "../../assets/blog/carburant.png";

function ArticleCarburant() {
  return (
    <>
      <SEO
        title="Comment réduire les coûts grâce au GPS et à la sonde de carburant | HESABU SARLU"
        description="Découvrez comment le GPS et la sonde de carburant permettent de réduire les coûts d'exploitation, de limiter les pertes et d'optimiser la gestion de votre flotte."
        keywords="GPS, sonde carburant, gestion flotte, consommation carburant, télématique, HESABU, RDC"
        url="https://hesabudrc.com/ressources/reduire-couts-gps-sonde-carburant"
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
            Comment réduire les coûts grâce au GPS et à la sonde de carburant
          </h1>

          <p className="text-xl text-red-100 mt-8 leading-8">
            Découvrez comment les entreprises réduisent leurs dépenses
            d'exploitation grâce aux solutions GPS intelligentes
            et au suivi précis du carburant.
          </p>

        </div>
      </section>

      {/* IMAGE */}

      <section className="py-16 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <img
            src={carburant}
            alt="GPS et sonde de carburant"
            className="rounded-3xl shadow-2xl w-full"
          />

        </div>

      </section>

      {/* CONTENU */}

      <section className="py-10 bg-white">

        <div className="max-w-4xl mx-auto px-6">

          <p className="text-xl text-gray-700 leading-9 mb-10">
            Pour de nombreuses entreprises, le carburant représente l'un des
            postes de dépenses les plus importants. Une consommation excessive,
            les détournements de carburant, les trajets inutiles et les longues
            périodes de ralenti peuvent entraîner des pertes financières
            considérables. Heureusement, les technologies GPS associées aux
            sondes de carburant permettent aujourd'hui de mieux contrôler ces
            dépenses et d'améliorer durablement la rentabilité d'une flotte.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pourquoi les coûts de carburant augmentent-ils ?
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-8">
            Plusieurs facteurs expliquent l'augmentation des dépenses liées au
            carburant. Les itinéraires mal optimisés, les ralentis moteur
            prolongés, les comportements de conduite inadaptés ou encore les
            prélèvements non autorisés peuvent générer des pertes importantes
            sans que le gestionnaire de flotte ne s'en aperçoive immédiatement.
          </p>

          <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
            <li>Déviations non autorisées.</li>
            <li>Ralenti moteur excessif.</li>
            <li>Consommation anormalement élevée.</li>
            <li>Vol ou détournement de carburant.</li>
            <li>Mauvaise planification des trajets.</li>
          </ul>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Le rôle du GPS dans la réduction des coûts
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-8">
            Une solution GPS moderne permet de suivre les véhicules en temps
            réel, d'analyser les itinéraires, de détecter les arrêts prolongés
            et de produire des rapports détaillés. Ces informations permettent
            aux responsables de flotte de prendre des décisions basées sur des
            données fiables et d'améliorer l'efficacité opérationnelle.
          </p>

          <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
            <li>Suivi des déplacements en temps réel.</li>
            <li>Optimisation des itinéraires.</li>
            <li>Analyse des temps d'arrêt.</li>
            <li>Rapports automatiques d'activité.</li>
            <li>Alertes en cas d'anomalie.</li>
          </ul>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comment fonctionne une sonde de carburant ?
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-8">
            Une sonde de carburant est installée directement dans le
            réservoir du véhicule. Elle mesure avec précision le niveau
            réel de carburant et transmet ces informations au système GPS.
            Les données sont accessibles en temps réel depuis une
            plateforme web ou mobile permettant de suivre chaque variation
            du niveau de carburant.
          </p>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Cette technologie permet d'identifier immédiatement les
            ravitaillements, les consommations normales ainsi que les
            baisses anormales pouvant révéler un vol ou une fuite. Les
            responsables de flotte disposent ainsi d'une visibilité
            complète sur les dépenses liées au carburant.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Les bénéfices pour votre entreprise
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-red-700 mb-3">
                Réduction des dépenses
              </h3>

              <p className="text-gray-700 leading-7">
                Limitez les consommations inutiles et identifiez rapidement
                les anomalies qui augmentent vos coûts d'exploitation.
              </p>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-red-700 mb-3">
                Lutte contre le vol
              </h3>

              <p className="text-gray-700 leading-7">
                Détectez immédiatement les prélèvements non autorisés
                grâce aux alertes automatiques.
              </p>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-red-700 mb-3">
                Productivité accrue
              </h3>

              <p className="text-gray-700 leading-7">
                Optimisez les trajets, réduisez les temps d'arrêt et
                améliorez l'efficacité globale de votre flotte.
              </p>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-red-700 mb-3">
                Rapports détaillés
              </h3>

              <p className="text-gray-700 leading-7">
                Prenez vos décisions grâce à des données fiables,
                historiques et exploitables.
              </p>
            </div>

          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pourquoi choisir HESABU ?
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            HESABU SARLU accompagne les entreprises, les administrations
            et les particuliers dans la mise en place de solutions GPS,
            de gestion intelligente de flotte, de télématique embarquée
            et de suivi du carburant. Nos solutions permettent de réduire
            les coûts, d'améliorer la sécurité des véhicules et
            d'optimiser les performances opérationnelles grâce à des
            données fiables en temps réel.
          </p>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-10 text-center text-white">

            <h2 className="text-4xl font-bold mb-6">
              Réduisez vos coûts dès aujourd'hui
            </h2>

            <p className="text-xl text-red-100 mb-8">
              Nos experts vous accompagnent dans le choix d'une solution
              GPS avec sonde de carburant adaptée à votre activité.
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

export default ArticleCarburant;