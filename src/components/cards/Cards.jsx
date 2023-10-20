/* eslint-disable react/prop-types */
import "./Cards.css"

const Cards = ({products, addToCart}) => {

    return (
        <div id="products" className='cont-cards'>
            {products.map(({id, title, shortDesc, img}) => 
                <div className='cards' key={id}>
                    <img className='img-cards' src={img} alt={title}/>
                    <div className="cards-info">
                        <h3 className='titulo-cards'>{title}</h3>
                        <p className='desc-cards'>{shortDesc}</p>
                        <button 
                            onClick={() => addToCart(id)}
                            className='btn-comprar-cards'
                        >
                            VER MAS
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cards
