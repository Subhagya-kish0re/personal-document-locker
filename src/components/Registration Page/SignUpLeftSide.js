import React from 'react'
import {Form, Button,NavLink} from 'react-bootstrap';

const SignUpLeftSide = () => {
  return (
    <div className='leftdiv'>
            <br/>
            <div className="head1">Creating account is fast and easy!
</div>
            <br/>
          <Form style={{ width: "80%", marginLeft: "10%", marginTop: "5%" }}>
              <Form.Group >
                    <Form.Label>Enter Username</Form.Label>
                    <Form.Control className='login-button'type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control className='login-button'type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group >
                    <Form.Label className='login-button'>Enter your password</Form.Label>
                    <Form.Control className='login-button' type="password" placeholder="Enter your password" />
              </Form.Group>
              <Form.Group >
                    <Form.Label className='login-button'>Enter your password</Form.Label>
                    <Form.Control className='login-button' type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button className='login-button' type="submit">Sign Up</Button>
                
            <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
            </Form>
            
        </div>
  )
}

export default SignUpLeftSide;