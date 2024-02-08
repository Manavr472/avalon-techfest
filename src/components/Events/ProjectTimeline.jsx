import React, { useRef, useEffect, useState } from "react";
import { motion, useInView,  useAnimation } from "framer-motion";

const TimelineEvent = ({ side, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false,amount: 0.5 });


  
  return (
    <div className="">
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "none" : side=="left"? "translateX(-50px)" :"translateX(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}

      className={` p-4 rounded-xl text-center py-10 mx-2 md:w-[43%] xl:w-[44%] 2xl:w-[45%] shadow-md ${
          side === "right" ? "ml-auto text-white bg-gradient-to-bl from-purple-900 to-black " : " text-white bg-gradient-to-tl from-black to-fuchsia-900"
      }`}
      >
      <h3 className="font-semibold font-SquadaOne text-xl md:text-3xl mb-1">{title}</h3>
      <p className=" font-Comfortaa">{description}</p>
    </motion.div>
    </div>
  );
};

const VerticalTimelineP = () => {


  return (
    <div className="w-full  bg-gradient-to-bl from-fuchsia-900 via-black to-purple-950 relative min-h-screen">
      <div className=" text-center font-Impact my-10 text-7xl h-1/4">
        Timeline
      </div>
      <div className="flex flex-col gap-3 md:gap-5my-5 md:mt-10 md:mb-20 overflow-hidden h-full w-full md:w-[90%] md:grid grid-cols-1 mx-auto ">
        {/* Add Timeline Events */}
        
        <TimelineEvent
          side="right"
          title="Event Start"
          description="Check In by 8.30"
        />
        <TimelineEvent
          side="left"
          title="Inauguration"
          description="Briefing for partcipants 9:30"
        />
        <TimelineEvent
          side="right"
          title="Project Showcase"
          description="Connect with Mentors and pitch to Judges at 10:00"
        />
        
        <TimelineEvent
          side="left"
          title="Lunch"
          description="Have a break at 13:00"
        />
        <TimelineEvent
          side="right"
          title="Evaluation"
          description="Judge Discussion at 14:00"
        />
        <TimelineEvent
          side="left"
          title="Closing Ceremony"
          description="Prize Distribution at 15:00"
        />
      </div>
    </div>
  );
};

export default VerticalTimelineP;
