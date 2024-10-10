import { useState } from 'react'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>  
      <NavBar />
    </div>
  )
}

export default App
