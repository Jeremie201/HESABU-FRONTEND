
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import mapBg from "../assets/map-bg.png";

function ContactSection() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const envoyer = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "https://hesabu-o7rs.onrender.com/api/contact",
        form
      );

      toast.success("Message envoyé avec succès");

      setForm({
        nom: "",
        entreprise: "",
        email: "",
        telephone: "",
        sujet: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'envoi du message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="relative py-24 overflow-hidden"
        style={{
            backgroundImage: `url(${mapBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        >

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">

          <h2 className="text-5xl font-bold text-center mb-6">
            Contactez-nous
          </h2>

          <p className="text-center text-gray-600 mb-8">
            Une question ? Notre équipe est à votre disposition.
          </p>

          {/* WhatsApp rapide */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <FaWhatsapp
                size={28}
                className="text-green-600"
              />

              <span className="font-bold text-lg">
                Assistance WhatsApp
              </span>
            </div>

            <p className="text-gray-700 mb-3">
              Besoin d'une réponse rapide ?
            </p>

            <a
              href="https://wa.me/243839573532"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-bold hover:underline"
            >
              +243 839 573 532
            </a>
          </div>

          <form
            onSubmit={envoyer}
            className="bg-gray-50 rounded-3xl p-10 shadow-xl space-y-6"
          >
            <input
              type="text"
              name="nom"
              placeholder="Nom complet"
              value={form.nom}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            />

            <input
              type="text"
              name="entreprise"
              placeholder="Entreprise"
              value={form.entreprise}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            />

            <input
              type="text"
              name="telephone"
              placeholder="Téléphone"
              value={form.telephone}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            />

            <input
              type="text"
              name="sujet"
              placeholder="Sujet"
              value={form.sujet}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            />

            {/* Récapitulatif */}
            <div className="bg-white border rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-4">
                Récapitulatif de votre message
              </h3>

              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Nom :</strong>{" "}
                  {form.nom || "-"}
                </p>

                <p>
                  <strong>Entreprise :</strong>{" "}
                  {form.entreprise || "-"}
                </p>

                <p>
                  <strong>Email :</strong>{" "}
                  {form.email || "-"}
                </p>

                <p>
                  <strong>Téléphone :</strong>{" "}
                  {form.telephone || "-"}
                </p>

                <p>
                  <strong>Sujet :</strong>{" "}
                  {form.sujet || "-"}
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                bg-red-600
                hover:bg-red-700
                text-white
                px-8
                py-4
                rounded-xl
                font-bold
                w-full
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading
                ? "Envoi en cours..."
                : "Envoyer le message"}
            </button>
          </form>

        </div>
      </section>

      {/* Bouton WhatsApp flottant */}
      <a
        href="https://wa.me/243839573532"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed
          bottom-6
          right-6
          bg-green-500
          hover:bg-green-600
          text-white
          p-4
          rounded-full
          shadow-2xl
          z-50
          transition
        "
        aria-label="Contacter sur WhatsApp"
      >
        <FaWhatsapp size={34} />
      </a>
    </>
  );
}

export default ContactSection;
