import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import ErrorNotFoundPage from './ErrorNotFoundPage';
import AboutPage from './AboutPage';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <h1 >Welcome to lipeiran.dev!</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<ErrorNotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
