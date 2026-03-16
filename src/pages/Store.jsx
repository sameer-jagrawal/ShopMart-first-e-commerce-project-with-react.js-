
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCart'
import Skeleton from '../components/Skeleton'
import { useParams, Link } from 'react-router-dom'

export default function Store() {

  const { slug } = useParams()

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  function getproduct() {

    let API = "https://dummyjson.com/products"

    if (slug) {
      API = `https://dummyjson.com/products/category/${slug}`
    }

    axios
      .get(API)
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.log(error))
  }

  function getCategories() {
    axios
      .get('https://dummyjson.com/products/categories')
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    getproduct()
  }, [slug])

  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6">

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 border-t border-gray-300">

        {/* Sidebar */}
        <div className="md:col-span-1 md:border-r border-gray-300">

          <div className="pt-6">

            <h2 className="font-semibold text-lg mb-4">
              Filters
            </h2>

            <div className="space-y-3 text-gray-700">

              <label className="flex items-center gap-2 cursor-pointer">

                <Link to="/store" className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={slug == null}
                    className="accent-green-600"
                    readOnly
                  />
                  All
                </Link>

              </label>

              {categories.map((item) => (
                <label
                  key={item.slug}
                  className="flex items-center gap-2 cursor-pointer"
                >

                  <Link
                    to={`/store/${item.slug}`}
                    className="flex items-center gap-2"
                  >

                    <input
                      type="checkbox"
                      checked={item.slug === slug}
                      className="accent-green-600"
                      readOnly
                    />

                    {item.name}

                  </Link>

                </label>
              ))}

            </div>

          </div>

        </div>

        {/* Products */}
        <div className="md:col-span-4 pt-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}

          </div>

        </div>

      </div>

    </div>
  )
}