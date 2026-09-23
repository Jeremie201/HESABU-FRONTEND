import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import mapBg from "../assets/map-bg.webp";

function DevisSection() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    secteurActivite: "",
    typeVehicule: "",
    nombreVehicules: "",
    service: "",
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
        "https://hesabu-o7rs.onrender.com/api/devis",
        form
      );

      toast.success("Demande de devis envoyée avec succès");

      setForm({
        nom: "",
        entreprise: "",
        email: "",
        telephone: "",
        secteurActivite: "",
        typeVehicule: "",
        nombreVehicules: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error(
        "Erreur lors de l'envoi de la demande."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${mapBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="devis-title"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

        {/* TITRE PRINCIPAL */}

        <div className="text-center mb-14">

          <span className="text-red-700 uppercase font-bold tracking-[4px]">
            HESABU SARLU
          </span>

          <h1
            id="devis-title"
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
            Demandez un devis GPS
            <br />
            et Gestion de Flotte
            <br />
            à Kinshasa et en RDC
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-8">
            Vous souhaitez équiper un ou plusieurs véhicules avec une
            solution GPS, améliorer la gestion de votre flotte ou mettre
            en place une solution télématique ? HESABU SARLU vous
            accompagne à Kinshasa et en République Démocratique du Congo
            avec une proposition adaptée à votre activité.
          </p>

        </div>

        {/* AVANTAGES */}

        <div className="grid md:grid-cols-3 gap-6 mb-14">

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
              Solutions GPS adaptées
            </h2>

            <p className="text-gray-700 leading-7">
              Une solution adaptée au type de véhicule,
              au nombre d’unités et aux besoins de votre activité.
            </p>
          </article>

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
              🚚
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Gestion de flotte
            </h2>

            <p className="text-gray-700 leading-7">
              Suivi des véhicules, géolocalisation,
              contrôle des opérations et données de flotte.
            </p>
          </article>

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
              Accompagnement HESABU
            </h2>

            <p className="text-gray-700 leading-7">
              Notre équipe vous aide à identifier
              la solution adaptée à vos véhicules et à votre projet.
            </p>
          </article>

        </div>

        {/* FORMULAIRE */}

        <div
          className="max-w-4xl mx-auto"
          aria-labelledby="devis-form-title"
        >

          <div className="text-center mb-8">

            <h2
              id="devis-form-title"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Parlez-nous de votre flotte
            </h2>

            <p
              id="devis-form-description"
              className="text-lg text-gray-700 leading-8"
            >
              Remplissez le formulaire ci-dessous pour recevoir une
              proposition adaptée à vos besoins en GPS, géolocalisation,
              sécurité, carburant ou gestion de flotte.
            </p>

          </div>

          <form
            onSubmit={envoyer}
            aria-labelledby="devis-form-title"
            aria-describedby="devis-form-description"
            aria-busy={loading}
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
                  border-gray-400
                  rounded-xl
                  p-4
                  text-gray-900
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-4
                  focus:ring-red-300
                  focus:border-red-700
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
                  border-gray-400
                  rounded-xl
                  p-4
                  text-gray-900
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-4
                  focus:ring-red-300
                  focus:border-red-700
                "
              />
            </div>

            {/* SECTEUR */}
            <div>
              <label
                htmlFor="secteurActivite"
                className="block font-semibold text-gray-800 mb-2"
              >
                Secteur d'activité
              </label>

              <select
                id="secteurActivite"
                name="secteurActivite"
                value={form.secteurActivite}
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-400
                  rounded-xl
                  p-4
                  bg-white
                  text-gray-900
                  focus:outline-none
                  focus:ring-4
                  focus:ring-red-300
                  focus:border-red-700
                "
                required
              >
                <option value="">
                  Sélectionnez votre secteur
                </option>

                <option value="Transport & Logistique">
                  Transport & Logistique
                </option>

                <option value="BTP / Construction">
                  BTP / Construction
                </option>

                <option value="Distribution">
                  Distribution
                </option>

                <option value="Location de véhicules">
                  Location de véhicules
                </option>

                <option value="Sécurité">
                  Sécurité
                </option>

                <option value="Administration publique">
                  Administration publique
                </option>

                <option value="Agriculture">
                  Agriculture
                </option>

                <option value="Particulier">
                  Particulier
                </option>

                <option value="Autre">
                  Autre
                </option>
              </select>
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
                  border-gray-400
                  rounded-xl
                  p-4
                  text-gray-900
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-4
                  focus:ring-red-300
                  focus:border-red-700
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
                placeholder="+243 XXX XXX XXX"
                value={form.telephone}
                onChange={handleChange}
                autoComplete="tel"
                inputMode="tel"
                className="
                  w-full
                  border
                  border-gray-400
                  rounded-xl
                  p-4
                  text-gray-900
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-4
                  focus:ring-red-300
                  focus:border-red-700
                "
                required
              />
            </div>

            {/* TYPE DE VÉHICULE */}
            <div>
              <label
                htmlFor="typeVehicule"
                className="block font-semibold text-gray-800 mb-2"
              >
                Type de véhicule
              </label>

              <select
                id="typeVehicule"
                name="typeVehicule"
                value={form.typeVehicule}
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-400
                  rounded-xl
                  p-4
                  bg-white
                  text-gray-900
                  focus:outline-none
                  focus:ring-4
                  focus:ring-red-300
                  focus:border-red-700
                "
                required
              >
                <option value="">
                  Sélectionnez le type de véhicule
                </option>

                <option value="Moto">
                  Moto
                </option>

                <option value="Voiture">
                  Voiture
                </option>

                <option value="Pickup">
                  Pickup
                </option>

                <option value="Camionnette">
                  Camionnette
                </option>

                <option value="Camion">
                  Camion
                </option>

                <option value="Bus">
                  Bus
                </option>

                <option value="Minibus">
                  Minibus
                </option>

                <option value="Engin de chantier">
                  Engin de chantier
                </option>

                <option value="Bateau">
                  Bateau
                </option>

                <option value="Autre">
                  Autre
                </option>
              </select>
            </div>

            {/* NOMBRE DE VÉHICULES */}
            <div>
              <label
                htmlFor="nombreVehicules"
                className="block font-semibold text-gray-800 mb-2"
              >
                Nombre de véhicules
              </label>

              <input
                id="nombreVehicules"
                type="number"
                name="nombreVehicules"
                placeholder="Ex. 10"
                value={form.nombreVehicules}
                onChange={handleChange}
                min="1"
                inputMode="numeric"
                className="
                  w-full
                  border
                  border-gray-400
                  rounded-xl
                  p-4
                  text-gray-900
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-4
                  focus:ring-red-300
                  focus:border-red-700
                "
                required
              />
            </div>

            {/* SERVICE */}
            <div>
              <label
                htmlFor="service"
                className="block font-semibold text-gray-800 mb-2"
              >
                Solution recherchée
              </label>

              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-400
                  rounded-xl
                  p-4
                  bg-white
                  text-gray-900
                  focus:outline-none
                  focus:ring-4
                  focus:ring-red-300
                  focus:border-red-700
                "
                required
              >
                <option value="">
                  Choisir une solution
                </option>

                <option value="Module GPS">
                  Module GPS
                </option>

                <option value="Module GPS avec relais de coupure à distance">
                  Module GPS avec relais de coupure à distance
                </option>

                <option value="Module GPS avec sonde de carburant">
                  Module GPS avec sonde de carburant
                </option>

                <option value="Sonde de carburant">
                  Sonde de carburant
                </option>

                <option value="Toutes les solutions">
                  Toutes les solutions
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="block font-semibold text-gray-800 mb-2"
              >
                Informations complémentaires
              </label>

              <textarea
                id="message"
                rows="5"
                name="message"
                placeholder="Décrivez votre besoin, votre activité ou les fonctionnalités recherchées..."
                value={form.message}
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-400
                  rounded-xl
                  p-4
                  text-gray-900
                  placeholder:text-gray-500
                  resize-y
                  focus:outline-none
                  focus:ring-4
                  focus:ring-red-300
                  focus:border-red-700
                "
              />
            </div>

            {/* RÉCAPITULATIF */}

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">

              <h3 className="font-bold text-lg text-gray-900 mb-4">
                Récapitulatif de votre demande
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
                  <strong>Secteur :</strong>{" "}
                  {form.secteurActivite || "-"}
                </p>

                <p>
                  <strong>Type de véhicule :</strong>{" "}
                  {form.typeVehicule || "-"}
                </p>

                <p>
                  <strong>Nombre de véhicules :</strong>{" "}
                  {form.nombreVehicules || "-"}
                </p>

                <p>
                  <strong>Solution :</strong>{" "}
                  {form.service || "-"}
                </p>

              </div>

            </div>

            {/* BOUTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                bg-red-700
                hover:bg-red-800
                transition
                text-white
                px-8
                py-4
                rounded-xl
                font-bold
                w-full
                focus:outline-none
                focus:ring-4
                focus:ring-red-300
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading
                ? "Envoi en cours..."
                : "Envoyer la demande de devis"}
            </button>

          </form>

        </div>

        {/* TEXTE LOCAL / SEO */}

        <div
          className="max-w-5xl mx-auto text-center mt-20"
          aria-labelledby="devis-local-title"
        >

          <h2
            id="devis-local-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Devis GPS pour véhicules et flottes à Kinshasa
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            HESABU SARLU accompagne les entreprises, institutions,
            transporteurs et particuliers dans leurs projets de
            géolocalisation GPS et de gestion de flotte à Kinshasa
            et en République Démocratique du Congo. La solution proposée
            dépend notamment du type de véhicule, du nombre de véhicules,
            des fonctionnalités souhaitées et des besoins opérationnels.
          </p>

        </div>

      </div>
    </section>
  );
}

export default DevisSection;
