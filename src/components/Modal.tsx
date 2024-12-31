import React from "react";
// import Image from "next/image";

const Modal = ({
  heading,
  video,
  summery,
  demo,
}: {
  heading: string;
  video: string;
  summery: string;
  demo: string;
  id: string;
}) => {
  return (
    <div
      className="fixed inset-0 bg-stone-800 bg-opacity-75 flex justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out z-[9999]"
      id="exampleModal"
      aria-hidden="true"
    >
      <div className=" flex flex-col h-5/6 w-2/6 scale-95 transition-transform duration-300 ease-out bg-white border-8 border-cyan-600 items-center  justify-around relative">
        <div
          data-dui-dismiss="modal"
          className="absolute top-1 right-1 w-[15px] h-[15px] bg-[#F97300] hover:scale-[1.1] active:scale-[1] transition-transform"
        ></div>
        <div className="text-2xl mt-10 font-bold text-cyan-700">{heading}</div>
        <div className="h-[28%] w-[50%] border-4 border-[#F97300] mt-10">
          <iframe
            className="w-full h-full"
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" mt-10 mx-5 text-center">{summery}</div>
        <div className="mt-10 ">
          Android apk link: -{" "}
          <a href={demo} className="text-blue-600 hover:underline">
            Download
          </a>
        </div>
        <div className="h-[10%] w-full" />
      </div>
    </div>
  );
};

export default Modal;
