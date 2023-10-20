/* eslint-disable react/prop-types */
import {useContext} from 'react'
import Modal from 'react-bootstrap/Modal';
import Cart from '../Cart/Cart';
import { CartProvider } from '../../context/CartContext';

const CartModal = ({cartModal, closeModal}) => {
  const value = useContext(CartProvider);
  const {cart, deleteProduct, clearCart, totalCart} = value;

  return (
    <>
      <Modal show={cartModal} onHide={closeModal} animation={true}>
        <Modal.Header className="cart-header" closeButton style={{border: 'none'}} />
        <Modal.Body className='cart-container'>
          <Cart 
            cart={cart} 
            deleteProduct={deleteProduct}
            totalCart={totalCart}
            clearCart={clearCart}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CartModal;