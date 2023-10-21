/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';

const Cart = ({cart, deleteProduct, totalCart, clearCart }) => {
  return (
    <>
      {
        cart.length <= 0 
          ? 
            <div className="cart-empty">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="cart-empty-svg">
                <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              <h2 className="cart-empty-title">No hay productos en el carrito</h2>
            </div>
          : 
          <>
            {cart.map(({ id, img, title, price, quantity }) =>
              <div className="cart-product" key={id}>
                <img className='cart-img' src={img} alt={title} />
                <div>
                  <h3 className='cart-product-title'>{title}</h3>
                  <span className='cart-product-quantity'>Cantidad: {quantity}</span>
                </div>
                <span className='cart-product-price'>Subtotal: {price * quantity}</span>
                <button className='cart-delete-product' onClick={()=> deleteProduct(id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                  </svg>
                </button>
              </div>      
            )}
            <footer className="cart-footer">
              <span>Total: <strong className="total-cart">${totalCart}</strong></span>
              <Button 
                variant="danger" 
                onClick={() => clearCart()}>
                Vaciar
              </Button>
            </footer>
          </>
        }
    </>
  )
}

export default Cart