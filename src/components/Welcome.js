import React from 'react';
import { Image ,Row,Col,Button} from "react-bootstrap";
import Navbar from './Registration Page/Navbar';
import { useNavigate } from 'react-router-dom';
import './UploadDocuments/Style.css'
import '../components/HomePage/home.css';

const Welcome = () => {
    const Username = "Test User";

    const navigate = useNavigate();
  const handleClickUpload = () => navigate('/upload');
    const handleClickDocumentView = () => navigate("/views"); 
  const handleClickPermission = () => navigate("/permission");
  const handleClickRevokeAccess = () => navigate("/grantacces");
    
    return (
      <div className='App-1'>
          
            <div >
                <h4 className='center'>Welcome {Username}</h4></div>
          <Row>
              <Col>
                  <div className='leftbox'>
                  <p className='display-info'>Get your Documents Secured.</p>
              <div className='buttons'>
                
                <div>
              <Button className='btn-doc' variant="primary" onClick={handleClickUpload}>Upload a Document
              </Button>
                <Button className='btn-grant' variant='primary' onClick={handleClickPermission}>Grant Permission</Button>
              </div>
              <div>
                <Button className='btn-doc' variant="primary" onClick={handleClickDocumentView}>See All Documents
              </Button>
                <Button className='btn-grant' variant='primary' onClick={handleClickRevokeAccess}>Revoke Permission</Button>
                </div>
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
  )
}

export default Welcome