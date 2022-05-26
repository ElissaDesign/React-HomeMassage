import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import Services from '../Services/Services'
import About from '../About/About'
import HomeDashboard from '../Dashboard/HomeDashboard/HomeDashboard'

const Routes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/dashboard' element={<HomeDashboard/>}/>
    </Routes>
  )
}

export default Routes