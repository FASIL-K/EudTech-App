import React from 'react'
import './ContactUs.css'
function ContactUs() {
  return (
    <div className='container'>
      <div className="contact-us-container">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you .Please fill out the
          from below or reach out 
          to us using the contact details provided.
        </p>
        <form className='contact-form' action="">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id='email' name='email' required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" rows="5"></textarea>            
            </div>
            <button type='submit' className='submit-btn' >Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default ContactUs
