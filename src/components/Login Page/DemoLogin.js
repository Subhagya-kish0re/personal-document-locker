import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import '../Login Page/Style.css'

const DemoLogin = () => {
    const navigate = useNavigate();
  const handleClick = () => navigate('/home');
  return (
      <div className='connect-main'>
         <p>Please Connect to Your Wallet</p> 
          <br/>
          <Button variant="warning" onClick={handleClick}>Connect Wallet</Button>
    </div>
  )
}

export default DemoLogin