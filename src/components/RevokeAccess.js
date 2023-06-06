import React from 'react'
import Navbar from './Registration Page/Navbar'
import SideBar from './HomePage/SideBar'
import RevokePermission from './PermissionPage/RevokePermission'

const RevokeAccess = () => {
  return (
      <div>
          <Navbar />
          <div className='flex'>
              <SideBar />
              <RevokePermission/>
          </div>
    </div>
  )
}

export default RevokeAccess