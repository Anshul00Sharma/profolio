import Heading from "@/components/Heading";
import Link from "next/link";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function contacts() {
  return (
    <div className=" w-full flex flex-col items-center lg:px-36 md:px-9 sm:px-5 px-5 lg:mt-40 md:mt-24 sm:mt-16 mt-10">
      {/* About me */}

      <Heading heading="Contacts" />
      <div className="flex flex-row ">
        <Link
          href={"/"}
          className="text-gray-500 hover:text-cyan-700 ease-in-out duration-300 text-sm cursor-pointer"
        >
          Home
        </Link>
        <div className="text-sm mx-2">/</div>
        <Link
          href={"/contacts"}
          className="text-gray-500 hover:text-cyan-700 ease-in-out duration-300 text-sm cursor-pointer"
        >
          Contacts
        </Link>
      </div>

      <div className="h-72" />

      <div className="mb-40 w-4/5">
        <div className="underline decoration-4 underline-offset-1 decoration-[#F97300] ">
          Info
        </div>
        <div className="flex flex-row  mt-5">
          <div className="flex-1 ">
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mb-2 mt-5">
              <div className="text-[11px] mb-5">
                <div className=" flex items-center  mb-5 ">
                  <IoPhonePortraitOutline className="size-5 text-cyan-700 mr-5" />
                  <span className="font-bold text-gray-600">Phone</span>
                </div>
                <div>+91-7015-7815-98</div>
              </div>
              <div className="text-[11px] mb-5">
                <div className=" flex items-center mb-5 grow">
                  <MdOutlineEmail className="size-5 text-cyan-700 mr-5" />
                  <span className="font-bold text-gray-600">Email</span>
                </div>
                <div>anshulsharma.sd.2000@gmail.com</div>
              </div>
              <div className="text-[11px] mb-5">
                <div className="flex items-center  mb-5">
                  <IoLocationOutline className="size-5 text-cyan-700 mr-5" />
                  <span className="font-bold text-gray-600">Address</span>
                </div>
                <div>Ambala ,Haryana ,India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
