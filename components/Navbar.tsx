import { navItems } from "@/data";
import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";
import ModalTrigger from "./ui/ModalTrigger";
import { FaCaretRight } from "react-icons/fa6";

const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <div className="w-full flex justify-between items-center bg-white my-4 px-0 lg:px-2 overflow-hidden">
      <div className="flex items-center">
        <div className="w-[12%] h-[12%] lg:mr-5">
          <img
            src="/logo.png"
            alt="/logo.png"
            className="object-cover object-center opacity-100"
          />
        </div>
        <nav className="flex gap-2 lg:gap-8 items-center">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative font-semibold text-xs lg:text-sm lg:p-1 items-center flex space-x-1 text-black  hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              {/* add !cursor-pointer */}
              {/* remove hidden sm:block for the mobile responsive */}
              <span className="!cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      {/* remove this login btn */}
      <ModalTrigger text="Get Started" icon={<FaCaretRight />} />
    </div>
  );
};
export default Navbar;
