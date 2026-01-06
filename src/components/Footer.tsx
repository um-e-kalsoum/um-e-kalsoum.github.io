import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: white;
  padding: 60px 50px 30px;
  
  @media (max-width: 768px) {
    padding: 60px 20px 30px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const FooterDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 25px;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 25px;
  position: relative;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 15px;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    transition: var(--transition);
    
    &:hover {
      color: white;
      padding-left: 5px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(226, 115, 150, 0.3);
  }
`;

const FooterBottom = styled.div`
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink><Link to="/">Home</Link></FooterLink>
            <FooterLink><Link to="/about">About</Link></FooterLink>
            <FooterLink><Link to="/projects">Projects</Link></FooterLink>
            <FooterLink><Link to="/contact">Contact</Link></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contact</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <a href="mailto:asif.kalsoum@gmail.com">asif.kalsoum@gmail.com</a>
            </FooterLink>
            <FooterLink>
              <a href="#">Toronto, Ontario</a>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 