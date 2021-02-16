import React,{useContext} from 'react'
import Boton from '../Button/Button.jsx'
import './navButtons.css'
import {ViewContext} from '../../context/ViewContext.jsx'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'


const NavButtons = () => {
  
  const {view}= useContext(ViewContext)

  return (
    !view ? 
      <div className="borderRounded">
        <Boton placeholder={'DATOS'} href={'#datos'}/>
        <Boton placeholder={'HABILIDADES'} href={'#conocimientos'}/>
        <Boton placeholder={'FORMACIÓN'} href={'#formacion'}/>
        <Boton placeholder={'EXPERICENCIA'} href={'#experiencia'}/>
        <Boton placeholder={'VISITAR PORFOLIO'} color={'color'} event={true}/>
      </div> 
      :
      <div className="borderRounded">
        <Boton placeholder={'VOLVER ATRÁS '} event={true} icon={faArrowLeft} iconColorDark={'text-dark'} />
      </div> 
  )
}

export default NavButtons
