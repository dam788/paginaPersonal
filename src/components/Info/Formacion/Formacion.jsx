import React from "react";
import "./formacion.css";
import Icon from "../../IconRounded/IconRounded.jsx";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import Arrow from "../../../assets/img/arrowSmall.svg";
import { certified } from "../../../data/certified";

const Formacion = () => {
  return (
    <>
      <div className="containerGroupExp">
        <img
          className="arrowSmall"
          src={Arrow}
          alt="flechita señaladora"
        />
        <h4 className="titleEducation">Diseño UX/UI</h4>
        <p>
          NUCBA.<em>2021-hoy.</em>
        </p>
        <div className="containerIcon">
          {/* <Icon
            className="certified"
            icon={faAward}
            textColor={"text-dark"}
            // dark={"dark"}
            link={"#"}
          /> */}
        </div>
      </div>
      <div className="containerGroupExp">
        <img
          className="arrowSmall"
          src={Arrow}
          alt="flechita señaladora"
        />
        <h4 className="titleEducation">
          Bootcamp Fullstack Javascript
        </h4>
        <p>
          NUCBA.<em>2020-hoy.</em>
        </p>
        <div className="containerIcon">
          {/* <Icon
            className="certified"
            icon={faAward}
            textColor={"text-dark"}
            // dark={"dark"}
            link={"#"}
          /> */}
        </div>
      </div>
      <div className="containerGroupExp">
        <img
          className="arrowSmall"
          src={Arrow}
          alt="flechita señaladora"
        />
        <h4 className="titleEducation">
          Cursos de Formación Certificados
        </h4>
        <p>
          UDEMY.<em>2019-hoy.</em>
        </p>
        <div className="containerIcon">
          <Icon
            className="certified"
            icon={faAward}
            textColor={"text-dark"}
            // dark={"dark"}
            link={certified[0]}
          />
        </div>
      </div>
      <div className="containerGroupExp">
        <img
          className="arrowSmall"
          src={Arrow}
          alt="flechita señaladora"
        />
        <h4 className="titleEducation">
          Trabajo en Entornos Colaborativos
        </h4>
        <p>
          CIVET.<em>2020.</em>
        </p>
        <div className="containerIcon">
          <Icon
            className="certified"
            icon={faAward}
            textColor={"text-dark"}
            // dark={"dark"}
            link={certified[1]}
          />
        </div>
      </div>
      <div className="containerGroupExp">
        <img
          className="arrowSmall"
          src={Arrow}
          alt="flechita señaladora"
        />
        <h4 className="titleEducation">
          Javascript Algoritmos y Estructurade Datos
        </h4>
        <p>
          Free-Code-Camp.<em>2020.</em>
        </p>
        <div className="containerIcon">
          <Icon
            className="certified"
            icon={faAward}
            textColor={"text-dark"}
            // dark={"dark"}
            link={certified[2]}
          />
        </div>
      </div>
      <div className="containerGroupExp">
        <img
          className="arrowSmall"
          src={Arrow}
          alt="flechita señaladora"
        />
        <h4 className="titleEducation">Aprende Wordpress</h4>
        <p>
          Fundación Telefónica Movistar.<em>2020.</em>
        </p>
        <div className="containerIcon">
          <Icon
            className="certified"
            icon={faAward}
            textColor={"text-dark"}
            // dark={"dark"}
            link={certified[4]}
          />
        </div>
      </div>
      <div className="containerGroupExp">
        <img
          className="arrowSmall"
          src={Arrow}
          alt="flechita señaladora"
        />
        <h4 className="titleEducation">Bootcamp FrontEnd Js</h4>
        <p>
          Fundación Telefónica Movistar.<em>2019.</em>
        </p>
        <div className="containerIcon">
          <Icon
            className="certified"
            icon={faAward}
            textColor={"text-dark"}
            // dark={"dark"}
            link={certified[3]}
          />
        </div>
      </div>
      {/* <div className="containerGroupExp">
        <img
          className="arrowSmall"
          src={Arrow}
          alt="flechita señaladora"
        />
        <h4 className="titleEducation">Profesional Gastronómico</h4>
        <p>
          IAG. Martinez, Buenos Aires.<em>2017-2019.</em>
        </p>
        <div className="containerIcon">
          <Icon
            className="certified"
            icon={faAward}
            textColor={"text-dark"}
            // dark={"dark"}
            link={"#"}
          />
        </div>
      </div> */}
      <div className="containerGroupExp">
        <img
          className="arrowSmall"
          src={Arrow}
          alt="flechita señaladora"
        />
        <h4 className="titleEducation">Diseño Gráfico</h4>
        <p>
          FADU - UBA. No finalizado.<em>2010-2016.</em>
        </p>
      </div>
      <div className="containerGroupExp">
        <img
          className="arrowSmall"
          src={Arrow}
          alt="flechita señaladora"
        />
        <h4 className="titleEducation">Técnico Electricista</h4>
        <p>
          EPET N° 11 , Zapala, Provincia de Neuquén.
          <em>2001-2008.</em>
        </p>
        <div className="containerIcon">
          <Icon
            className="certified"
            icon={faAward}
            textColor={"text-dark"}
            // dark={"dark"}
            link={certified[5]}
          />
        </div>
      </div>
    </>
  );
};

export default Formacion;
