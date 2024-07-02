import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App