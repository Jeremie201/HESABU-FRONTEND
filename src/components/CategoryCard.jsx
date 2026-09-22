import { Link } from "react-router-dom";

function CategoryCard({
  icon,
  title,
  description,
  color = "red",
  to = "/ressources",
}) {
  return (
    <Link
      to={to}
      aria-label={`Explorer : ${title}`}
      className="
        group
        bg-white
        rounded-3xl
        p-8
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition
        duration-300
        border
        border-gray-100
      "
    >
      {/* ICÔNE */}
      <div
        className={`
          w-16
          h-16
          rounded-2xl
          flex
          items-center
          justify-center
          text-3xl
          mb-6
          transition
          duration-300
          group-hover:scale-110
          ${
            color === "red"
              ? "bg-red-100 text-red-600"
              : "bg-gray-100 text-gray-700"
          }
        `}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* TITRE */}
      <h3
        className="
          text-2xl
          font-bold
          text-gray-900
          mb-3
          group-hover:text-red-600
          transition
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-7">
        {description}
      </p>

      {/* LIEN */}
      <span
        className="
          inline-flex
          items-center
          mt-6
          text-red-600
          font-semibold
          group-hover:translate-x-1
          transition
          duration-300
        "
      >
        Explorer →
      </span>
    </Link>
  );
}

export default CategoryCard;
