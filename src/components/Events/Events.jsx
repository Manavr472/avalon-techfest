import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timeline from "../Timeline";

const Events = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  

  return (
    <div className="bg-white flex flex-col justify-center items-center min-h-screen">
      <div className="mb-32 overflow-hidden h-full bg-cyan-500">
        <button
          className={`inline-block absolute left-20 p-4 rounded-full mx-4 ${
            activeTab === "profile"
              ? "bg-blue-500 text-white"
              : "bg-cyan text-gray-800"
          }`}
          onClick={() => handleTabClick("profile")}
        >
          Profile
        </button>
        <button
          className={`inline-block absolute right-20 p-4 rounded-full mx-4 ${
            activeTab === "dashboard"
              ? "bg-blue-500 text-white"
              : "bg-cyan text-gray-800"
          }`}
          onClick={() => handleTabClick("dashboard")}
        >
          Dashboard
        </button>
      </div>
      <AnimatePresence >
        <div
          className="p-8 rounded-lg bg-gray-50 dark:bg-gray-800 w-full mt-4"
        >
          {activeTab === "profile" && (
            <div className="flex flex-col">
                <Timeline/>
            </div>
          )}
          {activeTab === "dashboard" && (
            <div className="flex flex-col">
                <Timeline/>
            </div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Events;
