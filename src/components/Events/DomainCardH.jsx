import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const DomainCard = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 place-items-center md:grid-cols-4 w-full px-4 py-12 text-slate-900">
      <TiltCard bgColor="#67f9fa" title="WEB OR APP DEVELOPMENT" content="Craft mobile/web apps delving into the Quantum Realm, offering immersive experiences." />
      <TiltCard bgColor="#fce670" title="AI & ML" content="Employ cutting-edge AI and ML technologies to pioneer a new era of exploration and understanding within the Quantum Realm." />
      <TiltCard bgColor="#f76969" title="WEB 3.0" content="Explore the potential of Blockchain technology to propel the Quantum Realm into its next frontier of innovation and understanding." />
      <TiltCard bgColor="#be67eb" title="AR/VR" content="Immerse yourself in the world of the Quantum Realm by creating AR/VR experiences that unveil its mysteries in unprecedented ways." />
    </div>
  );
};




const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ bgColor, title, content }) => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: bgColor,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className={`relative h-96 w-72 rounded-xl shadow-lg`}
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-xl bg-white bg-opacity-80 shadow-lg"
      >
        <div className="h-full w-full  flex flex-col">
          <h2 className="text-lg text-center font-mono my-auto font-bold">{title}</h2>
          <p className="text-base px-3 font-serif text-center py-5 h-[60%]">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default DomainCard ;
