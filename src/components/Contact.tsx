import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 100px 50px;
  background-color: var(--secondary-color);
  
  @media (max-width: 768px) {
    padding: 100px 20px;
  }
  
  @media (max-width: 480px) {
    padding: 80px 15px;
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto;
  color: var(--text-light);
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ContactContent = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
  
  @media (max-width: 768px) {
    order: 2;
    text-align: center;
  }
`;

const ContactDetails = styled.div`
  margin-bottom: 40px;
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 25px;
  color: var(--primary-color);
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--background-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: var(--accent-color);
  font-size: 1.2rem;
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  color: var(--text-color);
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

const SocialButton = styled(motion.a)`
  width: 50px;
  height: 50px;
  background-color: var(--accent-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(226, 115, 150, 0.3);
    background-color: #d06285;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactForm = styled(motion.form)`
  flex: 1;
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 50px;
    padding: 30px 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-color);
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 8px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 15px 18px;
  border: 1px solid #e5e5e7;
  border-radius: 10px;
  font-size: 1.1rem;
  color: var(--text-color);
  font-family: 'Inter', sans-serif;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(226, 115, 150, 0.2);
  }
  
  @media (max-width: 480px) {
    padding: 12px 15px;
    font-size: 1rem;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 15px 18px;
  border: 1px solid #e5e5e7;
  border-radius: 10px;
  font-size: 1.1rem;
  color: var(--text-color);
  resize: vertical;
  min-height: 150px;
  font-family: 'Inter', sans-serif;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(226, 115, 150, 0.2);
  }
  
  @media (max-width: 480px) {
    padding: 12px 15px;
    font-size: 1rem;
    min-height: 120px;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 15px 35px;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: var(--accent-color);
  color: white;
  border-radius: 30px;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  
  &:hover {
    background-color: #d06285;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(226, 115, 150, 0.3);
  }
  
  &:disabled {
    background-color: #86868b;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: rgba(226, 115, 150, 0.15);
  color: #d06285;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
  border: 1px solid rgba(226, 115, 150, 0.3);
`;

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Get In Touch</SectionTitle>
            <SectionDescription>
              Feel free to reach out if you'd like to connect, discuss opportunities, or collaborate on projects.
            </SectionDescription>
          </motion.div>
        </SectionHeader>
        
        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactDetails>
              <ContactTitle>Contact Information</ContactTitle>
              
              <ContactItem>
                <ContactIcon>📍</ContactIcon>
                <ContactText>Toronto, Ontario</ContactText>
              </ContactItem>
              
              <SocialButtons>
                <SocialButton 
                  href="https://github.com/um-e-kalsoum" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </SocialButton>
                <SocialButton 
                  href="https://www.linkedin.com/in/um-e-kalsoum-asif-393701316/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </SocialButton>
                <SocialButton 
                  href="mailto:asif.kalsoum@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                  </svg>
                </SocialButton>
              </SocialButtons>
            </ContactDetails>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Your message has been sent successfully! I'll get back to you soon.
              </SuccessMessage>
            )}
            
            <FormGroup>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                value={formState.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                name="email" 
                value={formState.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput 
                type="text" 
                id="subject" 
                name="subject" 
                value={formState.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <FormTextarea 
                id="message" 
                name="message" 
                value={formState.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton 
              type="submit" 
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 