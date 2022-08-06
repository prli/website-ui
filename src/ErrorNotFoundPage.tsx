import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function ErrorNotFoundPage() {
  return (
    <>
      <main>
        <h2>404 Error</h2>
        <p>
          Page Not Found
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default ErrorNotFoundPage;
