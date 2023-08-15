import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './css-styles/index.css';
import Home from './pages/Home';

import FirstFormule from './pages/FirstFormule';
import SecondeFormule from './pages/SecondeFormule';
import ThirdFormule from './pages/ThirdFormule';




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/laboinspi" element={<Home />} />
        <Route element={<Navigate to="/" />} /> 
        <Route path="/laboinspi/FirstFormule" element={<FirstFormule/>}/>
        <Route path="/laboinspi/SecondeFormule" element={<SecondeFormule/>}/>
        <Route path="/laboinspi/ThirdFormule" element={<ThirdFormule/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
