import React from 'react'
import css from './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>

        <ul className='header-menu'>
            <li>Home</li>
            <li>Program</li>
            <li>Why Us</li>
            <li>Plan</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header
