import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import C_home from './Routes/Customer/C_home'
import C_RegLog from './Routes/Customer/C_RegLog'
import P_RegLog from './Routes/Publisher/P_RegLog'

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
      element: "<P_Home />"
    },
    {
      path: "/publisher/addnews",
      element: "<P_AddNews />"
    },
    {
      path: "/publisher/publishes",
      element: "<P_AllNews />"
    },
    {
      path: "/publisher/logout",
      element: "<P_Logout />"
    },
    {
      path: "/publisher/feed",
      element: "<P_Feed />"
    },
    // <<<<<<<<<<<<<<<<<<<<All Customer Routes>>>>>>>>>>>>>>>>>>>>>>>>
    {
      path: "/login",
      element: <C_RegLog />
    },
    {
      path: "/register",
      element: <C_RegLog />
    },

    {
      path: "/",
      element: <C_home />
    },
    {
      path: "/about",
      element: "about page"
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
