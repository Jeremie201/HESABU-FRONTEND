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
    >
        {/* Overlay */}

        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        md:px-8
        ">

        {/* Titre */}

        <div className="text-center mb-16">

          <span className="text-red-600 font-bold uppercase tracking-[4px]">
            Nos Expertises
          </span>

          <h2 className="
        text-3xl
        sm:text-4xl
        lg:text-5xl
        font-bold
        text-gray-900
        mt-3
        mb-4
        ">
            Nos Services
          </h2>

          <p className="
        text-lg
        md:text-xl
        text-gray-800
        max-w-3xl
        mx-auto
        leading-8
        ">
            Nous proposons des solutions innovantes de géolocalisation,
            de gestion de flotte et de sécurité connectée afin
            d'améliorer la performance de votre entreprise.
          </p>

        </div>

        {/* Cartes */}

        <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        ">

          <div className="
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

            <div className="text-6xl mb-5">
              📍
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Géolocalisation GPS
            </h3>

            <p className="text-gray-600 leading-7">
              Suivez vos véhicules en temps réel,
              consultez leur historique et optimisez
              tous vos déplacements.
            </p>

          </div>

          <div className="
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

            <div className="text-6xl mb-5">
              🔒
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Sécurité Anti-vol
            </h3>

            <p className="text-gray-600 leading-7">
              Localisation instantanée,
              alertes intelligentes et
              possibilité d'arrêt moteur à distance.
            </p>

          </div>

          <div className="
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

            <div className="text-6xl mb-5">
              🚚
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Gestion de Flotte
            </h3>

            <p className="text-gray-600 leading-7">
              Analyse des trajets,
              consommation carburant,
              temps d'arrêt et productivité.
            </p>

          </div>

          <div className="
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

            <div className="text-6xl mb-5">
              🔔
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Alertes Intelligentes
            </h3>

            <p className="text-gray-600 leading-7">
              Notifications automatiques
              sur les excès de vitesse,
              sorties de zone et démarrages.
            </p>

          </div>

          <div className="
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

            <div className="text-6xl mb-5">
              🛠️
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Maintenance Préventive
            </h3>

            <p className="text-gray-600 leading-7">
              Planification des entretiens,
              rappels automatiques et
              réduction des coûts de maintenance.
            </p>

          </div>

          <div className="
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

            <div className="text-6xl mb-5">
              📞
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Assistance 24h/24
            </h3>

            <p className="text-gray-600 leading-7">
              Une équipe technique vous accompagne
              avant, pendant et après l'installation
              de vos équipements GPS.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;