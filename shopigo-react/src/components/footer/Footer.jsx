import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import { headerSocials } from '../../utils/constants'
import phooneIcon from '../../assets/img/phone.svg'
import arrowTop from '../../assets/img/arrow.svg'

const Footer = () => {
  return (
   <footer className='footer'>
      <div className="container">
        <nav className="footer_nav">

        <Link to={'/'} className='footer_nav-logo'>
          <img src={logo} alt='footer-logo'/>
        </Link>

          <div className="footer_nav-right">

          <ul className='footer_nav-right_socials'>

          {
            headerSocials.map((item) => (
          <li key={item.id}>
            <a href={item.path} target='_blank'>
              <img src={item.icon} alt="footer_socials" />
              <span>{item.name}</span>
            </a>
          </li>
            ))
          }

           <li>
            <a href="tel:+998(97) 088 08 08">
              <img src={phooneIcon} alt="footer-phone" />
              <span>+998(97) 088 08 08</span>
            </a>
          </li>

          </ul>

          <button className='footer_nav_scroll'>
            <img src={arrowTop} alt="scroll-top" />
          </button>
          </div>

          
        </nav>
      </div>
   </footer>
  )
}

export default Footer