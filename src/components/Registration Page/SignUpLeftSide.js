import React from 'react'
import { Form, Button, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUpLeftSide = () => {

  const navigate = useNavigate();
  const handleClick = () => navigate('/login');
  // const handleClickMetamask = () => navigate('/https://metamask.io/');
  const redirectToMetaMask = () => {
    window.location.href = 'https://metamask.io/';
  };

  return (
    <div className='leftdiv'>
            <br/>
      <div className="head1">Creating account is fast and easy!<br/><br/><br/>
        Create A Metamask wallet to Sign Up
        <br />
        <Button onClick={redirectToMetaMask}> Create A Wallet </Button>

      </div>
      
            <br/>
          <Form style={{ width: "80%", marginLeft: "10%", marginTop: "5%" }}>
              <Form.Group >
                    <Form.Label>Enter Wallet Address</Form.Label>
                    <Form.Control className='login-button'type="wallet address" placeholder="Enter your Wallet Address" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control className='login-button'type="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group >
                    <Form.Label>Enter email</Form.Label>
                    <Form.Control className='login-button'type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group >
                    <Form.Label className='login-button'>Enter Phone Number</Form.Label>
                    <Form.Control className='login-button' type="number" placeholder="Enter your Phone Number" />
              </Form.Group>
                <Button className='login-button' type="submit" onClick={handleClick} >Sign Up</Button>
                
            <p className='mt-3'>Already Have an Account <br/><span onClick={handleClick}>SignIn</span> </p>
            </Form>
            
        </div>
  )
}

export default SignUpLeftSide;