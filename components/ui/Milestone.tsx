import React from "react";

const Milestone = ({
  Items,
  className,
}: {
  Items: {
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  return (
    <>
      {Items.map((item: any, idx: number) => (
        <>
          <div className="flex w-full" key={idx}>
            <div className="relative flex flex-col items-center h-32">
              <div className="z-20 bg-gradient-to-b from-gray-600 to-gray-400 h-4 w-4 rounded-full flex-shrink-0 relative"></div>
              <div className="z-0 absolute top-2 w-1 bg-gradient-to-t  from-gray-600 via-yellow-400 to-gray-600 flex-grow h-full"></div>
            </div>
            <div className="ml-10">
              <span className="text-xl font-bold">{item.title}</span>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Milestone;
