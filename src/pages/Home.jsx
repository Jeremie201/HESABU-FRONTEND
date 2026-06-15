import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
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