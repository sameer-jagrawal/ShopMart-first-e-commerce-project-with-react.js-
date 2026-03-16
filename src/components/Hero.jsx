import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-green-50">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            Fresh Deals Everyday
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Fresh Groceries
            <span className="block text-green-600">Delivered to Your Door</span>
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Shop fresh fruits, vegetables, and daily essentials at the best prices.
            Fast delivery and top quality guaranteed.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">
              <a href="/store">Shop Now</a>
            </button>

          <Link to={"/category"} >
          <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-600 hover:text-white transition">
              Browse Categories
            </button>
          </Link>
            
          </div>

          {/* Small stats */}
          <div className="flex gap-8 mt-8 text-sm text-gray-600">
            <div>
              <p className="text-2xl font-bold text-green-600">10k+</p>
              <p>Happy Customers</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-green-600">500+</p>
              <p>Products</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-green-600">24h</p>
              <p>Fast Delivery</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="Fresh groceries"
            className="rounded-2xl shadow-lg w-[450px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}