import mapBg from "../assets/map-bg.png";
function SolutionsSection() {
  return (
    <section
      className="
      relative
      py-24
      overflow-hidden
      "
      style={{
        backgroundImage: `url(${mapBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* TITRE */}

        <div className="text-center mb-20">

          <span className="text-red-600 uppercase tracking-[4px] font-bold">
            Nos Solutions
          </span>

          <h2
            className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            mt-3
            mb-5
            "
          >
            Des solutions adaptées à chaque activité
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Grâce à nos technologies GPS, IoT et télématiques,
            HESABU propose des solutions performantes pour
            améliorer la sécurité, la productivité et la
            rentabilité de vos opérations.
          </p>

        </div>

        {/* CARTES */}

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

          <div
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
            ">

            <div className="text-6xl mb-5 text-center">
              🚗
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Particuliers
            </h3>

            <p className="text-gray-600 mb-5">
              Gardez votre véhicule sous surveillance
              en permanence grâce à la géolocalisation
              en temps réel.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✓ Localisation instantanée</li>
              <li>✓ Protection anti-vol</li>
              <li>✓ Historique des trajets</li>
              <li>✓ Alertes de mouvement</li>
            </ul>

          </div>

          {/* ENTREPRISES */}

          <div
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
            ">

            <div className="text-6xl mb-5 text-center">
              🏢
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Entreprises
            </h3>

            <p className="text-gray-600 mb-5">
              Gérez efficacement vos véhicules,
              équipements et ressources grâce à
              une plateforme centralisée.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✓ Gestion de flotte</li>
              <li>✓ Contrôle des actifs</li>
              <li>✓ Rapports automatisés</li>
              <li>✓ Réduction des coûts</li>
            </ul>

          </div>

          {/* TRANSPORT */}

          <div
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
            ">

            <div className="text-6xl mb-5 text-center">
              🚚
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Transport & Logistique
            </h3>

            <p className="text-gray-600 mb-5">
              Optimisez les trajets et améliorez
              la qualité de vos opérations de
              transport et de livraison.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✓ Suivi des livraisons</li>
              <li>✓ Optimisation des itinéraires</li>
              <li>✓ Contrôle du carburant</li>
              <li>✓ Réduction du temps d'arrêt</li>
            </ul>

          </div>

          {/* GESTIONNAIRES */}

          <div
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
            ">

            <div className="text-6xl mb-5 text-center">
              📊
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Gestionnaires
            </h3>

            <p className="text-gray-600 mb-5">
              Prenez des décisions stratégiques
              grâce à des données fiables et des
              tableaux de bord avancés.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✓ Tableaux de bord temps réel</li>
              <li>✓ Analyse de performance</li>
              <li>✓ Rapports détaillés</li>
              <li>✓ Indicateurs de rentabilité</li>
            </ul>

          </div>

        </div>

        {/* FONCTIONNALITÉS PRINCIPALES */}

        <div className="mt-24">

          <div className="text-center mb-16">

            <h2
              className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              mt-3
              mb-5
              "
            >
              Fonctionnalités clés
            </h2>

            <p className="text-xl text-gray-600">
              Une plateforme complète pour suivre,
              analyser et sécuriser vos opérations.
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

            {/* Géolocalisation */}

            <div
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

              <div className="text-5xl mb-4">
                📍
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Géolocalisation Temps Réel
              </h3>

              <p className="text-gray-600 leading-7">
                Visualisez vos véhicules sur une carte
                interactive avec mise à jour instantanée.
              </p>

            </div>

            {/* Carburant */}

            <div
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

              <div className="text-5xl mb-4">
                ⛽
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Monitoring Carburant
              </h3>

              <p className="text-gray-600 leading-7">
                Contrôlez la consommation,
                détectez les anomalies
                et réduisez les coûts.
              </p>

            </div>

            {/* Coupure moteur */}

            <div
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

              <div className="text-5xl mb-4">
                🛑
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Coupure du moteur à distance
              </h3>

              <p className="text-gray-600 leading-7">
                En cas de vol ou d'utilisation non autorisée,
                désactivez le moteur à distance de manière
                sécurisée afin de protéger votre véhicule.
              </p>

            </div>

            {/* Alertes */}

            <div
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

              <div className="text-5xl mb-4">
                🔔
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Alertes Intelligentes
              </h3>

              <p className="text-gray-600 leading-7">
                Recevez des notifications sur les
                excès de vitesse, sorties de zone
                ou arrêts non autorisés.
              </p>

            </div>

          </div>

        </div>

        {/* AVANTAGES */}

        <div className="mt-24 bg-red-600 text-white rounded-3xl p-12">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3
                className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                "
              >
                24/7
              </h3>

              <p className="mt-2">
                Surveillance continue
              </p>
            </div>

            <div>
              <h3
                className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                "
              >
                GPS
              </h3>

              <p className="mt-2">
                Géolocalisation en temps réel
              </p>
            </div>

            <div>
              <h3
                className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                "
              >
                IoT
              </h3>

              <p className="mt-2">
                Capteurs intelligents
              </p>
            </div>

            <div>
              <h3
                className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                "
              >
                📈
              </h3>

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