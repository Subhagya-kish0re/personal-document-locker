import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
 
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationPage from "./components/RegistrationPage";

import Welcome from "./components/Welcome";
import DocumentViewerPage from "./components/DocumentViewerPage";
import UploadPage from "./components/UploadPage";
import HomePage from "./components/HomePage";
import Popup from "./components/DocumentViewer Page/Popup";
import StartPage from "./components/StartPage";
import Permission from "./components/Permission";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      
       
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/views" element={<DocumentViewerPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/permission" element={<Permission/>}/>
        </Routes>
        
    </div>
    
  );
}

export default App;
