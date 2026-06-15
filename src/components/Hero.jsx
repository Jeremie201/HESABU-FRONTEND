import { Link } from "react-router-dom";
import affiche from "../assets/affiche.png";
import mapBg from "../assets/map-bg.png";

function Hero() {
  return (
    <section className="
    bg-gradient-to-br
    from-red-700
    via-red-600
    to-black
    text-white
    overflow-hidden
    ">

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">

        {/* HERO PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXTE */}
          <div>

            <p className="uppercase tracking-[6px] text-red-200 mb-6">
              GPS • IoT • Gestion de flotte • Télématique
            </p>

            <h1 className="
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-extrabold
            leading-tight
            ">
              La technologie
              <br />
              au service
              <br />
              de votre mobilité
            </h1>

            <p className="
            mt-8
            text-lg
            md:text-xl
            text-gray-200
            leading-7
            md:leading-8
            ">
              HESABU accompagne les entreprises,
              les institutions et les particuliers
              grâce à des solutions intelligentes
              de géolocalisation GPS,
              de gestion de flotte automobile
              et de sécurité connectée.
            </p>

            {/* BOUTONS */}
            <div className="
            flex
            flex-col
            sm:flex-row
            gap-5
            mt-10
            ">

              <Link
                to="/devis"
                className="
                w-full
                sm:w-auto
                bg-white
                text-red-600
                px-8
                py-4
                rounded-xl
                font-bold
                shadow-xl
                hover:scale-105
                transition
                duration-300
                "
              >
                Demander un devis
              </Link>

              <Link
                to="/client"
                className="
                w-full
                sm:w-auto
                border-2
                border-white
                px-8
                py-4
                rounded-xl
                font-bold
                hover:bg-white
                hover:text-red-600
                transition
                duration-300
                "
              >
                Espace Client
              </Link>

            </div>

            {/* STATS */}
            <div className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-8
            mt-12
            md:mt-16
            text-center
            sm:text-left
            ">

              <div>
                <h2 className="text-4xl font-bold">
                  +50
                </h2>

                <p className="text-gray-200">
                  Véhicules suivis
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">
                  24/7
                </h2>

                <p className="text-gray-200">
                  Surveillance
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">
                  99%
                </h2>

                <p className="text-gray-200">
                  Satisfaction
                </p>
              </div>

            </div>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center">

            <img
              src={affiche}
              alt="HESABU GPS"
              className="w-full max-w-2xl rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>

      {/* APERÇU RAPIDE DES RUBRIQUES */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link
            to="/services"
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition"
          >
            <div className="text-4xl mb-4">🛰️</div>

            <h3 className="text-2xl font-bold mb-2">
              Services
            </h3>

            <p className="text-red-100">
              Suivi GPS, anti-vol,
              alertes intelligentes
              et maintenance.
            </p>

          </Link>

          <Link
            to="/solutions"
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition"
          >
            <div className="text-4xl mb-4">🚚</div>

            <h3 className="text-2xl font-bold mb-2">
              Solutions
            </h3>

            <p className="text-red-100">
              Solutions pour particuliers,
              entreprises et transporteurs.
            </p>

          </Link>

          <Link
            to="/about"
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition"
          >
            <div className="text-4xl mb-4">🏢</div>

            <h3 className="text-2xl font-bold mb-2">
              À propos
            </h3>

            <p className="text-red-100">
              Découvrez HESABU,
              notre expertise et notre vision.
            </p>

          </Link>

          <Link
            to="/contact"
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition"
          >
            <div className="text-4xl mb-4">📞</div>

            <h3 className="text-2xl font-bold mb-2">
              Contact
            </h3>

            <p className="text-red-100">
              Contactez notre équipe
              pour un devis ou une démonstration.
            </p>

          </Link>

        </div>

      </div>

      {/* VAGUE SVG */}

      <div className="overflow-hidden leading-none">

        <svg
          viewBox="0 0 1440 120"
          className="w-full"
        >
          <path
            fill="#ffffff"
            d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,160L0,160Z"
          />
        </svg>

      </div>

    </section>
  );
}

export default Hero;