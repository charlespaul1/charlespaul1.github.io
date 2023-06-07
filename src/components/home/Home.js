import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import pic from '../../assets/pic.jpg'
 import Header from '../header/Header.js'
import 'animate.css';
const Home = () => {
  return (<>
    <Header />
    <section className="home__section" id="home">
      <div className="home__container">
        <div className="home__content grid">
          <Social />
          <div className="home__img"
            class="animate__animated animate__fadeInUp"
>
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
        
      </div>
    </section>
</> 
  )
}

export default Home
