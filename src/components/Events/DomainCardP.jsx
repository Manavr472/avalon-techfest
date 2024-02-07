import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const DomainCardP = () => {
    return (
      <div className="grid grid-cols-1 gap-y-10 place-items-center md:grid-cols-3 w-full px-4 py-10 text-slate-900">
        <TiltCard
          bgColor="#67b0fa"
          title="Software Projects"
          content="Participants in this domain will present innovative software solutions designed to address real-world challenges and drive digital transformation. "
        />
        <TiltCard
          bgColor="#fab267"
          title="Electrical and Electronics & Telecommunication Projects"
          content="This domain focuses on projects leveraging cutting-edge technology in electrical engineering, electronics, and telecommunication to revolutionise communication systems and electronic devices. "
        />
        <TiltCard
          bgColor="#67fab2"
          title="Civil, Mechanical, Mechatronics, and Aerospace Projects"
          content="In this domain, participants will showcase projects that push the boundaries of civil, mechanical, mechatronics, and aerospace engineering. "
        />
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
  
  export default DomainCardP ;
  