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
import VerGesto from './pages/VerGesto';
import Home from './pages/Home';
import ComoFunciona from './pages/ComoFunciona';

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
        },
        {
          path:"gestos/:id",
          element:<VerGesto/>
        },
        {
          path:"como_funciona",
          element:<ComoFunciona/>
        }
        
      ]
  }


]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App