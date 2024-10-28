import React from 'react'
import {  BrowserRouter,Routes,Route}from "react-router-dom"
import Navbar from './components/Navbar'
import Portfolio from './Portfolio/portfolio'
import About from './components/Pages/About'
import Services from './components/Pages/Services'
import Skills from './components/Pages/skills'
import Contact from './components/Pages/Contact'

function App() {
  return (
  <div className="app ">

<BrowserRouter>
        <Navbar/>
        <Routes>
     
     <Route path='/' element={<Portfolio/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='services' element={<Services/>}/>
     <Route path='skills' element={<Skills/>}/>
     <Route path='contact' element={<Contact/>}/>





    




        



        </Routes>
      </BrowserRouter>



  </div>
  )
}

export default App