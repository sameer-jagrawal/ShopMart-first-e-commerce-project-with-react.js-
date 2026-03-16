import React from "react"
import { Link } from "react-router-dom"
export default function About() {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-6 py-16 text-center">

                <h1 className="text-4xl font-bold text-gray-800">
                    About Our Store
                </h1>

                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    We provide high quality products at affordable prices.
                    Our goal is to make online shopping simple, fast, and enjoyable
                    for everyone.
                </p>

            </div>


            {/* About Content */}
            <div className="max-w-6xl mx-auto px-6 pb-16">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Image */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
                            alt="store"
                            className="rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Text */}
                    <div>

                        <h2 className="text-2xl font-semibold text-gray-800">
                            Who We Are
                        </h2>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Our e-commerce platform offers a wide range of products
                            including electronics, fashion, and everyday essentials.
                            We focus on delivering excellent customer service and
                            a seamless shopping experience.
                        </p>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                            With secure payments, fast delivery, and easy returns,
                            we aim to build long-term trust with our customers.
                        </p>

                      <Link to={"/store"} >
                      <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
                            Explore Products
                        </button>
                      </Link>
                       

                    </div>

                </div>

            </div>


            {/* Features Section */}
            <div className="bg-white py-16">

                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

                    <div className="p-6 rounded-xl shadow">

                        <div className="text-4xl">🚚</div>

                        <h3 className="text-lg font-semibold text-gray-800 mt-4">
                            Fast Delivery
                        </h3>

                        <p className="text-gray-600 mt-2">
                            Get your products delivered quickly and safely
                            to your doorstep.
                        </p>

                    </div>


                    <div className="p-6 rounded-xl shadow">

                        <div className="text-4xl">💳</div>

                        <h3 className="text-lg font-semibold text-gray-800 mt-4">
                            Secure Payment
                        </h3>

                        <p className="text-gray-600 mt-2">
                            Multiple secure payment methods to ensure
                            safe transactions.
                        </p>

                    </div>


                    <div className="p-6 rounded-xl shadow">

                        <div className="text-4xl">🔄</div>

                        <h3 className="text-lg font-semibold text-gray-800 mt-4">
                            Easy Returns
                        </h3>

                        <p className="text-gray-600 mt-2">
                            Hassle-free return policy for a smooth
                            shopping experience.
                        </p>

                    </div>

                </div>

            </div>


            {/* CTA Section */}
            <div className="max-w-6xl mx-auto px-6 py-16 text-center">

                <h2 className="text-2xl font-bold text-gray-800">
                    Start Shopping Today
                </h2>

                <p className="text-gray-600 mt-3">
                    Discover thousands of products at the best prices.
                </p>

              <Link to={"/category"}>
              <button className="mt-6 bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition">
                    Browse Products
                </button>
              </Link>
                

            </div>

        </div>
    )
}