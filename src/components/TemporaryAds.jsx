import offreImage from "../assets/ads/offre-hesabu.jpg";
import carburantImage from "../assets/ads/carburant.jpg";
import flotteImage from "../assets/ads/flotte.jpg";
import securiteImage from "../assets/ads/securite.jpg";
import gpsImage from "../assets/ads/gps.jpg";

import { useEffect, useState } from "react";

const CAMPAIGN_START = new Date("2026-08-19T00:00:00");
const CAMPAIGN_END = new Date("2026-09-15T23:59:59");

const AUTO_SLIDE_TIME = 8000;

const ads = [
  {
    id: 1,
    image: offreImage,
    label: "OFFRE SPÉCIALE HESABU",
    title: "Prenez le contrôle de vos véhicules",
    description:
      "Suivez vos véhicules en temps réel et gérez vos déplacements depuis votre téléphone ou votre ordinateur.",
    button: "Profiter de l'offre",
    link: "/contact",
  },
  {
    id: 2,
    image: carburantImage,
    label: "GESTION DU CARBURANT",
    title: "Où va votre carburant ?",
    description:
      "Surveillez les déplacements de vos véhicules et améliorez le contrôle de votre consommation de carburant.",
    button: "Contrôler ma flotte",
    link: "/contact",
  },
  {
    id: 3,
    image: flotteImage,
    label: "GESTION DE FLOTTE",
    title: "Chaque kilomètre compte",
    description:
      "Optimisez vos trajets et centralisez la gestion de votre flotte grâce aux solutions HESABU.",
    button: "Optimiser ma flotte",
    link: "/contact",
  },
  {
    id: 4,
    image: securiteImage,
    label: "SÉCURITÉ",
    title: "Votre véhicule, toujours sous contrôle",
    description:
      "Recevez des alertes et consultez la position de vos véhicules en temps réel, où que vous soyez.",
    button: "Sécuriser mon véhicule",
    link: "/contact",
  },
  {
    id: 5,
    image: gpsImage,
    label: "GPS EN TEMPS RÉEL",
    title: "Vous ne pouvez pas être partout. HESABU, si.",
    description:
      "Gardez un œil sur vos véhicules et leurs déplacements grâce à notre plateforme de géolocalisation.",
    button: "Découvrir HESABU",
    link: "/contact",
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

function isCampaignActive() {
  const now = new Date();

  return now >= CAMPAIGN_START && now <= CAMPAIGN_END;
}

export default function TemporaryAds() {
  const [currentAd, setCurrentAd] = useState(0);
  const [visible, setVisible] = useState(() => isCampaignActive());
  const [remaining, setRemaining] = useState(getRemainingTime());
  const [isPaused, setIsPaused] = useState(false);

  // Vérification uniquement de la fin de campagne
  useEffect(() => {
    const checkCampaign = () => {
      if (!isCampaignActive()) {
        setVisible(false);
      }
    };

    checkCampaign();

    const interval = setInterval(checkCampaign, 1000);

    return () => clearInterval(interval);
  }, []);

  // Rotation automatique
  useEffect(() => {
    if (!visible || isPaused) return;

    const interval = setInterval(() => {
      setCurrentAd(
        (previous) => (previous + 1) % ads.length
      );
    }, AUTO_SLIDE_TIME);

    return () => clearInterval(interval);
  }, [visible, isPaused, currentAd]);

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

  const previousAd = () => {
    setCurrentAd(
      (previous) =>
        (previous - 1 + ads.length) % ads.length
    );
  };

  const nextAd = () => {
    setCurrentAd(
      (previous) =>
        (previous + 1) % ads.length
    );
  };

  const selectAd = (index) => {
    setCurrentAd(index);
  };

  const closeAd = () => {
    setVisible(false);
  };

  if (!visible || !remaining) {
    return null;
  }

  const ad = ads[currentAd];

  return (
    <div
      className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#E30613] shadow-2xl">

        {/* Bouton fermer */}
        <button
          onClick={closeAd}
          aria-label="Fermer la publicité"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-xl text-white transition hover:bg-white hover:text-[#E30613]"
        >
          ×
        </button>

        {/* 
          key={ad.id} est important :
          à chaque changement de publicité, React recrée cette zone
          et relance automatiquement l'animation.
        */}
        <div
          key={ad.id}
          className="animate-ad-enter flex flex-col gap-6 p-6 pb-12 md:flex-row md:items-center md:p-8 md:pb-12"
        >          {/* Icône */}
          <div className="flex h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-white shadow-lg sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36">
            <img
              src={ad.image}
              alt={ad.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Contenu */}
          <div className="min-w-0 flex-1 pr-8 text-white">

            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-bold tracking-[0.2em] text-white/80">
                {ad.label}
              </span>
            </div>

            <h2 className="text-xl font-extrabold leading-tight sm:text-2xl md:text-3xl">
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

        {/* Navigation */}
        <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">

          <button
            onClick={previousAd}
            aria-label="Publicité précédente"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white transition hover:bg-white hover:text-[#E30613]"
          >
            ←
          </button>

          <div className="flex items-center gap-1.5">
            {ads.map((item, index) => (
              <button
                key={item.id}
                onClick={() => selectAd(index)}
                aria-label={`Afficher la publicité ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentAd
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextAd}
            aria-label="Publicité suivante"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white transition hover:bg-white hover:text-[#E30613]"
          >
            →
          </button>
        </div>

        {/* Barre de progression */}
        {!isPaused && (
          <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
            <div
              key={currentAd}
              className="h-full bg-white"
              style={{
                animation: `adProgress ${AUTO_SLIDE_TIME}ms linear`,
              }}
            />
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes adProgress {
            from {
              width: 0%;
            }

            to {
              width: 100%;
            }
          }

          @keyframes adEnter {
            from {
              opacity: 0;
              transform: translateX(25px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-ad-enter {
            animation: adEnter 0.45s ease-out both;
          }
        `}
      </style>
    </div>
  );
}
