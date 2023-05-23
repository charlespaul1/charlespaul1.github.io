import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import pic from '../../assets/pic.jpg'
import ScrollDown from './scrollDown'
const Home = () => {
  return (
    <section className="home__section" id="home">
      <div className="home__container">
        <div className="home__content grid">
          <Social />
          <div className="home__img">
            <img className='img' src={pic} style={{
              width:'300px',
              height:'300px',
              backgroundSize: 'cover',
              display: 'flex',
            
              boxShadow: 'inset 0 0 9px rgba(255 255 255 / 30%)',
            
            }} alt='profile'/>
          </div>
          <Data />
        </div>
        <ScrollDown scrollPath='#about'/>  
      </div>
    </section>
 
  )
}

export default Home
