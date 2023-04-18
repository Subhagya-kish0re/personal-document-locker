
import React from 'react';
import SideBar from './HomePage/SideBar';
import Navbar from './DocumentViewer Page/Navbar';
import Viewers from './PermissionPage/Viewers';


const Permission = () => {
  return (
      <div>
          <Navbar /> 
          <div className='flex'>
              <SideBar />
              <Viewers/>
          </div>
    </div>
  )
}

export default Permission