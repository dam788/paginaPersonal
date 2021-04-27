/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext} from 'react'
import './porfolio.css'
import Card from '../Card/Card.jsx'
import NavCv from '../NavigationCV/NavigationCv.jsx'
import {
  faGithub,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";
import { ViewContext } from '../../context/ViewContext.jsx'
// import image1 from '../../assets/img/proyects/1.png'


const Porfolio = () => {
  const { proyects, filter, setFilter} = useContext(ViewContext)
  
  const handleCategory = ({target}) => {
    let category = target.innerText
    setFilter(category)
  }

  return (
    <>
      <NavCv>
        <span className="filters" onClick={ handleCategory }>Todo</span>
        <span className="filters" onClick={ handleCategory }>Adobe XD</span>
        <span className="filters" onClick={ handleCategory }>Maquetado</span>
        <span className="filters" onClick={ handleCategory }>Javascript</span>
        <span className="filters" onClick={ handleCategory }>React</span>
        <span className="filters" onClick={ handleCategory }>Node JS</span>
      </NavCv>
      { 
        <h2 className="h2Title"><b className="text-white">Proyectos:</b> {filter.toUpperCase()}</h2>
      }
      <div className="contentCards">
      { filter === 'Todo'?
        (
          proyects.map( proyect => {
            return (
              <Card
                key={proyect.title}
                titulo={proyect.title}
                parrafo={proyect.description}
                img={proyect.photo}
                icon1={faChrome}
                icon2={faGithub}
                link1={proyect.link1}
                link2={proyect.link2}
                textColor={"text-dark"}
              />
            );
          })               
        ):(
          proyects.map( proyect => {
            let {tecnology:tecno} = proyect
            const match = tecno.find( elem => elem === filter )
            if( match ) {
              return (
                <Card
                  key={proyect.title}
                  titulo={proyect.title}
                  parrafo={proyect.description}
                  img={proyect.photo}
                  icon1={faChrome}
                  icon2={faGithub}
                  link1={proyect.link1}
                  link2={proyect.link2}
                  textColor={"text-dark"}
                />
              );
          }})        
        )  
      }
      </div>
    </>
  )
}

export default Porfolio
