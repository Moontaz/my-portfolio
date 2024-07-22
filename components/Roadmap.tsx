import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/TracingBeam";
import Milestone from "./ui/Milestone";
import { milestoneItems } from "@/data";

const Roadmap = () => {
  return (
    <>
      <div className="absolute top-[626px] w-full  h-[1600px] mt-3 bg-[#ffffff] shadow-[0_-1px_50px_10px_rgba(0,0,0,0.25)]">
        <TracingBeam className="mt-28">
          <div className="max-w-lg h-[1500px] mr-auto antialiased pt-4 relative">
            <div className="flex flex-col gap-3 items-left">
              <span className="text-xs">Sparkle Components</span>
              <span className="font-bold text-3xl">
                Pixel-perfect UIs,
                <br /> embedded in minutes
              </span>
              <p className="font-light text-sm">
                Simply add <span className="font-semibold">{text}</span>
                <br /> for complete user management functionality. Match to your
                brand with any
                <br /> CSS library, then deploy to your own domain — no more
                jarring redirects!
              </p>
            </div>
            {/* <div className="w-fit h-full mx-auto items-center justify-center">
              <Milestone Items={milestoneItems} />
            </div> */}
          </div>
          <div className="">
            <div className="absolute top-0 left-[40rem] h-full w-full border-lg border-red-500 border-dotted">
              <img
                className="absolute object-center shadow-[0_-1px_10px_2px] rounded shadow-gray-300"
                src="/roadmap/image1.png"
              />
            </div>
            <div className="absolute top-[22rem] right-[10rem] h-full w-full border-lg border-red-500 border-dotted">
              <img
                className=" absolute object-center shadow-[0_-1px_10px_2px] rounded shadow-gray-300"
                src="/roadmap/image8.png"
              />
            </div>
            <div className="absolute top-[17rem] left-[8rem] h-full w-full border-lg border-red-500 border-dotted">
              <img
                className=" absolute object-center shadow-[0_-1px_10px_2px] rounded shadow-gray-300"
                src="/roadmap/image4.png"
              />
            </div>
            <div className="absolute top-[60rem] left-[8rem] h-full w-full border-lg border-red-500 border-dotted">
              <img
                className=" absolute object-center shadow-[0_-1px_10px_2px] rounded shadow-gray-300"
                src="/roadmap/image5.png"
              />
            </div>
            <div className="absolute top-[50rem] left-[40rem] h-full w-full border-lg border-red-500 border-dotted">
              <img
                className="absolute object-center shadow-[0_-1px_10px_2px] rounded shadow-gray-300"
                src="/roadmap/image7.png"
              />
            </div>
          </div>
        </TracingBeam>
      </div>
    </>
  );
};

export default Roadmap;

const text = "<SignIn />, <SignUp />, <UserButton />, <UserProfile />";
const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
