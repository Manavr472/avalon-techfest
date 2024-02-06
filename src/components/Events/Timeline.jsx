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

      className={`bg-blue-500 p-4 rounded-xl md:w-1/2 my-4 shadow-md ${
          side === "right" ? "ml-auto" : ""
      }`}
      >
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="leading-tight text-justify">{description}</p>
    </motion.div>
    </div>
  );
};

const VerticalTimelineH = () => {


  return (
    <div className="w-full bg-gradient-to-bl from-violet-950 via-black to-blue-900 relative min-h-screen">
      <div className=""></div>
      <div className=" text-center text-6xl h-1/4">
        Timeline
      </div>
      <div className="flex flex-col overflow-hidden h-full w-full md:w-[95%] md:grid grid-cols-1 mx-auto p-2 text-blue-50">
        {/* Add Timeline Events */}
        <TimelineEvent  
          side="left"
          title="Event 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?"
        />
        <TimelineEvent
          side="right"
          title="Event 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis."
        />
        <TimelineEvent
          side="left"
          title="Event 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?"
        />
        <TimelineEvent
          side="right"
          title="Event 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis."
        />
        <TimelineEvent
          side="left"
          title="Event 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?"
        />
        <TimelineEvent
          side="right"
          title="Event 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis."
        />
        <TimelineEvent
          side="left"
          title="Event 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?"
        />
        <TimelineEvent
          side="right"
          title="Event 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis."
        />
        <TimelineEvent
          side="left"
          title="Event 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?"
        />
        <TimelineEvent
          side="right"
          title="Event 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis."
        />
        {/* Add more events as needed */}
      </div>
    </div>
  );
};

export default VerticalTimelineH;
