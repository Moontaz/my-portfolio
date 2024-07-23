"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  // const [hovered, setHovered] = React.useState(true);
  return (
    <>
      <div className="flex flex-col lg:flex-row overflow-hidden items-center justify-center w-full gap-4 mt-[15rem] lg:mt-[10rem] mx-auto px-8 relative">
        <div className="flex flex-col items-center gap-3 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] z-10">
          <p className="uppercase tracking-widest text-xs text-center text-black max-w-80 z-10 -mb-4">
            Dynamic Web Magic with Next.js
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl z-10 "
          />
          <p className="text-center text-black md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl z-10">
            Hi! I&apos;m Mumtaz, a React Developer based in Indonesia.
          </p>
          <a className="px-8 py-2 cursor-pointer border border-black bg-transparent text-white  dark:border-white relative group transition duration-200">
            <div className="absolute flex flex-col -bottom-2 -right-2 bg-gray-900 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <div className="flex">
              <span className="relative inline-flex font-light items-center gap-1">
                Show my work
              </span>
              <div className="ml-1 p-1  rounded-sm  text-center relative overflow-hidden">
                <div className="group-hover:translate-x-5 group-hover:-translate-y-5 text-center text-white opacity-75 transition duration-150">
                  <FaLocationArrow />
                </div>
                <div className="-translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 flex items-center justify-center absolute inset-0 transition duration-150 text-white z-20">
                  <FaLocationArrow />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
