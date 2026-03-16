import React from "react"

export default function Contact() {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-6 py-16 text-center">

                <h1 className="text-4xl font-bold text-gray-800">
                    Contact Us
                </h1>

                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Have questions about our products or services?  
                    Our team is here to help you anytime.
                </p>

            </div>


            {/* Contact Section */}
            <div className="max-w-6xl mx-auto px-6 pb-16">

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Contact Information */}
                    <div className="bg-white p-8 rounded-xl shadow">

                        <h2 className="text-2xl font-semibold text-gray-800">
                            Get in Touch
                        </h2>

                        <p className="text-gray-600 mt-3">
                            You can reach us through the following contact details.
                        </p>

                        <div className="mt-6 space-y-4 text-gray-700">

                            <p>
                                📍 Address: 123 Market Street, New Delhi, India
                            </p>

                            <p>
                                📞 Phone: +91 98765 43210
                            </p>

                            <p>
                                📧 Email: support@yourstore.com
                            </p>

                            <p>
                                🕒 Support Hours: Mon - Sat (9 AM - 7 PM)
                            </p>

                        </div>

                    </div>


                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow">

                        <h2 className="text-2xl font-semibold text-gray-800">
                            Send a Message
                        </h2>

                        <form className="mt-6 space-y-4">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                            />

                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>


            {/* Map Section */}
            <div className="max-w-6xl mx-auto px-6 pb-16">

                <div className="bg-white rounded-xl shadow overflow-hidden">

                    <iframe
                        title="map"
                        src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-80 border-0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                </div>

            </div>

        </div>
    )
}