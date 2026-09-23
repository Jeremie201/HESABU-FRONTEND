import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/hero.webp";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? `
        text-red-700
        font-bold
        border-b-2
        border-red-700
        pb-1
        focus:outline-none
        focus:ring-2
        focus:ring-red-300
        rounded
      `
      : `
        text-gray-700
        hover:text-red-700
        transition
        focus:outline-none
        focus:ring-2
        focus:ring-red-300
        rounded
      `;

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? `
        text-red-700
        font-bold
        transition
        focus:outline-none
        focus:ring-2
        focus:ring-red-300
        rounded
      `
      : `
        text-gray-700
        hover:text-red-700
        transition
        focus:outline-none
        focus:ring-2
        focus:ring-red-300
        rounded
      `;

  return (

    <nav
      className="relative bg-white shadow-md sticky top-0 z-50"
      aria-label="Navigation principale"
    >

      <div className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        px-4
        md:px-8
        py-3
        md:py-4
      ">

        <Link
          to="/"
          aria-label="HESABU SARLU - Accueil"
          className="
            flex
            items-center
            gap-3
            focus:outline-none
            focus:ring-2
            focus:ring-red-300
            rounded-xl
          "
        >

          <img
            src={logo}
            alt="HESABU SARLU"
            className="h-14 md:h-20 w-auto"
          />

        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu principal" : "Ouvrir le menu principal"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="
            md:hidden
            text-3xl
            text-red-700
            p-2
            rounded-lg
            focus:outline-none
            focus:ring-4
            focus:ring-red-300
          "
        >
          <span aria-hidden="true">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>

        <div className="
          hidden
          md:flex
          items-center
          gap-8
          text-lg
          font-medium
        ">

          <NavLink
            to="/"
            className={linkClass}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/services"
            className={linkClass}
          >
            Services
          </NavLink>

          <NavLink
            to="/solutions"
            className={linkClass}
          >
            Solutions
          </NavLink>

          <NavLink
            to="/ressources"
            className={linkClass}
          >
            Ressources
          </NavLink>

          <NavLink
            to="/about"
            className={linkClass}
          >
            À propos
          </NavLink>

          <NavLink
            to="/contact"
            className={linkClass}
          >
            Contact
          </NavLink>

          <Link
            to="/client"
            className="
              bg-red-700
              text-white
              px-5
              py-3
              rounded-xl
              font-bold
              shadow-lg
              hover:bg-red-800
              transition
              focus:outline-none
              focus:ring-4
              focus:ring-red-300
            "
          >

            Espace Client

          </Link>

        </div>

      </div>

      {menuOpen && (

        <div
          id="mobile-menu"
          className="
            md:hidden
            absolute
            top-full
            left-0
            w-full
            bg-white
            shadow-xl
            border-t
            border-gray-200
          "
        >

          <div className="
            flex
            flex-col
            gap-5
            p-6
            text-lg
            font-medium
          ">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClass}
            >
              Accueil
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClass}
            >
              Services
            </NavLink>

            <NavLink
              to="/solutions"
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClass}
            >
              Solutions
            </NavLink>

            <NavLink
              to="/ressources"
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClass}
            >
              Ressources
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClass}
            >
              À propos
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClass}
            >
              Contact
            </NavLink>

            <Link
              to="/client"
              onClick={() => setMenuOpen(false)}
              className="
                bg-red-700
                hover:bg-red-800
                text-white
                text-center
                py-3
                rounded-xl
                font-bold
                transition
                focus:outline-none
                focus:ring-4
                focus:ring-red-300
              "
            >

              Espace Client

            </Link>

          </div>

        </div>

      )}

    </nav>

  );
}

export default Navbar;
