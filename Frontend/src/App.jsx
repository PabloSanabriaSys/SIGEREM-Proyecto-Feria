import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InitPage from './Pages/InitPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InitPage/>
    </>
  )
}

export default App
