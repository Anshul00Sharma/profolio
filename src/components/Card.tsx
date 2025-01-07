import React from "react";
// import Image from "next/image";

const Card = ({
  heading,
  target,
  onClick,
}: {
  heading: string;
  target: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      data-dui-toggle="modal"
      data-dui-target={"#" + target}
      className="flex items-center justify-center lg:h-[100px] lg:w-[220px] sm:h-10 sm:w-16 backdrop-blur-md duration-300 ease-in-out cursor-pointer"
    >
      <div className="h-[100%] w-[100%] hover:h-[92%] hover:w-[95%] bg-white duration-300 ease-in-out overflow-hidden active:scale-90 border-4 border-l-white border-t-white hover:border-r-[#F97300] hover:border-b-[#F97300] ">
        <div className="h-[100%] w-[100%] flex  font-bold text-slate-500 hover:text-cyan-700 pt-3 pl-3 hover:text-lg hover:pt-4 hover:pl-4 duration-300 ease-in-out">
          {heading}
        </div>
      </div>
    </div>
  );
};

export default Card;
