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
    <FooterWrapper className='relative'>
      <Logo src="https://i.ibb.co/W2pzPgy/avalon-logo.png" alt="Avalon Logo" />
      <div className='flex gap-5 justify-center items-center' >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52017.44601061713!2d72.97512375718512!3d19.047247545815857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3eaaa53c4e3%3A0x9459161291e7ded5!2sTerna%20Engineering%20College!5e0!3m2!1sen!2sin!4v1707135874941!5m2!1sen!2sin" width="300" height="260" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
      </div>
      <h5>© 2010-2023 Avalon Techfest. All Rights Reserved.</h5>
    </FooterWrapper>
  );
};

export default Footer;
