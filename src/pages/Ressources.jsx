import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Ressources() {
  return (
    <>
      <SEO
        title="Ressources | HESABU SARLU"
        description="Guides, conseils et actualités sur la géolocalisation GPS, la gestion de flotte, la télématique embarquée et les solutions IoT."
        keywords="blog GPS, ressources GPS, gestion de flotte, IoT, HESABU"
        url="https://hesabudrc.com/ressources"
      />

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Centre de Ressources
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Retrouvez nos guides, conseils et articles
          pour mieux comprendre les solutions GPS,
          la gestion de flotte, la télématique et les
          technologies IoT.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Ressources;