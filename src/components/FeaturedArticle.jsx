import { Link } from "react-router-dom";

function FeaturedArticle({ article }) {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          grid
          lg:grid-cols-2
          gap-12
          items-center
          bg-gradient-to-br
          from-red-600
          via-red-700
          to-black
          rounded-3xl
          overflow-hidden
          shadow-2xl
          "
        >

          {/* Image */}

          <div>

            <img
              src={article.image}
              alt={article.title}
              className="
              w-full
              h-full
              object-cover
              min-h-[420px]
              "
            />

          </div>

          {/* Texte */}

          <div className="p-10 text-white">

            <span
              className="
              inline-block
              bg-white/20
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
              mb-6
              "
            >
              ⭐ Article à la une
            </span>

            <h2
              className="
              text-4xl
              lg:text-5xl
              font-bold
              leading-tight
              mb-6
              "
            >
              {article.title}
            </h2>

            <p
              className="
              text-red-100
              text-lg
              leading-8
              mb-8
              "
            >
              {article.description}
            </p>

            <div
              className="
              flex
              flex-wrap
              items-center
              gap-4
              text-red-200
              text-sm
              mb-8
              "
            >

              <span className="font-semibold">
                {article.category}
              </span>

              <span>•</span>

              <span>{article.readTime}</span>

              <span>•</span>

              <span>{article.date}</span>

            </div>

            <Link
              to={article.slug}
              className="
              inline-block
              bg-white
              text-red-700
              px-8
              py-4
              rounded-xl
              font-bold
              shadow-lg
              hover:bg-gray-100
              hover:scale-105
              transition
              duration-300
              "
            >
              Lire l'article →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedArticle;