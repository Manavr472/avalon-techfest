import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import './fonts.css';

const SectionContainer = styled.div`
  position: relative;
  height: 100vh; /* Adjust the height as needed */
  background-image: url('https://i.ibb.co/x6F4QgY/glow-lines-alt.webp');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  z-index: -1;

  @media (max-width: 768px) {
    height: 80vh; /* Show one card per row */
  }
`;

const CustomFont = styled.div`
  font-family: 'Ethnocentric';
  font-size: 3rem;
  color: #48D1CC;
  margin-top: 30px;
  z-index: 2; /* Ensure the content is above the overlay */

  @media (max-width: 768px) {
    font-size: 2rem; /* Show one card per row */
  }
`;

const CustomFont1 = styled.div`
  font-family: 'Ethnocentric';
  font-size: 2.15rem;
  color: white;
  z-index: 2; /* Ensure the content is above the overlay */
`;

const CustomFont2 = styled.div`
  font-family: 'Neoterique';
  font-size: 1.25rem;
  color: #48D1CC;
  z-index: 2; /* Ensure the content is above the overlay */
`;


const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); /* Adjust opacity as needed */
`;

const OverlayContent = styled.div`
  position: absolute;
  justify-content: center;
  text-align: center;
  z-index: 2; /* Ensure the content is above the overlay */
  width: 100%; /* Ensure the content spans the entire width */
  box-sizing: border-box; /* Include padding and border in the width calculation */
  padding: 20px; /* Adjust the padding as needed */
`;

const CarouselContainer = styled.div`
  position: absolute;
  margin-top:10px;
  z-index: 3; /* Ensure the carousel is above the overlay and background */
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  margin:0px 10px;
  background-color: rgb(0,0,0,0);
  width: auto;
  height: 600px; /* Set a fixed height for the cards */

  @media (max-width: 768px) {
    height: 400px; /* Show one card per row */
  }

  img {
    width: auto;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the entire card without distortion */
    border-radius: 12px;
  }
`;

const ContinuousCarousel = () => {

        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 4000,
            autoplaySpeed: 4000,
            arrows: false,
            cssEase: "linear",
            pauseOnHover: true,
            variableWidth: true,

            responsive: [
              {
                breakpoint: 768, // Adjust breakpoint as needed
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480, // Adjust breakpoint as needed
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              // Add more breakpoints if needed
            ],
        };

        return (
            <CarouselContainer>
            <Slider {...settings}>
                    <Card>
                    <img src="https://i.ibb.co/Xj29dhx/image-6.jpg" alt="image-6" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/gSYfzTf/image-16.jpg" alt="image-16" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/CsHzffb/image-30.jpg" alt="image-30" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/vJr33SQ/image-32.jpg" alt="image-32" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/9gQpmFp/image-27.jpg" alt="image-27" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/qszgW2k/image-28.jpg" alt="image-28" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/3MVfsWd/image-26.jpg" alt="image-26" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/tLnR3jT/image-25.jpg" alt="image-25" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/G7Y7VwR/image-23.jpg" alt="image-23" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/mBvNLp0/image-24.jpg" alt="image-24" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/JFG7jDs/image-20.jpg" alt="image-20" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/MBNrbbr/image-21.jpg" alt="image-21" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/LJWBqfP/image-22.jpg" alt="image-22" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/ZYMkGjH/image-17.jpg" alt="image-17" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/nrh2FNG/image-18.jpg" alt="image-18" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/PhjDNvz/image-19.jpg" alt="image-19" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/LzLgSS1/image-15.jpg" alt="image-15" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/7QTWBK4/image-14.jpg" alt="image-14" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/mvRRL92/image-13.jpg" alt="image-13" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/mRJX0Kk/image-12.jpg" alt="image-12" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/6tq8KfS/image-9.jpg" alt="image-9" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/x19vQC4/image-7.jpg" alt="image-7" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/0DSqBKj/image-1.jpg" alt="image-1" border="0"/>
                    </Card>

                    <Card>
                    <img src="https://i.ibb.co/HThn5zT/image-5.jpg" alt="image-5" border="0"/>
                    </Card>
            </Slider>
            </CarouselContainer>
        );
}

const BackgroundCarouselSection = () => {
    return (
      <SectionContainer>
        <Overlay />
        <OverlayContent>
          <CustomFont>A glimpse into Avalon 2023</CustomFont>
          <h1></h1>
          <ContinuousCarousel />
        </OverlayContent>
      </SectionContainer>
    );
  };
  
  export default BackgroundCarouselSection;
