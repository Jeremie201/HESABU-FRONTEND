import { useState } from "react";
import SEO from "../components/SEO";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    // Logique de connexion à ajouter ici
  };

  return (
    <>
      <SEO
        title="Connexion | HESABU SARLU"
        description="Connexion à l'espace sécurisé HESABU SARLU."
        url="https://hesabudrc.com/login"
        noIndex
      />

      <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

        <form
          onSubmit={submit}
          className="
            bg-white
            p-8
            md:p-10
            rounded-3xl
            shadow-xl
            w-full
            max-w-md
          "
        >
          <div className="text-center mb-8">

            <span className="text-red-600 uppercase font-bold tracking-[4px]">
              HESABU SARLU
            </span>

            <h1 className="text-4xl font-bold mt-4 mb-3 text-gray-900">
              Connexion
            </h1>

            <p className="text-gray-600">
              Accédez à votre espace sécurisé HESABU.
            </p>

          </div>

          {/* EMAIL */}
          <div className="mb-5">

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
              className="
                w-full
                border
                border-gray-300
                p-4
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-red-500
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />

          </div>

          {/* MOT DE PASSE */}
          <div className="mb-6">

            <label
              htmlFor="password"
              className="block font-semibold text-gray-800 mb-2"
            >
              Mot de passe
            </label>

            <input
              id="password"
              type="password"
              name="password"
              placeholder="Votre mot de passe"
              className="
                w-full
                border
                border-gray-300
                p-4
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-red-500
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />

          </div>

          <button
            type="submit"
            className="
              w-full
              bg-red-600
              hover:bg-red-700
              text-white
              py-4
              rounded-xl
              font-bold
              transition
              duration-300
            "
          >
            Se connecter
          </button>

        </form>

      </main>
    </>
  );
}

export default Login;
