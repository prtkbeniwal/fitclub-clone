import React from 'react'
import logo from "../assets/logo.png"
import './Header.css'
// import {link} from 'react-scroll'


const Header = () => {
  return (
    <div className='header'>
     <img className='logo' src={logo} alt="" />
     <ul className='header-menu'>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
     </ul>
    </div>
  )
}

export default Header