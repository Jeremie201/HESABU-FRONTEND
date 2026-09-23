import SEO from "../components/SEO";

function Dashboard() {
  return (
    <>
      <SEO
        title="Dashboard Administrateur | HESABU SARLU"
        description="Tableau de bord administrateur HESABU SARLU."
        url="https://hesabudrc.com/dashboard"
        noIndex
      />

      <main
        className="min-h-screen bg-gray-100 p-6 md:p-10"
        aria-labelledby="dashboard-title"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-10">
            <span className="text-red-700 uppercase font-bold tracking-[4px]">
              HESABU SARLU
            </span>

            <h1
              id="dashboard-title"
              className="text-4xl md:text-5xl font-bold mt-4 text-gray-900"
            >
              Dashboard Administrateur
            </h1>

            <p className="text-gray-700 mt-3">
              Vue d’ensemble des demandes et utilisateurs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <section
              className="bg-white shadow-xl p-8 rounded-3xl"
              aria-labelledby="contacts-title"
            >
              <h2
                id="contacts-title"
                className="text-2xl font-bold text-gray-900"
              >
                Contacts
              </h2>

              <p
                className="text-4xl mt-4 font-bold text-red-700"
                aria-label="0 contact"
              >
                0
              </p>
            </section>

            <section
              className="bg-white shadow-xl p-8 rounded-3xl"
              aria-labelledby="devis-title"
            >
              <h2
                id="devis-title"
                className="text-2xl font-bold text-gray-900"
              >
                Devis
              </h2>

              <p
                className="text-4xl mt-4 font-bold text-red-700"
                aria-label="0 devis"
              >
                0
              </p>
            </section>

            <section
              className="bg-white shadow-xl p-8 rounded-3xl"
              aria-labelledby="utilisateurs-title"
            >
              <h2
                id="utilisateurs-title"
                className="text-2xl font-bold text-gray-900"
              >
                Utilisateurs
              </h2>

              <p
                className="text-4xl mt-4 font-bold text-red-700"
                aria-label="1 utilisateur"
              >
                1
              </p>
            </section>

          </div>

        </div>

      </main>
    </>
  );
}

export default Dashboard;
