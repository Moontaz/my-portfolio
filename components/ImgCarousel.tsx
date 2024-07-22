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
    <div className="flex justify-between items-center mt-12">
      <span className="w-[250px] font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, hic.
      </span>
      <ul role="list" className="flex items-center gap-20">
        {Items.map((item: any, idx: number) => (
          <li className="h-[20px]" key={idx}>
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
