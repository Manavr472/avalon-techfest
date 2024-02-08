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
        url="https://d96cx6ozu9qlk.cloudfront.net/n14pxi%2Ffile%2F0298163b8bae7bf41c8929617975e8d6_23234a0aea36fd503f1f9d7c89340cb9.mp4?response-content-disposition=inline%3Bfilename%3D%220298163b8bae7bf41c8929617975e8d6_23234a0aea36fd503f1f9d7c89340cb9.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1707395359&Signature=Tqpj9jXLkG7OnaASKWALVamHjgC2kn98-o0~J-H9rbipntjxsrvJwGk~cC44G~40piQQ4eZ9SnxeF~yBq9Q0HIFBLlYuDBraF3qBpeq3uWt049YnIgtBROgf6-8jyFV1HTmkEZUefMVUBk1MctzhLA4otCCh7KsLeqQdISCweAg3bET3LmXXPV367xPHpOUOQRFso49op7CAuHlarIMxlxblft1mB8nxBVX-R-Dt17yTsrk69~z85GFMVSGvFCRVo6zLTILCmHqAaJIAHOoXSfeP7s7OtFeGjQ~30ASBBB3N7LGUTplcA4sEmAMGIopGYJZ4PIqk0i3q7Q67Czlhsg__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"
        playing={true}
        loop={true}
        controls={false}
        muted={true}
        width= "105rem"
        height= "100rem"
        />
        <OverlayContent>  
        <section class="flex flex-col font-Anton tracking-wider justify-center items-center mx-auto px-8 py-8 lg:py-40">
            <WordZoomer />
            <p className=" p-7 md:p-14 mt-[10%] md:mt-0 font-Titillium font-bold leading-relaxed md:leading-[3rem] text-center tracking-wide md:text-3xl" >AVALON is the Annual Technical Festival (TechFest) of Terna Engineering College (TEC) that provides a platform for technical aspirants from reputed Institutes and organizations across the nation to showcase their technical knowledge and ideas on a huge platform best suited for them. AVALON Has been organizing such events for the past 14 years now and continues to maintain its legacy. The festival manifests the conglomeration of talent, intellect, innovation and competitive spirit of the students.</p>
        </section>
        </OverlayContent>
        </Container>
    );
}
