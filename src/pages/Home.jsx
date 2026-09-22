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
        keywords="GPS RDC, GPS Kinshasa, gestion de flotte, télématique embarquée, IoT, géolocalisation, localisation véhicules, gestion à distance, suivi en temps réel, suivi de véhicules, HESABU, HESABU SARLU, IoT, Tracking véhicule, Télématique, HESABU, Kinshasa, République Démocratique du Congo"
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
