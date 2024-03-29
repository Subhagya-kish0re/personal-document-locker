import React from 'react';
import '../PermissionPage/style.css';
import { useState } from 'react';
import Popup from './Popup';
import Popupcontent from './Popupcontent';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DocumentsShow from './DocumentsShow';
 const ViewersData = [
        { id: 1, name: "Subhagya Kishore", address: "xasbkjndab@1234skajdha",documents:["Adhar Card","Pan Card"],isSelected:false },
     { id: 2, name: "Rahul", address: "xasbkjndab@1234skajdha",documents:["Voter Id","Driving License"], isSelected :false}
]
    const documentList=[
        "Aadhar Card", "Pan Card","Driving License","Voter ID"
    ]
const Viewers = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDocuments, setIsOpenDocuments] = useState(false);
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [allViewers, setAllViewers] = useState(ViewersData);
    const [selectedId, setSelectedId] = useState();
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const togglePopupDocument = () => {
        setIsOpen(!isOpenDocuments);
    }
     const handleClickDocuments = (id) => {
         setSelectedId(id !== selectedId ? id : null);
     }
   
    const handleSelection = (id) => {
           setAllViewers(
            allViewers.map(item => 
                item.id === id 
                ? {...item, isSelected : !item.isSelected}
                : item 
        ))
    }
    const listItems = documentList.map((item, index) =>
        <div className='docs' key={index}>
            <input className='doc-check' type='checkbox'/>
            {item}
        </div>
  );

    
    return (
    <div className='App-1'>
      <div className='flex'> 
                <h3 className='viewer-head'>Viewers:
                    <Button className='add-viewer' type="button"
                        onClick={handleShow}
            >Add Viewer</Button>
            <>
            <Modal show={show}  centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Viewer</Modal.Title>
        </Modal.Header>
                <Modal.Body>
                  <Form >
        <div className='add-form'>
                <Form.Group >
                    <Form.Label >Enter Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Enter Wallet Address</Form.Label>
                    <Form.Control type="address" placeholder="Enter Wallet Address" />
          </Form.Group>
          </div>
            </Form>
        </Modal.Body>
        <Modal.Footer style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Validate & Add
          </Button>
        </Modal.Footer>
      </Modal>
            </>
                
                </h3>
            {/* Add Person */}
            {isOpen && <Popup
      content={<>
        <Popupcontent/>
        
      </>}
      handleClose={togglePopup}
    />}

          <br></br>
            </div>

            <div>
                <div className='select-all'>
                <input type='checkbox' onClick={() => setIsAllSelected(!isAllSelected)} />
                    <h5 className='head-select'>Select All</h5>
                    </div>
                {/* {viewerList} */}
                <div>
        
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Address</th>
            <th>Documents</th>
            
          </tr>
        </thead>
        <tbody>
          {ViewersData.map((data) => (
            <tr key={data.id}>
              <td><input type='checkbox'/></td>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.documents.join(", ")}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
        </div>
            </div>
            {/* List of Documensts */}
            <div className='document-whole-box'>
      <h3 className='text-document'>My Documents:</h3>
          <div className='doc-box'>
            <input className='select-all-option' type='checkbox' />
            <h7 className="but-text">Select All</h7>
        {listItems}
                      </div>
            </div>
            <Button className='permission-btn'>Give Permission</Button>
            </div>
  )
}

export default Viewers