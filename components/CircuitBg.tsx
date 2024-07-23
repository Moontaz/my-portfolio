import React from "react";

const CircuitBg = () => {
  return (
    <>
      <div className="max-w-[1920px] absolute flex justify-between left-auto top-60 lg:top-16">
        <div className="absolute h-full w-[35%] bg-gradient-to-r from-white to-transparent"></div>
        <div className="w-[50%] h-[50%] left-0 top-16">
          <img
            src="/circuit.svg"
            alt="/circuit.svg"
            className="object-cover object-center opacity-100 "
          />
        </div>
        <div className="w-[50%] h-[50%] right-0 top-16 scale-x-[-1]">
          <img
            src="/circuit.svg"
            alt="/circuit.svg"
            className="object-cover object-center opacity-100"
          />
        </div>
        <div className="absolute h-full w-[35%] right-0 bg-gradient-to-r from-transparent to-white"></div>
        <div className="absolute h-[50%] w-[150%] -bottom-10 -left-10 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </>
  );
};

export default CircuitBg;
