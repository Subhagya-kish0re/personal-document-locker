import React from 'react'
import { Form, Button } from 'react-bootstrap';
import "./style.css";

const Popupcontent = () => {
  return (
      <div className='add-viwer'>
          {/* Name: <br/>
          <input type='textbox'></input>
          <br/>
          Token Id: <br />
      <input type='textbox'></input>
      <br/> */}
      <h4 className='text'>Add Viewer</h4>
      <Form style={{ width: "60%", marginTop: "5%" }}>
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
          <button className='validate-button'> Validate & Add</button>
    </div>
  )
}

export default Popupcontent
