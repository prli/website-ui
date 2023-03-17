import React, { useState, useEffect } from 'react';
import './TriviaPage.css';
import ReactCardFlip from 'react-card-flip';
import { fetchTrivia } from './api-calls';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';

export interface Trivia {
  id: string;
  question: string;
  answer: string;
}

function TriviaPage() {
  const [trivias, setTrivias] = useState<Trivia[]>([] as Trivia[]);

  useEffect(() => {
    getTrivia();
  }, []);

  function getTrivia() {
    fetchTrivia()
      .then((res) => {
        console.log(res);
        setTrivias(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function TriviaCard({ trivia }: { trivia: Trivia }) {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);

    return (
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
    );
  }

  return (
    <Container>
      <main>
        <h1 className="text-light">Welcome to trivia!</h1>
        <Col>
          {trivias.map((trivia, i) => {
            return (
              <Row key={i} className="my-2">
                <TriviaCard trivia={trivia}></TriviaCard>
              </Row>
            );
          })}
          <Button variant="secondary" className="my-5" onClick={() => getTrivia()}>
            Surprise me with a new trivia!
          </Button>
        </Col>
      </main>
    </Container>
  );
}

export default TriviaPage;
