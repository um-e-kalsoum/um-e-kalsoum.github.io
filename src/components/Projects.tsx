import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 50px;
  background-color: var(--background-light);
  
  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
`;

const SectionDescription = styled.p`
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto;
  color: var(--text-light);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--primary-color);
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-light);
  margin-bottom: 20px;
  flex: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  padding: 6px 14px;
  background-color: var(--secondary-color);
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 30px;
  transition: var(--transition);
  
  &.primary {
    background-color: var(--accent-color);
    color: white;
    
    &:hover {
      background-color: #005bb9;
    }
  }
  
  &.secondary {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    
    &:hover {
      background-color: #e5e5e7;
    }
  }
`;

const DetailedDescription = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
`;

const DetailTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--primary-color);
`;

const DetailText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-light);
  margin-bottom: 15px;
`;

const Projects: React.FC = () => {
  const projectsData = [
    {
      id: 1,
      title: 'BeautyHackxs',
      description: 'Upload, analyze, and choose smarter, uncover hidden ingredients in your beauty products with ease.',
      image: '/images/logo2.png',
      tags: ['React', 'JavaScript', 'PHP', 'OCR'],
      codeLink: 'https://github.com/um-e-kalsoum/beautyhackxsfinal',
      detailedDescription: 'We built the frontend using HTML, CSS, and React JavaScript. The backend uses PHP with XAMPP for server-side functionality and phpMyAdmin for database management. We used OCR to extract text from uploaded images and compared ingredients against our database of flagged terms.'
    }
  ];
  
  return (
    <ProjectsSection id="projects">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle>My Projects</SectionTitle>
          <SectionDescription>
            Featured work and code repositories
          </SectionDescription>
        </motion.div>
      </SectionHeader>
      
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <DetailedDescription>
                <DetailText>{project.detailedDescription}</DetailText>
              </DetailedDescription>
              
              <TagsContainer>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagsContainer>
              <ProjectLinks>
                <ProjectLink href={project.codeLink} className="secondary" target="_blank" rel="noopener noreferrer">
                  View Code
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 