import Navbar from "../components/Navbar";
import DevisSection from "../components/DevisSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Devis() {
  return (
    <>
      <SEO
        title="Devis GPS et Gestion de Flotte à Kinshasa et en RDC | HESABU"
        description="Demandez un devis à HESABU SARLU pour une solution GPS, de géolocalisation, de gestion de flotte, de télématique ou d’IoT à Kinshasa et en République Démocratique du Congo."
        keywords="devis GPS Kinshasa, prix GPS véhicule Kinshasa, devis gestion de flotte RDC, installation GPS véhicule, solution GPS entreprise RDC, coût gestion de flotte, HESABU devis"
        image="https://hesabudrc.com/hesabusend.png"
        url="https://hesabudrc.com/devis"
      />

      <Navbar />

      <main>
        <DevisSection />
      </main>

      <Footer />
    </>
  );
}

export default Devis;
