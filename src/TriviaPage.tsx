import React, { useState, useEffect } from 'react';
import './TriviaPage.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';
import Col from 'react-bootstrap/Col';
import { fetchTrivia } from './api-calls';

export interface Trivia {
  id: string;
  question: string;
  answer: string;
}

function TriviaPage() {
  const [trivia, setTrivia] = useState<Trivia>({} as Trivia);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    getTrivia();
  }, []);

  function getTrivia() {
    setIsFlipped(false);
    fetchTrivia()
      .then((res) => {
        console.log(res);
        if (res.length > 0) {
          setTrivia(res[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <main>
        <h1 className="text-light">Welcome to trivia!</h1>
        <Col>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card bg="primary">
              <Card.Body>
                <Card.Title>{trivia.id}</Card.Title>
                <Card.Text className="trivia-card-text">{trivia.question}</Card.Text>
                <Button variant="secondary" className="mt-auto" onClick={() => setIsFlipped(!isFlipped)}>
                  Click to flip
                </Button>
              </Card.Body>
            </Card>
            <Card bg="success">
              <Card.Body>
                <Card.Title>{trivia.id}</Card.Title>
                <Card.Text className="trivia-card-text">{trivia.answer}</Card.Text>
                <Button variant="secondary" className="mt-auto" onClick={() => setIsFlipped(!isFlipped)}>
                  Click to flip
                </Button>
              </Card.Body>
            </Card>
          </ReactCardFlip>
        </Col>
        <Button variant="secondary" className="mt-5" onClick={() => getTrivia()}>
          Surprise me with a new trivia!
        </Button>
      </main>
    </Container>
  );
}

export default TriviaPage;
