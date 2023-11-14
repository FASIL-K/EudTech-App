import React from 'react'

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../components/Pages/Home/Home'
import Header from'../components/Header/Header'
 import Footer from '../components/Footer/Footer'
import Plans from '../components/Pages/Plans/Plans'
import Courses from '../components/Pages/Courses/Courses'
import About from '../components/Pages/AboutUs/AboutUs'
import ContactUs from '../components/Pages/ContactUS/ContactUs'


function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/services' element={<Plans/>}  />
            <Route path='/cources' element={<Courses/>}  />
            <Route path='/aboutus' element={<About/>}  />
            <Route path='/aboutus' element={<ContactUs/>}  />

        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes
