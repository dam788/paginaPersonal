/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext} from 'react'
import './porfolio.css'
import Card from '../Card/Card.jsx'
import NavCv from '../NavigationCV/NavigationCv.jsx'
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ViewContext } from '../../context/ViewContext.jsx'
import image1 from '../../assets/img/proyects/1.png'


const Porfolio = () => {
  const { proyects, filter, setFilter} = useContext(ViewContext)
  
  const handleCategory = ({target}) => {
    let category = target.innerText
    setFilter(category)
  }

  return (
    <>
      <NavCv>
        <span set-name="todo"  className="filters" onClick={ handleCategory }>Todo</span>
        <span set-name="xd"  className="filters" onClick={ handleCategory }>Adobe XD</span>
        <span set-name="maq"  className="filters" onClick={ handleCategory }>Maquetado</span>
        <span set-name="js"  className="filters" onClick={ handleCategory }>Javascript</span>
        <span set-name="react"  className="filters" onClick={ handleCategory }>React</span>
        <span set-name="node"  className="filters" onClick={ handleCategory }>Node JS</span>
      </NavCv>
      { 
        <h2 className="h2Title"><b className="text-white">Proyectos:</b> {filter.toUpperCase()}</h2>
      }
      <div className="contentCards">
      { filter === 'Todo'?
        (
          proyects.map( proyect => {
            return(
              <Card
                key={ proyect.title }
                titulo={ proyect.title }
                parrafo={ proyect.description }
                img={ image1 } 
                icon1={ faGithub } 
                icon2={ faEnvelope }
                href1={ proyect.link1 }
                href2={ proyect.link2 } 
                textColor={ 'text-dark' }
              />
            )
          })               
        ):(
          proyects.map( proyect => {
            let {tecnology:tecno} = proyect
            const match = tecno.find( elem => elem === filter )
            if( match ) {
              return(
                <Card
                  key={ proyect.title }
                  titulo={ proyect.title }
                  parrafo={ proyect.description }
                  img={ image1 } 
                  icon1={ faGithub } 
                  icon2={ faEnvelope }
                  href1={ proyect.link1 }
                  href2={ proyect.link2 } 
                  textColor={ 'text-dark' }
                />
              )
          }})        
        )  
      }
      </div>
    </>
  )
}

export default Porfolio
