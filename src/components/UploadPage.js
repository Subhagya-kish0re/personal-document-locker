import React from 'react';
import UploadingDocument from './UploadDocuments/UploadingDocument';
import "../components/UploadDocuments/Style.css";
import Navbar from './DocumentViewer Page/Navbar';
import SideBar from './HomePage/SideBar';


const UploadPage = () => {
  return (
      <div>
      <Navbar />
      <div className='flex'>
      <SideBar/>
        <UploadingDocument />
        </div>
      </div>
  )
}

export default UploadPage