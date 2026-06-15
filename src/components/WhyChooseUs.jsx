import mapBg from "../assets/map-bg.png";
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
        >
    {/* Overlay blanc transparent */}

        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* TITRE */}

        <div className="text-center mb-20">

          <span className="text-red-600 uppercase font-bold tracking-[4px]">
            Pourquoi HESABU ?
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-6">
            Une technologie qui protège votre activité
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Nos solutions GPS et IoT permettent de réduire les coûts,
            améliorer la productivité et renforcer la sécurité de votre flotte
            grâce à une surveillance intelligente en temps réel.
          </p>

        </div>

        {/* AVANTAGES */}

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-3xl p-10 shadow-xl">

            <div className="text-6xl mb-6">
              💰
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Réduction des coûts
            </h3>

            <p className="text-lg leading-8">
              Réduisez la consommation de carburant,
              les trajets inutiles, les pertes de temps
              et les dépenses liées aux vols.
            </p>

          </div>

          <div className="bg-gray-100 rounded-3xl p-10 shadow-lg">

            <div className="text-6xl mb-6">
              🚀
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Productivité accrue
            </h3>

            <p className="text-lg text-gray-700 leading-8">
              Optimisez les itinéraires,
              améliorez la planification
              et augmentez les performances
              de vos équipes mobiles.
            </p>

          </div>

          <div className="bg-gray-100 rounded-3xl p-10 shadow-lg">

            <div className="text-6xl mb-6">
              🔒
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Sécurité renforcée
            </h3>

            <p className="text-lg text-gray-700 leading-8">
              Géolocalisation permanente,
              alertes intelligentes,
              historique des déplacements
              et protection contre le vol.
            </p>

          </div>

          <div className="bg-gradient-to-r from-black to-red-700 text-white rounded-3xl p-10 shadow-xl">

            <div className="text-6xl mb-6">
              📊
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Décisions en temps réel
            </h3>

            <p className="text-lg leading-8">
              Consultez des tableaux de bord,
              des rapports automatiques
              et des indicateurs précis
              pour prendre les meilleures décisions.
            </p>

          </div>

        </div>

        {/* STATISTIQUES */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-24">

          <div className="text-center">

            <h3 className="text-6xl font-extrabold text-red-600">
              24/7
            </h3>

            <p className="mt-3 text-gray-600">
              Surveillance continue
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-6xl font-extrabold text-red-600">
              100%
            </h3>

            <p className="mt-3 text-gray-600">
              Géolocalisation temps réel
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-6xl font-extrabold text-red-600">
              +50
            </h3>

            <p className="mt-3 text-gray-600">
              Véhicules connectés
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-6xl font-extrabold text-red-600">
              99%
            </h3>

            <p className="mt-3 text-gray-600">
              Satisfaction client
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;