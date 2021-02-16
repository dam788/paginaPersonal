import React from 'react'
import './person.css'
import imgCV from '../../assets/img/imagenHugo.png'
import linea from '../../assets/img/línea.svg'

const Person = () => {
    return (
      <div className="containerPerson">
        <img src={imgCV} alt="imagen personal hugo morales" />
        <div className="textPerson">
          <h1>HUGO DAMIÁN MORALES</h1>
          <h2>FrontEnd Developer</h2>
          <img src={linea} alt="linea divisoria" className="linea" />
          <p className="text-white">
          Desarrollo en Javascript y React, y tengo conocimientos básicos en Node JS, trabajo en equipo a través de control de versiones en Git / Github. Experiencia en Wordpress.
          Mis fortalezas son el FrontEnd y las herramientas de Diseño Gráfico.
          Empatía y buena predisposición a la hora del Trabajo en Equipo.
          </p>
        </div>
      </div>
    );
}

export default Person
