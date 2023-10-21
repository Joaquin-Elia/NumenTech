/* eslint-disable react/prop-types */
import { useState } from "react";
import CardModal from "./CardModal";
import "./Cards.css"

const Cards = ({products, addToCart}) => {
    const [cardModal, setCardModal] = useState(false);

    const [selectedCard, setSelectedCard] = useState(null);

    const handleClick = (card) => {
        setSelectedCard(card);
        setCardModal(true);
    };

    return (
        <div id="products" className='cont-cards'>
            {products.map((card) => 
                <div className='cards' key={card.id} >
                    <img className='img-cards' src={card.img} alt={card.title}/>
                    <div className="cards-info">
                        <h3 className='titulo-cards'>{card.title}</h3>
                        <p className='desc-cards'>{card.shortDesc}</p>
                        <button 
                            onClick={() => handleClick(card)}
                            className='btn-comprar-cards'
                        >
                            VER MAS
                        </button>
                    </div>
                </div>
            )}
            {cardModal && 
                <CardModal 
                    show={cardModal} 
                    onHide={ ()=> setCardModal(false)}
                    card={selectedCard}
                    addToCart={addToCart}
                />
            }
        </div>
    )
}

export default Cards
