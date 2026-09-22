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

      toast.error(
        "Erreur lors de l'envoi du message"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="relative py-20 md:py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${mapBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-labelledby="contact-title"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

          {/* ================================= */}
          {/* TITRE PRINCIPAL */}
          {/* ================================= */}

          <div className="text-center mb-14">

            <span className="text-red-600 uppercase font-bold tracking-[4px]">
              HESABU SARLU
            </span>

            <h1
              id="contact-title"
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-extrabold
                text-gray-900
                mt-4
                mb-6
                leading-tight
              "
            >
              Contactez HESABU
              <br />
              à Kinshasa
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-8">
              Besoin d'une solution GPS, de géolocalisation,
              de gestion de flotte, de télématique ou d'IoT ?
              L'équipe HESABU SARLU vous accompagne à Kinshasa
              et en République Démocratique du Congo pour
              étudier votre besoin et vous proposer une solution adaptée.
            </p>

          </div>

          {/* ================================= */}
          {/* COORDONNÉES */}
          {/* ================================= */}

          <div className="grid md:grid-cols-3 gap-6 mb-12">

            {/* TÉLÉPHONE */}
            <article
              className="
                bg-white/90
                backdrop-blur-md
                rounded-2xl
                p-7
                shadow-lg
                border
                border-gray-100
                text-center
              "
            >
              <div
                className="text-4xl mb-4"
                aria-hidden="true"
              >
                📞
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Téléphone
              </h2>

              <a
                href="tel:+243839573532"
                className="text-red-600 font-semibold hover:underline"
              >
                +243 839 573 532
              </a>
            </article>

            {/* EMAIL */}
            <article
              className="
                bg-white/90
                backdrop-blur-md
                rounded-2xl
                p-7
                shadow-lg
                border
                border-gray-100
                text-center
              "
            >
              <div
                className="text-4xl mb-4"
                aria-hidden="true"
              >
                ✉️
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-3">
                E-mail
              </h2>

              <a
                href="mailto:iot@hesaburdc.com"
                className="text-red-600 font-semibold hover:underline break-all"
              >
                iot@hesabudrc.com
              </a>
            </article>

            {/* ADRESSE */}
            <article
              className="
                bg-white/90
                backdrop-blur-md
                rounded-2xl
                p-7
                shadow-lg
                border
                border-gray-100
                text-center
              "
            >
              <div
                className="text-4xl mb-4"
                aria-hidden="true"
              >
                📍
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Adresse à Kinshasa
              </h2>

              <address className="not-italic text-gray-700 leading-7">
                11A3 Avenue Golf
                <br />
                Anciennes Galeries Présidentielles
                <br />
                Kinshasa-Gombe
                <br />
                République Démocratique du Congo
              </address>
            </article>

          </div>

          {/* ================================= */}
          {/* WHATSAPP */}
          {/* ================================= */}

          <div
            className="
              bg-green-50
              border
              border-green-200
              rounded-2xl
              p-6
              text-center
              mb-12
              shadow-sm
            "
          >
            <div className="flex items-center justify-center gap-3 mb-3">

              <FaWhatsapp
                size={30}
                className="text-green-600"
                aria-hidden="true"
              />

              <h2 className="font-bold text-xl text-gray-900">
                Assistance WhatsApp
              </h2>

            </div>

            <p className="text-gray-700 mb-4">
              Besoin d'une réponse rapide concernant une solution GPS
              ou votre flotte ?
            </p>

            <a
              href="https://wa.me/243839573532"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-green-700
                font-bold
                hover:underline
              "
            >
              <FaWhatsapp aria-hidden="true" />

              +243 839 573 532
            </a>
          </div>

          {/* ================================= */}
          {/* FORMULAIRE */}
          {/* ================================= */}

          <div className="max-w-4xl mx-auto">

            <div className="text-center mb-8">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Parlez-nous de votre projet
              </h2>

              <p className="text-lg text-gray-700 leading-8">
                Installation GPS, gestion de flotte, suivi de véhicules,
                sécurité, télématique ou IoT : décrivez votre besoin
                et notre équipe vous répondra.
              </p>

            </div>

            <form
              onSubmit={envoyer}
              className="
                bg-white/95
                backdrop-blur-md
                rounded-3xl
                p-6
                md:p-10
                shadow-xl
                space-y-6
                border
                border-gray-100
              "
            >

              {/* NOM */}
              <div>
                <label
                  htmlFor="nom"
                  className="block font-semibold text-gray-800 mb-2"
                >
                  Nom complet
                </label>

                <input
                  id="nom"
                  type="text"
                  name="nom"
                  placeholder="Votre nom complet"
                  value={form.nom}
                  onChange={handleChange}
                  autoComplete="name"
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    p-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-500
                  "
                  required
                />
              </div>

              {/* ENTREPRISE */}
              <div>
                <label
                  htmlFor="entreprise"
                  className="block font-semibold text-gray-800 mb-2"
                >
                  Entreprise
                </label>

                <input
                  id="entreprise"
                  type="text"
                  name="entreprise"
                  placeholder="Nom de votre entreprise"
                  value={form.entreprise}
                  onChange={handleChange}
                  autoComplete="organization"
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    p-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-500
                  "
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold text-gray-800 mb-2"
                >
                  Adresse e-mail
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="exemple@email.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    p-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-500
                  "
                  required
                />
              </div>

              {/* TÉLÉPHONE */}
              <div>
                <label
                  htmlFor="telephone"
                  className="block font-semibold text-gray-800 mb-2"
                >
                  Téléphone
                </label>

                <input
                  id="telephone"
                  type="tel"
                  name="telephone"
                  placeholder="+243..."
                  value={form.telephone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    p-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-500
                  "
                  required
                />
              </div>

              {/* SUJET */}
              <div>
                <label
                  htmlFor="sujet"
                  className="block font-semibold text-gray-800 mb-2"
                >
                  Sujet
                </label>

                <input
                  id="sujet"
                  type="text"
                  name="sujet"
                  placeholder="Ex. Installation GPS pour 10 véhicules"
                  value={form.sujet}
                  onChange={handleChange}
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    p-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-500
                  "
                  required
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-semibold text-gray-800 mb-2"
                >
                  Votre message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  name="message"
                  placeholder="Décrivez votre besoin..."
                  value={form.message}
                  onChange={handleChange}
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    p-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-500
                    resize-y
                  "
                  required
                />
              </div>

              {/* ================================= */}
              {/* RÉCAPITULATIF */}
              {/* ================================= */}

              <div className="bg-gray-50 border rounded-2xl p-5">

                <h3 className="font-bold text-lg mb-4 text-gray-900">
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

              {/* BOUTON */}
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

          {/* ================================= */}
          {/* TEXTE LOCAL / SEO */}
          {/* ================================= */}

          <div className="max-w-4xl mx-auto text-center mt-20">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Solutions GPS et gestion de flotte à Kinshasa
            </h2>

            <p className="text-lg text-gray-700 leading-8">
              HESABU SARLU accompagne les entreprises, institutions,
              transporteurs et particuliers à Kinshasa et en République
              Démocratique du Congo dans leurs projets de géolocalisation,
              de suivi de véhicules, de gestion de flotte, de télématique
              et de technologies IoT.
            </p>

          </div>

        </div>

      </section>

      {/* ================================= */}
      {/* BOUTON WHATSAPP FLOTTANT */}
      {/* ================================= */}

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
          hover:scale-105
        "
        aria-label="Contacter HESABU sur WhatsApp"
      >
        <FaWhatsapp
          size={34}
          aria-hidden="true"
        />
      </a>
    </>
  );
}

export default ContactSection;
