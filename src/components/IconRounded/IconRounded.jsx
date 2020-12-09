import React from 'react'
import './iconRounded.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconRounded = ({icon, link}) => {
  
  return (
    <div className="rounded">
      <a href={link} target="blank">
        <FontAwesomeIcon icon={icon} className='text-white' />
      </a>
    </div>
  )
}

export default IconRounded
