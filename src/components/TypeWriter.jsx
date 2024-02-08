import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

    export default function TypeWriter(text) {
        
        const [typedText, setTypedText] = useState("");
        const controls = useAnimation();

        useEffect(() => {
            const delay = 100; // Adjust the delay between each letter
            const timeoutIds = [];

            for (let i = 0; i < text.length; i++) {
                const timeoutId = setTimeout(() => {
                    setTypedText((prevText) => prevText + text[i]);
                }, i * delay);
                timeoutIds.push(timeoutId);
            }

            setTimeout(() => {
                controls.start({ opacity: 1 });
            }, text.length * delay);

            return () => {
                timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
            };
        }, []);

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 1 }}
            >
                {typedText}
            </motion.div>
        );
    
}