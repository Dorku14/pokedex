import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { PokemonList } from './modules/pokemon/components/pokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div >
          <PokemonList></PokemonList>
      </div>
    </div>
  )
}

export default App
