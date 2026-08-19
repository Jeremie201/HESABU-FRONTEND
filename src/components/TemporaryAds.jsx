import { useEffect, useState } from "react";

const CAMPAIGN_START = new Date("2026-08-19T00:00:00");
const CAMPAIGN_END = new Date("2026-09-15T23:59:59");

const ads = [
  {
    id: 1,
    icon: "🔥",
    label: "OFFRE SPÉCIALE HESABU",
    title: "Prenez le contrôle de vos véhicules",
    description:
      "Suivez vos véhicules en temps réel et gérez vos déplacements depuis votre téléphone ou votre ordinateur.",
    button: "Profiter de l'offre",
    link: "#contact",
  },
  {
    id: 2,
    icon: "⛽",
    label: "GESTION DU CARBURANT",
    title: "Où va votre carburant ?",
    description:
      "Surveillez les déplacements de vos véhicules et améliorez le contrôle de votre consommation de carburant.",
    button: "Contrôler ma flotte",
    link: "#services",
  },
  {
    id: 3,
    icon: "🚗",
    label: "GESTION DE FLOTTE",
    title: "Chaque kilomètre compte",
    description:
      "Optimisez vos trajets et centralisez la gestion de votre flotte grâce aux solutions HESABU.",
    button: "Optimiser ma flotte",
    link: "#services",
  },
  {
    id: 4,
    icon: "🛡️",
    label: "SÉCURITÉ",
    title: "Votre véhicule, toujours sous contrôle",
    description:
      "Recevez des alertes et consultez la position de vos véhicules en temps réel, où que vous soyez.",
    button: "Sécuriser mon véhicule",
    link: "#contact",
  },
  {
    id: 5,
    icon: "📍",
    label: "GPS EN TEMPS RÉEL",
    title: "Vous ne pouvez pas être partout. HESABU, si.",
    description:
      "Gardez un œil sur vos véhicules et leurs déplacements grâce à notre plateforme de géolocalisation.",
    button: "Découvrir HESABU",
    link: "#services",
  },
];

function getRemainingTime() {
  const difference = CAMPAIGN_END.getTime() - new Date().getTime();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

export default function TemporaryAds() {
  const [currentAd, setCurrentAd] = useState(0);
  const [visible, setVisible] = useState(false);
  const [remaining, setRemaining] = useState(getRemainingTime());

  // Vérification de la période de campagne
  useEffect(() => {
    const now = new Date();

    if (now >= CAMPAIGN_START && now <= CAMPAIGN_END) {
      setVisible(true);
    }
  }, []);

  // Rotation automatique des publicités
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setCurrentAd((previous) => (previous + 1) % ads.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [visible]);

  // Compte à rebours
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      const time = getRemainingTime();

      if (!time) {
        setVisible(false);
        clearInterval(interval);
        return;
      }

      setRemaining(time);
    }, 1000);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible || !remaining) {
    return null;
  }

  const ad = ads[currentAd];

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <div className="relative overflow-hidden rounded-2xl bg-[#E30613] shadow-2xl">

        {/* Bouton fermer */}
        <button
          onClick={() => setVisible(false)}
          aria-label="Fermer la publicité"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-xl text-white transition hover:bg-white hover:text-[#E30613]"
        >
          ×
        </button>

        <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:p-8">

          {/* Icône */}
          <div className="hidden shrink-0 md:flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-4xl shadow-lg">
            {ad.icon}
          </div>

          {/* Contenu */}
          <div className="flex-1 pr-8 text-white">

            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-bold tracking-[0.2em] text-white/80">
                {ad.label}
              </span>
            </div>

            <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
              {ad.title}
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90 md:text-base">
              {ad.description}
            </p>

            {/* Compte à rebours */}
            {ad.id === 1 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                  Offre valable encore :
                </span>

                <div className="rounded-lg bg-white px-3 py-1.5 text-center text-[#E30613]">
                  <strong>{remaining.days}</strong>
                  <span className="ml-1 text-xs">j</span>
                </div>

                <div className="rounded-lg bg-white px-3 py-1.5 text-center text-[#E30613]">
                  <strong>
                    {String(remaining.hours).padStart(2, "0")}
                  </strong>
                  <span className="ml-1 text-xs">h</span>
                </div>

                <div className="rounded-lg bg-white px-3 py-1.5 text-center text-[#E30613]">
                  <strong>
                    {String(remaining.minutes).padStart(2, "0")}
                  </strong>
                  <span className="ml-1 text-xs">min</span>
                </div>

                <div className="rounded-lg bg-white px-3 py-1.5 text-center text-[#E30613]">
                  <strong>
                    {String(remaining.seconds).padStart(2, "0")}
                  </strong>
                  <span className="ml-1 text-xs">s</span>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <a
              href={ad.link}
              className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#E30613] shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-100 md:w-auto"
            >
              {ad.button}
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Indicateurs */}
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          {ads.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentAd(index)}
              aria-label={`Publicité ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                index === currentAd
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
