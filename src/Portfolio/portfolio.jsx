import React from 'react'
import Home from '../components/Pages/Home'
import About from '../components/Pages/About'
import Services from '../components/Pages/Services'
import Skills from '../components/Pages/skills'
import Contact from '../components/Pages/Contact'
import Footer from '../components/Pages/Footer'
function portfolio() {
  return (
   <div className="portfolio bg-gray-900">
<Home/>
<About/>
<Services/>
<Skills/>
<Contact/>
<Footer/>

   </div>
  )
}

export default portfolio