import ButtonComponent from "./ButtonsGit";
import img from "../../assets/githubIcon.png";
import "./style.css";

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
    name: "M",
    link: "",
  },
  {
    name: "V",
    link: "",
  },
  {
    name: "JS",
    link: "",
  }
];

const Footer = () => {

  return (
    <div className="div-container">
      <h2 className="subtitle">Acerca de</h2>
      <button className="button-git">
        <img src={img} className="animation" />
      </button>
        <ButtonComponent userGit={userGit}/>
      <hr />
      <p>©2023 NUMENTech. Todos los derechos reservados</p>
    </div>
  );
};

export default Footer;
