import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import ErrorNotFoundPage from './ErrorNotFoundPage';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import MenuBar from './MenuBar';

function App() {
  return (
    <div>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<ErrorNotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
