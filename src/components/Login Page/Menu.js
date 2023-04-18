import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

const Menu = () => {
    return (
        <div className='tool-bar' style={{width:"100%"}}>
          <div className='burger'>
              <i class="ri-menu-line"></i>
          </div>
            <div className='title'>Personal Document Locker</div>
            <div className='nav-button'>
                <Button variant="info">Sign up</Button>
            </div>
    </div>
    )
}

export default Menu;   