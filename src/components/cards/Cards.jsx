import React from 'react'
import CardList from './CardList'
import "./Cards.css"
const Cards = () => {
    return (
        <div>{CardList.map(({ title, description, img }, i) => 
            <div key={i}>
                <h3 className='titulo'>{title}</h3>
                <p className='desc'>{description}</p>
            </div>
        )}</div>
    )
}

export default Cards
