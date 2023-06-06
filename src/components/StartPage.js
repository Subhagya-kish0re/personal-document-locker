import React from 'react';
import { Image, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
    
    const navigate = useNavigate();
    const handleClickLogIn = () => navigate('/login');
    const handleClickSignUp = () => navigate('/register');
    

  return (
      <div>
          <div className="landing">
          
          <div className='banner'>Welcome to Personal Document Locker !</div>
          <Row>
              <Col>
                  <div className='leftbox'>
                          <p className='display-info'>Get your Documents Secured.</p>
                          <div className='flex'>
                      <Button className='btn-hvr' variant="info" onClick={handleClickLogIn}>Log In</Button>
                              <Button className='btn-hvr' variant="secondary" onClick={handleClickSignUp}>Sign Up</Button>
                              </div>
                  
          </div>
              </Col>
              <Col>
                  <div className='rightbox'>
              
                  <Image className='image' src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=360&t=st=1678370326~exp=1678370926~hmac=390efacf31dfcf9f33b9bbe489410b911c93ac4bc9ed3bd64a2d3c8b67172a6b" thumbnail style={{border:"none"}} />
              
              
              </div>
              </Col>
          </Row>
          
          
    </div>
    </div>
  )
}

export default StartPage