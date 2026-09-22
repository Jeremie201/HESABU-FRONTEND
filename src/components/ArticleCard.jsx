import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  // Nettoie automatiquement le slug :
  // "gestion-flotte" -> "gestion-flotte"
  // "/gestion-flotte" -> "gestion-flotte"
  // "ressources/gestion-flotte" -> "gestion-flotte"
  // "/ressources/gestion-flotte" -> "gestion-flotte"

  const cleanSlug = article.slug
    ?.replace(/^\/+/, "")
    .replace(/^ressources\/+/, "");

  const articleUrl = `/ressources/${cleanSlug}`;

  return (
    <article
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition
        duration-300
      "
    >
      {/* IMAGE */}
      <Link
        to={articleUrl}
        aria-label={`Lire l'article : ${article.title}`}
      >
        <img
          src={article.image}
          alt={article.title}
          className="
            w-full
            h-56
            object-cover
            hover:scale-105
            transition
            duration-500
          "
          loading="lazy"
        />
      </Link>

      {/* CONTENU */}
      <div className="p-6">

        {/* CATÉGORIE */}
        <span
          className="
            inline-block
            bg-red-100
            text-red-600
            text-sm
            font-semibold
            px-3
            py-1
            rounded-full
            mb-4
          "
        >
          {article.category}
        </span>

        {/* TITRE */}
        <h3
          className="
            text-2xl
            font-bold
            text-gray-900
            mb-4
            leading-snug
          "
        >
          <Link
            to={articleUrl}
            className="
              hover:text-red-600
              transition
            "
          >
            {article.title}
          </Link>
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            text-gray-600
            leading-7
            mb-6
          "
        >
          {article.description}
        </p>

        {/* DATE + TEMPS DE LECTURE */}
        <div
          className="
            flex
            justify-between
            items-center
            gap-4
            text-sm
            text-gray-500
            mb-6
          "
        >
          <span>
            {article.date}
          </span>

          <span>
            {article.readTime}
          </span>
        </div>

        {/* BOUTON */}
        <Link
          to={articleUrl}
          className="
            inline-flex
            items-center
            justify-center
            bg-red-600
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            hover:bg-red-700
            hover:translate-x-1
            transition
            duration-300
          "
        >
          Lire l'article →
        </Link>

      </div>
    </article>
  );
}

export default ArticleCard;
