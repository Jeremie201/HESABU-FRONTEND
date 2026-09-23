import mapBg from "../assets/map-bg.webp";

function WhyChooseUs() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${mapBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="why-hesabu-title"
    >
      {/* Overlay blanc transparent */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* TITRE */}
        <div className="text-center mb-20">

          <span className="text-red-700 uppercase font-bold tracking-[4px]">
            Pourquoi choisir HESABU ?
          </span>

          <h2
            id="why-hesabu-title"
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-gray-900
              mt-4
              mb-6
            "
          >
            Une gestion de flotte GPS plus intelligente à Kinshasa et en RDC
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-8">
            Les solutions GPS, télématiques et IoT de HESABU permettent aux
            entreprises de Kinshasa et de toute la République Démocratique du Congo
            de suivre leurs véhicules en temps réel, réduire leurs coûts
            d’exploitation, améliorer leur productivité et renforcer la sécurité
            de leur flotte automobile.
          </p>

        </div>

        {/* AVANTAGES */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* RÉDUCTION DES COÛTS */}
          <article
            className="
              bg-gradient-to-r
              from-red-700
              to-red-800
              text-white
              rounded-3xl
              p-10
              shadow-xl
            "
          >

            <div
              className="text-6xl mb-6"
              aria-hidden="true"
            >
              💰
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Réduction des coûts de votre flotte
            </h3>

            <p className="text-lg leading-8 text-red-50">
              Analysez les déplacements de vos véhicules, réduisez
              les trajets inutiles, surveillez la consommation de carburant
              et limitez les dépenses liées aux pertes, aux abus
              et aux utilisations non autorisées.
            </p>

          </article>

          {/* PRODUCTIVITÉ */}
          <article className="bg-gray-100 rounded-3xl p-10 shadow-lg">

            <div
              className="text-6xl mb-6"
              aria-hidden="true"
            >
              🚀
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Productivité et optimisation des trajets
            </h3>

            <p className="text-lg text-gray-700 leading-8">
              Utilisez les données de géolocalisation GPS pour mieux
              organiser les déplacements, optimiser les itinéraires,
              améliorer la planification et suivre plus efficacement
              les activités de vos équipes mobiles.
            </p>

          </article>

          {/* SÉCURITÉ */}
          <article className="bg-gray-100 rounded-3xl p-10 shadow-lg">

            <div
              className="text-6xl mb-6"
              aria-hidden="true"
            >
              🔒
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Sécurité et géolocalisation des véhicules
            </h3>

            <p className="text-lg text-gray-700 leading-8">
              Suivez la position de vos véhicules, consultez leur historique
              de déplacement et recevez des alertes intelligentes pour
              améliorer la sécurité de votre flotte et réagir rapidement
              aux situations anormales.
            </p>

          </article>

          {/* DONNÉES */}
          <article
            className="
              bg-gradient-to-r
              from-black
              to-red-800
              text-white
              rounded-3xl
              p-10
              shadow-xl
            "
          >

            <div
              className="text-6xl mb-6"
              aria-hidden="true"
            >
              📊
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Données et décisions en temps réel
            </h3>

            <p className="text-lg leading-8 text-gray-100">
              Consultez vos tableaux de bord, rapports automatiques
              et indicateurs de performance afin de mieux comprendre
              l’utilisation de votre flotte et prendre des décisions
              basées sur des données précises.
            </p>

          </article>

        </div>

        {/* STATISTIQUES */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-10
            mt-24
          "
          aria-label="Quelques chiffres sur les solutions HESABU"
        >

          <div className="text-center">

            <p className="text-5xl md:text-6xl font-extrabold text-red-700">
              24/7
            </p>

            <p className="mt-3 text-gray-700">
              Surveillance continue
            </p>

          </div>

          <div className="text-center">

            <p className="text-5xl md:text-6xl font-extrabold text-red-700">
              100%
            </p>

            <p className="mt-3 text-gray-700">
              Géolocalisation en temps réel
            </p>

          </div>

          <div className="text-center">

            <p className="text-5xl md:text-6xl font-extrabold text-red-700">
              +50
            </p>

            <p className="mt-3 text-gray-700">
              Véhicules connectés
            </p>

          </div>

          <div className="text-center">

            <p className="text-5xl md:text-6xl font-extrabold text-red-700">
              99%
            </p>

            <p className="mt-3 text-gray-700">
              Satisfaction client
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;
