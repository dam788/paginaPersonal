import React from "react";
import "./tecnology.css";

const Tecnology = (props) => {
  const { title, img, desc } = props;

  return (
    <>
      <div className="groupSkill">
        <img className="imgSkill" src={img} alt={desc} />
        <h5>{title}</h5>
      </div>
    </>
  );
};

export default Tecnology;
