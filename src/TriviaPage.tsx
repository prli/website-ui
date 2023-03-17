import React, { useState, useEffect } from 'react';
import './TriviaPage.css';
import ReactCardFlip from 'react-card-flip';
import { fetchTrivia } from './api-calls';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import LoadingIcons from 'react-loading-icons';

export interface Trivia {
  id: string;
  question: string;
  answer: string;
}

function TriviaPage() {
  const [trivias, setTrivias] = useState<Trivia[]>([] as Trivia[]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getTrivia();
  }, []);

  function getTrivia() {
    setIsLoading(true);
    fetchTrivia()
      .then((res) => {
        console.log(res);
        setTrivias(res);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
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
      <Row>
        <Col>
          <h1 className="text-light">Welcome to trivia!</h1>
        </Col>
      </Row>
      <Row>
        {trivias.map((trivia, i) => {
          return (
            <Col key={i} className="my-2" xl={6}>
              <TriviaCard trivia={trivia}></TriviaCard>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col>
          <Button variant="secondary" className="my-2 w-100" disabled={isLoading} onClick={() => getTrivia()}>
            <h1 className="text-light">{isLoading ? <LoadingIcons.ThreeDots /> : 'Surprise me with new trivia!'}</h1>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default TriviaPage;
