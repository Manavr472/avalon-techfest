import React from "react";
import Waveytext from "./WaveyText";
import WordZoomer from "./Zoomer";
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Container = styled.div`
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

const OverlayContent = styled.div`
  position: absolute;
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

export default function About() {

    return (
       <Container>
        <Video
        url="https://pouch.jumpshare.com/preview/SYxqr9ygvLn4-JXkW-BPvfXf2KgGB55e9MEtf_-6B9_F9LAF7ST_2_axHCanR_rWblTIG-HCA_GbXq3y_CUvv9tF8zJDk61fhdeOg4Xqrm0ShGZBsiv77LQPLbAV7eHgKP892PDMU7sbYh5QL5otgKN_fIMI2zJarj0avEcXWfs.mp4"
        playing={true}
        loop={true}
        controls={false}
        muted={true}
        width= "100rem"
        height= "100rem"
        />
        <OverlayContent>  
        <section class="flex flex-col font-Anton tracking-wider justify-center items-center mx-auto px-8 py-8 lg:py-40">
            <WordZoomer text="ABOUT AVALON"/>
            <p className=" p-10 md:p-20 md:mt-[5%] font-Impact leading-relaxed md:leading-[3rem] text-center font-thin tracking-wide md:text-3xl" >AVALON is the Annual Technical Festival (TechFest) of Terna Engineering College (TEC) that provides a platform for technical aspirants from reputed Institutes and organizations across the nation to showcase their technical knowledge and ideas on a huge platform best suited for them. AVALON Has been organizing such events for the past 14 years now and continues to maintain its legacy. The festival manifests the conglomeration of talent, intellect, innovation and competitive spirit of the students.</p>
        </section>
        </OverlayContent>
        </Container>
    );
}
