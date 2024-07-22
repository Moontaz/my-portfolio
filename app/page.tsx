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
      <main className="max-w-[1920px] h-full relative bg-white flex justify-center items-center flex-col mx-auto sm:px-10 px-5 z-2">
        <CircuitBg />
        <div className="w-[2200px] h-[2200px] absolute -top-[200px]">
          <img
            src="/circle.png"
            alt="/circle.png"
            className=" object-cover object-center"
          />
        </div>
        <div className="max-w-6xl w-full h-full z-10">
          <Navbar navItems={navItems} />
          <Circle />
          <Hero />
          <ImgCarousel Items={imgCars} />
          {/* <Grid /> */}
        </div>
        <Roadmap />
        <Project />
      </main>
    </>
  );
}
