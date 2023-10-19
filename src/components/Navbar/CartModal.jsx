/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CartModal = ({cartModal, closeModal}) => {
  return (
    <>
      <Modal show={cartModal} onHide={closeModal} animation={true}>
        <Modal.Header className="cart-header" closeButton style={{border: 'none'}}>
            <h2 className='cart-title' >Carrito de compras</h2>
        </Modal.Header>
        <Modal.Body className='cart-container' >
            <div className="cart-product">
                <img className='cart-img' src="https://res.cloudinary.com/joacocloud/image/upload/v1649370844/Eliabikes/imgbin_cannondale-bicycle-corporation-mountain-bike-giant-bicycles-bicycle-frames-png-min_uc6y0l.png" alt="" />
                <h3 className='cart-product-title'>Titulo del producto</h3>
                <span className='cart-product-price'>Precio: $ 3.000</span>
                <button className='cart-delete-product'>X</button>
            </div>
            {/* <div className="cart-product">
                <img className='cart-img' src="https://res.cloudinary.com/joacocloud/image/upload/v1649370844/Eliabikes/imgbin_cannondale-bicycle-corporation-mountain-bike-giant-bicycles-bicycle-frames-png-min_uc6y0l.png" alt="" />
                <h3 className='cart-product-title'>Titulo del producto</h3>
                <span className='cart-product-price'>Precio: $ 3.000</span>
                <button className='cart-delete-product'>X</button>
            </div>
            <div className="cart-product">
                <img className='cart-img' src="https://res.cloudinary.com/joacocloud/image/upload/v1649370844/Eliabikes/imgbin_cannondale-bicycle-corporation-mountain-bike-giant-bicycles-bicycle-frames-png-min_uc6y0l.png" alt="" />
                <h3 className='cart-product-title'>Titulo del producto</h3>
                <span className='cart-product-price'>Precio: $ 3.000</span>
                <button className='cart-delete-product'>X</button>
            </div>
            <div className="cart-product">
                <img className='cart-img' src="https://res.cloudinary.com/joacocloud/image/upload/v1649370844/Eliabikes/imgbin_cannondale-bicycle-corporation-mountain-bike-giant-bicycles-bicycle-frames-png-min_uc6y0l.png" alt="" />
                <h3 className='cart-product-title'>Titulo del producto</h3>
                <span className='cart-product-price'>Precio: $ 3.000</span>
                <button className='cart-delete-product'>X</button>
            </div>
            <div className="cart-product">
                <img className='cart-img' src="https://res.cloudinary.com/joacocloud/image/upload/v1649370844/Eliabikes/imgbin_cannondale-bicycle-corporation-mountain-bike-giant-bicycles-bicycle-frames-png-min_uc6y0l.png" alt="" />
                <h3 className='cart-product-title'>Titulo del producto</h3>
                <span className='cart-product-price'>Precio: $ 3.000</span>
                <button className='cart-delete-product'>X</button>
            </div>
            <div className="cart-product">
                <img className='cart-img' src="https://res.cloudinary.com/joacocloud/image/upload/v1649370844/Eliabikes/imgbin_cannondale-bicycle-corporation-mountain-bike-giant-bicycles-bicycle-frames-png-min_uc6y0l.png" alt="" />
                <h3 className='cart-product-title'>Titulo del producto</h3>
                <span className='cart-product-price'>Precio: $ 3.000</span>
                <button className='cart-delete-product'>X</button>
            </div>
            <div className="cart-product">
                <img className='cart-img' src="https://res.cloudinary.com/joacocloud/image/upload/v1649370844/Eliabikes/imgbin_cannondale-bicycle-corporation-mountain-bike-giant-bicycles-bicycle-frames-png-min_uc6y0l.png" alt="" />
                <h3 className='cart-product-title'>Titulo del producto</h3>
                <span className='cart-product-price'>Precio: $ 3.000</span>
                <button className='cart-delete-product'>X</button>
            </div>
            <div className="cart-product">
                <img className='cart-img' src="https://res.cloudinary.com/joacocloud/image/upload/v1649370844/Eliabikes/imgbin_cannondale-bicycle-corporation-mountain-bike-giant-bicycles-bicycle-frames-png-min_uc6y0l.png" alt="" />
                <h3 className='cart-product-title'>Titulo del producto</h3>
                <span className='cart-product-price'>Precio: $ 3.000</span>
                <button className='cart-delete-product'>X</button>
            </div>
            <div className="cart-product">
                <img className='cart-img' src="https://res.cloudinary.com/joacocloud/image/upload/v1649370844/Eliabikes/imgbin_cannondale-bicycle-corporation-mountain-bike-giant-bicycles-bicycle-frames-png-min_uc6y0l.png" alt="" />
                <h3 className='cart-product-title'>Titulo del producto</h3>
                <span className='cart-product-price'>Precio: $ 3.000</span>
                <button className='cart-delete-product'>X</button>
            </div>
            <div className="cart-product">
                <img className='cart-img' src="https://res.cloudinary.com/joacocloud/image/upload/v1649370844/Eliabikes/imgbin_cannondale-bicycle-corporation-mountain-bike-giant-bicycles-bicycle-frames-png-min_uc6y0l.png" alt="" />
                <h3 className='cart-product-title'>Titulo del producto</h3>
                <span className='cart-product-price'>Precio: $ 3.000</span>
                <button className='cart-delete-product'>X</button>
            </div>
            <div className="cart-product">
                <img className='cart-img' src="https://res.cloudinary.com/joacocloud/image/upload/v1649370844/Eliabikes/imgbin_cannondale-bicycle-corporation-mountain-bike-giant-bicycles-bicycle-frames-png-min_uc6y0l.png" alt="" />
                <h3 className='cart-product-title'>Titulo del producto</h3>
                <span className='cart-product-price'>Precio: $ 3.000</span>
                <button className='cart-delete-product'>X</button>
            </div> */}
            {/* <div style={{height: '50vh'}}></div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={closeModal}>
            Vaciar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// CartModal.propTypes = {
//     cartModal: PropTypes.string.isRequired,
//     closeModal: PropTypes.bool.isRequired
// }

export default CartModal;