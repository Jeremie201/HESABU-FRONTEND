import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mapBg from "../assets/map-bg.png";
import SEO from "../components/SEO";

function Client() {
  return (
    <>
      <SEO
        title="Espace Client | HESABU SARLU"
        description="Accédez à votre espace client HESABU SARLU pour consulter votre plateforme de suivi GPS et de gestion de flotte."
        url="https://hesabudrc.com/client"
        noIndex
      />

      <Navbar />

      <main>

        <section
          className="
            relative
            py-32
            text-center
            overflow-hidden
          "
          style={{
            backgroundImage: `url(${mapBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-labelledby="client-title"
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

          {/* Contenu */}
          <div className="relative z-10 max-w-4xl mx-auto px-6">

            <span
              className="
                text-red-700
                uppercase
                font-bold
                tracking-[4px]
              "
            >
              HESABU SARLU
            </span>

            <h1
              id="client-title"
              className="
                text-4xl
                md:text-6xl
                font-bold
                mt-4
                mb-6
                text-gray-900
              "
            >
              Espace Client
            </h1>

            <p
              className="
                text-lg
                md:text-xl
                text-gray-700
                max-w-3xl
                mx-auto
                mb-10
                leading-8
              "
            >
              Accédez à votre plateforme HESABU pour suivre vos véhicules,
              consulter les informations de géolocalisation, visualiser vos
              rapports et gérer votre flotte.
            </p>

            <a
              href="https://hesabu.trackgpsfleet.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvrir la plateforme GPS HESABU dans un nouvel onglet"
              className="
                inline-block
                bg-red-700
                text-white
                px-8
                py-4
                rounded-xl
                font-bold
                text-lg
                shadow-lg
                hover:bg-red-800
                hover:scale-105
                focus:outline-none
                focus:ring-4
                focus:ring-red-300
                transition
                duration-300
              "
            >
              Ouvrir la plateforme GPS
            </a>

            <p
              className="
                text-sm
                text-gray-700
                mt-6
              "
            >
              L'accès à la plateforme est réservé aux clients HESABU.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Client;
