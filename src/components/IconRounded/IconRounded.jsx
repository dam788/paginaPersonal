import React from 'react'
import './iconRounded.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const IconRounded = ({icon, link, dark, textColor="text-white"}) => {
  
  return (
    <div className={`rounded ${dark}`}>
      <a href={link} target="blank">
        <FontAwesomeIcon icon={icon} className={textColor}/>
      </a>
    </div>
  )
}

export default IconRounded
