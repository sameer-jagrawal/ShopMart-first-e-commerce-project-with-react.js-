import React from 'react'

export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6">
  
        {/* 404 Text */}
        <h1 className="text-8xl font-bold text-green-600">404</h1>
  
        {/* Message */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>
  
        <p className="text-gray-600 mt-2 text-center max-w-md">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
  
        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href="/"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Go Home
          </a>
  
          <a
            href="/store"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-600 hover:text-white transition"
          >
            Continue Shopping
          </a>
        </div>
  
        {/* Illustration */}
        <img
          src="https://illustrations.popsy.co/green/crashed-error.svg"
          alt="404 Illustration"
          className="w-80 mt-10"
        />
  
      </div>
    );
  }
