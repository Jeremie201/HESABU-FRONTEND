
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import mapBg from "../assets/map-bg.png";

function DevisSection() {
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
      await axios.post(
        "https://hesabu-o7rs.onrender.com/api/devis",
        form
      );

      toast.success("Message envoyé avec succès");

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
      toast.error("Erreur lors de l'envoi de la demande.");
    }
  };

  return (
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
          Demander un devis
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Recevez une proposition personnalisée adaptée à votre flotte.
        </p>

        <form
          onSubmit={envoyer}
          className="bg-white rounded-3xl p-10 shadow-xl space-y-6"
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

          <select
            name="secteurActivite"
            value={form.secteurActivite}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          >
            <option value="">
              Secteur d'activité
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

          <input
            type="email"
            name="email"
            placeholder="Email : exemple@gmail.com"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="text"
            name="telephone"
            placeholder="Téléphone : +243 XXX XXX XXX"
            value={form.telephone}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <select
            name="typeVehicule"
            value={form.typeVehicule}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          >
            <option value="">
              Type de véhicule
            </option>

            <option value="Moto">Moto</option>
            <option value="Voiture">Voiture</option>
            <option value="Pickup">Pickup</option>
            <option value="Camionnette">Camionnette</option>
            <option value="Camion">Camion</option>
            <option value="Bus">Bus</option>
            <option value="Minibus">Minibus</option>
            <option value="Engin de chantier">
              Engin de chantier
            </option>
            <option value="Bateau">Bateau</option>
            <option value="Autre">Autre</option>
          </select>

          <input
            type="number"
            name="nombreVehicules"
            placeholder="Nombre de véhicules"
            value={form.nombreVehicules}
            onChange={handleChange}
            min="1"
            className="w-full border rounded-xl p-4"
            required
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
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

          <textarea
            rows="5"
            name="message"
            placeholder="Décrivez votre besoin"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          {/* Récapitulatif */}
          <div className="bg-gray-50 border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-4">
              Récapitulatif de votre demande
            </h3>

            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Nom :</strong> {form.nom || "-"}
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

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-xl font-bold w-full"
          >
            Envoyer la demande
          </button>
        </form>

      </div>
    </section>
  );
}

export default DevisSection;

