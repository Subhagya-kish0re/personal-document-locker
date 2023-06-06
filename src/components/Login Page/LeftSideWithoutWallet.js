import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link,useNavigate } from "react-router-dom";

const LeftSideWithoutWallet = () => {

    const navigate = useNavigate();
  const handleClick = () => navigate('/home');

  return (
      <div>
          <div className='leftdiv'>
            <br/>
            <div className="head1">Sign In to your account!</div>
            <br/>
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"5%"}}>
                <Form.Group >
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control className='login-button'type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group >
                    <Form.Label className='login-button'>Enter your password</Form.Label>
                    <Form.Control className='login-button' type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button className='login-button' type="submit" onClick={handleClick} >Log In</Button>
                {/* <h3>Address : {defaultAccount}</h3>
                <h3>Balance : $ {userBalance}</h3> */}
                
            <p className='mt-3'>Don't Have an Account <span><Link to="/register">SignUp</Link></span> </p>
            </Form>
            
        </div>
    </div>
  )
}

export default LeftSideWithoutWallet;