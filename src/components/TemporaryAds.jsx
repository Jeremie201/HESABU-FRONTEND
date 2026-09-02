import offreImage from "../assets/ads/offre-hesabu.jpg";
import carburantImage from "../assets/ads/carburant.jpg";
import flotteImage from "../assets/ads/flotte.jpg";
import securiteImage from "../assets/ads/securite.jpg";
import gpsImage from "../assets/ads/gps.jpg";
import rentreeImage from "../assets/ads/rentree-scolaire.jpg";

import { useEffect, useState } from "react";

const CAMPAIGN_START = new Date("2026-08-19T00:00:00");
const CAMPAIGN_END = new Date("2026-09-15T23:59:59");

const AUTO_SLIDE_TIME = 8000;

const ads = [
  {
    id: 6,
    image: rentreeImage,
    label: "SPÉCIAL RENTRÉE SCOLAIRE",
    title: "La sécurité de vos déplacements et ceux de vos enfants, notre priorité.",
    description:
      "Pour cette rentrée scolaire, gardez un œil sur les déplacements de vos enfants et vos véhicules grâce au suivi GPS HESABU.",
    button: "Sécuriser mes déplacements",
    link: "/contact",
    featured: true,
  },
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
    button: "Réduire mes coûts",
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
      "Voitures, motos, utilitaires ou camions : suivez vos véhicules en temps réel et recevez des alertes pour mieux protéger votre flotte.",
    button: "Protéger mon véhicule",
    link: "/contact",
  },

  {
    id: 5,
    image: gpsImage,
    label: "GPS EN TEMPS RÉEL",
    title: "Vous ne pouvez pas être partout. Avec HESABU, vous le pouvez.",
    description:
      "Gardez un œil sur vos véhicules et leurs déplacements grâce à notre plateforme de géolocalisation.",
    button: "Voir la solution GPS",
    link: "/contact",
  },
];

function getRemainingTime() {
  const difference =
    CAMPAIGN_END.getTime() - new Date().getTime();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),

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

  return (
    now >= CAMPAIGN_START &&
    now <= CAMPAIGN_END
  );
}

