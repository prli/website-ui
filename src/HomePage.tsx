import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';

function HomePage() {
  return (
    <Container>
      <main>
        <h2>Welcome to the homepage!</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Created using React and AWS CDK
        </p>
        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <p>
          <a
            href="https://cdkworkshop.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn AWS CDK
          </a>
        </p>
      </main>
    </Container>
  );
}

export default HomePage;
