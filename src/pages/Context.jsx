import React, { createContext, useState,useEffect } from 'react'
const storeContext = createContext();
export default function Context({ children }) {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart")
        return storedCart ? JSON.parse(storedCart) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    function addtoCart(payload) {
        const isProductExist = cart.find((itme) => itme.id == payload.id)
        console.log(isProductExist)
        if (isProductExist) {
            const itmes = cart.map((itme) => {
                return itme.id == payload.id ? { ...itme, qyt: itme.qyt + 1 } : itme
            })
            setCart(itmes)
        } else {
            setCart([...cart, payload])

        }
        console.log(cart)
    }
    function removeProduct(id) {
        const itmes = cart.filter((itme) => itme.id !== id)
        setCart(itmes)
    }

    function changeQyt(flag, id) {

        const items = cart.map((item) => {
    
            if (item.id !== id) return item
    
            if (flag === "inc") {
                return { ...item, qyt: item.qyt + 1 }
            }
    
            if (flag === "dec" && item.qyt > 1) {
                return { ...item, qyt: item.qyt - 1 }
            }
    
            return item
        })
    
        setCart(items)
    }
    const cartTotal = cart.length>0 ? 
    cart.reduce((sum,itme)=>sum+(parseInt(itme.qyt*itme.price)),0)
    :0
    return (
        <storeContext.Provider value={{ addtoCart, cart, removeProduct, changeQyt, cartTotal }}>
            {children}
        </storeContext.Provider>
    )
}

export { storeContext }
