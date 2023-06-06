import React from 'react';
import SideBar from './HomePage/SideBar';

import Welcome from './Welcome';
import './UploadDocuments/Style.css'
import Topbar from './utils/Topbar';
import Navbar from './DocumentViewer Page/Navbar';

const HomePage = () => {


  return (
      <div className='homewidth App-1'>
      {/* <Topbar/> */}
      <Navbar />
      <div className='flex '>
      <SideBar/>
      
        <Welcome />
      </div>
          
    </div>
  )
}

export default HomePage