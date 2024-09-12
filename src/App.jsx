import React from 'react'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import C_home from './Routes/customers/home/C_home';
import News from "./Routes/customers/news/News"
import C_publisher from './Routes/customers/punlisher/C_publisher';
import C_OriginalNews from './Routes/customers/news/components/C_OriginalNews';
import About from "./Routes/customers/about/About"
import P_Home from './Routes/Publisher/P_Home';
import P_RegLog from "./Routes/Publisher/P_RegLog";
import P_AddNews from "./Routes/Publisher/P_AddNews";
import P_mypublishes from "./Routes/Publisher/P_mypublishes";
import P_profile from "./Routes/Publisher/P_profile";
const App = () => {
  const routes = createBrowserRouter([
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
    {
      path: "/",
      element: <C_home />
    },
    {
      path: "/news",
      element: <News />
    },
    {
      path: "/news/:id",
      element: <C_OriginalNews />
    },
    {
      path: "/search",
      element: <C_publisher />
    },
    {
      path: "/about",
      element: <About />
    },
  ])
  return (
    <>
      <RouterProvider router={routes} />
      <Outlet />
    </>
  )
}

export default App
