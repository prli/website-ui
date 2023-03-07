import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

export interface TechStack {
  name: string;
  url: string;
}

function HomePage() {
  const techStacks: TechStack[] = [
    { name: 'React', url: 'https://reactjs.org' },
    { name: 'AWS CDK', url: 'https://cdkworkshop.com/' },
    { name: 'React-Bootstrap', url: 'https://react-bootstrap.github.io/' },
  ];

  return (
    <Container>
      <main className="text-light">
        <h1>Welcome to my website!</h1>
        <p>Created this website for fun and as an opportunity to try out different ideas and technologies.</p>
        <hr />
        <p>Created using the following tech stack</p>
        <ul>
          {techStacks.map((techStack, i) => {
            return (
              <li key={i}>
                <a href={techStack.url} target="_blank" rel="noreferrer">
                  {techStack.name}
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </Container>
  );
}

export default HomePage;
