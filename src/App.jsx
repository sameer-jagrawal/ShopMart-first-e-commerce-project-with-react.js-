import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import Dynamic from './pages/Dynamic'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Category from './pages/Category'

export default function App() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [

        {
          index: true,
          element: <Home />
        },

        {
          path: "about",
          element: <About />
        },

        {
          path: "store/:slug?",
          element: <Store />
        },

        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "/category",
          element: <Category/>
        },

        {
          path: "overview/:id",
          element: <Dynamic />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "*",
          element: <NotFound />
        }

      ]
    }
  ])

  return <RouterProvider router={routers} />
} 