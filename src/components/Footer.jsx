import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-50 border-t border-green-200 mt-10">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-3">
            GreenCart
          </h2>
          <p className="text-sm text-gray-600">
            Your trusted online store for fresh products, electronics,
            fashion and daily essentials.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-green-600">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-green-700" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-green-700" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-green-700" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-green-600">Home</a></li>
            <li><a href="/store" className="hover:text-green-600">Store</a></li>
            <li><a href="/categories" className="hover:text-green-600">Categories</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/contact" className="hover:text-green-600">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-green-600">FAQ</a></li>
            <li><a href="/shipping" className="hover:text-green-600">Shipping</a></li>
            <li><a href="/returns" className="hover:text-green-600">Returns</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">
            Subscribe to Newsletter
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Get updates about new products and offers.
          </p>

          <div className="flex items-center bg-white border border-green-200 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 text-sm w-full outline-none"
            />
            <button className="bg-green-600 px-4 py-2 hover:bg-green-700">
              <Mail className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-200 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} GreenCart. All rights reserved.
      </div>

    </footer>
  );
}