import React from "react";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent,  useScroll } from "framer-motion";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  const handleClickScroll = (idName) => {
    console.log(idName);
    const element = document.getElementById(idName);
    setNavbarOpen(!navbarOpen);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

 const {scrollY} = useScroll();
 const [hidden, setHidden] = useState(false); 
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    }
    );

return (
    <>
   
    <motion.nav 
    variants={
        {
            hidden: {
                y: -100,
                opacity: 0,
            },
            visible: {
                y: 0,
                opacity: 1,
            },
        }
    }
    animate = {hidden ? "hidden" : "visible"}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="flex flex-col min-h-8 md:p-5 md:flex-row text-lg font-SatoshiRegular fixed top-0 transition-all bg-black  bg-opacity-10 z-50 backdrop-filter backdrop-blur-sm rounded-xl text-white w-full

    }">
        <div className="container max-w-[97vw] transition-all delay-75 duration-75 px-4 mx-auto flex md:flex-row flex-col items-center md:justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-bold  inline-block mr-4 py-2"
              href=""
            ><img src="" alt="Avalon" />
            </a>
            <motion.button
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
  className="text-white cursor-pointer text-xl transition-all delay-75 duration-150 leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
  type="button"
  onClick={() => setNavbarOpen(!navbarOpen)}
>
  {navbarOpen ? (
    // Close icon SVG
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    // Hamburger icon SVG
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  )}
</motion.button>

          </div>
          <div
            className={
              "lg:flex flex-grow w-full justify-evenly gap-20 transition-all delay-75 duration-150 items-center" +
              (navbarOpen ? "flex flex-col" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex md:justify-center items-center md:items-end md:mr-20 flex-col w-full md:flex-row transition-all delay-75 duration-150 list-none ">
              <li className="nav-item">
                <button
                onClick={() => handleClickScroll('hero-section')}
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white transition-all duration-150 hover:text-cyan-300 "
                
                >
                 <span className="ml-2">Home</span>
                </button>
              </li>
              
              <li className="nav-item">
                <button
                onClick={() => handleClickScroll('events-section')}
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white transition-all duration-150 hover:text-cyan-300"
                
                >
                  <span className="ml-2">Events</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                onClick={() => handleClickScroll('glimpse-section')}
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white transition-all duration-150 hover:text-cyan-300"
                  
                >
                  <span className="ml-2">Glimpse!</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}