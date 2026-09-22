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

      <main className="min-h-screen bg-gray-100 p-6 md:p-10">

        <div className="max-w-7xl mx-auto">

          <div className="mb-10">
            <span className="text-red-600 uppercase font-bold tracking-[4px]">
              HESABU SARLU
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Dashboard Administrateur
            </h1>

            <p className="text-gray-600 mt-3">
              Vue d’ensemble des demandes et utilisateurs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <section className="bg-white shadow-xl p-8 rounded-3xl">
              <h2 className="text-2xl font-bold">
                Contacts
              </h2>

              <p className="text-4xl mt-4 font-bold text-red-600">
                0
              </p>
            </section>

            <section className="bg-white shadow-xl p-8 rounded-3xl">
              <h2 className="text-2xl font-bold">
                Devis
              </h2>

              <p className="text-4xl mt-4 font-bold text-red-600">
                0
              </p>
            </section>

            <section className="bg-white shadow-xl p-8 rounded-3xl">
              <h2 className="text-2xl font-bold">
                Utilisateurs
              </h2>

              <p className="text-4xl mt-4 font-bold text-red-600">
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
