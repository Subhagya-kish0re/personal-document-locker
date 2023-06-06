import React from 'react';
import LeftSide
  from './Login Page/LeftSide';
import RightSide from './Login Page/RightSide';
import Menu from './Login Page/Menu';
import LeftSideWithoutWallet from './Login Page/LeftSideWithoutWallet';
import { Button, Alert, Row, Col } from "react-bootstrap";
import DemoLogin from './Login Page/DemoLogin';


const LoginPage = () => {
  return (
    <div className="App">
      <Menu />
      <Row className="landing">
        <Col>
          {/* <LeftSide /> */}
          {/* <LeftSideWithoutWallet/> */}
          <div>
            <DemoLogin/>
          </div>
        </Col>

        <Col>
          <RightSide />
        </Col>
      </Row>
    </div>
  )
}

export default LoginPage