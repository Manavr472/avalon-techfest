import React, { useEffect, useRef } from 'react';
import { motion,useInView, useAnimation } from 'framer-motion';

const Timeline = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {amount: 0.4});

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: '-100%' });
    }
  }, [isInView]);

  return (
    <div className="bg-white h-screen">
    <motion.div
      ref={ref}
      className="w-64 mb-8 p-4 text-white bg-gray-200 rounded-lg text-center"
      initial={{ opacity: 0, x: '-100%' }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {/* Content for the div */}
      <h3 className="font-bold text-xl">Your Event</h3>
      <p className="text-gray-600">Event Time</p>
    </motion.div>
    </div>
  );
};

export default Timeline;
