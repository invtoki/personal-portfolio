import React from 'react'
import '../LandingPage/LandingPage.css'

function LandingPage() {
  return (
    <div className='sec'>
        <div className='navpage'>
            <div className='logo'>
                <h2>TOKISEUN</h2>
            </div> 

        <div className='navbar'>
            
            <div className='nav-flex'>
                <img src='/assets/home.png' alt='home'/><p>Home</p>
            </div>
            <div className='nav-flex'>
                <img src='/assets/user.png' alt='user'/><p>About</p>
            </div>
            <div className='nav-flex'>
                <img src='/assets/briefcase.png' alt='briefcase'/><p>Services</p>
            </div>
            <div className='nav-flex'>
                <img src='/assets/graduate-cap.png' alt='mortar'/><p>Experience</p>
            </div>
            <div className='nav-flex'>
                <img src='/assets/layer.png' alt='work'/><p>Works</p>
            </div>
            <div className='nav-flex'>
                <img src='/assets/speech-bubble.png' alt='bubble'/><p>Contact</p>
            </div>

        </div>    
        </div>

        <div className='hero-side'>
            <h2>Oluwatoki Oluwaseun</h2>
            <h5>im a Front-end web developer</h5>
        </div>
        
        
    </div>
  )
}

export default LandingPage