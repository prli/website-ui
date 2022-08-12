import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';

function HomePage() {
  return (
    <Container>
      <main>
        <h1 className="text-light">Welcome to the homepage!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-light">
          Created using React and AWS CDK
        </p>
        <p className="text-light">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <p className="text-light">
          <a
            href="https://cdkworkshop.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn AWS CDK
          </a>
        </p>
        <p className="text-light">
          <a
            href="https://react-bootstrap.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React-Bootstrap
          </a>
        </p>
      </main>
    </Container>
  );
}

export default HomePage;
