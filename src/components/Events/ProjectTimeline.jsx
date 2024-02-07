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

      className={` p-4 rounded-xl text-center  md:w-[43%] xl:w-[44%] 2xl:w-[45%] shadow-md ${
          side === "right" ? "ml-auto text-violet-950 bg-gradient-to-bl from-yellow-400 to-orange-500" : " text-yellow-300 bg-gradient-to-br from-indigo-400 to-violet-600"
      }`}
      >
      <h3 className="font-bold font-Anton text-lg mb-1">{title}</h3>
      <p className=" font-serif">{description}</p>
    </motion.div>
    </div>
  );
};

const VerticalTimelineP = () => {


  return (
    <div className="w-full  bg-gradient-to-bl from-violet-950 via-black to-blue-900 relative min-h-screen">
      <div className=" text-center text-6xl h-1/4">
        Timeline
      </div>
      <div className="flex flex-col gap-3 md:gap-5 xl:gap-9 2xl:gap-10 my-5 md:mt-10 md:mb-20 overflow-hidden h-full w-full md:w-[90%] md:grid grid-cols-1 mx-auto ">
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
