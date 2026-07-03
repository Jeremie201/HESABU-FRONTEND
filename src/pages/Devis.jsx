import Navbar from "../components/Navbar";
import DevisSection from "../components/DevisSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Devis() {
  return (
    <>
      <SEO
        title="Devis | HESABU SARLU"
        description="Contactez HESABU SARLU pour vos besoins en solutions GPS, gestion de flotte, télématique embarquée et IoT en RDC."
        keywords="contact HESABU, GPS RDC, gestion de flotte, support client, IoT RDC"
      />
      <Navbar />
      <DevisSection />
      <Footer />
    </>
  );
}

export default Devis;