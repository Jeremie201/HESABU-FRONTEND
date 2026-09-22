import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        title="HESABU SARLU | GPS et Gestion de Flotte à Kinshasa et en RDC"
        description="HESABU SARLU propose à Kinshasa et en République Démocratique du Congo des solutions GPS, de géolocalisation, de suivi de véhicules, de télématique et de gestion intelligente de flotte."
        keywords="GPS Kinshasa, GPS RDC, gestion de flotte Kinshasa, gestion de flotte RDC, géolocalisation Kinshasa, suivi véhicule RDC, télématique RDC, HESABU SARLU"
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
