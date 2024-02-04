import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const EventTab = ({ direction, title, description }) => {
  const controls = useAnimation();

  const handleInView = (inView) => {
    controls.start({
      x: inView ? 0 : (direction === 'left' ? -200 : 200),
      opacity: inView ? 1 : 0,
      transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 },
    });
  };

  return (
    <div className='flex '>
    <motion.div
      className={`flex ${direction === 'left' ? 'flex-row-reverse' : ''} md:contents`}
      animate={controls}
      onViewportEnter={() => handleInView(true)}
      onViewportLeave={() => handleInView(false)}
    >
      <div className={`bg-blue-500 col-start-${direction === 'left' ? '1' : '6'} col-end-${direction === 'left' ? '5' : '10'} p-4 rounded-xl my-4 ${direction === 'left' ? 'ml-auto' : 'mr-auto'} shadow-md`}>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="leading-tight text-justify">{description}</p>
      </div>
      <div className={`col-start-${direction === 'left' ? '5' : '6'} col-end-${direction === 'left' ? '6' : '11'} md:mx-auto relative ${direction === 'left' ? 'mr-10' : 'ml-10'}`}>
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
      </div>
    </motion.div>
    </div>
  );
};

const Timeline = () => {
  return (
    <>
      <EventTab direction="left" title="Event 1" description="Description for Event 1" />
      <EventTab direction="right" title="Event 2" description="Description for Event 2" />
      <EventTab direction="left" title="Event 3" description="Description for Event 3" />
      {/* Add more EventTabs as needed */}
    </>
  );
};

export default Timeline;
