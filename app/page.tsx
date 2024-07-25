"use client";
import CircuitBg from "@/components/CircuitBg";
import Hero from "@/components/Hero";
import ImgCarousel from "@/components/ImgCarousel";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Roadmap from "@/components/Roadmap";
import { imgCars, navItems } from "@/data";
import { Circle } from "@react-three/drei";

export default function Home() {
  // const [hovered, setHovered] = React.useState(true);
  return (
    <>
      <main className="max-w-[1920px] w-full h-full overflow-hidden relative bg-white flex flex-col justify-center items-center lg:px-10 px-2 mx-auto z-2">
        <CircuitBg />
        <div className="w-[700px] h-[1500px] lg:w-[2200px] lg:h-[2200px] absolute top-[530px] lg:-top-[200px]">
          <img
            src="/circle.png"
            alt="/circle.png"
            className=" object-cover object-center"
          />
        </div>
        <div className="max-w-6xl w-full h-full z-10 overflow-hidden">
          <Navbar navItems={navItems} />
          <Circle />
          <Hero />
          <ImgCarousel Items={imgCars} />
          {/* <Grid /> */}
        </div>
        <Roadmap />
        <Project />
        {/* <div className="h-[2000vh] w-full"></div> */}
      </main>
    </>
  );
}
