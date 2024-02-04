import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/about-background.jpg";
const AboutUsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  color: #48d1cc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AboutUsContent = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-family: "Neoterique";
  font-size: 2.5rem;
  color: #48d1cc;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const QuantumLink = styled.a`
  color: #48d1cc;
  text-decoration: underline;

  &:hover {
    color: #f26922;
  }
`;

const QuantumButton = styled.button`
  background: transparent;
  border: 2px solid #48d1cc;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: "Ethnocentric";
  font-size: 1.2rem;
  color: #48d1cc;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    transition: all 0.4s ease-in-out 0.04s;
    background: #48d1cc;
    color: #f26922;
    border-color: transparent;
    box-shadow: 0 0 45px #f26922;
    transform: translateY(-4px);
  }
`;
const handleButtonClick = () => {
  window.open("https://forms.gle/FuuSdVu4475dwKjf9", "_blank");
};

const About = () => {
  return (
    <AboutUsContainer>
      <AboutUsContent>
        <SectionTitle>About Avalon</SectionTitle>
        <SectionText>
          AVALON is the Annual Technical Festival (TechFest) of Terna
          Engineering College (TEC) that provides a platform for technical
          aspirants from reputed Institutes and organizations across the nation
          to showcase their technical knowledge and ideas on a huge platform
          best suited for them.
        </SectionText>
        <SectionText>
          AVALON has been organizing such events for the past 14 years now and
          continues to maintain its legacy. The festival manifests the
          conglomeration of talent, intellect, innovation, and competitive
          spirit of the students.
        </SectionText>
        <SectionText>
          Join us in celebrating the spirit of technology and innovation at
          AVALON!
        </SectionText>
        <QuantumButton type="button" onClick={handleButtonClick}>
          Join the AVALON
        </QuantumButton>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default About;
