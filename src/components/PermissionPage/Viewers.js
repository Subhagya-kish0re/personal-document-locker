import React from 'react';
import '../PermissionPage/style.css';
import { useState } from 'react';
import Popup from './Popup';
import Popupcontent from './Popupcontent';
 const ViewersData = [
        { id: 1, name: "Subhagya Kishore", email: "subhagya@gmail",isSelected:false },
     { id: 2, name: "Rahul", email: "rahul@gmail.com", isSelected :false}
    ]
const Viewers = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [allViewers, setAllViewers] = useState(ViewersData);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
   
    const handleSelection = (id) => {
           setAllViewers(
            allViewers.map(item => 
                item.id === id 
                ? {...item, isSelected : !item.isSelected}
                : item 
        ))
    }

    const viewerList = allViewers && allViewers.map((Viewers) => (
        
        <table>
            <tr>
                <th>Name </th>
                <th>Email</th>
            </tr>
            <tr>
                <td key={Viewers.id}>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked = {Viewers.isSelected || isAllSelected} onChange={()=>handleSelection(Viewers.id)}></input>
                </td>
                {/* <td key={Viewers.id}>{Viewers.id}</td> */}
                <td key={Viewers.id}>{ Viewers.name}</td>
                <td key={Viewers.id}>{ Viewers.email}</td>
            </tr><br></br>
           </table>
    )
    )
    return (
    <div>
      <div className='flex'> 
                <h4 className='viewer-head'>Viewers:<input className='add-viewer' type="button" value="Add Viewer" onClick={togglePopup} />
                
                </h4>
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
                <input type='checkbox' onClick={()=>setIsAllSelected(!isAllSelected)}/>
                {viewerList}</div>
            </div>
  )
}

export default Viewers