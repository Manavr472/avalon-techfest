import React from "react";
import Waveytext from "./WaveyText";
import WordZoomer from "./Zoomer";

export default function About() {

    return (
       <div className="flex flex-col text-white p-1  h-screen"
       style={{backgroundImage: "url('../About.png')", backgroundSize: "cover", backgroundPosition: "center", }}

       >
<section class="flex flex-col font-Anton tracking-wider justify-center items-center mx-auto px-8 py-8 lg:py-40">
      <WordZoomer text="ABOUT AVALON"/>
    <p className=" p-10 md:p-20 font-Impact leading-relaxed md:leading-[3rem] text-center font-thin tracking-wide md:text-3xl" >AVALON is the Annual Technical Festival (TechFest) of Terna Engineering College (TEC) that provides a platform for technical aspirants from reputed Institutes and organizations across the nation to showcase their technical knowledge and ideas on a huge platform best suited for them. AVALON Has been organizing such events for the past 14 years now and continues to maintain its legacy. The festival manifests the conglomeration of talent, intellect, innovation and competitive spirit of the students.</p>
</section>
</div>
    );
}
