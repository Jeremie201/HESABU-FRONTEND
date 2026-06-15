import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mapBg from "../assets/map-bg.png";

function About() {
  return (
    <>
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

          <span className="uppercase tracking-[4px] font-semibold">
            À propos de HESABU
          </span>

          <h1
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
            Votre partenaire technologique
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
            HESABU SARLU accompagne les entreprises,
            institutions, ONG et particuliers grâce
            à des solutions GPS, IoT et télématiques
            innovantes permettant d'améliorer la
            sécurité, la productivité et la rentabilité.
          </p>

        </div>

      </section>

      {/* PRESENTATION */}

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

            <div
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
                className="
                text-3xl
                md:text-4xl
                font-bold
                mb-6
                "
                >
                Qui sommes-nous ?
              </h2>

              <p
                className="
                text-base
                md:text-lg
                text-gray-700
                leading-7
                md:leading-8
                text-justify
                "
                >
                HESABU SARLU est une entreprise congolaise
                spécialisée dans les solutions GPS,
                la gestion intelligente de flotte,
                la télématique embarquée et les
                technologies IoT.

                <br /><br />

                Nous aidons les organisations à suivre,
                sécuriser et optimiser leurs véhicules,
                équipements et opérations grâce à des
                technologies modernes de géolocalisation
                et d'analyse de données.

                <br /><br />

                Notre expertise permet à nos clients
                d'améliorer leur efficacité opérationnelle,
                de réduire leurs coûts et de prendre
                des décisions basées sur des données
                fiables en temps réel.
              </p>

            </div>

            <div
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
                className="
                text-3xl
                md:text-4xl
                font-bold
                mb-6
                "
                >
                Notre Mission
              </h2>

              <p className="text-lg text-gray-700 leading-8">
                Fournir des solutions technologiques
                innovantes permettant aux entreprises
                et particuliers de sécuriser leurs
                véhicules, optimiser leurs opérations
                et améliorer leurs performances.
              </p>

              <div className="border-t my-8"></div>

              <h2 className="text-4xl font-bold mb-6">
                Notre Vision
              </h2>

              <p className="text-lg text-gray-700 leading-8">
                Devenir une référence en Afrique
                centrale dans les domaines du GPS,
                de l'IoT et de la transformation
                numérique appliquée à la mobilité
                et à la gestion des actifs.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* VALEURS */}

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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">


          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold mb-4">
              Nos Valeurs
            </h2>

            <p className="text-xl text-gray-800">
              Les principes qui guident chacune de nos actions.
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

            <div
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
              <div className="text-5xl mb-4">🚀</div>

              <h3 className="text-2xl font-bold mb-3">
                Innovation
              </h3>

              <p className="text-gray-600">
                Des solutions modernes adaptées
                aux défis actuels.
              </p>
            </div>

            <div
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
              <div className="text-5xl mb-4">🤝</div>

              <h3 className="text-2xl font-bold mb-3">
                Confiance
              </h3>

              <p className="text-gray-600">
                Une relation durable basée
                sur la transparence.
              </p>
            </div>

            <div
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
              <div className="text-5xl mb-4">🛡️</div>

              <h3 className="text-2xl font-bold mb-3">
                Sécurité
              </h3>

              <p className="text-gray-600">
                La protection de vos actifs
                est notre priorité.
              </p>
            </div>

            <div
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
              <div className="text-5xl mb-4">⭐</div>

              <h3 className="text-2xl font-bold mb-3">
                Excellence
              </h3>

              <p className="text-gray-600">
                Un service professionnel
                et de qualité.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CHIFFRES */}

      <section className="py-24 bg-red-600 text-white">

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
              <h3
                className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                "
                >
                24/7</h3>
              <p className="mt-3 text-xl">
                Surveillance continue
              </p>
            </div>

            <div>
              <h3
                className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                "
                >
                GPS</h3>
              <p className="mt-3 text-xl">
                Géolocalisation temps réel
              </p>
            </div>

            <div>
              <h3
                className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                "
                >
                IoT</h3>
              <p className="mt-3 text-xl">
                Solutions connectées
              </p>
            </div>

            <div>
              <h3
                className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                "
                >
                📈</h3>
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