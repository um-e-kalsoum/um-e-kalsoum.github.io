import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 50px;
  background-color: var(--background-light);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 0 20px;
    align-items: center;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 1;
  margin-top: 70px;
  
  @media (max-width: 480px) {
    margin-top: 50px;
  }
`;

const PreTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--accent-color);
  margin-bottom: 10px;
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 20px;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.8rem;
    margin-bottom: 15px;
  }
`;

const SubTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  
  .typewriter {
    margin-left: 10px;
    color: var(--accent-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    flex-direction: column;
    
    .typewriter {
      margin-left: 0;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 25px;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--text-light);
  margin-bottom: 40px;
  max-width: 600px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 15px 35px;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: var(--accent-color);
  color: white;
  border-radius: 30px;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(226, 115, 150, 0.3);
    background-color: #d06285;
  }
  
  @media (max-width: 480px) {
    padding: 12px 30px;
    font-size: 1.1rem;
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 15px 35px;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: var(--primary-color);
  color: white;
  border-radius: 30px;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(226, 115, 150, 0.3);
    background-color: #b8406b;
  }
  
  @media (max-width: 480px) {
    padding: 12px 30px;
    font-size: 1.1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--primary-color);
  font-size: 1.5rem;
  transition: var(--transition);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(226, 115, 150, 0.3);
    background-color: var(--primary-color);
    color: white;
  }
  
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(226, 115, 150, 0.1), rgba(226, 115, 150, 0.05));
  right: -100px;
  top: -100px;
  z-index: 0;
`;

const BackgroundShapeBottom = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(226, 115, 150, 0.05), rgba(226, 115, 150, 0.02));
  left: -50px;
  bottom: -50px;
  z-index: 0;
`;

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home">
      <BackgroundShape 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <BackgroundShapeBottom 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PreTitle>Hello, I'm</PreTitle>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Title>Um-e-Kalsoum Asif</Title>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SubTitle>
            I'm a
            <span className="typewriter">
              <Typewriter
                options={{
                  strings: ['Student', 'Developer', 'Programmer', 'Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </SubTitle>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ButtonContainer>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
            >
              View My Work
            </CTAButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              Contact Me
            </SecondaryButton>
          </ButtonContainer>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <SocialLinks>
            <SocialIcon 
              href="https://github.com/um-e-kalsoum" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </SocialIcon>
            <SocialIcon 
              href="https://www.linkedin.com/in/um-e-kalsoum-asif/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
            <SocialIcon 
              href="mailto:asif.kalsoum@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </SocialIcon>
          </SocialLinks>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 