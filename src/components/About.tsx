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
  align-items: flex-start;
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  gap: 60px;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    padding: 0 20px;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 0 0 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  
  @media (max-width: 968px) {
    flex: 0 0 350px;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    order: -1;
    margin-top: 0;
  }
`;

const ProfileImage = styled.div`
  width: 380px;
  height: 380px;
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
  
  @media (max-width: 968px) {
    width: 330px;
    height: 330px;
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
  padding-right: 20px;
  
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

const TimelineSection = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  
  &:first-of-type {
    margin-top: 60px;
  }
`;

const SectionHeader = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px;

  &::before {
    content: '';
    position: absolute;
    left: 44px;
    top: 16px;
    bottom: 8px;
    width: 2px;
    background-color: rgba(226, 115, 150, 0.2);
    z-index: 1;
  }

  @media (max-width: 768px) {
    &::before {
      display: none;
    }
  }
`;


const TimelineItem = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
  padding-left: 120px;
  padding-bottom: 45px;

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-left: 0;
    padding-bottom: 35px;
  }
`;


const TimelineDot = styled.div`
  position: absolute;
  left: 36px;
  top: 22px;
  width: 16px;
  height: 16px;
  background-color: var(--accent-color);
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;


const TimelineContent = styled.div`
  flex: 1;
  display: flex;
  gap: 25px;

  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const DateRange = styled.p`
  font-size: 1rem;
  color: var(--accent-color);
  font-weight: 600;
  margin-bottom: 10px;
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ItemTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 8px;
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ItemSubtitle = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  color: var(--text-color);
  margin-bottom: 15px;
  opacity: 0.9;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-color);
  margin-bottom: 12px;
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const BulletItem = styled.li`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-color);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
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
          I'm a Computer Science student specializing in Cybersecurity with a minor in Mathematics, driven by a passion for software development and problem-solving. I enjoy building intuitive, accessible applications that address real-world challenges, especially where logical thinking and mathematical reasoning play a key role.
          </Bio>
          <Bio>
          I'm naturally curious and enjoy collaborating with others, whether that's brainstorming ideas, learning from different perspectives, or tackling challenges as a team. As an aspiring software engineer, I focus on creating reliable, user-centered software with clean design and strong foundations. Outside of coding, I enjoy exploring new ideas, learning new concepts, and working on personal projects to continuously grow my skills.
          </Bio>
          
          <TimelineSection>
            <SectionHeader>
              Education
            </SectionHeader>
            <TimelineContainer>
              <TimelineItem>
                <TimelineDot />
                <TimelineContent>
                  <LogoContainer>
                    <img src="/images/uofg.png" alt="University of Guelph" />
                  </LogoContainer>
                  <ItemInfo>
                    <DateRange>2024 - 2028</DateRange>
                    <ItemTitle>Bachelor of Computing, Computer Science</ItemTitle>
                    <ItemSubtitle>University of Guelph</ItemSubtitle>
                    <ItemDescription>
                      Currently pursuing a Bachelor of Computing Degree in Computer Science with a specialization in Cybersecurity and a minor in Mathematics.
                    </ItemDescription>
                  </ItemInfo>
                </TimelineContent>
              </TimelineItem>
            </TimelineContainer>
          </TimelineSection>

          <TimelineSection>
            <SectionHeader>
              Work Experience
            </SectionHeader>
            <TimelineContainer>

            <TimelineItem>
                <TimelineDot />
                <TimelineContent>
                  <LogoContainer>
                    <img src="/images/barn.png" alt="dairy modernization" />
                  </LogoContainer>
                  <ItemInfo>
                    <DateRange>December 2025 - January 2026</DateRange>
                    <ItemTitle>Web Developer & Designer</ItemTitle>
                    <ItemSubtitle>Dairy Modernization</ItemSubtitle>
                    <BulletList>
                      <BulletItem>Independently designed and developed a full public-facing website for a government-funded national dairy modernization initiative.</BulletItem>
                      <BulletItem>Built and customized a WordPress platform tailored to farmers, researchers, policymakers, and industry partners, focusing on clarity, accessibility, and ease of content management.</BulletItem>
                      <BulletItem>Delivered a scalable digital hub designed to support a multi-year agricultural innovation project, enabling nationwide outreach, updates, and resource sharing.</BulletItem>
                      <BulletItem>Designed the site with future growth in mind, allowing non-technical stakeholders to easily update content and expand features over time.</BulletItem>
                    </BulletList>
                  </ItemInfo>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineDot />
                <TimelineContent>
                  <LogoContainer>
                    <img src="/images/uofgOVC.png" alt="uofgOVC" />
                  </LogoContainer>
                  <ItemInfo>
                    <DateRange>September 2025 - December 2025</DateRange>
                    <ItemTitle>Software Developer Intern</ItemTitle>
                    <ItemSubtitle>University of Guelph OVC</ItemSubtitle>
                    <BulletList>
                      <BulletItem>Led the end-to-end redesign and modernization of a molecular biology resource website used by researchers and students, improving usability, navigation, and long-term maintainability.</BulletItem>
                      <BulletItem>Designed and implemented responsive mockups and full-stack prototypes using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and WCAG accessibility compliance.</BulletItem>
                      <BulletItem>Structured and organized large volumes of scientific content to improve discoverability, readability, and user experience across devices.</BulletItem>
                      <BulletItem>Produced clear technical documentation and conducted client training sessions, enabling independent website maintenance, updates, and future content expansion.</BulletItem>
                    </BulletList>
                  </ItemInfo>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineDot />
                <TimelineContent>
                  <LogoContainer>
                    <img src="/images/GCSS.png" alt="guelph cybersecurity society" />
                  </LogoContainer>
                  <ItemInfo>
                    <DateRange>September 2025 - Present</DateRange>
                    <ItemTitle>Graphic Designer</ItemTitle>
                    <ItemSubtitle>Guelph Cyber Security Society</ItemSubtitle>
                    <BulletList>
                      <BulletItem>Designed visual assets for the Guelph Cyber Security Society, including social media graphics, event promotions, and digital marketing materials.</BulletItem>
                      <BulletItem>Collaborated with the executive team to create consistent branding aligned with the society’s identity and outreach goals.</BulletItem>
                      <BulletItem>Produced clear, engaging designs that increased event visibility and improved member engagement across platforms.</BulletItem>
                    </BulletList>
                  </ItemInfo>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineDot />
                <TimelineContent>
                  <LogoContainer>
                    <img src="/images/gdg.png" alt="google developer groups" />
                  </LogoContainer>
                  <ItemInfo>
                    <DateRange>September 2024 - Present</DateRange>
                    <ItemTitle>Hackathon Organizer</ItemTitle>
                    <ItemSubtitle>Google Developer Groups</ItemSubtitle>
                    <BulletList>
                      <BulletItem>Drove sponsorship strategy for GDG initiatives by researching potential partners and aligning proposals with sponsor goals.</BulletItem>
                      <BulletItem>Built and sustained relationships with external organizations to ensure consistent funding and repeat partnerships.</BulletItem>
                      <BulletItem>Supported the financial sustainability of GDG initiatives by contributing to sponsorship planning, outreach execution, and follow-up coordination.</BulletItem>
                    </BulletList>
                  </ItemInfo>
                </TimelineContent>
              </TimelineItem>

            </TimelineContainer>
          </TimelineSection>
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