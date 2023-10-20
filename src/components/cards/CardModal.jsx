import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CardModal = (props) => {
    return (
        <Modal
        animation={true}
          {...props}
        //   size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop={false}
        >
          <Modal.Header closeButton style={{border: "none"}}/>
          <Modal.Body>
            <img src="../../src/assets/imgs/auris.webp" alt="" className='card-modal-img'/>
            <div className="card-modal-info">
            <h3>ASTRO A30 INALÁMBRICOS</h3>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
            <button className='btn-comprar-cards' onClick={() => props.addToCart(props.id)}>Añadir al Carrito</button>
            </div>
          </Modal.Body>
        </Modal>
      );
}

export default CardModal