import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { MyRoutes } from './routes/Rutas'

function App() {

  return (
   <div className='App'>
      <Header/>
      <MyRoutes/>
   </div>
  )
}

export default App