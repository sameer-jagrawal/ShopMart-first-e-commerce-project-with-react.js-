import React, { useContext, useState } from "react";
import { ShoppingCart, Search, Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { storeContext } from "../pages/Context";

export default function Header() {
  const location = useLocation();
  const {cart} =  useContext(storeContext)
  const [menuOpen, setMenuOpen] = useState(false);
  const navitmes = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Store",
      path: "/store"
    },
    {
      title: "Categories",
      path: "/category"
    },
    {
      title: "Contact",
      path: "/contact"
    },
  ]
  // console.log(location)
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">

      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden text-green-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <h1 className="text-2xl font-bold text-green-600 cursor-pointer pe-3">
            <Link to={"/"}>ShopMart</Link>
          </h1>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center w-1/2 bg-green-50 border border-green-200 rounded-lg px-6 py-2 focus-within:ring-2 focus-within:ring-green-400">
          <Search className="w-5 h-5 text-green-600" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none ml-2 flex-1 text-sm"
          />
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {
            navitmes.map((itmes, index) => { 
              const active = location.pathname == itmes.path;
              return (
                < Link to={itmes.path} className={`${active ? " text-green-600 font-bold" : "hover:underline transition "} px-2`}> {itmes.title}</Link>
              )
            })
          }
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5">

          {/* Login */}
          <Link to={"/login"}>
          <button className="hidden md:flex ms-4  items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 cursor-pointer ">
            <User className="w-5 h-5" />
            Login
          </button>
          </Link>
          

          {/* Cart */}
          <Link to={"/cart"}>
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-green-600 hover:text-green-700" />

            {/* Red badge for attention */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {cart.length}
            </span>
          </div>
          </Link>
          

        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center bg-green-50 border border-green-200 rounded-lg px-3 py-2">
          <Search className="w-5 h-5 text-green-600" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none ml-2 w-full text-sm"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {
        menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-4 text-sm font-medium animate-fadeIn">

            <a href="/" className="block hover:text-green-600">Home</a>
            <a href="/shop" className="block hover:text-green-600">Shop</a>
            <a href="/categories" className="block hover:text-green-600">Categories</a>
            <a href="/deals" className="block hover:text-green-600">Deals</a>
            <a href="/contact" className="block hover:text-green-600">Contact</a>

            <button className="flex items-center gap-2 text-green-600 pt-2 border-t">
              <User className="w-5 h-5" />
              Login
            </button>

          </div>
        )
      }

    </header >
  );
}