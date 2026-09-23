import { Link } from "react-router-dom";
import logo from "../assets/hero.png";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-12
          "
        >

          {/* ENTREPRISE */}

          <div>

            <Link
              to="/"
              aria-label="HESABU SARLU - Accueil"
              className="
                inline-block
                focus:outline-none
                focus:ring-2
                focus:ring-red-300
                rounded-xl
              "
            >
              <img
                src={logo}
                alt="HESABU SARLU"
                className="
                  h-16
                  md:h-20
                  mb-4
                  mx-auto
                  md:mx-0
                  w-auto
                "
              />
            </Link>

            <p className="text-gray-300 leading-7">
              HESABU SARLU accompagne les entreprises,
              institutions et particuliers grâce à des
              solutions GPS, IoT et télématiques
              permettant d'améliorer la sécurité,
              la gestion de flotte et la performance
              opérationnelle.
            </p>

          </div>

          {/* LIENS RAPIDES */}

          <nav aria-label="Navigation du pied de page">

            <h3 className="text-xl font-bold mb-5 text-red-400">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link
                  to="/"
                  className="
                    hover:text-white
                    transition
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-300
                    rounded
                  "
                >
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="
                    hover:text-white
                    transition
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-300
                    rounded
                  "
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/solutions"
                  className="
                    hover:text-white
                    transition
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-300
                    rounded
                  "
                >
                  Solutions
                </Link>
              </li>

              <li>
                <Link
                  to="/ressources"
                  className="
                    hover:text-white
                    transition
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-300
                    rounded
                  "
                >
                  Ressources
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="
                    hover:text-white
                    transition
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-300
                    rounded
                  "
                >
                  À propos
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="
                    hover:text-white
                    transition
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-300
                    rounded
                  "
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/devis"
                  className="
                    hover:text-white
                    transition
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-300
                    rounded
                  "
                >
                  Demander un devis
                </Link>
              </li>

            </ul>

          </nav>

          {/* SERVICES */}

          <div>

            <h3 className="text-xl font-bold mb-5 text-red-400">
              Nos Services
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <span aria-hidden="true">📍 </span>
                Géolocalisation GPS
              </li>

              <li>
                <span aria-hidden="true">🚚 </span>
                Gestion de flotte
              </li>

              <li>
                <span aria-hidden="true">🔒 </span>
                Sécurité anti-vol
              </li>

              <li>
                <span aria-hidden="true">⛽ </span>
                Monitoring carburant
              </li>

              <li>
                <span aria-hidden="true">📊 </span>
                Rapports & télématique
              </li>

              <li>
                <span aria-hidden="true">🛠️ </span>
                Maintenance & support
              </li>

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-xl font-bold mb-5 text-red-400">
              Contact
            </h3>

            <address className="not-italic space-y-3 text-gray-300">

              <p>
                <span aria-hidden="true">📍 </span>
                Boulevard du 30 Juin,
                Anciennes Galeries Présidentielles,
                11A3, Kinshasa Gombe
              </p>

              <p>
                <span aria-hidden="true">📞 </span>

                <a
                  href="tel:+243839573532"
                  className="
                    hover:text-white
                    hover:underline
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-300
                    rounded
                  "
                >
                  +243 839 573 532
                </a>
              </p>

              <p>
                <span aria-hidden="true">✉️ </span>

                <a
                  href="mailto:iot@hesaburdc.com"
                  className="
                    hover:text-white
                    hover:underline
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-300
                    rounded
                    break-all
                  "
                >
                  iot@hesaburdc.com
                </a>
              </p>

              <p>
                <span aria-hidden="true">🌐 </span>

                <a
                  href="https://hesabudrc.com/"
                  className="
                    hover:text-white
                    hover:underline
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-300
                    rounded
                  "
                >
                  hesabudrc.com
                </a>
              </p>

            </address>

          </div>

        </div>

        {/* INFOS LEGALES */}

        <div className="border-t border-gray-800 mt-12 pt-8">

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-6
              text-center
              text-gray-300
            "
          >

            <div>
              <span className="font-semibold text-white">
                RCCM :
              </span>
              <br />
              CD/KNG/RCCM/22-B-01985
            </div>

            <div>
              <span className="font-semibold text-white">
                IDNAT :
              </span>
              <br />
              01-A0101-N17482K
            </div>

            <div>
              <span className="font-semibold text-white">
                NIF :
              </span>
              <br />
              A2300456X
            </div>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">

          © {new Date().getFullYear()} HESABU SARLU — Tous droits réservés.

        </div>

      </div>

    </footer>
  );
}

export default Footer;
