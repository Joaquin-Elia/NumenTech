import ButtonComponent from "./ButtonsGit";
import img from "../../assets/githubIcon.png";
import "./style.css";
import { useState } from "react";

const userGit = [
  {
    name: "SB",
    link: "https://github.com/SoofiBaute",
  },
  {
    name: "JE",
    link: "https://github.com/Joaquin-Elia",
  },
  {
    name: "MR",
    link: "https://github.com/martinaruizdev",
  },
  {
    name: "VG",
    link: "https://github.com/VivianaGonzales",
  },
  {
    name: "JA",
    link: "https://github.com/Jochaaa",
  }
];

const Footer = () => {
 const [showButton, setShowButton] = useState(false);


  return (
    <div className="div-container" id="contact">
      <h2 className="subtitle">Acerca de</h2>
      <button onClick={()=> {setShowButton(!showButton)}} className="button-git">
        <img src={img} />
      </button>
        {<ButtonComponent userGit={userGit} showButton={showButton}/>}
      <hr />
      <p>©2023 NUMENTech. Todos los derechos reservados</p>
    </div>
  );
};

export default Footer;
