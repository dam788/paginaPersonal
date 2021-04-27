import React from 'react'
import './iconRounded.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const IconRounded = (props) => {
  //? destructuring 
  const { icon, link, dark, textColor = "text-white" } = props;
  
  return (
    <div className={`rounded ${dark}`}>
      <a target="blank" href={`${link}`}>
        <FontAwesomeIcon icon={icon} className={textColor} />
      </a>
    </div>
  );
};

export default IconRounded
                                                                                                                                                                                                                                         