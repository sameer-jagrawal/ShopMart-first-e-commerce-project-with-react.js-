import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCart';
import Categories from '../components/Categories';

export default function Category() {
  const [cetegory, setCetegory] = useState([]);
  function getCatergory() {
    axios.get("https://dummyjson.com/products").then(
      (response) => {
        setCetegory(response.data.products)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }
  // console.log(cetegory)
  const beauty = cetegory.filter((itmes)=>itmes.category === "beauty")
  const furniture = cetegory.filter((itmes)=>itmes.category === "furniture")
  const groceries =   cetegory.filter((itmes)=>itmes.category === "groceries")


  useEffect(
    () => {
      getCatergory();
    },
    []
  )
  return (
    <>
   <Categories products={groceries} title={"Groceries Products"}/>
   <Categories products={beauty} title={"Beuty Products"}/>
   <Categories products={furniture} title={"Furniture Products"}/>
    </>
  )
}
