import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        title="HESABU SARLU | GPS et Gestion de Flotte en RDC"
        description="HESABU SARLU propose des solutions GPS, de géolocalisation et de gestion de flotte en RDC pour suivre les véhicules, sécuriser les actifs et optimiser les opérations."
        keywords="GPS RDC, gestion de flotte RDC, géolocalisation Kinshasa, suivi véhicule RDC, télématique RDC, HESABU SARLU"
        image="https://hesabudrc.com/hesabusend.png"
        url="https://hesabudrc.com/"
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Pourquoi choisir HESABU */}
      <WhyChooseUs />

      {/* Pied de page */}
      <Footer />
    </>
  );
}

export default Home;
