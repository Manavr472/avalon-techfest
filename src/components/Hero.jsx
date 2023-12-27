import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import './fonts.css';

const HeroContainer = styled.div`
  position: relative;
  width: 100%; /* Ensure full width across viewports */
  height: 100vh;
  overflow: hidden;

  /* Responsive layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    /* Adjust text sizes for smaller screens */
    font-size: 16px;
  }
`;
const CustomFont = styled.div`
  font-family: 'Ethnocentric';
  font-size: 3rem; /* Adjusted for smaller screens */
`;

const CustomFont2 = styled.div`
  font-family: 'Neoterique';
  font-size: 1.5rem; /* Adjusted for smaller screens */
  color: #48D1CC;
  text-align: center;
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`;

const Video = styled(ReactPlayer)`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  pointer-events: none;
  z-index: -1;

  /* Media query for phone screens (adjust breakpoint as needed) */
  @media (max-width: 768px) {
    width: auto;
    height: 100%;
  }
`;

const LogoImage = styled.img`
  width: 60%; /* Adjusted for responsive logo */
  max-width: 300px; /* Added a max-width for larger screens */
  margin-bottom: 20px;
`;

const SciFiButton = styled.button`
  background: transparent;
  border: 2px solid #48D1CC;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'Ethnocentric';
  font-size: 1.2rem; /* Adjusted for smaller screens */
  color: #48D1CC;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;

  /* Hover animation */
  &:hover {
    transition: all 0.4s ease-in-out 0.04s;
    background: #48D1CC;
    color: #f26922;
    border-color: transparent;
    box-shadow: 0 0 45px #f26922; /* Add a glow effect */
    transform: translateY(-4px); /* Add a subtle lift */
  }
`;

const Hero = () => {

  const handleButtonClick = () => {
    // Open an external link in a new tab/window
    window.open('https://forms.gle/FuuSdVu4475dwKjf9', '_blank');
  };

  return (
    <HeroContainer>
      <Video
        url="https://player.vimeo.com/progressive_redirect/playback/855402035/rendition/720p/file.mp4?loc=external&signature=25efff13a9fa9901af9a2a96ebfbca57cd27facd2b3b5e67c2a7b75e506a2f3c"
        playing={true}
        loop={true}
        controls={false}
        muted={true}
        width= "130rem"
        height= "130rem"
      />
      <OverlayContent>
        <LogoImage src="https://i.ibb.co/W2pzPgy/avalon-logo.png" alt="avalon-logo" />
        <CustomFont>TechFest</CustomFont>
        <CustomFont2>Where talent meets opportunity in the realm of technology.</CustomFont2>
        <p></p>
        <SciFiButton type="button" onClick={handleButtonClick}>Join Avalon</SciFiButton>
      </OverlayContent>
    </HeroContainer>
  );
};

export default Hero;
