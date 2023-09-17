import img from '../../assets/githubIcon.png';
import './style.css';

export const Footer = () => {

  return (
    <div className="div">
      <h2>Acerca de</h2>
      <img src={img} />
      <hr/>
      <p>©2023 NUMENTech. Todos los derechos reservados</p>
    </div>
  )
}

