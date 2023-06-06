import React from 'react';
import '../PermissionPage/style.css';
import { useState } from 'react';
import Popup from './Popup';
import Popupcontent from './Popupcontent';
import ModalDialog from 'react-bootstrap/ModalDialog'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DocumentsShow from './DocumentsShow';
import Navbar from '../Registration Page/Navbar';
import SideBar from '../HomePage/SideBar';
 const ViewersData = [
        { id: 1, name: "Subhagya Kishore", address: "xasbkjndab@1234skajdha",documents:["Adhar Card","Pan Card"],isSelected:false },
     { id: 2, name: "Rahul", address: "xasbkjndab@1234skajdha",documents:["Voter Id","Driving License"], isSelected :false}
]
    const documentList=[
        "Aadhar Card", "Pan Card","Driving License","Voter ID"
    ]
const RevokePermission = () => {
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

    // const viewerList = allViewers && allViewers.map((Viewers) => (
        
    //     // <table>
    //     //     <tr>
    //     //         <th></th>
    //     //         <th>Name </th>
    //     //         <th>Wallet Address</th>
    //     //     </tr>
    //     //     <tr>
    //     //         <td key={Viewers.id}>
    //     //             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked = {Viewers.isSelected || isAllSelected} onChange={()=>handleSelection(Viewers.id)}></input>
    //     //         </td>
    //     //         {/* <td key={Viewers.id}>{Viewers.id}</td> */}
    //     //         <td key={Viewers.id}>{ Viewers.name}</td>
    //     //         <td key={Viewers.id}>{Viewers.address}</td>
    //     //         <td key={Viewers.id}>
    //     //             {/* <Button key={Viewers.id} onClick={() =>
    //     //                 handleClickDocuments(Viewers.id)
    //     //             }>Edit Access</Button>
    //     //             {selectedId === Viewers.id && (
    //     //                 <>
    //     //                     <div className="select-option">
    //     //                     <input type="radio" value="Aadhar Card" />
    //     //                     <label for="html">Aadhar Card</label><br/>
    //     //                         <input type="radio"  value="Pan Card" />
    //     //                         <label for="css">Pan Card</label><br/>
    //     //                             <input type="radio"  value="Voter ID" />
    //     //                         <label for="javascript">Voter ID</label>
    //     //                         <Button>Save</Button> */}
    //     //                         {/* </div> */}
    //     //                         {/* </>)} */}

    //     //                     </td>
    //     //                 </tr><br></br>
    //     //    </table>
        
    // )
    // )
    return (
      <div className='App-1'>
        
        <div className='flex'> 
        
                <h3 className='viewer-head'>Viewers:

                </h3>

          <br></br>
            </div>

            <div>
                <div className='select-all'>
                <input type='checkbox' className='docs checkbox-1' onClick={() => setIsAllSelected(!isAllSelected)} />
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
            <Button  className='revoke-btn' variant="danger" onClick={handleShow}>Revoke Access</Button>

          <Modal
        show={show}
        onHide={handleClose}
          backdrop="static"
          centered
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to remove ?</Modal.Title>
        </Modal.Header>
        
        <Modal.Footer style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>Remove</Button>
        </Modal.Footer>
      </Modal>
            </div>
  )
}

export default RevokePermission;