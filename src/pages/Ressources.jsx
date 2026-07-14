import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import mapBg from "../assets/map-bg.png";
import articles from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import FeaturedArticle from "../components/FeaturedArticle";
import CategoryCard from "../components/CategoryCard";

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

      {/* ARTICLE À LA UNE */}

      <FeaturedArticle article={articles[0]} />

      {/* CATÉGORIES */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-red-600 font-semibold">
              Explorer
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Explorez nos domaines d'expertise
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Retrouvez nos conseils et guides sur les technologies GPS,
              la gestion de flotte, la sécurité, le carburant et les objets connectés.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <CategoryCard
              icon="📍"
              title="GPS"
              description="Découvrez les solutions de géolocalisation et de suivi en temps réel."
            />

            <CategoryCard
              icon="⛽"
              title="Carburant"
              description="Réduisez vos coûts grâce au suivi intelligent de la consommation."
            />

            <CategoryCard
              icon="🚚"
              title="Gestion de flotte"
              description="Optimisez l'exploitation et la performance de vos véhicules."
            />

            <CategoryCard
              icon="🔒"
              title="Sécurité"
              description="Protégez vos véhicules grâce aux alertes et à l'immobilisation à distance."
            />

            <CategoryCard
              icon="📡"
              title="IoT"
              description="Découvrez les technologies connectées au service de votre activité."
            />

          </div>

        </div>

      </section>

      {/* ARTICLES */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos articles
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos guides pratiques pour mieux comprendre les solutions GPS,
              la gestion de flotte, la sécurité des véhicules et les technologies IoT.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {articles.slice(1).map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}

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