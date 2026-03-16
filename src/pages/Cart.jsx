import React, { useContext } from "react"
import { storeContext } from "./Context"

export default function Cart() {
    const {cart,removeProduct, changeQyt, cartTotal} =  useContext(storeContext)
    console.log(cart)
    return (
        <div className="bg-gray-50 min-h-screen p-6">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-3xl font-bold text-gray-800 mb-8">
                    Shopping Cart
                </h1>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Cart Items */}
                   
                    <div className="md:col-span-2 space-y-6">

                        {/* Item */}
                        {
                        cart.map((itmes,)=>{
                            // if(cart.id === itmes.id)
                                
                            return(
                                <div key={itmes.id} className="bg-white p-5 rounded-xl shadow flex items-center gap-6">

                                <img
                                    src={itmes.image}
                                    alt="product"
                                    className="w-24 h-24 object-contain"
                                />
    
                                <div className="flex-1">
    
                                    <h2 className="font-semibold text-lg text-gray-800">
                                        {itmes.title}
                                    </h2>
    
                                    <p className="text-green-600 font-bold mt-1">
                                         ${itmes.price * itmes.qyt}
                                    </p>
    
                                    {/* Quantity */}
    
                                    <div className="flex items-center gap-3 mt-3">
    
                                        <button onClick={()=> changeQyt("dec",itmes.id)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                                            -
                                        </button>
    
                                        <span className="font-medium">
                                            {itmes.qyt}
                                        </span>
    
                                        <button onClick={()=> changeQyt("inc",itmes.id)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                                            +
                                        </button>
    
                                    </div>
    
                                </div>
    
                                {/* Remove */}
    
                                <button  onClick={()=>removeProduct(itmes.id)} className="text-red-500 hover:text-red-700">
                                    Remove
                                </button>
    
                            </div>
                            )
                        })
                    }

                       

                    </div>


                    {/* Order Summary */}

                    <div className="bg-white p-6 rounded-xl shadow h-fit">

                        <h2 className="text-xl font-semibold mb-4">
                            Order Summary
                        </h2>

                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span className="text-green-600">Free</span>
                        </div>

                        <div className="border-t my-4"></div>

                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${cartTotal}</span>
                        </div>

                        <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
                            Proceed to Checkout
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}