import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
          side === "right" ? "ml-auto text-white bg-gradient-to-bl from-cyan-400  to-black" : " text-white bg-gradient-to-tl from-black to-cyan-400"
      }`}
      >
      <h3 className="font-semibold font-SquadaOne text-xl md:text-3xl mb-1">{title}</h3>
      <p className="font-Comfortaa">{description}</p>
    </motion.div>
    </div>
  );
};

const VerticalTimelineH = () => {


  return (
    <div className="w-full bg-gradient-to-bl from-blue-950 via-black to-purple-950 relative min-h-screen">
      
      <div className=" text-center font-Impact my-10 text-5xl md:text-7xl h-1/4">
        Timeline
      </div>
      <div className="flex flex-col gap-4 my-10 overflow-hidden h-full w-full md:w-[90%] md:grid grid-cols-1 mx-auto ">
        {/* Add Timeline Events */}
        
        <TimelineEvent
          side="right"
          title="Event Start"
          description="Check In by 8.30"
        />
        <TimelineEvent
          side="left"
          title="Inauguration"
          description="Briefing for partcipants 10:00-11:00"
        />
        <TimelineEvent
          side="right"
          title="Problem Statement"
          description="Problem Statement discussion 11:30-12:00"
        />
        <TimelineEvent
          side="left"
          title="Hackathon start"
          description="Let the Coding Begin! 12:00"
        />
        <TimelineEvent
          side="right"
          title="Guidance"
          description="13:00-13:30"
        />
        <TimelineEvent
          side="left"
          title="Lunch"
          description="14:00-15:00"
        />
        <TimelineEvent
          side="right"
          title="Panel Discussion"
          description="16:00"
        />
        <TimelineEvent
          side="left"
          title="Keep on Working"
          description="Relax and Code"
        />
        <TimelineEvent
          side="right"
          title="Tea Time"
          description="18:00"
        />
        <TimelineEvent
          side="left"
          title="Dinner"
          description="Take a break at 21:00"
        />
       <p className="text-center md:hidden text-xl md:text-5xl">Day-2 Starts!!</p>
        <TimelineEvent
          side="right"
          title="Connect"
          description=" 00:00 starts with Interaction Session"
        />
        <TimelineEvent
          side="left"
          title="All-Nighter"
          description="Code all Night with occasional Breaks"
        />
        <TimelineEvent
          side="right"
          title="Breakfast"
          description="Take a final break at 10:00"
        />
        <TimelineEvent
          side="left"
          title="Deadline"
          description="Hackathon Ends at 12:00"
        />
        <TimelineEvent
          side="right"
          title="Judging and pitching"
          description="12:30"
        />
        <TimelineEvent
          side="left"
          title="Closing Ceremony"
          description="Prize Distribution and Felicitation 14:30"
        />
        
        {/* Add more events as needed */}
      </div>
    </div>
  );
};

export default VerticalTimelineH;
