import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './css-styles/index.css';
import Home from './pages/Home';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Navigate to="/" />} /> {/* Route par défaut, redirige vers la page d'accueil */}
      </Routes>
    </Router>
  </React.StrictMode>
);
