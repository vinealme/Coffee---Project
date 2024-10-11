import { useState } from 'react'
import viteLogo from '/vite.svg'
import NavBar from '../components/NavBar'
import Intro from '../components/Intro'
import CoffeeList from '../components/CoffeeList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>  
      <NavBar />
      <Intro />
      <h1 className="text-3xl font-bold text-center py-14">Nossos Cafés</h1>
      <CoffeeList />
    </div>
  )
}

export default App
