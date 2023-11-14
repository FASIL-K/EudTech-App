import React from 'react'
import './AboutUs.css'
import miya from '../../../assets/img/miya.jpg'
function About() {
  return (
    <div className='container'>
      <div className="about-us-container">
         <div className="team-memberes">
          <h2>Our Team</h2>
          <div className="member-card">
              <img className='member-image' src={miya} alt="img" />
              <h3 className='member-name' > Miya Helinski</h3>
              <p className='member-role'> Co-Founder</p>
          </div>
         </div>
         <div className="about-us-description">
          <h1 className='about-us-heading'>About Us</h1>
          <p>
            With a Passion for empowring learners of all ages, our mission
            id to make education accessible ,engagging, and personalized
            through our cutting-edge educcational technology platform
          </p>
         </div>
      </div>
      
    </div>
  )
}
export default About