export default function TemporaryAds() {
  const [currentAd, setCurrentAd] = useState(0);

  const [visible, setVisible] = useState(() =>
    isCampaignActive()
  );

  const [remaining, setRemaining] = useState(
    getRemainingTime()
  );

  const [isPaused, setIsPaused] = useState(false);

  /*
   * Vérification de la campagne
   */
  useEffect(() => {
    const checkCampaign = () => {
      if (!isCampaignActive()) {
        setVisible(false);
      }
    };

    checkCampaign();

    const interval = setInterval(
      checkCampaign,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  /*
   * Rotation automatique des publicités
   */
  useEffect(() => {
    if (!visible || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentAd(
        (previous) =>
          (previous + 1) % ads.length
      );
    }, AUTO_SLIDE_TIME);

    return () => clearInterval(interval);
  }, [
    visible,
    isPaused,
    currentAd,
  ]);

  /*
   * Compte à rebours
   */
  useEffect(() => {
    if (!visible) {
      return;
    }

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

  /*
   * Publicité précédente
   */
  const previousAd = () => {
    setCurrentAd(
      (previous) =>
        (previous - 1 + ads.length) %
        ads.length
    );
  };

  /*
   * Publicité suivante
   */
  const nextAd = () => {
    setCurrentAd(
      (previous) =>
        (previous + 1) % ads.length
    );
  };

  /*
   * Sélection directe
   */
  const selectAd = (index) => {
    setCurrentAd(index);
  };

  /*
   * Fermer la publicité
   */
  const closeAd = () => {
    setVisible(false);
  };

  /*
   * Ne rien afficher si la campagne est inactive
   */
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

      {/* ==================================================
          CARTE PUBLICITAIRE
      ================================================== */}

      <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-[#E30613] shadow-[0_0_35px_rgba(255,255,255,0.75)]">

        {/* ==================================================
            BADGE "À LA UNE HESABU"
        ================================================== */}

        <div className="absolute left-5 top-4 z-30">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 backdrop-blur-sm">

            <span className="text-xs text-white">
              ✦
            </span>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white">
              HESABU VOUS INFORME
            </span>

          </div>
        </div>

        {/* ==================================================
            BOUTON FERMER
        ================================================== */}

        <button
          onClick={closeAd}
          aria-label="Fermer la publicité"
          className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-xl text-white transition hover:bg-white hover:text-[#E30613]"
        >
          ×
        </button>

        {/* ==================================================
            CONTENU DE LA PUBLICITÉ
        ================================================== */}

        <div
          key={ad.id}
          className="animate-ad-enter flex flex-col gap-5 p-5 pb-12 pt-16 sm:flex-row sm:items-center sm:gap-6 sm:p-6 sm:pb-12 sm:pt-16 md:gap-7 md:p-8 md:pb-12 md:pt-16"
        >

          {/* ==================================================
              IMAGE
          ================================================== */}

          {ad.featured ? (
            <div className="w-full mb-6">
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-auto max-h-[450px] object-contain rounded-2xl"
              />
            </div>
          ) : (
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-white p-2 shadow-lg sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36">
              <img
                src={ad.image}
                alt={ad.title}
                className="h-full w-full object-contain"
              />
            </div>
          )}

          {/* ==================================================
              CONTENU TEXTE
          ================================================== */}

          <div className="min-w-0 flex-1 pr-8 text-white">

            {/* Label de la publicité */}
            <div className="mb-2 flex items-center gap-2">

              <span className="text-xs font-bold tracking-[0.2em] text-white/80">
                {ad.label}
              </span>

            </div>

            {/* Titre */}
            <h2 className="text-xl font-extrabold leading-tight sm:text-2xl md:text-3xl">
              {ad.title}
            </h2>

            {/* Description */}
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90 md:text-base">
              {ad.description}
            </p>

            {/* ==================================================
                COMPTE À REBOURS
            ================================================== */}

            {ad.id === 1 && (
              <div className="mt-4">
            
                {/* Libellé */}
                <div className="mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                    Offre valable encore :
                  </span>
                </div>
            
                {/* Compte à rebours */}
                <div className="flex items-center gap-1.5 sm:gap-2">
            
                  {/* Jours */}
                  <div className="flex h-10 min-w-[42px] items-center justify-center rounded-lg bg-white px-2 text-center text-[#E30613] shadow-sm sm:h-11 sm:min-w-[48px]">
                    <strong className="text-sm sm:text-base">
                      {remaining.days}
                    </strong>
            
                    <span className="ml-1 text-[10px] font-semibold sm:text-xs">
                      j
                    </span>
                  </div>
            
                  {/* Heures */}
                  <div className="flex h-10 min-w-[42px] items-center justify-center rounded-lg bg-white px-2 text-center text-[#E30613] shadow-sm sm:h-11 sm:min-w-[48px]">
                    <strong className="text-sm sm:text-base">
                      {String(remaining.hours).padStart(2, "0")}
                    </strong>
            
                    <span className="ml-1 text-[10px] font-semibold sm:text-xs">
                      h
                    </span>
                  </div>
            
                  {/* Minutes */}
                  <div className="flex h-10 min-w-[48px] items-center justify-center rounded-lg bg-white px-2 text-center text-[#E30613] shadow-sm sm:h-11 sm:min-w-[55px]">
                    <strong className="text-sm sm:text-base">
                      {String(remaining.minutes).padStart(2, "0")}
                    </strong>
            
                    <span className="ml-1 text-[10px] font-semibold sm:text-xs">
                      min
                    </span>
                  </div>
            
                  {/* Secondes */}
                  <div className="flex h-10 min-w-[42px] items-center justify-center rounded-lg bg-white px-2 text-center text-[#E30613] shadow-sm sm:h-11 sm:min-w-[48px]">
                    <strong className="text-sm sm:text-base">
                      {String(remaining.seconds).padStart(2, "0")}
                    </strong>
            
                    <span className="ml-1 text-[10px] font-semibold sm:text-xs">
                      s
                    </span>
                  </div>
            
                </div>
            
              </div>
            )}
          </div>

          {/* ==================================================
              CTA
          ================================================== */}

          <div className="shrink-0">

            <a
              href={ad.link}
              className="group inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-[#E30613] shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-xl md:w-auto"
            >
              {ad.button}

              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>

            </a>

          </div>

        </div>

        {/* ==================================================
            NAVIGATION
        ================================================== */}

        <div className="absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">

          {/* Précédent */}
          <button
            onClick={previousAd}
            aria-label="Publicité précédente"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white transition hover:bg-white hover:text-[#E30613]"
          >
            ←
          </button>

          {/* Indicateurs */}
          <div className="flex items-center gap-1.5">

            {ads.map((item, index) => (
              <button
                key={item.id}
                onClick={() =>
                  selectAd(index)
                }
                aria-label={`Afficher la publicité ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentAd
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/40"
                }`}
              />
            ))}

          </div>

          {/* Suivant */}
          <button
            onClick={nextAd}
            aria-label="Publicité suivante"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white transition hover:bg-white hover:text-[#E30613]"
          >
            →
          </button>

        </div>

        {/* ==================================================
            BARRE DE PROGRESSION
        ================================================== */}

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

      {/* ==================================================
          ANIMATIONS
      ================================================== */}

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
