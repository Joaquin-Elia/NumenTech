import React from 'react'
import CardList from './CardList'
import "./Cards.css"
const Cards = () => {
    return (
        <div className='cont-cards'>{CardList.map(({ title, description, img}, i) => 
            <div className='cards' key={i}>
                <img className='img-cards' src={img}/>
                <h3 className='titulo-cards'>{title}</h3>
                <p className='desc-cards'>{description}</p>
                <button className='btn-comprar-cards'>VER MAS</button>
            </div>
        )}</div>
    )
}

export default Cards
