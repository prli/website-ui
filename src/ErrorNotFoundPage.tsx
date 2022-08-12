import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

function ErrorNotFoundPage() {
  return (
    <Container>
      <main>
        <h1 className="text-light">404 Error</h1>
        <p className="text-light">
          Page Not Found
        </p>
      </main>
    </Container>
  );
}

export default ErrorNotFoundPage;
