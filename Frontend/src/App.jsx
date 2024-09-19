import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import InitPage from './Pages/InitPage';
import Home from './Pages/Home';
import Gestos from './Pages/Gestos';
import Intentalo from './Pages/Intentalo';
import Nosotros from './Pages/Nosotros';
import Contactanos from './Pages/Contactanos';

const router = createBrowserRouter([
  {
    path: "/",
      element: <InitPage />,
      
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "gestos",
          element: <Gestos />,
        },
        {
          path: "intentalo",
          element: <Intentalo />,
        },
        {
          path: "aboutus",
          element: <Nosotros />,
        }, 
        {
          path: "contact",
          element: <Contactanos/>
        }
        
      ]
  }


]);
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App