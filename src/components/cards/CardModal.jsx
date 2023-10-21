/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal';

const CardModal = ({card, addToCart, ...props}) => {
    const {id, img, title, description, price} = card;  

    return (
        <Modal
          animation={true}
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="false"
        >
          <Modal.Header closeButton style={{border: "none"}}/>
          <Modal.Body>
            <img 
              src={img} 
              alt={title} 
              className='card-modal-img'
            />
            <div className="card-modal-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <span>$ {price}</span>
              <button 
                className='btn-comprar-cards' 
                onClick={() => addToCart(id)}
              >
                Añadir al Carrito
              </button>
            </div>
          </Modal.Body>
        </Modal>
      );
}

export default CardModal