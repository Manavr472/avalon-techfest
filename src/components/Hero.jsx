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
  justify-content:center;
  align-items:center ; 
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

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);   

  return (
    <HeroContainer id='hero-section' >
      <Video
        url="https://d1xviafewcoylr.cloudfront.net/m27oxi%2Ffile%2Fff0094e99a0294dc14083b24f2fe73bf_f3f8d8d51cc8de33e864ea265a7cc94e.mp4?response-content-disposition=inline%3Bfilename%3D%22ff0094e99a0294dc14083b24f2fe73bf_f3f8d8d51cc8de33e864ea265a7cc94e.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1707395121&Signature=EJ~zJzMbwOwkqxx8EC34YwzU7DTbf-HW8xJu18f-lwdmJbpmH0~FazHJdv6Hws3v8~0s30DZQdBl8VLscL0xhOC-~Ito1owi5jANQKPrVfqDbB407vzTXIDDxqDIa6EnQAQwKMRSr6Vg0QDCcFzaaILz60zKfFGlfo~RjDMEf6RydoJpcBFVfet0JZuED6SE18Ong5ChUL2WsmmsP~EW9d~UdNOYFrQHluAzrPAJ3zQ2ning1LyT~9~B3fpPp4sOKB4SXdGptL2lML1QEfr6z4616V4oCJzq9vQ1GzuBcv7oj8Mvbk6RQNHSH3K7NQCp7XuS~KvtXBTaPm83nHotPA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"
        playing={true}
        loop={true}
        controls={false}
        muted={true}
        width="105rem"
        height="100rem"
      />

      
      <OverlayContent>
      <div className='flex flex-col justify-center items-center'>
        <LogoImage src="https://i.ibb.co/W2pzPgy/avalon-logo.png" alt="avalon-logo" />
        <CustomFont>TechFest</CustomFont>
        <CustomFont2>Where talent meets opportunity in the realm of technology.</CustomFont2>
                        <div 
                  class="apply-button" 
                  data-hackathon-slug="innov8" 
                  data-button-theme="light"
                  className='h-20 hover:scale-[1.01] active:scale-95 w-96'
                ></div>


      
            </div>
      </OverlayContent>
    </HeroContainer>
  );
};

export default Hero;
