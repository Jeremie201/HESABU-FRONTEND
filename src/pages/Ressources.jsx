import { Link } from "react-router-dom";

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
        title="Guides GPS et Gestion de Flotte à Kinshasa et en RDC | HESABU"
        description="Découvrez les guides et conseils HESABU sur le GPS, la géolocalisation, la gestion de flotte, le contrôle du carburant, la sécurité automobile, la télématique et l’IoT à Kinshasa et en RDC."
        keywords="GPS Kinshasa, GPS RDC, gestion de flotte Kinshasa, gestion de flotte RDC, géolocalisation véhicule, contrôle carburant flotte, sécurité anti-vol véhicule, télématique RDC, IoT RDC, HESABU"
        image="https://hesabudrc.com/hesabusend.png"
        url="https://hesabudrc.com/ressources"
      />

      <Navbar />

      {/* ================================= */}
      {/* HERO */}
      {/* ================================= */}

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
        aria-labelledby="ressources-title"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">

          <span className="uppercase tracking-[5px] text-red-200 font-semibold">
            HESABU RESSOURCES
          </span>

          <h1
            id="ressources-title"
            className="
              text-4xl
              sm:text-5xl
              lg:text-7xl
              font-extrabold
              mt-4
              mb-6
              leading-tight
            "
          >
            Guides GPS
            <br />
            et Gestion de Flotte
            <br />
            à Kinshasa et en RDC
          </h1>

          <p className="text-xl text-red-100 max-w-4xl mx-auto leading-8">
            Découvrez les guides, conseils et analyses de HESABU pour mieux
            comprendre la géolocalisation GPS, la gestion intelligente de
            flotte, la télématique, le contrôle du carburant, la sécurité
            automobile et les technologies IoT.
          </p>

          <p className="text-lg text-red-100 max-w-4xl mx-auto leading-8 mt-5">
            Nos ressources s’adressent aux entreprises, gestionnaires de
            flotte, transporteurs et particuliers à Kinshasa et partout en
            République Démocratique du Congo.
          </p>

        </div>
      </section>

      {/* ================================= */}
      {/* THÉMATIQUES PRINCIPALES */}
      {/* ================================= */}

      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${mapBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-labelledby="themes-title"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

          <div className="text-center mb-16">

            <span className="text-red-600 uppercase font-bold tracking-[4px]">
              Nos expertises
            </span>

            <h2
              id="themes-title"
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6"
            >
              Nos thématiques GPS et gestion de flotte
            </h2>

            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-8">
              Retrouvez des contenus pratiques pour améliorer la sécurité,
              la rentabilité, le suivi et les performances de vos véhicules
              et de votre flotte à Kinshasa et en RDC.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* GESTION DE FLOTTE */}
            <article className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

              <div
                className="text-5xl mb-6"
                aria-hidden="true"
              >
                🚚
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Gestion de flotte
              </h3>

              <p className="text-gray-600 leading-7">
                Découvrez comment suivre vos véhicules, analyser leurs
                déplacements et améliorer la gestion quotidienne de votre
                flotte grâce au GPS et à la télématique.
              </p>

            </article>

            {/* CARBURANT */}
            <article className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

              <div
                className="text-5xl mb-6"
                aria-hidden="true"
              >
                ⛽
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Suivi et contrôle du carburant
              </h3>

              <p className="text-gray-600 leading-7">
                Comprenez comment surveiller la consommation, identifier
                les anomalies et mieux maîtriser les dépenses de carburant
                de votre flotte.
              </p>

            </article>

            {/* SÉCURITÉ */}
            <article className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

              <div
                className="text-5xl mb-6"
                aria-hidden="true"
              >
                🛡️
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Sécurité des véhicules
              </h3>

              <p className="text-gray-600 leading-7">
                Découvrez les solutions de géolocalisation, d’alertes
                intelligentes et de surveillance permettant de mieux
                protéger vos véhicules et vos actifs.
              </p>

            </article>

            {/* IOT */}
            <article className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

              <div
                className="text-5xl mb-6"
                aria-hidden="true"
              >
                📡
              </div>

              <h3 className="text-2xl font-bold mb-4">
                IoT et télématique
              </h3>

              <p className="text-gray-600 leading-7">
                Explorez les technologies connectées, les capteurs et les
                systèmes télématiques utilisés pour améliorer le suivi
                et la gestion des opérations.
              </p>

            </article>

          </div>

        </div>
      </section>

      {/* ================================= */}
      {/* ARTICLE À LA UNE */}
      {/* ================================= */}

      {articles.length > 0 && (
        <FeaturedArticle article={articles[0]} />
      )}

      {/* ================================= */}
      {/* CATÉGORIES */}
      {/* ================================= */}

      <section
        className="py-24 bg-gray-50"
        aria-labelledby="categories-title"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-red-600 font-semibold">
              Explorer
            </span>

            <h2
              id="categories-title"
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6"
            >
              Explorez nos domaines d’expertise
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-8">
              Retrouvez nos guides sur la géolocalisation GPS, la gestion
              de flotte, la consommation de carburant, la sécurité des
              véhicules, la télématique et les objets connectés.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <CategoryCard
              icon="📍"
              title="GPS et géolocalisation"
              description="Découvrez le fonctionnement des solutions GPS et du suivi de véhicules en temps réel à Kinshasa et en RDC."
            />

            <CategoryCard
              icon="⛽"
              title="Carburant"
              description="Découvrez comment analyser et mieux contrôler la consommation de carburant de votre flotte."
            />

            <CategoryCard
              icon="🚚"
              title="Gestion de flotte"
              description="Améliorez le suivi, l’exploitation et les performances de vos véhicules grâce aux données télématiques."
            />

            <CategoryCard
              icon="🔒"
              title="Sécurité automobile"
              description="Découvrez les solutions de surveillance, d’alertes et de protection des véhicules."
            />

            <CategoryCard
              icon="📡"
              title="IoT et télématique"
              description="Explorez les technologies connectées utilisées pour superviser les véhicules, équipements et opérations."
            />

          </div>

        </div>
      </section>

      {/* ================================= */}
      {/* ARTICLES */}
      {/* ================================= */}

      <section
        className="py-24 bg-white"
        aria-labelledby="articles-title"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-red-600 font-semibold">
              Conseils & Guides
            </span>

            <h2
              id="articles-title"
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6"
            >
              Nos articles sur le GPS et la gestion de flotte
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-8">
              Découvrez des contenus pratiques pour mieux comprendre les
              solutions GPS, la gestion de flotte, la sécurité des véhicules,
              le carburant, la télématique et les technologies IoT en RDC.
            </p>

          </div>

          {articles.length > 1 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

              {articles.slice(1).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))}

            </div>
          ) : (
            <p className="text-center text-gray-600">
              De nouveaux articles seront bientôt disponibles.
            </p>
          )}

        </div>
      </section>

      {/* ================================= */}
      {/* BLOC SEO COMPLÉMENTAIRE */}
      {/* ================================= */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprendre les technologies GPS à Kinshasa et en RDC
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Le suivi GPS, la télématique et les technologies IoT permettent
            aux entreprises et gestionnaires de flotte d’obtenir des données
            utiles sur leurs véhicules et leurs opérations. À travers ses
            ressources, HESABU partage des informations pratiques pour aider
            les organisations à mieux comprendre ces technologies et leurs
            applications dans le contexte de Kinshasa et de la République
            Démocratique du Congo.
          </p>

        </div>

      </section>

      {/* ================================= */}
      {/* CTA */}
      {/* ================================= */}

      <section
        className="bg-gradient-to-r from-red-700 to-black text-white py-24"
        aria-labelledby="ressources-cta-title"
      >
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2
            id="ressources-cta-title"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Besoin d’une solution GPS pour votre activité ?
          </h2>

          <p className="text-xl text-red-100 mb-4 leading-8">
            Nos équipes vous accompagnent dans le choix d’une solution GPS,
            télématique ou de gestion de flotte adaptée à vos besoins.
          </p>

          <p className="text-lg text-red-100 mb-10 leading-8">
            HESABU intervient auprès des entreprises, institutions,
            transporteurs et particuliers à Kinshasa et en RDC.
          </p>

          <Link
            to="/devis"
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
              duration-300
            "
          >
            Demander un devis GPS
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Ressources;
