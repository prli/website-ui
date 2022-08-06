import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <main className="App-header">
        <h2>Welcome to the homepage!</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Created using React and AWS CDK
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <p>
          <a
            className="App-link"
            href="https://cdkworkshop.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn AWS CDK
          </a>
        </p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default HomePage;
