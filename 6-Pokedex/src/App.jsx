import { useState } from 'react'
import { TopBar } from './components/Topbar'
import './App.css'
import { BottomBar } from './components/Bottombar'
import { PokeList } from './components/Pokelist'

function App() {
  return (
    <div>
      <TopBar/>
      <PokeList/>
      <BottomBar/>
    </div>
  )
}

export default App
