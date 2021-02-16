import React from "react";
import "./groupSkills.css";
import Tecnology from "./Tecnology/Tecnology.jsx";
import html from "../../../assets/img/tecnos/html.svg";
import css from "../../../assets/img/tecnos/css.svg";
import js from "../../../assets/img/tecnos/js.svg";
import webpack from "../../../assets/img/tecnos/webpack.svg";
import git from "../../../assets/img/tecnos/git.svg";
import react from "../../../assets/img/tecnos/react.svg";
import hooks from "../../../assets/img/tecnos/hooks.svg";
import redux from "../../../assets/img/tecnos/redux.svg";
import bootstrap from "../../../assets/img/tecnos/bootstrap.svg";
import materialui from "../../../assets/img/tecnos/materialui.svg";
import styled from "../../../assets/img/tecnos/styled.svg";
import node from "../../../assets/img/tecnos/node.svg";
import express from "../../../assets/img/tecnos/express.svg";
import mongo from "../../../assets/img/tecnos/mongo.svg";
import ps from "../../../assets/img/tecnos/ps.svg";
import ai from "../../../assets/img/tecnos/ai.svg";
import hand from "../../../assets/img/tecnos/hand.svg";
import wordpress from "../../../assets/img/tecnos/wordpress.svg";
import xd from "../../../assets/img/tecnos/xd.svg";
import prototype from "../../../assets/img/tecnos/prototype.svg";
import designT from "../../../assets/img/tecnos/designT.svg";

const groupSkills = () => {
  return (
    <>
      <div className="containerGroup">
        <div className="groupTitle">
          <h3>Básicas</h3>
        </div>
        <Tecnology title={"HTML5"} img={html} desc="html cinco" />
        <Tecnology title={"CSS3"} img={css} desc="css tres" />
        <Tecnology
          title={"JAVASCRIPT"}
          img={js}
          desc="javascript vanilla"
        />
        <Tecnology title={"WEBPACK"} img={webpack} desc="Webpack" />
        <Tecnology
          title={"BOOTSTRAP"}
          img={bootstrap}
          desc="Bootstrap"
        />
        <Tecnology
          title={"GIT/GITHUB"}
          img={git}
          desc="Git y Github"
        />
      </div>
      <div className="containerGroup">
        <div className="groupTitle">
          <h3>React</h3>
        </div>
        <Tecnology
          title={"REACT CLASS"}
          img={react}
          desc="React Class"
        />
        <Tecnology title={"HOOKS"} img={hooks} desc="React Hooks" />
        <Tecnology title={"REDUX"} img={redux} desc="React Redux" />
        <Tecnology
          title={"REACT ROUTER"}
          img={react}
          desc="React Router"
        />
        <Tecnology
          title={"REACT BOOTSTRAP"}
          img={bootstrap}
          desc="React Bootstrap"
        />
        <Tecnology
          title={"MATERIAL UI"}
          img={materialui}
          desc="MAterial UI"
        />
        <Tecnology
          title={"STYLED-COMPONENTS"}
          img={styled}
          desc="Styled Components"
        />
      </div>
      <div className="containerGroup">
        <div className="groupTitle">
          <h3>Node</h3>
        </div>
        <Tecnology title={"NODE JS"} img={node} desc="Node JS" />
        <Tecnology title={"EXPRESS"} img={express} desc="Express" />
        <Tecnology title={"MONGO DB"} img={mongo} desc="Mongo DB" />
      </div>
      <div className="containerGroup">
        <div className="groupTitle">
          <h3>Diseño Web</h3>
        </div>
        <Tecnology
          title={"ADOBE PHOTOSHOP"}
          img={ps}
          desc="Photoshop"
        />
        <Tecnology
          title={"ADOBE ILLUSTRATOR"}
          img={ai}
          desc="Illustrator"
        />
        <Tecnology
          title={"ILUSTRACIÓN"}
          img={hand}
          desc="Ilustración"
        />
        <Tecnology
          title={"WORDPRESS"}
          img={wordpress}
          desc="Wordpress"
        />
      </div>
      <div className="containerGroup">
        <div className="groupTitle">
          <h3>Diseño UX/UI</h3>
        </div>
        <Tecnology title={"ADOBE XD"} img={xd} desc="Adobe XD" />
        <Tecnology
          title={"PROTOTIPADO"}
          img={prototype}
          desc="Prototipado"
        />
        <Tecnology
          title={"DESIGN THINKING"}
          img={designT}
          desc="Design Thinking"
        />
      </div>
    </>
  );
};

export default groupSkills;
