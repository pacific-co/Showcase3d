import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Browse from './pages/browse';
import Viewer from './pages/viewer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/viewer/:model" element={<Viewer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
