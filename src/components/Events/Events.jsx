import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VerticalTimeline from "../Events/Timeline";
import DomainH from "./DomainH";
import ShiftingCountdown from "./CountDown";

const Events = () => {
  const [activeTab, setActiveTab] = useState("Hackathon");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  

  return (
    <div className="flex min-h-screen bg-black flex-col">
      
      <div className="overflow-hidden justify-center gap-10 md:gap-32 items-center flex flex-col min-h-screen ">
        <p className="text-8xl text-center p-10 ">Techfest Events</p>
        <div className="w-[70%]"><ShiftingCountdown/></div>
        <div className=" md:flex-row flex-col w-full flex justify-center items-center gap-20">
        <button
          className={`inline-block p-4  mx-4 ${
            activeTab === "Hackathon"
              ? "bg-blue-500 underline text-white"
              : "bg-cyan text-yellow-500"
          }`}
          onClick={() => handleTabClick("Hackathon")}
        >
          Innova 2.0
        </button>
        <button
          className={`inline-block p-4  mx-4 ${
            activeTab === "Project"
              ? "bg-blue-500 underline text-white"
              : "text-yellow-500"
          }`}
          onClick={() => handleTabClick("Project")}
        >
          Project
        </button>
        <button
          className={`inline-block p-4 mx-4 ${
            activeTab === "Design"
              ? "bg-blue-500 underline text-white"
              : "bg-cyan text-yellow-500"
          }`}
          onClick={() => handleTabClick("Design")}
        >
          Design
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

            </div>
          )}
          {activeTab === "Project" && (
            <div className="flex flex-col">
                <VerticalTimeline/>
            </div>
          )}
          {activeTab === "Design" && (
            <div className="flex flex-col">
            </div>
          )}
        </div>
      </AnimatePresence>
    </div>
    
  );
};

export default Events;
