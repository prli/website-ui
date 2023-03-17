import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import * as Icon from 'react-bootstrap-icons';

function AboutPage() {
  return (
    <Container>
      <main className="text-light">
        <h1>About me</h1>
        <p>My name is Richard Li, also known as lipeiran by many.</p>
        <p>I am a software engineer and University of Waterloo alumni.</p>
        <hr />
        <p>
          I am currently a software engineer at Amazon.com Inc, where I work as part of Customer Engagement Technologies
          org. My team provides international technologies for customer service agents (CSAs) and allow CSAs to support
          countries outside of their native language. My team also provides machine learning platforms to serve
          scientists to train their natural language models.
        </p>
        <a
          href="https://www.amazon.jobs/en/landing_pages/customer-engagement-technology"
          target="_blank"
          rel="noreferrer"
        >
          https://www.amazon.jobs/en/landing_pages/customer-engagement-technology
          <Icon.BoxArrowUpRight className="ms-1" />
        </a>
        <hr />
        <p>
          I was previously a software engineer at Nvidia Corporation, where I worked as part of Nvidia NGC org. My team
          built and provided enterprise services, software, management tools, and support for end-to-end AI and digital
          twin workflows.
        </p>
        <a href="https://www.nvidia.com/en-us/gpu-cloud/" target="_blank" rel="noreferrer">
          https://www.nvidia.com/en-us/gpu-cloud/
          <Icon.BoxArrowUpRight className="ms-1" />
        </a>
        <hr />
      </main>
    </Container>
  );
}

export default AboutPage;
