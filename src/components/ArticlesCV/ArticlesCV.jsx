import React,{useContext} from 'react'
import './articlesCV.css'
import Section from '../Article/Article.jsx'
import Boton from '../Button/Button.jsx'
import Porfolio from '../Porfolio/Porfolio.jsx'
import {ViewContext} from '../../context/ViewContext.jsx'
import {faFileDownload, /*faAddressCard,*/ faGraduationCap, faStar, faAward} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  /*InfoDatos,*/
  InfoSkills,
  InfoFormacion,
  InfoExperiencia,
} from "../../components/Info";


const ArticlesCV = () => {
  const {view} = useContext(ViewContext)

  return !view ? (
    <div className="articlesCards">
      
      <Section title={"HABILIDADES"}>
        <div className="iconsCv" id={"conocimientos"}>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <InfoSkills />
      </Section>
      
      <Section title={"FORMACIÓN"}>
        <div className="iconsCv" id={"formacion"}>
          <FontAwesomeIcon icon={faGraduationCap} />
        </div>
        <InfoFormacion />
      </Section>

      <Section title={"EXPERIENCIA"}>
        <div className="iconsCv" id={"experiencia"}>
          <FontAwesomeIcon icon={faAward} />
        </div>
        <InfoExperiencia />
      </Section>

      {/* <Section title={"DATOS"}>
        <div className="iconsCv" id={"datos"}>
          <FontAwesomeIcon icon={faAddressCard} />
        </div>
        <InfoDatos />
      </Section> */}

      <Boton
        rounded={"redondo"}
        placeholder={"DESCARGAR CURRICULUM "}
        color={"color"}
        icon={faFileDownload}
        href={
          "https://drive.google.com/file/d/1USqmdIpgJmaupkwNjwJFoPsbFLahxr0P/view?usp=sharing"
        }
        target={'blank'}
      />
    </div>
  ) : (
    <div className="articlesCards">
      <Porfolio />
    </div>
  );
}

export default ArticlesCV
