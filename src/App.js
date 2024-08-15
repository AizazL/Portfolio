import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './App.css';
import Projects from './Projects'; 
import ParticlesBackground from './ParticlesBackground';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  position: relative;
`;

const Content = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const Name = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 6rem;
  margin: 0;
  color: #fff;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
`;

const Subheading = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  margin-top: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  position: relative;
  span {
    transition: color 1s linear;
  }
`;

const IconContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 1;
`;

const Icon = styled.a`
  color: #e0e0e0;
  font-size: 2rem;
  transition: color 0.3s;
  &:hover {
    color: #00aaff;
  }
`;

const colors = ['#de8c9d', '#fe2858', '#2af0ea', '#397684'];

const SocialLinks = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 2;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00aaff;
  }
`;


function App() {
  const [text] = useTypewriter({
    words: ['Software Developer', 'CS Student', 'Tech Enthusiast'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 2000,
    cursor: <Cursor cursorColor="#fff" />,
  });

  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    let colorIndex = 0;

    const interval = setInterval(() => {
      setColor(colors[colorIndex]);
      colorIndex = (colorIndex + 1) % colors.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container>
        <ParticlesBackground />
        <SocialLinks>
          <SocialLink href="https://github.com/AizazL" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/AizazL" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
        </SocialLinks>


        <Content>
          <Name>Aizaz Lodhi</Name>
          <Subheading>
            <span style={{ color }}>{text}</span>
            <Cursor cursorColor="#fff" />
          </Subheading>
        </Content>
      </Container>
      <Projects /> 
      <IconContainer>
        <Icon href="https://github.com/AizazL" target="_blank">
          <i className="fab fa-github"></i>
        </Icon>
        <Icon href="https://www.linkedin.com/in/AizazL" target="_blank">
          <i className="fab fa-linkedin"></i>
        </Icon>
      </IconContainer>
    </>
  );
}

export default App;
