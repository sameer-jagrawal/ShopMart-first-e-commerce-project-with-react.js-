import React from 'react'
import Hero from '../components/Hero'
import axios from 'axios'

export default function Home() {
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
    </div>
  )
}
