import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Contact() {
  return (
    <>
      <SEO
        title="Contact | HESABU SARLU"
        description="Contactez HESABU SARLU pour vos besoins en solutions GPS, gestion de flotte, télématique embarquée et IoT en RDC."
        keywords="contact HESABU, GPS RDC, gestion de flotte, support client, IoT RDC"
      />
      <Navbar />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Contact;