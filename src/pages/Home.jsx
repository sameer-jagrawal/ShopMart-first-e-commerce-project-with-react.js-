import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
// import axios from 'axios'
import ProductCard from '../components/ProductCart'

export default function Home() {
  const [product, setProduct] = useState([]);
 async function fetchapi(){
  const respons = await fetch("https://dummyjson.com/products")
  const data = await respons.json()    
  const products = data.products
  const topdeals = products.slice(0,8)
  setProduct(topdeals)
  }
  console.log(product)
  // console.log(product)

  useEffect(
    ()=>{
      fetchapi();
    },
    []
  )


  // function searchporduct() {
  //   axios.get("https://dummyjson.com/products/search/?q=phone").then(
  //     (response) => {
  //       console.log(response.data)
  //     }
  //   ).catch(
  //     (error) => {
  //       console.log(error)
  //     }
  //   )
  // }
  // searchporduct();
  return (
    <div>
      <Hero />

      <h1 className='text-2xl font-black font-bold p-3'>Top Deals!!!</h1>
      <div className='max-w-7xl grid grid-cols-3 gap-4 p-4'>
      {
        product.map((itmes)=>{
          return(
            <ProductCard key={itmes.id} 
           product={itmes}
            />
          )
  
        })
      }
      </div>
    </div>
  )
}
