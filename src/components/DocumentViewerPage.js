import React from 'react'
import CardPage from './DocumentViewer Page/CardPage'
import CardPage1 from './DocumentViewer Page/CardPage1'
import Navbar from './DocumentViewer Page/Navbar'
import SideBar from './HomePage/SideBar'

const DocumentViewerPage = () => {
  return (
      <div className='App'>
      {/* <div>DocumentViewerPage</div> */}
      <Navbar />
      <div className='flex'>
      <SideBar/>
        {/* <CardPage /> */}
        <CardPage1/>
        </div>
    </div>
  )
}

export default DocumentViewerPage