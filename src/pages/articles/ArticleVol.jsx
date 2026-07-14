import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import securite from "../../assets/blog/securite.png";

function ArticleVol() {
  return (
    <>
      <SEO
        title="Comment protéger efficacement votre véhicule contre le vol ? | HESABU SARLU"
        description="Découvrez comment les solutions GPS permettent de prévenir le vol de véhicules, de localiser rapidement un véhicule volé et d'améliorer la sécurité de votre flotte."
        keywords="GPS anti-vol, sécurité véhicule, géolocalisation, récupération véhicule volé, HESABU RDC"
        url="https://hesabudrc.com/ressources/proteger-vehicule-contre-vol"
      />

      <Navbar />

      {/* HERO */}

      <section
        className="
          bg-gradient-to-br
          from-red-700
          via-red-600
          to-black
          text-white
          py-24
        "
      >
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[4px] text-red-200 font-semibold">
            Centre de Ressources
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            Comment protéger efficacement votre véhicule contre le vol ?
          </h1>

          <p className="text-xl text-red-100 mt-8 leading-8">
            Découvrez comment les solutions GPS modernes renforcent la
            sécurité de vos véhicules et facilitent leur récupération
            en cas de vol.
          </p>

        </div>
      </section>

      {/* IMAGE */}

      <section className="py-16 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <img
            src={securite}
            alt="Sécurité et GPS anti-vol"
            className="rounded-3xl shadow-2xl w-full"
          />

        </div>

      </section>

      {/* CONTENU */}

      <section className="py-10 bg-white">

        <div className="max-w-4xl mx-auto px-6">

          <p className="text-xl text-gray-700 leading-9 mb-10">
            Le vol de véhicules représente une perte financière importante
            pour les entreprises comme pour les particuliers. Installer un
            système GPS constitue aujourd'hui l'une des meilleures solutions
            pour renforcer la sécurité et augmenter les chances de retrouver
            rapidement un véhicule disparu.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Une localisation en temps réel
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Le GPS transmet en permanence la position du véhicule. En cas
            de vol, il devient possible de suivre ses déplacements en temps
            réel et de communiquer rapidement ces informations aux autorités.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Recevoir des alertes instantanées
          </h2>

          <ul className="list-disc pl-8 text-lg text-gray-700 leading-8 mb-10 space-y-3">
            <li>Sortie d'une zone autorisée.</li>
            <li>Démarrage non autorisé.</li>
            <li>Déplacement en dehors des heures prévues.</li>
            <li>Excès de vitesse.</li>
            <li>Déconnexion du dispositif GPS.</li>
          </ul>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Une récupération plus rapide
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Grâce aux données de géolocalisation, les équipes de sécurité
            disposent d'informations précises pour retrouver un véhicule.
            Cela réduit les délais d'intervention et augmente les chances
            de récupération.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sécuriser toute une flotte
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            Les entreprises peuvent surveiller simultanément plusieurs
            véhicules depuis une seule plateforme. Les alertes automatiques
            permettent de détecter rapidement tout comportement inhabituel.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pourquoi choisir HESABU ?
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            HESABU SARLU propose des solutions GPS professionnelles avec
            suivi en temps réel, alertes intelligentes, historique des
            trajets et accompagnement technique. Nos solutions permettent
            de renforcer la sécurité des véhicules particuliers,
            professionnels et des flottes automobiles.
          </p>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-10 text-center text-white">

            <h2 className="text-4xl font-bold mb-6">
              Sécurisez vos véhicules dès aujourd'hui
            </h2>

            <p className="text-xl text-red-100 mb-8">
              Découvrez les solutions GPS HESABU pour protéger vos
              véhicules contre le vol et suivre vos déplacements
              en temps réel.
            </p>

            <a
              href="/devis"
              className="
                inline-block
                bg-white
                text-red-700
                px-8
                py-4
                rounded-xl
                font-bold
                hover:scale-105
                transition
              "
            >
              Demander un devis
            </a>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ArticleVol;