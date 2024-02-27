"use client"
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import ToolTip from "./ToolTip";
const Instructors = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden ">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center ">
          Meet Our Instructors
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Leverage the power of canvas to create a beautiful hero section
        </p>
        <ToolTip />
      </WavyBackground>
    </div>
  );
};

export default Instructors;
