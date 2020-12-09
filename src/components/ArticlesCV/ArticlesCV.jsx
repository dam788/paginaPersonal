import React,{useContext} from 'react'
import './articlesCV.css'
import Section from '../Article/Article.jsx'
import Boton from '../Button/Button.jsx'
import {ViewContext} from '../../context/ViewContext.jsx'
import {faFileDownload} from '@fortawesome/free-solid-svg-icons'


const ArticlesCV = () => {
  const {view}= useContext(ViewContext)

  return (
    !view ? (
    <div className="articlesCards">
      <Section title={'DATOS'} id={'datos'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste ullam officia in asperiores. Quibusdam, obcaecati earum? Quos, laborum explicabo! Mollitia odio sequi debitis explicabo, labore architecto sunt fugiat nobis.</p>
      </Section>
      <Section title={'FORMACIÓN'} id={'formacion'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste ullam officia in asperiores. Quibusdam, obcaecati earum? Quos, laborum explicabo! Mollitia odio sequi debitis explicabo, labore architecto sunt fugiat nobis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora voluptates, velit excepturi numquam iste eius, eveniet alias, quo dolorum consectetur nobis illo quos. Optio repudiandae accusantium eaque dignissimos nihil?</p>
      </Section>
      <Section title={'CONOCIMIENTOS'} id={'conocimientos'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste ullam officia in asperiores. Quibusdam, obcaecati earum? Quos, laborum explicabo! Mollitia odio sequi debitis explicabo, labore architecto sunt fugiat nobis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora voluptates, velit excepturi numquam iste eius, eveniet alias, quo dolorum consectetur nobis illo quos. Optio repudiandae accusantium eaque dignissimos nihil?</p>
      </Section>
      <Section title={'EXPERIENCIA'} id={'experiencia'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste ullam officia in asperiores. Quibusdam, obcaecati earum? Quos, laborum explicabo! Mollitia odio sequi debitis explicabo, labore architecto sunt fugiat nobis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora voluptates, velit excepturi numquam iste eius, eveniet alias, quo dolorum consectetur nobis illo quos. Optio repudiandae accusantium eaque dignissimos nihil?</p>
      </Section>
      <Boton rounded={'redondo'} placeholder={'DESCARGAR CURRICULUM VITAE'} color={'color'} icon={faFileDownload}/>  
    </div>
    ):(
    <div className="articlesCards">
      <h2>Aca va el porfolio perro!</h2>
    </div>
    )
  )
}

export default ArticlesCV
