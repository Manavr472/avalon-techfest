import { motion, useInView } from "framer-motion";
import React,{useRef} from "react";

export default function WordZoomer() {
    const ref = useRef(null);
    const isInView = useInView(ref);


    return (
        <div ref={ref}>
            {isInView && (
                <motion.div
                    className=" shadow"
                    animate={{ scale: [1, 1.55] }}
                    transition={{ duration: 3.2, ease: "easeInOut" }}
                >
                   <img src="../icons/about avalon.png" className=" w-60 md:w-[380px]" alt="About Avalon" />
                </motion.div>
            )}
        </div>
    );
}