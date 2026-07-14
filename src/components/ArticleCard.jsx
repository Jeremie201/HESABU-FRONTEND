import { Link } from "react-router-dom";

function ArticleCard({ article }) {
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
      {/* Image */}

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-56 object-cover"
      />

      {/* Contenu */}

      <div className="p-6">

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

        <h3
          className="
            text-2xl
            font-bold
            text-gray-900
            mb-4
            leading-snug
          "
        >
          {article.title}
        </h3>

        <p
          className="
            text-gray-600
            leading-7
            mb-6
          "
        >
          {article.description}
        </p>

        <div
          className="
            flex
            justify-between
            items-center
            text-sm
            text-gray-500
            mb-6
          "
        >
          <span>{article.date}</span>

          <span>{article.readTime}</span>
        </div>

        <Link
          to={`/ressources/${article.slug}`}
          className="
            inline-block
            bg-red-600
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            hover:bg-red-700
            transition
          "
        >
          Lire l'article →
        </Link>

      </div>

    </article>
  );
}

export default ArticleCard;