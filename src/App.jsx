import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Devis from "./pages/Devis";
import Client from "./pages/Client";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Ressources from "./pages/Ressources";
import ArticleGPS from "./pages/articles/ArticleGPS";
import ArticleCarburant from "./pages/articles/ArticleCarburant";
import ArticleFlotte from "./pages/articles/ArticleFlotte";
import ArticleVol from "./pages/articles/ArticleVol";
import ArticleIoT from "./pages/articles/ArticleIoT";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/solutions" element={<Solutions />} />

        <Route path="/ressources" element={<Ressources />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/devis" element={<Devis />} />

        <Route path="/client" element={<Client />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/ressources/gps-professionnel"
          element={<ArticleGPS />}
        />

        <Route
          path="/ressources/reduire-couts-gps-sonde-carburant"
          element={<ArticleCarburant />}
        />

        <Route
          path="/ressources/gestion-flotte"
          element={<ArticleFlotte />}
        />

        <Route
          path="/ressources/securite-anti-vol"
          element={<ArticleVol />}
        />

        <Route
          path="/ressources/iot-gestion-flotte"
          element={<ArticleIoT />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;