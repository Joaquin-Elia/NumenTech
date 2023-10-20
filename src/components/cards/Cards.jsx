/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Cards.css"
import CardModal from "./CardModal";

const Cards = ({products, addToCart}) => {
    const [cardModal, setCardModal] = useState(false);
    return (
        <div id="products" className='cont-cards'>
            {products.map(({id, title, shortDesc, img}) => 
                <div className='cards' key={id}>
                    <img className='img-cards' src={img} alt={title}/>
                    <div className="cards-info">
                        <h3 className='titulo-cards'>{title}</h3>
                        <p className='desc-cards'>{shortDesc}</p>
                        <button 
                            // onClick={() => addToCart(id)}
                            onClick={() => setCardModal(true)}
                            className='btn-comprar-cards'
                        >
                            VER MAS
                        </button>
                        <CardModal show={cardModal} onHide={ ()=> setCardModal(false)} addToCart={addToCart} id={id} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cards
