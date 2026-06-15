function Dashboard() {
  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold mb-8">
        Dashboard Administrateur
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white shadow-xl p-8 rounded-3xl">
          <h3 className="text-2xl font-bold">
            Contacts
          </h3>

          <p className="text-4xl mt-4">
            0
          </p>
        </div>

        <div className="bg-white shadow-xl p-8 rounded-3xl">
          <h3 className="text-2xl font-bold">
            Devis
          </h3>

          <p className="text-4xl mt-4">
            0
          </p>
        </div>

        <div className="bg-white shadow-xl p-8 rounded-3xl">
          <h3 className="text-2xl font-bold">
            Utilisateurs
          </h3>

          <p className="text-4xl mt-4">
            1
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;