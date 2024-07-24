import { navItems } from "@/data";
import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";
import ModalTrigger from "./ui/ModalTrigger";
import { FaCaretRight, FaGripLines } from "react-icons/fa6";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

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
    <Disclosure
      as="nav"
      className="w-full justify-between items-center bg-white shadow-xl sm:shadow-none my-4 px-0 lg:px-2 overflow-hidden"
    >
      <div className=" w-full max-w-7xl px-5 sm:px-6 lg:px-8 shadow-md sm:shadow-none">
        <div className="relative flex gap-10 h-16 sm:h-12 items-center justify-between">
          <div className="flex items-center">
            <div className="w-[30%] h-[30%] sm:w-[12%] sm:h-[12%] lg:mr-5">
              <img
                src="/logo.png"
                alt="/logo.png"
                className="object-cover object-center opacity-100"
              />
            </div>
            <div className="hidden sm:flex gap-2 lg:gap-8 items-center">
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
            </div>
          </div>
          <ModalTrigger
            className="hidden sm:block"
            text="Get Started"
            icon={<FaCaretRight />}
          />
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <FaGripLines className="size-5  group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
          </div>
        </div>
      </div>
      <DisclosurePanel className="absolute w-[96.5%] shadow-xl sm:hidden">
        <div className="space-y-1 pb-3 pt-2">
          {navItems.map((navItem: any, idx: number) => (
            <DisclosureButton
              key={`link=${idx}`}
              as="a"
              href={navItem.link}
              className={cn(
                navItem.current
                  ? "bg-gray-200 text-black"
                  : "text-gray-600 hover:bg-gray-700 hover:text-white",
                "relative py-2 text-md font-normal sm:text-xs sm:font-semibold lg:text-sm lg:p-1 items-center flex space-x-1"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="pl-3">{navItem.name}</span>
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
export default Navbar;
