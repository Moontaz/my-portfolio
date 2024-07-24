import React from "react";

const ImgCarousel = ({
  Items,
  className,
}: {
  Items: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center  mt-[5rem] lg:mt-12 mx-1 lg:mx-0">
      <span className="w-full lg:w-[250px] font-light text-xs lg:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, hic.
      </span>
      <ul
        role="list"
        className="grid grid-cols-3 lg:flex items-center gap-3 lg:gap-20"
      >
        {Items.map((item: any, idx: number) => (
          <li className="h-[18px] lg:h-[20px]" key={idx}>
            <img
              alt={item.name}
              className="h-[100%] w-[100%] object-center"
              src={item.link}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImgCarousel;
