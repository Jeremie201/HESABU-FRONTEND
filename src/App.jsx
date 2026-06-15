import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Devis from "./pages/Devis";
import Client from "./pages/Client";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/solutions" element={<Solutions />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/devis" element={<Devis />} />

        <Route path="/client" element={<Client />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;