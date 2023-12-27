import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import './fonts.css';

const RegisterContainer = styled.div`
  background-image: url("https://i.ibb.co/FJ9Jrgt/codioful-formerly-gradienta-n2-Xq-Pm7-Bqhk-unsplash.jpg");
  background-size: cover; /* Stretch image twice the height */
  background-repeat: no-repeat;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 30px 20px;

  @media (max-width: 768px) {
    height: auto; /* Show one card per row */
  }
`;

const OverlayContent = styled.div`
  position: relative;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  height: 100%;
  width: 100%; 
`;

const CustomFont = styled.div`
  font-family: 'Ethnocentric';
  font-size: 3rem;
  color: #f26922;
`;

const CustomFont1 = styled.div`
  font-family: 'Ethnocentric';
  font-size: 2rem;
  color: white;
`;

const CustomFont2 = styled.div`
  font-family: 'Neoterique';
  font-size: 1rem;
  color: #48D1CC;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Adjust opacity as needed */
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 30px;
  margin-top: 20px;
  place-items: center;
  text-align: center;

  /* Media query for phones */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;


const SciFiCard = styled.div`
  background: linear-gradient(to right, #430045, #000046);
  border: 2px solid #48D1CC; /* Add solid border back */
  border-radius: 20px;
  overflow: hidden;

  /* Adjust border-style for smoother corners */
  border-style: outset;

  width: 25rem;
  height: auto;
  padding: 15px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 20rem; /* Show one card per row */
  }

  /* Hover animations */
  &:hover {
    transition: all 0.4s ease-in-out 0.04s;
    background: linear-gradient(to right, #b60138, #1e0149);
    color: #fff;
    box-shadow: 0 0 25px #FFD700;
    transform: translateY(-2px);
  }
`;

const SciFiButton = styled.button`
  background: transparent;
  border: 2px solid #48D1CC;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'Ethnocentric';
  font-size: 1rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  /* Hover animation */
  &:hover {
    transition: all 0.4s ease-in-out 0.04s;
    background: #48D1CC;
    color: #f26922;
    border-color: transparent;
    box-shadow: 0 0 25px #f26922; /* Add a glow effect */
    transform: translateY(-4px); /* Add a subtle lift */
  }
`;

const Register = () => {
  const cardData = [
    { Title: 'Event Executive Head', description: 'Lead the orchestration of seamless events, ensuring meticulous planning and execution to create unforgettable experiences for participants at AVALON Techfest.' },
    { Title: 'Internal Management Head', description: 'Streamline the behind-the-scenes operations, optimizing internal processes and logistics to ensure the smooth functioning of AVALON\'s diverse facets.' },
    { Title: 'Human Resource Head', description: 'Nurture the AVALON family, managing the human capital that powers the event, ensuring a harmonious and motivated team for effective event handling.' },
    //
    { Title: 'Technical Head', description: 'Drive the technological heartbeat of AVALON, overseeing and innovating event handling processes to ensure a cutting-edge and technically rich environment for participants.' },
    { Title: 'Sponsorship Head', description: 'Spearhead partnerships and collaborations, fueling the success of AVALON by securing sponsorships to support and enhance the overall event handling and experience.' },
    { Title: 'Social Media Head', description: 'Amplify AVALON\'s reach and impact, leveraging social platforms to create a buzz, engage the audience, and enhance the overall visibility of the techfest.' },
    //
    { Title: 'WebMaster', description: 'Craft the digital landscape of AVALON, shaping an engaging online presence and optimizing the Techfest\'s website for a seamless and immersive user experience.' },
    { Title: 'Content Head', description: 'Curate and craft compelling narratives, ensuring that every piece of content aligns with AVALON\'s vision, contributing to a cohesive and meaningful event handling strategy.' },
    { Title: 'Creative Head', description: 'Infuse creativity into every aspect of AVALON, from visuals to designs, elevating the overall aesthetic and user experience, and setting the stage for an unforgettable techfest.' },
    //
    { Title: 'Documentation Head', description: 'Chronicle the journey of AVALON, overseeing comprehensive documentation to capture the essence of the techfest and ensure a lasting legacy through meticulous record-keeping.' },
    { Title: 'Publicity Head', description: 'Craft and execute robust publicity campaigns, maximizing AVALON\'s visibility and engagement to attract participants, sponsors, and enthusiasts to the techfest.' },
    { Title: 'Public Relations Head', description: 'Build and maintain positive relationships, representing AVALON to the public and media, fostering a favorable image and ensuring effective communication throughout the techfest journey.' },
    // ... add more card data here
  ];

  const handleButtonClick = () => {
    // Open an external link in a new tab/window
    window.open('https://forms.gle/FuuSdVu4475dwKjf9', '_blank');
  };

  return (
    <RegisterContainer>
        <Overlay />
        <OverlayContent>
            <CustomFont>Positions for Avalon</CustomFont>
            <h2></h2>
            <CardContainer>
            {cardData.map((card, index) => (
                <SciFiCard key={index}>
                    <CustomFont1>{card.Title}</CustomFont1>
                    <h3></h3>
                    <CustomFont2>{card.description}</CustomFont2>
                    <h4></h4>
                    <SciFiButton onClick={handleButtonClick}>Apply Now</SciFiButton>
                </SciFiCard>
            ))}
            </CardContainer>
        </OverlayContent>
    </RegisterContainer>
  );
};

export default Register;