import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar/Navbar"
import Gallery from "./pages/Gallery";
import Food from "./pages/Food";
import About from "./pages/About";
import Cities from "./pages/Cities";
import Blogs from "./pages/Blogs";





function App() {
  const routes = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/Gallery", element: <Gallery/>},
    {path: "/Food", element: <Food/>},
    {path: "/Cities", element: <Cities/>},
    {path: "/About", element: <About/>},
    {path: "/Blogs", element: <Blogs/>}
  ])

  return (
    <>
      <div>
        <Navbar/>
        <div>{routes}</div>
      </div>
    </>
  )
}

export default App
