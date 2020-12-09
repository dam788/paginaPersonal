import React from 'react'
import logo from '../../assets/img/logo.svg'
import './navbar.css'
import Icon from '../IconRounded/IconRounded.jsx'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub  } from '@fortawesome/free-brands-svg-icons'

const linkedInLink = 'https://www.linkedin.com/in/hugo-dami%C3%A1n-morales-a51a411a7'
const githubLink   = 'https://github.com/dam788'
const emailLink    = 'mailto:dam788@gmail.com'


const Navbar = () => {
    return (
      <div className='navbar'>  
      <a href="#root">
        <img src={logo} alt="logotedInipo"/>
      </a>
        <div className="row">
          <small className="text-white">contacto</small>
          <Icon icon={faLinkedinIn} link={linkedInLink} />
          <Icon icon={faGithub} link={githubLink} />
          <Icon icon={faEnvelope} link={emailLink} />
        </div>
      </div>
    )
}

export default Navbar
