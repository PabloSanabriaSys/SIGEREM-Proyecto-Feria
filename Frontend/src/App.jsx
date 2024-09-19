import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import InitPage from './pages/InitPage';

import Gestos from './pages/Gestos';
import Intentalo from './pages/Intentalo';
import Nosotros from './pages/Nosotros';
import Contactanos from './pages/Contactanos';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
      element: <InitPage />,

      children: [
        {
          path: "",
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