import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { storeContext } from "../pages/Context";

export default function ProductCard({ product }) {
  const {addtoCart} =  useContext(storeContext)
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">

      {/* Product Image */}
      <div className="h-52 bg-green-50 flex items-center justify-center p-4">
       <Link to={`/overview/${product.id}`}>
       <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
       </Link>
      </div>

      {/* Product Details */}
      <div className="p-4">

        {/* Category */}
        <p className="text-xs text-green-600 font-medium uppercase tracking-wide">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-1">
          {product.title}
        </h2>

        {/* Price + Rating */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-green-600 font-bold text-xl">
            ${product.price}
          </span>

          <span className="flex items-center text-yellow-500 text-sm">
            ⭐ {product.rating}
          </span>
        </div>

        {/* Add to Cart */}

        <button 
        onClick={()=>{
          addtoCart({
            image:product.thumbnail,
            title:product.title,
            price:product.price,
            id:product.id,
            qyt:1
          }
          
          )
        }}
        className="w-full mt-4 bg-green-600 text-white py-2.5 rounded-lg font-medium hover:bg-green-700 transition">
          Add to Cart
        </button>

      </div>
    </div>
  );
}