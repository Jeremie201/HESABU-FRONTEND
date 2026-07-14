import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import mapBg from "../assets/map-bg.png";

function Ressources() {
  return (
    <>
      <SEO
        title="Centre de Ressources | HESABU SARLU"
        description="Guides, conseils et actualités sur les solutions GPS, la gestion intelligente de flotte, la télématique embarquée et les technologies IoT."
        keywords="GPS RDC, gestion de flotte, IoT, télématique, sonde carburant, ressources HESABU"
        url="https://hesabudrc.com/ressources"
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
        py-16
        md:py-24
      "
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">

          <span className="uppercase tracking-[5px] text-red-200 font-semibold">
            HESABU RESSOURCES
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mt-4 mb-6 leading-tight">
            Centre de Ressources
          </h1>

          <p className="text-xl text-red-100 max-w-4xl mx-auto leading-8">
            Découvrez nos guides, conseils et analyses pour mieux comprendre
            la géolocalisation GPS, la gestion intelligente de flotte,
            les technologies IoT et les meilleures pratiques pour optimiser
            vos opérations.
          </p>

        </div>
      </section>

      {/* CATEGORIES */}

      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${mapBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos thématiques
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Retrouvez des contenus pratiques pour améliorer la sécurité,
              la rentabilité et la performance de votre flotte.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

              <div className="text-5xl mb-6">🚚</div>

              <h3 className="text-2xl font-bold mb-4">
                Gestion de flotte
              </h3>

              <p className="text-gray-600 leading-7">
                Optimisez vos véhicules grâce au suivi GPS en temps réel
                et à la télématique embarquée.
              </p>

            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

              <div className="text-5xl mb-6">⛽</div>

              <h3 className="text-2xl font-bold mb-4">
                Carburant
              </h3>

              <p className="text-gray-600 leading-7">
                Découvrez comment réduire les coûts grâce au GPS
                et à la sonde de niveau de carburant.
              </p>

            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

              <div className="text-5xl mb-6">🛡️</div>

              <h3 className="text-2xl font-bold mb-4">
                Sécurité
              </h3>

              <p className="text-gray-600 leading-7">
                Prévenez les vols et sécurisez votre flotte grâce aux alertes
                intelligentes et au géorepérage.
              </p>

            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

              <div className="text-5xl mb-6">📡</div>

              <h3 className="text-2xl font-bold mb-4">
                IoT & Innovation
              </h3>

              <p className="text-gray-600 leading-7">
                Explorez les technologies connectées qui transforment
                les entreprises modernes.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ARTICLES */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-6">
              Articles à découvrir
            </h2>

            <p className="text-gray-600 text-lg">
              Les premiers guides seront disponibles prochainement.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">

              <div className="h-56 bg-red-600"></div>

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  Comment réduire les coûts grâce au GPS et à la sonde de carburant
                </h3>

                <p className="text-gray-600 mb-6">
                  Découvrez comment surveiller votre consommation,
                  détecter les pertes et améliorer votre rentabilité.
                </p>

                <span className="text-red-600 font-bold">
                  Bientôt disponible →
                </span>

              </div>

            </div>

            <div className="border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">

              <div className="h-56 bg-black"></div>

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  Comment protéger votre véhicule contre le vol
                </h3>

                <p className="text-gray-600 mb-6">
                  Les meilleures fonctionnalités GPS pour sécuriser
                  vos véhicules.
                </p>

                <span className="text-red-600 font-bold">
                  Bientôt disponible →
                </span>

              </div>

            </div>

            <div className="border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">

              <div className="h-56 bg-gray-700"></div>

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  Comment choisir un GPS professionnel
                </h3>

                <p className="text-gray-600 mb-6">
                  Les critères essentiels avant d'équiper
                  votre flotte.
                </p>

                <span className="text-red-600 font-bold">
                  Bientôt disponible →
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-red-700 to-black text-white py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Besoin d'une solution GPS ?
          </h2>

          <p className="text-xl text-red-100 mb-10">
            Nos experts vous accompagnent dans le choix de la solution
            la plus adaptée à votre activité.
          </p>

          <a
            href="/devis"
            className="
            inline-block
            bg-white
            text-red-600
            px-10
            py-4
            rounded-xl
            font-bold
            text-lg
            shadow-xl
            hover:scale-105
            transition
          "
          >
            Demander un devis
          </a>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Ressources;