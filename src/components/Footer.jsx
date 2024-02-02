import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.div`
  background-color: #000;
  background-size: cover;
  background-position: center; /* Stretch image twice the height */
  background-repeat: no-repeat;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;

  @media (max-width: 768px) {
    height: auto; /* Show one card per row */
  }
`;



const Logo = styled.img`
  width: 200px; /* Set the width of your logo */
  margin: 0 auto 20px; /* Center the logo */
`;

const SocialIcons = styled.div`
  margin-top: 0px;
`;

const SocialIconLink = styled.a`
  margin: 0 10px;
  color: white;
  font-size: 40px; /* Adjust the font size as needed */
  text-decoration: none;

  &:hover {
    color: #48D1CC; /* Change color on hover */
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo src="https://i.ibb.co/W2pzPgy/avalon-logo.png" alt="Avalon Logo" />
      <SocialIcons>
        <SocialIconLink href="https://chat.whatsapp.com/CFI63lUUezf14IBMYrW2El" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </SocialIconLink>
        <SocialIconLink href="https://www.instagram.com/avalonterna2024/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIconLink>
        <SocialIconLink href="https://www.youtube.com/@avalontechfest8898" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </SocialIconLink>
      </SocialIcons>
      <h5>© 2010-2023 Avalon Techfest. All Rights Reserved.</h5>
    </FooterWrapper>
  );
};

export default Footer;
