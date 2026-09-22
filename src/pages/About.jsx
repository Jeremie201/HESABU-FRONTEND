import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mapBg from "../assets/map-bg.png";
import SEO from "../components/SEO";

function About() {
  return (
    <>
      <SEO
        title="À propos de HESABU | Entreprise GPS à Kinshasa et en RDC"
        description="Découvrez HESABU SARLU, entreprise congolaise basée à Kinshasa spécialisée dans les solutions GPS, la géolocalisation, la gestion de flotte, la télématique et les technologies IoT en RDC."
        keywords="HESABU SARLU, entreprise GPS Kinshasa, entreprise GPS RDC, gestion de flotte Kinshasa, télématique RDC, IoT RDC, géolocalisation véhicule"
        image="https://hesabudrc.com/hesabusend.png"
        url="https://hesabudrc.com/about"
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
        aria-labelledby="about-title"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">

          <span className="uppercase tracking-[4px] font-semibold text-red-200">
            À propos de HESABU
          </span>

          <h1
            id="about-title"
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-extrabold
              mt-4
              mb-6
              leading-tight
            "
          >
            HESABU SARLU,
            <br />
            spécialiste des solutions GPS
            <br />
            à Kinshasa et en RDC
          </h1>

          <p
            className="
              text-lg
              md:text-xl
              max-w-4xl
              mx-auto
              leading-7
              md:leading-8
              px-2
            "
          >
            HESABU SARLU accompagne les entreprises, institutions, ONG,
            transporteurs et particuliers à Kinshasa et partout en
            République Démocratique du Congo avec des solutions GPS,
            de géolocalisation, de gestion de flotte, de télématique
            embarquée et de technologies IoT.
          </p>

        </div>
      </section>

      {/* ================================= */}
      {/* PRÉSENTATION */}
      {/* ================================= */}

      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${mapBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-labelledby="about-presentation-title"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
              lg:gap-16
            "
          >

            {/* QUI SOMMES-NOUS */}

            <article
              className="
                bg-white/90
                backdrop-blur-md
                rounded-3xl
                p-8
                md:p-10
                shadow-xl
                border
                border-white/50
              "
            >
              <h2
                id="about-presentation-title"
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  mb-6
                "
              >
                Qui est HESABU SARLU ?
              </h2>

              <p
                className="
                  text-base
                  md:text-lg
                  text-gray-700
                  leading-7
                  md:leading-8
                "
              >
                HESABU SARLU est une entreprise congolaise spécialisée
                dans les solutions GPS, la géolocalisation des véhicules,
                la gestion intelligente de flotte, la télématique embarquée
                et les technologies IoT.
              </p>

              <p
                className="
                  text-base
                  md:text-lg
                  text-gray-700
                  leading-7
                  md:leading-8
                  mt-5
                "
              >
                Basée à Kinshasa, HESABU accompagne les organisations
                qui souhaitent suivre, sécuriser et optimiser leurs véhicules,
                équipements et opérations grâce à des technologies modernes
                de géolocalisation et d’analyse de données.
              </p>

              <p
                className="
                  text-base
                  md:text-lg
                  text-gray-700
                  leading-7
                  md:leading-8
                  mt-5
                "
              >
                Nos solutions permettent aux responsables de flotte de
                disposer d’informations utiles sur les déplacements,
                l’utilisation des véhicules, la sécurité, les performances
                opérationnelles et les événements importants de leur flotte.
              </p>

            </article>

            {/* MISSION ET VISION */}

            <article
              className="
                bg-white/90
                backdrop-blur-md
                rounded-3xl
                p-8
                md:p-10
                shadow-xl
                border
                border-white/50
              "
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Notre mission
              </h2>

              <p className="text-lg text-gray-700 leading-8">
                Fournir aux entreprises, institutions et particuliers
                à Kinshasa et en RDC des solutions technologiques fiables
                pour suivre leurs véhicules, renforcer la sécurité,
                optimiser leurs opérations et améliorer la gestion
                de leurs actifs.
              </p>

              <div className="border-t my-8"></div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Notre vision
              </h2>

              <p className="text-lg text-gray-700 leading-8">
                Contribuer au développement de la mobilité connectée
                et de la transformation numérique en République
                Démocratique du Congo et en Afrique centrale grâce
                aux technologies GPS, IoT et télématiques.
              </p>

            </article>

          </div>

        </div>
      </section>

      {/* ================================= */}
      {/* EXPERTISE */}
      {/* ================================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="text-center mb-16">

            <span className="text-red-600 uppercase font-bold tracking-[4px]">
              Notre expertise
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Des technologies au service de la mobilité et de la flotte
            </h2>

            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-8">
              HESABU combine géolocalisation GPS, télématique embarquée,
              technologies IoT et analyse de données pour proposer des
              solutions adaptées aux besoins des entreprises et gestionnaires
              de flotte à Kinshasa et en RDC.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <article className="bg-gray-50 p-8 rounded-3xl shadow-lg">

              <div
                className="text-5xl mb-5"
                aria-hidden="true"
              >
                📍
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Géolocalisation GPS
              </h3>

              <p className="text-gray-600 leading-7">
                Suivi des véhicules en temps réel, historique des trajets
                et visibilité sur les déplacements.
              </p>

            </article>

            <article className="bg-gray-50 p-8 rounded-3xl shadow-lg">

              <div
                className="text-5xl mb-5"
                aria-hidden="true"
              >
                🚚
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Gestion de flotte
              </h3>

              <p className="text-gray-600 leading-7">
                Outils permettant de mieux suivre l’utilisation,
                les performances et les opérations des véhicules.
              </p>

            </article>

            <article className="bg-gray-50 p-8 rounded-3xl shadow-lg">

              <div
                className="text-5xl mb-5"
                aria-hidden="true"
              >
                📡
              </div>

              <h3 className="text-2xl font-bold mb-4">
                IoT et télématique
              </h3>

              <p className="text-gray-600 leading-7">
                Technologies connectées et données télématiques
                pour améliorer la supervision des opérations.
              </p>

            </article>

            <article className="bg-gray-50 p-8 rounded-3xl shadow-lg">

              <div
                className="text-5xl mb-5"
                aria-hidden="true"
              >
                🛡️
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Sécurité automobile
              </h3>

              <p className="text-gray-600 leading-7">
                Géolocalisation, alertes et outils de surveillance
                pour renforcer la protection des véhicules.
              </p>

            </article>

          </div>

        </div>

      </section>

      {/* ================================= */}
      {/* VALEURS */}
      {/* ================================= */}

      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${mapBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-labelledby="values-title"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

          <div className="text-center mb-16">

            <h2
              id="values-title"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Nos valeurs
            </h2>

            <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-8">
              Les principes qui orientent notre travail et notre relation
              avec les clients et partenaires de HESABU.
            </p>

          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-8
            "
          >

            <article
              className="
                bg-white/90
                backdrop-blur-md
                p-6
                md:p-8
                rounded-3xl
                shadow-lg
                border
                border-white/50
                text-center
                hover:-translate-y-2
                hover:shadow-2xl
                transition
                duration-300
              "
            >
              <div
                className="text-5xl mb-4"
                aria-hidden="true"
              >
                🚀
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Innovation
              </h3>

              <p className="text-gray-600 leading-7">
                Des solutions technologiques conçues pour répondre
                aux besoins actuels de mobilité et de gestion.
              </p>
            </article>

            <article
              className="
                bg-white/90
                backdrop-blur-md
                p-6
                md:p-8
                rounded-3xl
                shadow-lg
                border
                border-white/50
                text-center
                hover:-translate-y-2
                hover:shadow-2xl
                transition
                duration-300
              "
            >
              <div
                className="text-5xl mb-4"
                aria-hidden="true"
              >
                🤝
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Confiance
              </h3>

              <p className="text-gray-600 leading-7">
                Une relation professionnelle fondée sur la transparence,
                l’accompagnement et la continuité du service.
              </p>
            </article>

            <article
              className="
                bg-white/90
                backdrop-blur-md
                p-6
                md:p-8
                rounded-3xl
                shadow-lg
                border
                border-white/50
                text-center
                hover:-translate-y-2
                hover:shadow-2xl
                transition
                duration-300
              "
            >
              <div
                className="text-5xl mb-4"
                aria-hidden="true"
              >
                🛡️
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Sécurité
              </h3>

              <p className="text-gray-600 leading-7">
                La protection et le suivi des véhicules et actifs
                occupent une place centrale dans nos solutions.
              </p>
            </article>

            <article
              className="
                bg-white/90
                backdrop-blur-md
                p-6
                md:p-8
                rounded-3xl
                shadow-lg
                border
                border-white/50
                text-center
                hover:-translate-y-2
                hover:shadow-2xl
                transition
                duration-300
              "
            >
              <div
                className="text-5xl mb-4"
                aria-hidden="true"
              >
                ⭐
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Excellence
              </h3>

              <p className="text-gray-600 leading-7">
                Une attention portée à la qualité des solutions,
                du déploiement et de l’accompagnement client.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* ================================= */}
      {/* POSITIONNEMENT LOCAL */}
      {/* ================================= */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">

          <span className="text-red-600 uppercase font-bold tracking-[4px]">
            Kinshasa • RDC
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Une entreprise technologique congolaise proche de ses clients
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-8">
            Depuis Kinshasa, HESABU développe et déploie des solutions
            destinées aux besoins de mobilité, de sécurité et de gestion
            de flotte en République Démocratique du Congo. Notre approche
            associe expertise locale, technologies GPS, télématique
            et IoT afin de proposer des solutions adaptées aux réalités
            opérationnelles de nos clients.
          </p>

        </div>

      </section>

      {/* ================================= */}
      {/* CHIFFRES / TECHNOLOGIES */}
      {/* ================================= */}

      <section
        className="py-24 bg-red-600 text-white"
        aria-label="Technologies et services HESABU"
      >
        <div className="max-w-7xl mx-auto px-8">

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-8
              text-center
            "
          >

            <div>
              <p
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-bold
                "
              >
                24/7
              </p>

              <p className="mt-3 text-xl">
                Surveillance continue
              </p>
            </div>

            <div>
              <p
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-bold
                "
              >
                GPS
              </p>

              <p className="mt-3 text-xl">
                Géolocalisation en temps réel
              </p>
            </div>

            <div>
              <p
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-bold
                "
              >
                IoT
              </p>

              <p className="mt-3 text-xl">
                Technologies connectées
              </p>
            </div>

            <div>
              <p
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-bold
                "
                aria-hidden="true"
              >
                📈
              </p>

              <p className="mt-3 text-xl">
                Optimisation des performances
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
