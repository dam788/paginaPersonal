import React,{useContext} from 'react'
import Boton from '../Button/Button.jsx'
import './navButtons.css'
import {ViewContext} from '../../context/ViewContext.jsx'


const NavButtons = () => {
  
  const {view}= useContext(ViewContext)

  return (
    !view ? 
      <div className="borderRounded">
        <Boton placeholder={'DATOS'} href={'#root'}/>
        <Boton placeholder={'FORMACIÓN'} href={'#formacion'}/>
        <Boton placeholder={'CONOCIMIENTOS'} href={'#conocimientos'}/>
        <Boton placeholder={'EXPERICENCIA'} href={'#experiencia'}/>
        <Boton placeholder={'IR A PORFOLIO'} color={'color'} event={true}/>
      </div> 
      :
      <div className="borderRounded">
        <Boton placeholder={'VOLVER ATRÁS'} event={true} />
      </div> 
  )
}

export default NavButtons
