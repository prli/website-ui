import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <main>
        <h2>About me</h2>
        <p>
          My name is lipeiran
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default AboutPage;
