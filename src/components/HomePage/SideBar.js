import React from 'react';
import "./home.css";
import { NavLink } from "react-router-dom";


const SideBar = () => {
  return (
    <div class="navbar" role="navigation">
      <ul class="mylist">
        <li><NavLink to="/home">Home</NavLink><hr></hr></li>
        <li><NavLink to="/upload">Upload</NavLink><hr></hr></li>
        <li><NavLink to="/views">Documents</NavLink><hr></hr></li>
     </ul>
  </div>
  )
}

export default SideBar