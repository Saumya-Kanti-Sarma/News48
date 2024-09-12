import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import C_home from './Routes/customers/Home/C_home.jsx';
import News from "./Routes/customers/News/News.jsx";
import C_OriginalNews from './Routes/customers/News/components/C_OriginalNews.jsx';
import About from './Routes/customers/About/About.jsx';
import P_Home from './Routes/Publisher/P_Home.jsx';
import P_RegLog from "./Routes/Publisher/P_RegLog.jsx";
import P_AddNews from "./Routes/Publisher/P_AddNews.jsx";
import P_mypublishes from "./Routes/Publisher/P_mypublishes.jsx";
import P_profile from "./Routes/Publisher/P_profile.jsx";
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
