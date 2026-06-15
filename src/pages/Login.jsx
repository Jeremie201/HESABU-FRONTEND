import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={submit}
        className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md"
      >

        <h1 className="text-4xl font-bold mb-8 text-center">
          Connexion
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-4 rounded-xl mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full border p-4 rounded-xl mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold">
          Se connecter
        </button>

      </form>

    </div>
  );
}

export default Login;