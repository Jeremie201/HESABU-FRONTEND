import Navbar from "../components/Navbar";
import SolutionsSection from "../components/SolutionsSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import mapBg from "../assets/map-bg.png";

function Solutions() {
  return (
    <>
      <Navbar />

      {/* HERO SOLUTIONS */}

      <section className="
        bg-gradient-to-br
        from-red-700
        via-red-600
        to-black
        text-white
        py-16
        md:py-24
        ">

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">

          <span className="uppercase tracking-[5px] text-red-200 font-semibold">
            HESABU SOLUTIONS
          </span>

          <h1
            className="
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-extrabold
            mt-4
            mb-6
            "
            >
            Des solutions intelligentes
            <br />
            pour chaque activité
          </h1>

          <p className="text-xl text-red-100 max-w-4xl mx-auto leading-8">
            Que vous soyez particulier, entreprise,
            transporteur ou gestionnaire de flotte,
            HESABU met à votre disposition des outils
            performants pour suivre, sécuriser et
            optimiser vos opérations.
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
            >

            <div>
              <h3 className="text-5xl font-bold">
                GPS
              </h3>

              <p className="mt-2 text-red-100">
                Temps réel
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                ⛽
              </h3>

              <p className="mt-2 text-red-100">
                Suivi carburant
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                🔒
              </h3>

              <p className="mt-2 text-red-100">
                Sécurité
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                📊
              </h3>

              <p className="mt-2 text-red-100">
                Analyses
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
        >

        {/* Overlay */}

        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 md:px-8">

          <h2
            className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            mb-6
            "
            >
            Besoin d'une solution sur mesure ?
          </h2>

          <p className="text-xl text-gray-600 mb-10">
            Nos experts vous accompagnent dans le choix
            et le déploiement de la solution GPS la plus
            adaptée à votre activité.
          </p>

          <Link
            to="/devis"
            className="
            bg-red-600
            text-white
            px-8
            md:px-10
            py-4
            rounded-xl
            font-bold
            text-lg
            shadow-xl
            hover:bg-red-700
            hover:scale-105
            transition
            duration-300
            "
          >
            Demander un devis
          </Link>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Solutions;