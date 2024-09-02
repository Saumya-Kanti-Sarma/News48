import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import C_home from './Routes/Customer/C_home'
import C_RegLog from './Routes/Customer/C_RegLog'
import P_RegLog from './Routes/Publisher/P_RegLog'
import P_Home from './Routes/Publisher/P_Home'
import P_AddNews from './Routes/Publisher/P_AddNews'
import P_mypublishes from './Routes/Publisher/P_mypublishes'
import P_profile from './Routes/Publisher/P_profile'
import C_NewsDetail from './Routes/Customer/C_NewsDetail'
import Login from './Routes/Customer/Login'
import Register from './Routes/Customer/Register'

const App = () => {
  const router = createBrowserRouter([
    // <<<<<<<<<<<<<<<<<All Publishers Routes>>>>>>>>>>>>>>>>>>>>>>>>
    {
      path: "/publisher/register",
      element: <P_RegLog />
    },
    {
      path: "/publisher/login",
      element: <P_RegLog />
    },
    {
      path: "/publisher",
      element: <P_Home />
    },
    {
      path: "/publisher/addnews",
      element: <P_AddNews />
    },
    {
      path: "/publisher/mypublishes",
      element: <P_mypublishes />
    },
    {
      path: "/publisher/profile",
      element: <P_profile />
    },
    {
      path: "/publisher/feed",
      element: "<P_Feed />"
    },
    // <<<<<<<<<<<<<<<<<<<<All Customer Routes>>>>>>>>>>>>>>>>>>>>>>>>
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },

    {
      path: "/",
      element: <C_home />
    },
    {
      path: "/about",
      element: "about page"
    },
    {
      path: "/news/:id",
      element: <C_NewsDetail />
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  )
}

export default App
