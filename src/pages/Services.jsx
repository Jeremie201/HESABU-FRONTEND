import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

import mapBg from "../assets/map-bg.webp";

function Services() {
  return (
    <>
      <SEO
        title="Services GPS et Géolocalisation à Kinshasa et en RDC | HESABU"
        description="Découvrez les services GPS de HESABU à Kinshasa et en RDC : géolocalisation de véhicules, gestion de flotte, télématique, sécurité anti-vol, suivi carburant et surveillance en temps réel."
        keywords="services GPS Kinshasa, GPS RDC, géolocalisation véhicule Kinshasa, gestion de flotte RDC, suivi GPS véhicules, télématique RDC, sécurité anti-vol, suivi carburant, IoT Kinshasa"
        image="https://hesabudrc.com/hesabusend.png"
        url="https://hesabudrc.com/services"
      />

      <Navbar />

      <main>

        {/* HERO SERVICES */}

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
          aria-labelledby="services-title"
        >
          <div
            className="
              relative
              z-10
              max-w-7xl
              mx-auto
              px-6
              md:px-8
              text-center
            "
          >
            <span className="uppercase tracking-[5px] text-red-100 font-semibold">
              HESABU SERVICES
            </span>

            <h1
              id="services-title"
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
              Services GPS
              <br />
              et Géolocalisation
              <br />
              à Kinshasa et en RDC
            </h1>

            <p
              className="
                text-xl
                text-red-100
                max-w-4xl
                mx-auto
                leading-8
              "
            >
              HESABU SARLU propose des services professionnels de
              géolocalisation GPS, de suivi de véhicules, de gestion de flotte,
              de télématique embarquée et de sécurité automobile à Kinshasa
              et partout en République Démocratique du Congo.
            </p>

            <p
              className="
                text-lg
                text-red-100
                max-w-4xl
                mx-auto
                leading-8
                mt-5
              "
            >
              Nos solutions permettent aux entreprises, institutions,
              transporteurs et particuliers de suivre leurs véhicules en temps
              réel, mieux contrôler leurs opérations, réduire les coûts
              d'exploitation et renforcer la sécurité de leurs actifs.
            </p>

            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-6
                md:gap-8
                mt-12
                md:mt-16
              "
              aria-label="Principales caractéristiques des services HESABU"
            >
              <div>
                <p
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-bold
                  "
                >
                  24/7
                </p>

                <p className="mt-2 text-red-100">
                  Surveillance continue
                </p>
              </div>

              <div>
                <p
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-bold
                  "
                >
                  GPS
                </p>

                <p className="mt-2 text-red-100">
                  Suivi en temps réel
                </p>
              </div>

              <div>
                <p
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-bold
                  "
                >
                  IoT
                </p>

                <p className="mt-2 text-red-100">
                  Véhicules connectés
                </p>
              </div>

              <div>
                <p
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-bold
                  "
                  aria-hidden="true"
                >
                  📈
                </p>

                <p className="mt-2 text-red-100">
                  Performance de flotte
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LISTE DES SERVICES */}

        <ServicesSection />

        {/* CTA */}

        <section
          className="relative py-24 overflow-hidden"
          style={{
            backgroundImage: `url(${mapBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-labelledby="services-cta-title"
        >
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center px-6 md:px-8">

            <span className="text-red-700 uppercase font-bold tracking-[4px]">
              Votre projet
            </span>

            <h2
              id="services-cta-title"
              className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6"
            >
              Besoin d'une solution GPS adaptée à votre flotte ?
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-4 leading-8">
              Nos équipes vous accompagnent dans le choix d'une solution de
              géolocalisation, de télématique et de gestion de flotte adaptée
              à vos véhicules et à votre activité.
            </p>

            <p className="text-lg text-gray-700 mb-10 leading-8">
              Que votre activité soit basée à Kinshasa ou ailleurs en
              République Démocratique du Congo, HESABU vous aide à mettre
              en place une solution de suivi GPS adaptée à vos besoins.
            </p>

            <Link
              to="/devis"
              className="
                inline-block
                bg-red-700
                text-white
                px-10
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
              Demander un devis GPS
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Services;
