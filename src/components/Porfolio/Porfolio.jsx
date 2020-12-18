/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react'
import './porfolio.css'
import Card from '../Card/Card.jsx'
import NavCv from '../NavigationCV/NavigationCv.jsx'
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ViewContext } from '../../context/ViewContext.jsx'
import image1 from '../../assets/img/proyects/1.png'

const Porfolio = () => {

  const { proyects, filter, setFilter } = useContext(ViewContext)

  return (
    <>
      <NavCv>
        <span className="filters" onClick={ ()=>{setFilter('')}           }> Todos </span>
        <span className="filters" onClick={ ()=>{setFilter('adobe xd')}   }> AdobeXD </span>
        <span className="filters" onClick={ ()=>{setFilter('maquetado')}  }> Maquetado </span>
        <span className="filters" onClick={ ()=>{setFilter('javascript')} }> Javascript </span>
        <span className="filters" onClick={ ()=>{setFilter('react')}   }> React </span>
        <span className="filters" onClick={ ()=>{setFilter('node')}    }> NodeJS </span>
      </NavCv>
      { filter
        ? <h2 className="h2Title"><b className="text-white">Proyectos:</b> {filter.toUpperCase()}</h2>
        : <h2 className="h2Title"><b className="text-white">Proyectos:</b> TODOS</h2>
      }
      <div className="contentCards">
      { proyects
        .map( proyect => (   
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
        ))}
      </div>
    </>
  )
}

export default Porfolio
