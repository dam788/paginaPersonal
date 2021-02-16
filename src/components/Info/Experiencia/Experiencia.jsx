import React from "react";
import Arrow from "../../../assets/img/arrowSmall.svg";

const Experiencia = () => {
  return (
    <>
      <div className="containerGroup">
        <img
          className="arrowSmall"
          src={Arrow}
          alt="flechita señaladora"
        />
        <h4 className="titleEducation">
          Diseñador Gráfico / Pre-prensa
        </h4>
        <p>
          Pneuma S.R.L, Buenos Aires.<em>2018-2019.</em>
        </p>
        <div className="containerIcon"></div>
      </div>
    </>
  );
};

export default Experiencia;
