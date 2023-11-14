import React from 'react'
import './Home.css'
import '../../../App.css'
import meta from '../../../assets/img/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Courses from '../Courses/Courses'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'
function Home() {
    const handleClick=()=>{
        
    }
  return (
    <>
    <section>
    <div className="container">
        <div className="home-container">
            <div className="home-content">
                <h2 className='section_title' >Learn Everything For Free!!</h2>
                <p>Master trending tecnologies with Techno ,Invest Your Time and return skills </p>
                <div className="home_btns">
                    <button className='register-btn' onClick={handleClick}>
                        Get Started
                    </button>
                    <button className='register-btn'>
                        Watch Now!
                    </button>
                </div>
            </div>


            <div className="home-img">

                <div className="home-img-wrapper">
                    <div className="box-01">
                        <div className="box-img">
                            <img src={meta} alt="" />
                        </div>

                    </div>
                    <div className="whatsapp-container">
                        <h5>500 + Students</h5>
                        <AiOutlineWhatsApp color='green'/>
                    </div>
                    <div className="support">
                        <h5> Active Support</h5>

                    </div>


                </div>


            </div>

        </div>


    </div>

</section>
<Courses/>
<Community/>
<Plans/>
    </>

  )
}

export default Home
