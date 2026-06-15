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

            <img
              src={logo}
              alt="HESABU"
              className="
                h-16
                md:h-20
                mb-4
                mx-auto
                md:mx-0
                "
            />

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

          <div>

            <h3 className="text-xl font-bold mb-5 text-red-500">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link to="/" className="hover:text-white">
                  Accueil
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/solutions" className="hover:text-white">
                  Solutions
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white">
                  À propos
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/devis" className="hover:text-white">
                  Demander un devis
                </Link>
              </li>

            </ul>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="text-xl font-bold mb-5 text-red-500">
              Nos Services
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>📍 Géolocalisation GPS</li>

              <li>🚚 Gestion de flotte</li>

              <li>🔒 Sécurité anti-vol</li>

              <li>⛽ Monitoring carburant</li>

              <li>📊 Rapports & télématique</li>

              <li>🛠️ Maintenance & support</li>

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-xl font-bold mb-5 text-red-500">
              Contact
            </h3>

            <div className="space-y-3 text-gray-300">

              <p>
                📍 11A3, Avenue Golf,
                Anciennes Galeries Présidentielles,
                Kinshasa Gombe, RDC
              </p>

              <p>
                📞 +243 839 573 532
              </p>

              <p>
                ✉️ iot@hesaburdc.com
              </p>

              <p>
                🌐 www.hesaburdc.com
              </p>

            </div>

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
            text-gray-400
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

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">

          © {new Date().getFullYear()} HESABU SARLU —
          Tous droits réservés.

        </div>

      </div>

    </footer>
  );
}

export default Footer;