import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import EE from "./components/education";
import Ex from "./components/experience";
import HH from './components/home'
import Ab from './components/about'
import Pro from './components/projects'
import Con from './components/contact'
import Skill from './components/skill'
import { path } from "framer-motion/client";

    const router = createBrowserRouter(
      [   
      {   path: "/", element:<HH /> },
      {     path: "/about", element:<><Header /><Ab /><Footer /></>  },
      {  path: "/projects", element:<><Header /><Pro /><Footer /></>  },
      {  path: "/contact",   element:<><Header /><Con /></> 
      },  {path: "/experience", element:<><Header /><Ex /><Footer /></>  },
      { path: "/education", element:<><Header /><EE /><Footer /></> }, { path: "/skills", element:<><Header /><Skill /><Footer /></> }, ]
    )
  
  
function App() {
  return (
  
      <RouterProvider router={router} />
    
  )
}
export default App;

