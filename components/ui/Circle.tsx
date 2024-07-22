import React from "react";

const Circle = () => {
  return (
    <div className="max-w-[1920px] absolute">
      <svg
        viewBox="-1000 0 3504 918"
        aria-hidden="true"
        className="absolute -top-6 left-1/2 z-20 ml-[calc(-3504/2/16*1rem)] w-[calc(3504/16*1rem)] mix-blend-color-burn"
      >
        <path fill="url(#hero-gradient)" d="M3504 918H-1000V0h3504v918Z"></path>
        <defs>
          <radialGradient
            id="hero-gradient"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(0 707.279 -1739.2 0 741 159.991)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6C47FF" stop-opacity="0.6"></stop>
            <stop offset=".412" stop-color="#FFF963" stop-opacity=".8"></stop>
            <stop offset=".623" stop-color="#38DAFD" stop-opacity=".6"></stop>
            <stop offset=".919" stop-color="#6248F6" stop-opacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Circle;
