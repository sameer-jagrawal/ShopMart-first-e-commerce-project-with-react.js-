import React from 'react'

export default function Skeleton() {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden animate-pulse">
  
          {/* Image Skeleton */}
          <div className="bg-green-50 flex items-center justify-center p-8">
            <div className="w-72 h-72 bg-gray-300 rounded-lg"></div>
          </div>
  
          {/* Content Skeleton */}
          <div className="p-8 space-y-4">
  
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
  
            <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
  
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
  
            <div className="h-6 w-40 bg-gray-300 rounded"></div>
  
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
  
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
  
            <div className="h-12 w-full bg-gray-300 rounded-xl mt-6"></div>
  
          </div>
        </div>
      </div>
    );
  }
