import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import C_home from "./Code/C_home";
import C_about from "./Code/C_about";
import C_mainNews from "./Code/C_mainNews";
import C_news from "./Code/C_news";
const App = () => {
  const routes = createBrowserRouter([
    // <<<<<<<<<<<<<<<<<All Publishers Routes>>>>>>>>>>>>>>>>>>>>>>>>
    {
      path: "/",
      element: <C_home />
    },
    {
      path: "/about",
      element: <C_about />
    },
    {
      path: "/news:id",
      element: <C_mainNews />
    },
    {
      path: "/news",
      element: <C_news />
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
