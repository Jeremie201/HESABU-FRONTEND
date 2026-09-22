import mapBg from "../assets/map-bg.png";

function SolutionsSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${mapBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="solutions-section-title"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* ================================= */}
        {/* TITRE */}
        {/* ================================= */}

        <div className="text-center mb-20">

          <span className="text-red-600 uppercase tracking-[4px] font-bold">
            Nos Solutions
          </span>

          <h2
            id="solutions-section-title"
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-gray-900
              mt-3
              mb-5
            "
          >
            Des solutions GPS et de gestion de flotte
            adaptées à chaque activité
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-8">
            HESABU SARLU propose à Kinshasa et partout en République
            Démocratique du Congo des solutions de géolocalisation GPS,
            de télématique, d’IoT et de gestion intelligente de flotte
            adaptées aux particuliers, entreprises, transporteurs
            et gestionnaires de véhicules.
          </p>

        </div>

        {/* ================================= */}
        {/* SOLUTIONS PAR ACTIVITÉ */}
        {/* ================================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {/* PARTICULIERS */}

          <article
            className="
              bg-white/90
              backdrop-blur-md
              p-8
              rounded-3xl
              shadow-lg
              border
              border-gray-100
              hover:shadow-2xl
              hover:-translate-y-2
              transition
              duration-300
            "
          >
            <div
              className="text-6xl mb-5 text-center"
              aria-hidden="true"
            >
              🚗
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              GPS pour particuliers
            </h3>

            <p className="text-gray-600 mb-5 leading-7">
              Gardez votre véhicule sous surveillance grâce à une solution
              GPS permettant de suivre sa position et ses déplacements
              à Kinshasa et en RDC.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✓ Géolocalisation en temps réel</li>
              <li>✓ Protection anti-vol</li>
              <li>✓ Historique des trajets</li>
              <li>✓ Alertes de mouvement</li>
            </ul>
          </article>

          {/* ENTREPRISES */}

          <article
            className="
              bg-white/90
              backdrop-blur-md
              p-8
              rounded-3xl
              shadow-lg
              border
              border-gray-100
              hover:shadow-2xl
              hover:-translate-y-2
              transition
              duration-300
            "
          >
            <div
              className="text-6xl mb-5 text-center"
              aria-hidden="true"
            >
              🏢
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Gestion de flotte pour entreprises
            </h3>

            <p className="text-gray-600 mb-5 leading-7">
              Centralisez le suivi de vos véhicules et de vos opérations
              avec une plateforme de gestion de flotte conçue pour améliorer
              le contrôle, la visibilité et les performances.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✓ Gestion centralisée de flotte</li>
              <li>✓ Suivi des véhicules et actifs</li>
              <li>✓ Rapports automatisés</li>
              <li>✓ Réduction des coûts d’exploitation</li>
            </ul>
          </article>

          {/* TRANSPORT */}

          <article
            className="
              bg-white/90
              backdrop-blur-md
              p-8
              rounded-3xl
              shadow-lg
              border
              border-gray-100
              hover:shadow-2xl
              hover:-translate-y-2
              transition
              duration-300
            "
          >
            <div
              className="text-6xl mb-5 text-center"
              aria-hidden="true"
            >
              🚚
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Transport et logistique
            </h3>

            <p className="text-gray-600 mb-5 leading-7">
              Suivez vos véhicules de transport, améliorez les itinéraires
              et utilisez les données GPS pour optimiser vos opérations
              logistiques à Kinshasa et à travers la RDC.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✓ Suivi des livraisons</li>
              <li>✓ Optimisation des itinéraires</li>
              <li>✓ Contrôle du carburant</li>
              <li>✓ Réduction des temps d’arrêt</li>
            </ul>
          </article>

          {/* GESTIONNAIRES */}

          <article
            className="
              bg-white/90
              backdrop-blur-md
              p-8
              rounded-3xl
              shadow-lg
              border
              border-gray-100
              hover:shadow-2xl
              hover:-translate-y-2
              transition
              duration-300
            "
          >
            <div
              className="text-6xl mb-5 text-center"
              aria-hidden="true"
            >
              📊
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Pilotage et analyse de flotte
            </h3>

            <p className="text-gray-600 mb-5 leading-7">
              Exploitez les données télématiques de votre flotte grâce à
              des tableaux de bord, rapports et indicateurs permettant
              de suivre les performances de vos opérations.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✓ Tableaux de bord en temps réel</li>
              <li>✓ Analyse des performances</li>
              <li>✓ Rapports détaillés</li>
              <li>✓ Indicateurs opérationnels</li>
            </ul>
          </article>

        </div>

        {/* ================================= */}
        {/* FONCTIONNALITÉS PRINCIPALES */}
        {/* ================================= */}

        <div className="mt-24">

          <div className="text-center mb-16">

            <span className="text-red-600 uppercase tracking-[4px] font-bold">
              Technologie HESABU
            </span>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-gray-900
                mt-3
                mb-5
              "
            >
              Fonctionnalités clés de nos solutions GPS
            </h2>

            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-8">
              Une plateforme complète pour suivre les véhicules,
              contrôler le carburant, renforcer la sécurité
              et analyser les performances de votre flotte en temps réel.
            </p>

          </div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            "
          >

            {/* GÉOLOCALISATION */}

            <article
              className="
                bg-white/90
                backdrop-blur-md
                p-8
                rounded-3xl
                shadow-lg
                border
                border-gray-100
                hover:shadow-2xl
                hover:-translate-y-2
                transition
                duration-300
              "
            >
              <div
                className="text-5xl mb-4"
                aria-hidden="true"
              >
                📍
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Géolocalisation GPS en temps réel
              </h3>

              <p className="text-gray-600 leading-7">
                Visualisez la position de vos véhicules sur une carte,
                consultez leurs déplacements et suivez votre flotte
                en temps réel.
              </p>
            </article>

            {/* CARBURANT */}

            <article
              className="
                bg-white/90
                backdrop-blur-md
                p-8
                rounded-3xl
                shadow-lg
                border
                border-gray-100
                hover:shadow-2xl
                hover:-translate-y-2
                transition
                duration-300
              "
            >
              <div
                className="text-5xl mb-4"
                aria-hidden="true"
              >
                ⛽
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Suivi et contrôle du carburant
              </h3>

              <p className="text-gray-600 leading-7">
                Surveillez la consommation de carburant, identifiez
                les variations inhabituelles et disposez de données
                pour mieux maîtriser les coûts de votre flotte.
              </p>
            </article>

            {/* COUPURE MOTEUR */}

            <article
              className="
                bg-white/90
                backdrop-blur-md
                p-8
                rounded-3xl
                shadow-lg
                border
                border-gray-100
                hover:shadow-2xl
                hover:-translate-y-2
                transition
                duration-300
              "
            >
              <div
                className="text-5xl mb-4"
                aria-hidden="true"
              >
                🛑
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Sécurité et immobilisation à distance
              </h3>

              <p className="text-gray-600 leading-7">
                Selon l’équipement installé, certaines solutions permettent
                de renforcer la protection du véhicule grâce à des fonctions
                de sécurité et d’immobilisation contrôlée à distance.
              </p>
            </article>

            {/* ALERTES */}

            <article
              className="
                bg-white/90
                backdrop-blur-md
                p-8
                rounded-3xl
                shadow-lg
                border
                border-gray-100
                hover:shadow-2xl
                hover:-translate-y-2
                transition
                duration-300
              "
            >
              <div
                className="text-5xl mb-4"
                aria-hidden="true"
              >
                🔔
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Alertes GPS intelligentes
              </h3>

              <p className="text-gray-600 leading-7">
                Recevez des notifications concernant les excès de vitesse,
                sorties de zone, mouvements inhabituels ou autres événements
                définis pour votre flotte.
              </p>
            </article>

          </div>

        </div>

        {/* ================================= */}
        {/* BLOC SEO COMPLÉMENTAIRE */}
        {/* ================================= */}

        <div className="mt-24 max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Des solutions adaptées aux réalités de Kinshasa et de la RDC
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            HESABU accompagne les organisations qui souhaitent mieux suivre
            leurs véhicules, sécuriser leurs actifs et améliorer la gestion
            quotidienne de leur flotte. Nos solutions combinent GPS,
            télématique et technologies IoT pour fournir des informations
            utiles aux responsables de flotte et aux équipes opérationnelles.
          </p>

        </div>

        {/* ================================= */}
        {/* AVANTAGES */}
        {/* ================================= */}

        <div
          className="
            mt-24
            bg-red-600
            text-white
            rounded-3xl
            p-12
          "
          aria-label="Principales caractéristiques des solutions HESABU"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <p
                className="
                  text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-bold
                "
              >
                24/7
              </p>

              <p className="mt-2">
                Surveillance continue
              </p>
            </div>

            <div>
              <p
                className="
                  text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-bold
                "
              >
                GPS
              </p>

              <p className="mt-2">
                Géolocalisation en temps réel
              </p>
            </div>

            <div>
              <p
                className="
                  text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-bold
                "
              >
                IoT
              </p>

              <p className="mt-2">
                Technologies connectées
              </p>
            </div>

            <div>
              <p
                className="
                  text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-bold
                "
                aria-hidden="true"
              >
                📈
              </p>

              <p className="mt-2">
                Optimisation des performances
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default SolutionsSection;
