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
                    animate={{ scale: [1, 1.4] }}
                    transition={{ duration: 3 }}
                >
                   <img src="../icons/about avalon.png" className=" w-60 md:w-96" alt="About Avalon" />
                </motion.div>
            )}
        </div>
    );
}