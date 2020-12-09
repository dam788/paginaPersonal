import React from 'react'
import './person.css'
import imgCV from '../../assets/img/imagenHugo.png'
import linea from '../../assets/img/línea.svg'

const Person = () => {
    return (
      <div className="containerPerson">
        <img 
          src={imgCV} 
          alt="imagen personal hugo morales"    
        />
				<div className="textPerson">
					<h1>HUGO DAMIÁN MORALES</h1>
					<h2>FrontEnd Develloper</h2>
					<img 
						src={linea} 
						alt="linea divisoria" 
						className="linea"
					/>
					<p className="text-white">
						Hola mi nombre es Hugo, soy estudiante de IT, estoy en busqueda de primera experiencia IT, con objetivos
						claros, y transparentes de formar un grupo de trabajo en
						el cual aportar conocimiento y poder desarrollarme en el
						ambiente.
						Emprendedor, responsable y siempre en constante
						crecimiento. 
					</p>
				</div>
      </div>
    )
}

export default Person
