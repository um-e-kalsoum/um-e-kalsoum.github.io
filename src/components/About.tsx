import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 50px;
  background-color: var(--secondary-color);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 100px 20px;
    flex-direction: column;
  }
  
  @media (max-width: 480px) {
    padding: 80px 15px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 50px;
    order: -1;
  }
`;

const ProfileImage = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(226, 115, 150, 0.1);
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
  
  @media (max-width: 480px) {
    width: 240px;
    height: 240px;
  }
`;

const TextContainer = styled(motion.div)`
  flex: 1;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 30px;
  position: relative;
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

const Bio = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 30px;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Skill = styled(motion.div)`
  padding: 10px 20px;
  background-color: white;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--primary-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(226, 115, 150, 0.2);
  transition: var(--transition);
  
  &:hover {
    border-color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(226, 115, 150, 0.15);
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.95rem;
    margin-bottom: 5px;
  }
`;

const EducationSection = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
`;

const EducationTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 20px;
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
`;

const EducationItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const EducationLogo = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const EducationInfo = styled.div`
  flex: 1;
`;

const EducationDegree = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 8px;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const EducationSchool = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 8px;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const EducationYear = styled.p`
  font-size: 1rem;
  color: var(--text-light);
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <ContentContainer>
        <TextContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle>About Me</SectionTitle>
          <Bio>
            Hi there, I'm a Computer Science student pursing an area of emphasis in Cybersecurity and a minor in Mathematics with a passion for software development! I enjoy building intuitive applications that solve real-world problems.
          </Bio>
          <Bio>
            As an aspiring software engineer, I focus on creating accessible and responsive web applications using modern technologies like React, TypeScript, and JavaScript.
          </Bio>
          <Bio>
            When I'm not coding, I enjoy exploring new technologies, reading, and working on personal projects to expand my skills.
          </Bio>
          
          <EducationSection>
            <EducationTitle>Education</EducationTitle>
            <EducationItem>
              <EducationLogo>
                <img src="/images/uofg.png" alt="University of Guelph" />
              </EducationLogo>
              <EducationInfo>
                <EducationDegree>Bachelor of Computing, Computer Science</EducationDegree>
                <EducationSchool>University of Guelph</EducationSchool>
                <EducationYear>2024-2028</EducationYear>
              </EducationInfo>
            </EducationItem>
          </EducationSection>
        </TextContainer>
        
        <ImageContainer
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ProfileImage>
            <img src="/images/uk.jpeg" alt="Um-E-Kalsoum Asif" />
          </ProfileImage>
        </ImageContainer>
      </ContentContainer>
    </AboutSection>
  );
};

export default About; 