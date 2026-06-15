import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/hero.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-600 font-bold border-b-2 border-red-600 pb-1"
      : "text-gray-700 hover:text-red-600 transition";

  return (

    <nav className="relative bg-white shadow-md sticky top-0 z-50">

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

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <img
            src={logo}
            alt="HESABU"
            className="h-14 md:h-20 w-auto"
          />

        </Link>


        {/* Bouton hamburger */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
          md:hidden
          text-3xl
          text-red-600
          "
        >

          {menuOpen ? "✕" : "☰"}

        </button>


        {/* Menu PC */}

        <div className="
        hidden
        md:flex
        items-center
        gap-8
        text-lg
        font-medium
        ">

          <NavLink to="/" className={linkClass}>
            Accueil
          </NavLink>

          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>

          <NavLink to="/solutions" className={linkClass}>
            Solutions
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            À propos
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <Link
            to="/client"
            className="
            bg-red-600
            text-white
            px-5
            py-3
            rounded-xl
            font-bold
            shadow-lg
            hover:bg-red-700
            transition
            "
          >

            Espace Client

          </Link>

        </div>

      </div>


      {/* Menu Mobile */}

      {menuOpen && (

        <div className="
        md:hidden
        absolute
        top-full
        left-0
        w-full
        bg-white
        shadow-xl
        border-t
        ">

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
              className="text-gray-700 hover:text-red-600"
            >
              Accueil
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-red-600"
            >
              Services
            </NavLink>

            <NavLink
              to="/solutions"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-red-600"
            >
              Solutions
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-red-600"
            >
              À propos
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-red-600"
            >
              Contact
            </NavLink>

            <Link
              to="/client"
              onClick={() => setMenuOpen(false)}
              className="
              bg-red-600
              text-white
              text-center
              py-3
              rounded-xl
              font-bold
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