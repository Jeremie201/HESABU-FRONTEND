import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import mapBg from "../assets/map-bg.png";

function Services() {
  return (
    <>
      <Navbar />

      {/* HERO SERVICES */}

      <section className="
        bg-gradient-to-br
        from-red-700
        via-red-600
        to-black
        text-white
        py-16
        md:py-24
        ">

        <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        md:px-8
        text-center
        ">

          <span className="uppercase tracking-[5px] text-red-200 font-semibold">
            HESABU SERVICES
          </span>

          <h1 className="
        text-4xl
        sm:text-5xl
        lg:text-7xl
        font-extrabold
        mt-4
        mb-6
        leading-tight
        ">
            Des services conçus
            <br />
            pour votre performance
          </h1>

          <p className="
        text-xl
        text-red-100
        max-w-4xl
        mx-auto
        leading-8
        ">
            Géolocalisation GPS, gestion de flotte,
            télématique embarquée, sécurité anti-vol,
            suivi carburant et alertes intelligentes :
            HESABU vous accompagne dans la maîtrise
            de vos opérations au quotidien.
          </p>

          <div className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-6
        md:gap-8
        mt-12
        md:mt-16
        ">

            <div>
              <h3 className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                ">
                24/7
              </h3>

              <p className="mt-2 text-red-100">
                Surveillance
              </p>
            </div>

            <div>
              <h3 className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                ">
                GPS
              </h3>

              <p className="mt-2 text-red-100">
                Temps réel
              </p>
            </div>

            <div>
              <h3 className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                ">
                IoT
              </h3>

              <p className="mt-2 text-red-100">
                Connecté
              </p>
            </div>

            <div>
              <h3 className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                ">
                📈
              </h3>

              <p className="mt-2 text-red-100">
                Performance
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
        >

        {/* Même overlay que ServicesSection */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 md:px-8">

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Besoin d'une solution adaptée ?
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-8">
            Nos experts vous accompagnent dans le choix
            de la meilleure solution GPS et télématique
            pour vos véhicules et votre activité.
            </p>

            <a
            href="/devis"
            className="
            inline-block
            bg-red-600
            text-white
            px-10
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
            </a>

        </div>

        </section>

      <Footer />
    </>
  );
}

export default Services;