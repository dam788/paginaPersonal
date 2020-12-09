import React,{useContext} from 'react'
import './button.css'
import {ViewContext} from '../../context/ViewContext.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Button = ({placeholder='boton!', color='', href='#!', rounded='', event=false, icon}) => {
  
  const {view,setView} = useContext(ViewContext)

  const handleView = () => {
    if(event){ setView(!view) }
  }

  const icono = icon ? 
    <FontAwesomeIcon
      icon={icon} 
      className='text-white' 
      style={{
        fontSize:'20px',
        marginLeft: '10px'
      }}
    />
    : null

  return (
    <>
      <a href={href}>
        <button 
          className={`btn ${color} ${rounded}`} 
          onClick={ handleView }
        >
          {placeholder}
          {icono}  
        </button>
      </a>
    </>
  )
}

export default Button
