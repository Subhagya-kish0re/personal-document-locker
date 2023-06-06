import React from 'react'
import Navbar from '../DocumentViewer Page/Navbar'
import { useState } from 'react';
import Popup from './Popup';
import Popupcontent from './Popupcontent';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import SideBar from '../HomePage/SideBar';

const ViewersData = [
        { id: 1, name: "Subhagya Kishore", address: "xasbkjndab@1234skajdha",isSelected:false },
     { id: 2, name: "Rahul", address: "xasbkjndab@1234skajdha", isSelected :false}
]
    const documentList=[
        "Aadhar Card", "Pan Card","Driving License","Voter ID"
    ]
const GrantPression = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [allViewers, setAllViewers] = useState(ViewersData);
    const [selectedId, setSelectedId] = useState();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
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
        <div className='docs'  key={index}>
            <input className='doc-check' type='checkbox'/>
            {item}
        </div>
  );

    const viewerList = allViewers && allViewers.map((Viewers) => (
        
        // <table>
        //     <tr>
        //         <th></th>
        //         <th>Name </th>
        //         <th>Wallet Address</th>
        //     </tr>
        //     <tr>
        //         <td key={Viewers.id}>
        //             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked = {Viewers.isSelected || isAllSelected} onChange={()=>handleSelection(Viewers.id)}></input>
        //         </td>
        //         {/* <td key={Viewers.id}>{Viewers.id}</td> */}
        //         <td key={Viewers.id}>{ Viewers.name}</td>
        //         <td key={Viewers.id}>{Viewers.address}</td>
        //         {/* <Button key={Viewers.id} onClick={() =>
        //                 handleClickDocuments(Viewers.id)
        //             }>Edit Access</Button>
        //             {selectedId === Viewers.id && (
        //                 <>
        //                     <div className="select-option">
        //                     <input type="radio" value="Aadhar Card" />
        //                     <label for="html">Aadhar Card</label><br/>
        //                         <input type="radio"  value="Pan Card" />
        //                         <label for="css">Pan Card</label><br/>
        //                             <input type="radio"  value="Voter ID" />
        //                         <label for="javascript">Voter ID</label>
        //                         <Button>Remove</Button>
        //                         </div>
        //                         </>)} */}
        //     </tr><br></br>
        //    </table>
        <table>
            <tr>
            <th></th>
            <th>Name</th>
            <th>Wallet Address</th>
            </tr>
            <tr key={Viewers.id}>
               <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked = {Viewers.isSelected || isAllSelected} onChange={()=>handleSelection(Viewers.id)}></input>
                 </td>
                 {/* <td key={Viewers.id}>{Viewers.id}</td> */}
                 <td >{ Viewers.name}</td>
                 <td >{Viewers.address}</td>
            </tr>
        </table>
    )
    )

  return (
      <div className='App-1'>
          <Navbar />
          <div className='flex'>
                <SideBar/>
              <div>
                  <div className='select-all'>
                      <input type='checkbox' onClick={() => setIsAllSelected(!isAllSelected)} />
                  <h5 className='head-select'>Select All</h5>
                      
                      </div>
                  {viewerList}
                  <br />
                  <div className='document-whole-box'>
                  <h4>My Documents</h4>
            <div className='doc-box'>
               <h5>High</h5>
        {listItems}
                      </div>
                      </div>



                  <Button  className='revoke-btn' variant="danger" onClick={handleShow}>Revoke Access</Button>

          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to remove ?</Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>Remove</Button>
        </Modal.Footer>
      </Modal>
              </div>
              
          </div>
          
                  </div>
          
  )
}

export default GrantPression