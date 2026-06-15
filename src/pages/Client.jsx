import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mapBg from "../assets/map-bg.png";

function Client() {
  return (
    <>
      <Navbar />

      <section
        className="relative py-32 text-center overflow-hidden"
        style={{
          backgroundImage: `url(${mapBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

        {/* Contenu */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">

          <h1
            className="
            text-4xl
            md:text-6xl
            font-bold
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
            mb-10
            "
          >
            Accédez à votre plateforme GPS en temps réel
            pour suivre vos véhicules, consulter vos rapports
            et gérer votre flotte.
          </p>

          <a
            href="https://hesabu.trackgpsfleet.com/"
            target="_blank"
            rel="noreferrer"
            className="
            inline-block
            bg-red-600
            text-white
            px-8
            py-4
            rounded-xl
            font-bold
            text-lg
            shadow-lg
            hover:bg-red-700
            hover:scale-105
            transition
            duration-300
            "
          >
            Ouvrir la plateforme
          </a>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Client;