import React from 'react';
import {  Nav, NavDropdown, Container, Button } from 'react-bootstrap';

const Navbar = () => {
  return (
    <div className='tool-bar'>
          <div className='burger'>
              <i class="ri-menu-line"></i>
          </div>
            <div className='title'>Personal Document Locker</div>
            <div className='nav-button'>
                {/* <Button variant="info">Log In</Button> */}
            </div>
    </div>
  )
}

export default Navbar;