import React from 'react';
import "./home.css";
import { NavLink,useNavigate } from "react-router-dom";


const SideBar = () => {

  const navigate = useNavigate();
  const handleClickHome = () => navigate('/home');
  const handleClickUpload = () => navigate('/upload');
  const handleClickDocumentView = () => navigate('/views');
  const handleClickGrantAccess = () => navigate('/permission');
  const handleClickRevokeAccess = () => navigate('/grantacces');

  return (
    <div class="navbar" role="navigation">
      <ul class="mylist">
        <li onClick={handleClickHome}>Home<hr></hr></li>
        <li onClick={handleClickUpload}>Upload<hr></hr></li>
        <li onClick={handleClickDocumentView}>Documents<hr></hr></li>
        <li onClick={handleClickGrantAccess}>Grant Permission</li>
        <li onClick={handleClickRevokeAccess}> Revoke Access</li>
     </ul>
  </div>
  )
}

export default SideBar