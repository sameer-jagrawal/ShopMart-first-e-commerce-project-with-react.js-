import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { storeContext } from "../pages/Context";

export default function Categories({ products, title }) {

  const { addtoCart } = useContext(storeContext);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-6">
     <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-3">
  {title}
</h1>
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">

        {products.map((d) => {
          return (
            <div
              key={d.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group flex flex-col"
            >

              {/* Image */}
              <div className="h-44 sm:h-48 bg-green-50 flex items-center justify-center p-4 overflow-hidden">
                <Link to={`/overview/${d.id}`} className="flex items-center justify-center h-full w-full">
                  <img
                    src={d.thumbnail}
                    alt={d.title}
                    className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">

                {/* Category */}
                <p className="text-[11px] text-green-600 font-semibold uppercase tracking-wider">
                  {d.category}
                </p>

                {/* Title */}
                <h2 className="text-sm sm:text-base font-semibold text-gray-800 mt-1 line-clamp-2">
                  {d.title}
                </h2>

                {/* Price + Rating */}
                <div className="flex items-center justify-between mt-3">
                  <span className="text-green-600 font-bold text-lg">
                    ${d.price}
                  </span>

                  <span className="flex items-center text-yellow-500 text-sm font-medium">
                    ⭐ {d.rating}
                  </span>
                </div>

                {/* Button */}
                <button
                  onClick={() => {
                    addtoCart({
                      image: d.thumbnail,
                      title: d.title,
                      price: d.price,
                      id: d.id,
                      qyt: 1
                    });
                  }}
                  className="mt-auto w-full bg-green-600 text-white py-2.5 rounded-lg font-medium text-sm hover:bg-green-700 active:scale-95 transition"
                >
                  Add to Cart
                </button>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}