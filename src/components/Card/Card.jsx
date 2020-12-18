import React from 'react'
import './card.css'
import IconRounded from '../IconRounded/IconRounded.jsx'


const Card = ({
  parrafo="Parrafo", 
  titulo="Titulo",
  icon1, 
  icon2,
  link1,
  link2, 
  textColor, 
  img
  }) => {
    
  return (
    <>
      <article className="boxCard">
        <div 
          className="imageProyect" 
          style={{background: `url(${img})`}}
        />
        <div className="descriptionCard">
          <h4 className='carTitle'>{titulo}</h4>
          <hr/>
          <p className="pCard">
            {parrafo}
          </p>
          <div className="icons">
            {icon1 &&
              <IconRounded
              icon={icon1} 
              textColor={textColor}
              dark={'dark'}
              link={link1}
              />
            }
            {icon2 &&
              <IconRounded
              icon={icon2} 
              textColor={textColor}
              dark={'dark'}
              link={link2}
              />
            }
          </div>
        </div>
      </article>
    </>
  )
}


export default Card
