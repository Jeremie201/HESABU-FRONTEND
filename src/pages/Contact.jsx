import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Contact() {
  return (
    <>
      <SEO
        title="Contact HESABU | GPS et Gestion de Flotte à Kinshasa"
        description="Contactez HESABU SARLU à Kinshasa pour vos besoins en solutions GPS, géolocalisation de véhicules, gestion de flotte, télématique et technologies IoT en République Démocratique du Congo."
        keywords="contact HESABU Kinshasa, GPS Kinshasa, entreprise GPS Kinshasa, gestion de flotte Kinshasa, géolocalisation véhicule Kinshasa, télématique RDC, IoT RDC, HESABU RDC"
        image="https://hesabudrc.com/hesabusend.png"
        url="https://hesabudrc.com/contact"
      />

      <Navbar />

      <ContactSection />

      <Footer />
    </>
  );
}

export default Contact;
