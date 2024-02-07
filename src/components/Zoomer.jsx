import { motion, useInView } from "framer-motion";
import React,{useRef} from "react";

export default function WordZoomer({ text }) {
    const ref = useRef(null);
    const isInView = useInView(ref);


    return (
        <div ref={ref}>
            {isInView && (
                <motion.div
                    className=" text-4xl md:text-7xl shadow text-[#ff5400] "
                    animate={{ scale: [1, 1.3] }}
                    transition={{ duration: 3 }}
                >
                    {text}
                </motion.div>
            )}
        </div>
    );
}