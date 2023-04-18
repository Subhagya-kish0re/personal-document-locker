import React from 'react'
import Navbar from './Registration Page/Navbar'
import SignUpLeftSide from './Registration Page/SignUpLeftSide'
import SignUpRightSide from './Registration Page/SignUpRightSide'
import { Button, Alert, Row, Col } from "react-bootstrap";

const SignUpPage = () => {
  return (
      <div className="App">
      <Navbar />
      <Row className="landing">
        <Col>
          <SignUpLeftSide/>
        </Col>

        <Col>
          <SignUpRightSide/>
        </Col>
      </Row>
    </div>
  )
}

export default SignUpPage