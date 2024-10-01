import React from "react";

const Heading = ({ heading }: { heading: string }) => {
  return (
    <div className="w-full  ">
      <svg className=" w-full text-[25px]  sm:text-[50px]  md:text-[80px] lg:text-[90px]">
        <text x="50%" y="60%" textAnchor="middle">
          {heading}
        </text>
      </svg>
    </div>
  );
};

export default Heading;
