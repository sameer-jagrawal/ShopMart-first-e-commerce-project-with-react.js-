import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Skeleton from '../components/Skeleton'
import { storeContext } from './Context'

export default function Dynamic() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const {addtoCart} = useContext(storeContext)

    function getproduct() {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getproduct()
    }, [id])

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen text-gray-500 text-xl">
                <Skeleton />
            </div>
        )
    }

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
            <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">

                {/* Product Image */}
                <div className="bg-green-50 flex items-center justify-center p-8">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="max-h-[380px] object-contain hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Product Content */}
                <div className="p-8 flex flex-col justify-between">

                    <div>

                        {/* Category */}
                        <p className="text-xs text-green-600 font-medium uppercase tracking-wide">
                            {product.category}
                        </p>

                        {/* Title */}
                        <h1 className="text-3xl font-bold text-gray-800 mt-2">
                            {product.title}
                        </h1>

                        {/* Brand */}
                        <p className="text-gray-500 mt-1">
                            Brand: <span className="font-medium">{product.brand}</span>
                        </p>

                        {/* Price */}
                        <div className="flex items-center gap-4 mt-4">
                            <span className="text-green-600 text-3xl font-bold">
                                ${product.price}
                            </span>

                            <span className="text-yellow-500 font-medium">
                                ⭐ {product.rating}
                            </span>
                        </div>

                        {/* Discount */}
                        <p className="text-red-500 text-sm mt-1">
                            {product.discountPercentage}% OFF
                        </p>

                        {/* Description */}
                        <p className="text-gray-600 mt-6 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Stock */}
                        <p className="mt-4 text-sm text-gray-500">
                            Availability:
                            <span className="font-medium text-green-600 ml-1">
                                {product.stock > 0 ? "In Stock" : "Out of Stock"}
                            </span>
                        </p>

                        {/* Extra Info */}
                        <div className="mt-6 space-y-2 text-sm text-gray-600">

                            <p>🚚 Delivery: 3 - 5 Business Days</p>

                            <p>🔄 Return Policy: 7 Days Easy Return</p>

                            <p>🛡 Warranty: 1 Year Brand Warranty</p>

                            <p>📦 Shipping: Free Shipping Available</p>

                        </div>

                    </div>

                    {/* Button */}

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
        </div>
    )
}