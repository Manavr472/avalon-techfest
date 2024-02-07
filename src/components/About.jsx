import React from "react";

export default function About() {

    return (
       <div className="flex flex-col text-white p-1  h-screen"
       style={{backgroundImage: "url('../About.png')", backgroundSize: "cover", backgroundPosition: "center", }}

       >
<section class="flex flex-col font-SquadaOne justify-center items-center mx-auto px-8 py-8 lg:py-40">
  <h2 class="block antialiased tracking-normal text-4xl font-semibold leading-[1.3] lg:text-7xl">About Avalon!</h2>
    <p className=" p-10 md:p-20 font-serif md:text-2xl" >AVALON is the Annual Technical Festival (TechFest) of Terna Engineering College (TEC) that provides a platform for technical aspirants from reputed Institutes and organizations across the nation to showcase their technical knowledge and ideas on a huge platform best suited for them. AVALON Has been organizing such events for the past 14 years now and continues to maintain its legacy. The festival manifests the conglomeration of talent, intellect, innovation and competitive spirit of the students.</p>
</section>
</div>
    );
}
