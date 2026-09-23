import Navbar from "../components/Navbar";
import SolutionsSection from "../components/SolutionsSection";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

import mapBg from "../assets/map-bg.webp";

import SEO from "../components/SEO";

function Solutions() {
  return (
    <>
      <SEO
        title="Solutions de Gestion de Flotte à Kinshasa et en RDC | HESABU"
        description="Découvrez les solutions HESABU à Kinshasa et en RDC pour la gestion de flotte, la géolocalisation GPS, la télématique embarquée, le suivi carburant, la sécurité des véhicules et les technologies IoT."
        keywords="gestion de flotte Kinshasa, gestion de flotte RDC, solutions GPS Kinshasa, télématique embarquée, IoT véhicule RDC, suivi carburant flotte, sécurité flotte, géolocalisation GPS RDC, HESABU"
        image="https://hesabudrc.com/hesabusend.png"
        url="https://hesabudrc.com/solutions"
      />

      <Navbar />

      <main>

        {/* HERO SOLUTIONS */}

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
          aria-labelledby="solutions-title"
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">

            <span className="uppercase tracking-[5px] text-red-100 font-semibold">
              HESABU SOLUTIONS
            </span>

            <h1
              id="solutions-title"
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
              Solutions de Gestion
              <br />
              de Flotte et GPS
              <br />
              à Kinshasa et en RDC
            </h1>

            <p className="text-xl text-red-100 max-w-4xl mx-auto leading-8">
              HESABU SARLU propose des solutions intelligentes de
              géolocalisation GPS, de gestion de flotte, de télématique
              embarquée et d’IoT pour les entreprises, institutions,
              transporteurs et particuliers à Kinshasa et partout en
              République Démocratique du Congo.
            </p>

            <p className="text-lg text-red-100 max-w-4xl mx-auto leading-8 mt-5">
              Nos technologies permettent de suivre les véhicules en temps réel,
              contrôler les opérations, surveiller la consommation de carburant,
              renforcer la sécurité et améliorer les performances de votre flotte.
            </p>

            <div
              className="
                text-center
                grid
                grid-cols-2
                md:grid-cols-4
                gap-8
                mt-16
              "
              aria-label="Fonctionnalités principales des solutions HESABU"
            >
              <div>
                <p className="text-5xl font-bold">
                  GPS
                </p>

                <p className="mt-2 text-red-100">
                  Suivi en temps réel
                </p>
              </div>

              <div>
                <p
                  className="text-5xl font-bold"
                  aria-hidden="true"
                >
                  ⛽
                </p>

                <p className="mt-2 text-red-100">
                  Suivi carburant
                </p>
              </div>

              <div>
                <p
                  className="text-5xl font-bold"
                  aria-hidden="true"
                >
                  🔒
                </p>

                <p className="mt-2 text-red-100">
                  Sécurité véhicule
                </p>
              </div>

              <div>
                <p
                  className="text-5xl font-bold"
                  aria-hidden="true"
                >
                  📊
                </p>

                <p className="mt-2 text-red-100">
                  Analyse de flotte
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION SOLUTIONS */}

        <SolutionsSection />

        {/* CTA */}

        <section
          className="relative py-24 overflow-hidden"
          style={{
            backgroundImage: `url(${mapBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-labelledby="solutions-cta-title"
        >
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center px-6 md:px-8">

            <span className="text-red-700 uppercase font-bold tracking-[4px]">
              Votre flotte, votre solution
            </span>

            <h2
              id="solutions-cta-title"
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-gray-900
                mt-4
                mb-6
              "
            >
              Besoin d'une solution de gestion de flotte sur mesure ?
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-4 leading-8">
              Nos experts vous accompagnent dans le choix et le déploiement
              d’une solution GPS, télématique et IoT adaptée à vos véhicules,
              à votre activité et aux besoins de votre flotte.
            </p>

            <p className="text-lg text-gray-700 mb-10 leading-8">
              Que votre entreprise soit basée à Kinshasa ou ailleurs en
              République Démocratique du Congo, HESABU vous aide à suivre,
              sécuriser et optimiser vos opérations grâce à des solutions
              technologiques adaptées.
            </p>

            <Link
              to="/devis"
              className="
                inline-block
                bg-red-700
                text-white
                px-8
                md:px-10
                py-4
                rounded-xl
                font-bold
                text-lg
                shadow-xl
                hover:bg-red-800
                hover:scale-105
                focus:outline-none
                focus:ring-4
                focus:ring-red-300
                transition
                duration-300
              "
            >
              Demander un devis pour votre flotte
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Solutions;
