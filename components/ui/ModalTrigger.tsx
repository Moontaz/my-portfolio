import { cn } from "@/utils/cn";
import React from "react";

const ModalTrigger = ({
  className,
  icon,
  text,
}: {
  text: string;
  className?: string;
  icon?: JSX.Element;
}) => {
  // const { setOpen } = useModal();
  return (
    <a className="px-2 lg:px-4 py-1 border border-black  text-white self-end  dark:border-white cursor-pointer relative group transition duration-200">
      <div className="absolute flex flex-col -bottom-[0.35rem] -right-[0.35rem] bg-gray-900 h-full w-full  group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
      <div className="flex">
        <span className="relative inline-flex whitespace-nowrap font-light items-center gap-1 text-xs">
          {text}
        </span>
        <div className="lg:ml-1 lg:p-2 p-0 text-xs rounded-sm text-center relative overflow-hidden">
          <div className="group-hover:translate-x-5 text-center opacity-75 text-white transition duration-150">
            {icon}
          </div>
          <div className="-translate-x-5 group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-150 text-white z-20">
            {icon}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ModalTrigger;
