import React from 'react'
import './footer.css'
import flecha from '../../assets/img/arrow.svg'

const Footer = () => {
  return (
    <footer>
      <a href="#root" className="footerCircle">
        <img src={flecha} alt="flecha para subir al principio" className="arrow"/>
      </a>
    </footer>
  )
}

export default Footer
