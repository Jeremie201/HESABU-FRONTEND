import mapBg from "../assets/map-bg.png";

function ServicesSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${mapBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="services-expertise-title"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          md:px-8
        "
      >
        {/* TITRE */}
        <div className="text-center mb-16">

          <span className="text-red-700 font-bold uppercase tracking-[4px]">
            Nos expertises
          </span>

          <h2
            id="services-expertise-title"
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-gray-900
              mt-3
              mb-4
            "
          >
            Services GPS et Gestion de Flotte à Kinshasa et en RDC
          </h2>

          <p
            className="
              text-lg
              md:text-xl
              text-gray-800
              max-w-4xl
              mx-auto
              leading-8
            "
          >
            HESABU SARLU accompagne les entreprises, institutions,
            transporteurs et particuliers à Kinshasa et partout en
            République Démocratique du Congo avec des solutions de
            géolocalisation GPS, de gestion de flotte, de sécurité automobile,
            de suivi carburant et de télématique connectée.
          </p>

        </div>

        {/* CARTES */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {/* GÉOLOCALISATION GPS */}
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
              className="text-6xl mb-5"
              aria-hidden="true"
            >
              📍
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Géolocalisation GPS des véhicules
            </h3>

            <p className="text-gray-700 leading-7">
              Suivez vos véhicules en temps réel à Kinshasa et en RDC,
              consultez leur historique de déplacement, visualisez leurs
              positions et améliorez l’organisation de vos trajets.
            </p>
          </article>

          {/* ANTI-VOL */}
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
              className="text-6xl mb-5"
              aria-hidden="true"
            >
              🔒
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sécurité anti-vol et protection automobile
            </h3>

            <p className="text-gray-700 leading-7">
              Renforcez la sécurité de vos véhicules grâce à la localisation
              instantanée, aux alertes intelligentes, au suivi des mouvements
              et aux fonctions de protection adaptées à votre installation.
            </p>
          </article>

          {/* GESTION DE FLOTTE */}
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
              className="text-6xl mb-5"
              aria-hidden="true"
            >
              🚚
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gestion intelligente de flotte
            </h3>

            <p className="text-gray-700 leading-7">
              Analysez les trajets, les temps d’arrêt, l’utilisation des
              véhicules et les performances de votre flotte afin de mieux
              contrôler les opérations et réduire les coûts d’exploitation.
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
              className="text-6xl mb-5"
              aria-hidden="true"
            >
              🔔
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Alertes GPS intelligentes
            </h3>

            <p className="text-gray-700 leading-7">
              Recevez des notifications sur les excès de vitesse, sorties de
              zone, démarrages, arrêts prolongés et autres événements utiles
              pour surveiller votre flotte en temps réel.
            </p>
          </article>

          {/* MAINTENANCE */}
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
              className="text-6xl mb-5"
              aria-hidden="true"
            >
              🛠️
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Maintenance préventive de flotte
            </h3>

            <p className="text-gray-700 leading-7">
              Planifiez les entretiens, suivez les échéances et utilisez des
              rappels automatiques pour réduire les immobilisations et mieux
              maîtriser les coûts de maintenance de vos véhicules.
            </p>
          </article>

          {/* SUPPORT */}
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
              className="text-6xl mb-5"
              aria-hidden="true"
            >
              📞
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Installation et assistance GPS
            </h3>

            <p className="text-gray-700 leading-7">
              Notre équipe technique vous accompagne avant, pendant et après
              l’installation de vos équipements GPS, avec un support adapté
              aux besoins de votre activité à Kinshasa et en RDC.
            </p>
          </article>

        </div>

        {/* BLOC TEXTE SEO COMPLÉMENTAIRE */}
        <div
          className="mt-20 max-w-5xl mx-auto text-center"
          aria-labelledby="services-activity-title"
        >

          <h2
            id="services-activity-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Une solution GPS adaptée à chaque activité
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Que vous gériez une flotte de véhicules commerciaux, des véhicules
            de service, des engins, des camions ou des voitures particulières,
            HESABU propose des solutions de suivi GPS et de télématique
            adaptées aux réalités opérationnelles de Kinshasa et de la
            République Démocratique du Congo.
          </p>

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;
