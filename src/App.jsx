import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import P_RegLog from './Routes/Publisher/P_RegLog'
import P_Home from './Routes/Publisher/P_Home'
import P_AddNews from './Routes/Publisher/P_AddNews'
import P_mypublishes from './Routes/Publisher/P_mypublishes'
import P_profile from './Routes/Publisher/P_profile';
import C_Home from "../src/Routes/customer/JSX/C_Home"
import C_news from "../src/Routes/customer/JSX/C_news"
import C_about from "../src/Routes/customer/JSX/C_Home"
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
      path: "/",
      element: <C_Home />
    },
    {
      path: "/about",
      element: <C_about />
    },
    {
      path: "/news/",
      element: <C_news />
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
