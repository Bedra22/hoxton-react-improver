import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './page/Home'
import { Reviews } from './page/Reviews'
import { Coctails } from './page/Coctails'
import { Recepies } from './page/Recepies'
import { Philosophy } from './page/Philosophy'
import { Footer } from './components/Footer'
import { EachRecipe } from './page/EachRecipe'
import { EachCoctails } from './page/EacHCoctails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Header />
      <Routes>
        <Route index element={<Navigate to='home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/recepies' element={<Recepies />} />
        <Route path='/recepies/:id' element={<EachRecipe />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/coctails' element={<Coctails />} />
        <Route path='/coctails/:id' element={<EachCoctails />} />
        <Route path='/philosophy' element={<Philosophy />} />
      </Routes>
      <Footer />
    </div >
  )
}

export default App
