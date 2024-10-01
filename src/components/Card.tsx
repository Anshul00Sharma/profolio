import React from "react";
import Image from "next/image";

const Card = ({ image }: { image: string }) => {
  return (
    <div className="flex items-center justify-center lg:h-40 lg:w-60 sm:h-10 sm:w-16 backdrop-blur-md duration-700 ease-in-out cursor-pointer">
      <div className="h-[100%] w-[100%] hover:h-[82%] hover:w-[85%] bg-white duration-500 ease-in-out overflow-hidden hover:rounded-xl active:scale-90">
        <Image
          src={"https://images.unsplash.com/photo-1727111544046-d92d85cb4b2a"}
          alt="image"
          width={1000}
          height={1000}
          className="active:blur-sm duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Card;
