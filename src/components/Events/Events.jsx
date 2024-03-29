import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VerticalTimeline from "../Events/Timeline";
import Waveytext from "../WaveyText";
import PrizesH from "./PrizesH";
import PrizesD from "./PrizesD";   
import PrizesP from "./PrizesP";
import DomainH from "./DomainH";
import DomainD from "./DomainD";
import DomainP from "./DomainP";

import ShiftingCountdown from "./CountDown";
import VerticalTimelineP from "./ProjectTimeline";

const Events = () => {
  const [activeTab, setActiveTab] = useState("Hackathon");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  

  return (
    <div className="flex min-h-screen bg-black flex-col">
      
      <div id="events-section"
      className="overflow-hidden justify-center gap-10 md:gap-32 items-center flex flex-col min-h-screen "
      style={{backgroundImage: "url('https://i.ibb.co/SNKsQxk/5.png')", backgroundSize: "cover", backgroundPosition: "center", }}
      >
        
        <Waveytext text="TECHFEST EVENTS"/>
        <div className="w-[70%]"><ShiftingCountdown/></div>
        <div className=" md:flex-row font-Anton flex-col w-full flex justify-center items-center gap-20">
        <button
      
      className={`group relative  border-indigo-800 rounded-sm text-xl px-5 py-3 font-medium  transition-colors duration-[400ms] 
      ${
        activeTab === "Hackathon"
          ? " bg-blue-300 bg-opacity-30 text-white"
          : " border text-blue-200"
      }`}
      onClick={() => handleTabClick("Hackathon")}
    >
      <span>Hackathon</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
    <button
      
      className={`group relative border border-purple-800 rounded-sm text-xl px-5 py-3 font-medium  transition-colors duration-[400ms] 
      ${
        activeTab === "Project"
          ? "bg-purple-400 bg-opacity-30 text-white"
          : " text-blue-200"
      }`}
      onClick={() => handleTabClick("Project")}
    >
      <span>Project</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
    <button
      
      className={`group relative border border-teal-800 rounded-sm text-xl px-5 py-3 font-medium  transition-colors duration-[400ms] 
      ${
        activeTab === "Design"
          ? " bg-teal-400 bg-opacity-30 text-white"
          : " text-blue-200"
      }`}
      onClick={() => handleTabClick("Design")}
    >
      <span>Design</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
      </div>
      </div>
      <AnimatePresence >
        <div
          className="" >
          {activeTab === "Hackathon" && (
            <div className="flex flex-col">
                <DomainH/>
                <VerticalTimeline/>
                <PrizesH/>

            </div>
          )}
          {activeTab === "Project" && (
            <div className="flex flex-col">
                <DomainP/>
                <VerticalTimelineP/>
                <PrizesP/>
            </div>
          )}
          {activeTab === "Design" && (
            <div className="flex flex-col"> 
                <DomainD/>
                <PrizesD/>
            </div>
          )}
        </div>
      </AnimatePresence>
    </div>
    
  );
};

export default Events;
