import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

function ErrorNotFoundPage() {
  return (
    <Container>
      <main className="text-light">
        <h1>404 Error</h1>
        <p>Page Not Found</p>
      </main>
    </Container>
  );
}

export default ErrorNotFoundPage;
