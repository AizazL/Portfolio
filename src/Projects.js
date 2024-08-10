import React from 'react';
import styled from 'styled-components';

const ProjectSection = styled.div`
  background-color: #121212;
  color: #e0e0e0;
  padding: 50px 0;
  position: relative;
  z-index: 1;
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  justify-content: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ProjectCard = styled.div`
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  text-align: left;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #333;
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin: 15px 0;
`;

const ProjectSubtitle = styled.p`
  font-size: 1.2rem;
  color: #ccc;
`;

const TagContainer = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: ${({ color }) => color};
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const colors = ['#de8c9d', '#fe2858', '#3cb3b5', '#40ad4f'];

const projects = [
  {
    image: '/images/IntegriNewsEdited.png',
    title: 'IntegriNews',
    subtitle: 'IntegriNews AI is a Fake News Classifier app with extra features, utilizing a custom-built tensor model trained on the WELFake dataset with a 98%+ accuracy.',
    tags: ['Python', 'TensorFlow', 'scikit-learn', 'PyQt5'],
    githubLink: 'https://github.com/AizazL/IntegriNews'
  },
  {
    image: '/images/vaspResized.png',
    title: 'VASP',
    subtitle: 'VASP is a prototype health diagnosis web-app tool that won 1st Place at the WolfHacks Hackathon, featuring a multi-functional Arduino sensor designed in AutoCAD to collect and display medical information, and identify potential health problems.',
    tags: ['C++', 'JavaScript', 'Node.js', 'Pug'],
    githubLink: 'https://github.com/AizazL/VASP'
  },
  {
    image: '/images/DealDigger.png',
    title: 'DealDigger',
    subtitle: 'DealDigger is a Python-based Amazon.ca web scraper using Selenium for dynamic web page interaction, BeautifulSoup for HTML parsing, and Pandas for data manipulation.',
    tags: ['Python', 'Selenium', 'Pandas'],
    githubLink: 'https://github.com/AizazL/DealDigger'
  },
  {
    image: '/images/CovidBoard.png',
    title: 'COVIDBoard',
    subtitle: 'COVIDBoard is a comprehensive COVID-19 data analysis tool utilizing SQL queries, providing valuable insights into infection and death percentages by country.',
    tags: ['SQL', 'Tableau'],
    githubLink: 'https://github.com/AizazL/COVIDBoard'
  },
];

const Projects = () => {
  return (
    <ProjectSection>
      <ProjectContainer>
        {projects.map((project, index) => (
          <ProjectLink 
            key={index} 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ProjectCard>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
              <TagContainer>
                {project.tags.map((tag, i) => (
                  <Tag key={i} color={colors[i % colors.length]}>
                    {tag}
                  </Tag>
                ))}
              </TagContainer>
            </ProjectCard>
          </ProjectLink>
        ))}
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Projects;
