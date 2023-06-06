import React, { useState } from 'react';
import './Document.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CardPage1 = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/permissionacess');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


  return (
    <>
      <div className='body-card '>
        <div>
        <h3 className='document-head'>My Documents</h3>
      
      
      <div className='body cards-flex'>
        
      <div className='new-card'>
        
            <div class="card">
              
  <div class="card-details">
    
    <p class="text-title">Doc name</p>
    
  </div>
              <button class="card-button" onClick={handleShow}>More ...</button>
              
</div>
      </div>
      
      
      <div className='new-card'>
      <div class="card">
  <div class="card-details">
    <p class="text-title">Doc name</p>
    
  </div>
              <button class="card-button" >More...</button>
        </div>
      </div>
      
      <div className='new-card'>
      <div class="card">
  <div class="card-details">
    <p class="text-title">Doc name</p>
  </div>
              <button class="card-button" onClick={handleShow} >More...</button>
              <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        
        <Modal.Footer style={{
          display: "flex",
          justifyContent: "center",
        }} >
          <Button variant="secondary" onClick={handleClose}>
            View
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      </div>
      

          </div>
        </div>
        <div>
          
          <h3 className='document-head'>Shared Documents</h3>
          
           <div className='body cards-flex'>
        
      <div className='new-card'>
        
            <div class="card">
              
  <div class="card-details">
    
    <p class="text-title">Doc name</p>
    
  </div>
              <button class="card-button" onClick={handleShow}>More ...</button>
              
</div>
      </div>
      
      
      <div className='new-card'>
      <div class="card">
  <div class="card-details">
    <p class="text-title">Doc name</p>
    
  </div>
              <button class="card-button" >More...</button>
        </div>
      </div>
      
      <div className='new-card'>
      <div class="card">
  <div class="card-details">
    <p class="text-title">Doc name</p>
  </div>
              <button class="card-button"  >More...</button>
              
        </div>
      </div>
      

          </div>

        </div>
        </div>
      </>
  )
}

export default CardPage1