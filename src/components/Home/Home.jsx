import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='home-banner'>
      <div className='home-texto'>
        <h1 className='home-pearl-white' >Descrubrí la nueva línea Pearl White</h1>
        <p className='home-subtitle' >Los mejores productos ahora en color blanco. Disponibles a partir de Noviembre de 2023.</p>
        <a  className='home-boton' href="#gallery">Ver Más</a>
      </div>
    </div>
  )
}

export default Home