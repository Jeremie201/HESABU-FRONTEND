import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        title="HESABU SARLU | Solutions GPS et Gestion Intelligente de Flotte en RDC"
        description="HESABU SARLU est une entreprise congolaise spécialisée dans les solutions GPS, la gestion intelligente de flotte, la télématique embarquée et les technologies IoT."
        keywords="GPS RDC, gestion de flotte, télématique embarquée, IoT, géolocalisation, suivi de véhicules, HESABU SARLU"
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