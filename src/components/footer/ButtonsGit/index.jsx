import React from "react";
import ButtonUsers from "./ButtonUsers";
import "../style.css"


const ButtonComponent = ({ userGit, showButton}) => {
  return (
    <div className={`div-button-container ${showButton ? 'visible' : 'hidden'}`}>
      {userGit && userGit.map(({ name, link }, i) => (
        <ButtonUsers key={i} linkGit={link} names={name} />
      ))}
    </div>
  );
};

export default ButtonComponent;
