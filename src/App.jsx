import { useState } from 'react'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Intro from './components/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>  
      <NavBar />
      <Intro />
    </div>
  )
}

export default App
