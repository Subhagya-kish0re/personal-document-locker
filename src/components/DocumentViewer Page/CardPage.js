import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Popup from './Popup';
import Modal from 'react-bootstrap/Modal';

const CardPage = () => {
 
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='divmain'>
      <ul>
        <li>
    <div className='cards'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
                <Button variant="primary" onClick={handleShow}>
        More Options
                </Button>   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Do Changes?</Modal.Header>
        <Modal.Body>
          <Button variant="secondary" onClick={handleClose}>
            Rename File
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Reupload File
          </Button>
        </Modal.Body>
      </Modal>          
      </Card.Body>
    </Card>
        </div>
        </li>
        </ul>
    </div>

  )
}

export default CardPage;